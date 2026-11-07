"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useShoppingCreatContext } from '@/context/ShoppingCartContext'

function Navbar() {
    const{cartTotalQty}=useShoppingCreatContext()
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
        <span className='px-2 py-1 bg-gray-600 text-white rounded-full'>{cartTotalQty}</span>
        <Link href="/cart" >سبد خرید</Link>
    </div>
        </div>
  )
}

export default Navbar