import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className='min-h-screen my-6 bg-white shadow-lg rounded-lg p-4 flex gap-4 flex-wrap items-start justify-start'>
        <a href='https://lofi-with-carol.vercel.app/' target='_blank' className='flex flex-col bg-black/80 p-2 rounded-lg'>
            <div className='h-[160px] w-[240px] rounded-lg overflow-hidden group'>
                <img src="/lofi.png" alt="img" className='w-full h-full group-hover:scale-110 duration-500' />
            </div>
            <div className='flex flex-col text-white py-4'>
                <h1 className='text-center'>Website nghe nhạc lofi</h1>
            </div>
        </a>
        <a href='https://chill-at.vercel.app/' target='_blank' className='flex flex-col bg-black/80 p-2 rounded-lg'>
            <div className='h-[160px] w-[240px] rounded-lg overflow-hidden group'>
                <img src="/chill.png" alt="img" className='w-full h-full group-hover:scale-110 duration-500' />
            </div>
            <div className='flex flex-col text-white py-4'>
                <h1 className='text-center'>Website Chill-At</h1>
            </div>
        </a>
        <a href='https://gamedle.online/vi' target='_blank' className='flex flex-col bg-black/80 p-2 rounded-lg'>
            <div className='h-[160px] w-[240px] rounded-lg overflow-hidden group'>
                <img src="/game.png" alt="img" className='w-full h-full group-hover:scale-110 duration-500' />
            </div>
            <div className='flex flex-col text-white py-4'>
                <h1 className='text-center'>Website Gamedle</h1>
            </div>
        </a>
    </div>
  )
}
