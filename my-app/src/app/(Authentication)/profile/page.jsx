"use client";

import React from 'react'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function page() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get('/api/logout')
      toast.success('Logged out successfully')
      router.push('/login')
    } catch (error) {
      console.error(error.message)
      toast.error(error.message)
    }
  }
  return (
    <div className='w-full flex flex-col justify-center text-center items-center'>page
      <div>
        <button onClick={logout} className='bg-green-500 p-2'>log out</button>
      </div>
    </div>
  )
}
