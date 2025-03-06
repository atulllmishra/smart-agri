"use client";

import React, { useState, useEffect, useRef } from "react";
import Recorder from "recorder-js";
import axios from "axios";

export default function page() {
    const [isRecording, setIsRecording] = useState(false);
    const [aiAudioUrl, setAiAudioUrl] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorder.start();
            setIsRecording(true);
        } catch (error) {
            console.error("Error starting recording:", error);
        }
    };

    const stopRecording = async () => {
        return new Promise((resolve) => {
            const mediaRecorder = mediaRecorderRef.current;
            if (mediaRecorder && mediaRecorder.state !== "inactive") {
                mediaRecorder.onstop = async () => {
                    const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
                    resolve(audioBlob);
                };
                mediaRecorder.stop();
            } else {
                resolve(null);
            }
            setIsRecording(false);
        });
    };

    const sendAudioToAPI = async (audioBlob) => {
        if (!audioBlob) return;

        const formData = new FormData();
        formData.append("file", audioBlob, "audio.wav");

        try {
            const response = await axios.post("https://ai-assistant-o4k2.onrender.com/process", formData, {
                headers: { "Content-Type": "multipart/form-data" },
                responseType: "blob", // Expecting an audio file response
            });

            const aiAudioBlob = new Blob([response.data], { type: "audio/wav" });
            const aiAudioUrl = URL.createObjectURL(aiAudioBlob);
            setAiAudioUrl(aiAudioUrl);
        } catch (error) {
            console.error("Error processing audio:", error);
        }
    };

    const handleRecord = async () => {
        if (isRecording) {
            const audioBlob = await stopRecording();
            await sendAudioToAPI(audioBlob);
        } else {
            startRecording();
        }
    };

    return (
        <div>
            <h1>AI Voice Assistant</h1>
            <button onClick={handleRecord}>
                {isRecording ? "Stop Recording" : "Start Recording"}
            </button>
            {aiAudioUrl && (
                <div>
                    <h3>AI-Generated Voice:</h3>
                    <audio controls>
                        <source src={aiAudioUrl} type="audio/wav" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )}
        </div>
    );
}
