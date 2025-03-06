class AudioProcessor extends AudioWorkletProcessor {
    process(inputs, outputs, parameters) {
        return true; // Pass-through processor (not modifying audio)
    }
}

// Properly register the processor
registerProcessor("audio-processor", AudioProcessor);
