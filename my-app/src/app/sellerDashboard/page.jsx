"use client";

import React from 'react'

export default function page() {
  return (
    <div className='w-full flex flex-col p-5 justify-center items-center'>
        <h1 className='font-bold text-2xl'>Seller Dashboard</h1>
        <div className='w-2/3 mt-5 flex flex-col text-center justify-center items-center gap-5'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptates explicabo tempora, itaque iusto adipisci voluptas quam autem. Sint assumenda iure magnam reprehenderit animi aperiam vero non rem recusandae id dolore, laborum quasi suscipit soluta debitis, doloremque cupiditate natus vitae laboriosam, unde distinctio molestias. Impedit quo accusantium non voluptates recusandae suscipit reiciendis dolores illum eveniet, obcaecati totam a. Cupiditate beatae quae unde.</p>
            <button className='bg-green-600 px-3 py-2 w-20 text-white rounded-md'>Sell</button>
        </div>
    </div>
  )
}
