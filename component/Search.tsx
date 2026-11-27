"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import  { useState } from 'react'


function Search() {
    const searchParames=useSearchParams()
    const router=useRouter()
    const[search,setSearch]=useState("")
    const handelSearch=()=>{
      const currentSearchParams=new URLSearchParams(searchParames.toString())
      currentSearchParams.set("title",search)
     

        router.push(`/store?${currentSearchParams.toString() }`)
    }
    return (
  <div className="flex items-center w-full max-w-xl mx-auto gap-2 mb-6">
  <input
    onChange={(e)=>setSearch(e.target.value)}
    className="w-full h-12 px-5 rounded-full border border-gray-300 shadow-sm outline-none focus:shadow-md focus:border-gray-400"
    type="text"
    placeholder="جست‌وجو کنید..."
  />

  <button onClick={handelSearch} className="h-12 px-6 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition">
    جست‌وجو
  </button>
</div>
  )
}

export default Search