import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className='bg-slate-500 border-b-2 border-green-300 max-h-fit w-full text-wrap flex justify-between'>
        <div className='container p-11 text-black font-serif font-semibold'>
            <h1 className='border-b-2 border-green-300'>
                Get In Touch With Us
            </h1>
            <p>Adress:
                <br />
                MCAET Campus Akbarpur 
                <br />ANDUAT Ayodhya
                Uttar Pradesh 
                <br />
                Ambedkar Nagar, UP 224122
                <br />
                India
            </p>
            <br />
            phone: +91

            <br />
            Email: 
            <br />
            
        </div>
        <div className='container  p-11 text-black font-serif font-semibold'>
                <h1 className='border-b-2 border-green-300'>
                    Useful Links
                </h1>
                <br />
            <div className='flex flex-col justify-between'>
                <h1><Link href='/home'>Home</Link></h1>
                <h1><Link href='/aboutus'>About Us</Link></h1>
                <h1><Link href='/contactus'>Contact Us</Link></h1>
                <h1><Link href='/services'>Services</Link></h1>
                <h1><Link href='/faq'>FAQ</Link></h1>
            </div>
        </div>
        <hr />
        
    </div>
  )
}
