import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex items-center justify-between flex-wrap pt-4 pb-2 px-4 border-t'>
        <p className='text-xs'>© 2024 · Carolo Lương Khoa</p>
        <div className='flex items-center text-xs gap-4'>
            <a href='https://www.facebook.com/lnkhoa1205' target='_blank'>#Contact</a>
            <Link href={"/about"}>#Suport me</Link>
        </div>
    </footer>
  )
}
