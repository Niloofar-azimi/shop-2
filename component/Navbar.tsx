"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Navbar() {
    const pathName=usePathname()
    const navLink=[
        {
        href:"/",
        title:"Home"
    },
            {
        href:"/store",
        title:"Store"
    }
]
  return (
    <div className=' flex justify-between flex-row-reverse shadow p-4'>
    <div>
            {
        navLink.map(item=>(
            <Link className={`mr-4
                 ${pathName===item.href?"text-sky-500":""}`}
                  key={item.href}  href={item.href}>{item.title}</Link>
        )

        )
        }
    </div>
    <div>
        <Link href="/cart" >سبد خرید</Link>
    </div>
        </div>
  )
}

export default Navbar