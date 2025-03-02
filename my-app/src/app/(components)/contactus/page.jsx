"use client";
import React from 'react'

export default function page() {
  return (
    <div className='flex justify-between'>
        <div className='h-max w-max p-4 pl-8'>
            <h1 className=''>Our Location</h1>
            <br />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8934904221774!2d82.4905798756474!3d26.45916197692045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399093cbf6ffffff%3A0xe886e928b8f0a1e7!2sMahamaya%20College%20of%20Agricultural%20Engineering%20And%20Technology!5e0!3m2!1sen!2sin!4v1740846653007!5m2!1sen!2sin" loading="lazy" ></iframe>
            <br />
            <hr />
        </div>
        <div className='h-max w-max p-4 pr-24'>
            <h1>Contact Us: </h1>
            <br />
            <p>Phone: 1234567890</p>
            <p>Email: </p>
            <p>Address: Mahamaya College of Agricultural Engineering And Technology, 
                <br />
                         ANDUAT AYODHYA
                         <br />
                          224122
                          <br />
                          Amethi, Uttar Pradesh, India
            </p>
            <br />
            <hr />
        </div>
    </div>
  )
}
