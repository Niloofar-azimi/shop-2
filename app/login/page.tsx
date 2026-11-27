
"use client"

import Container from '@/component/Container'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import React, { useState } from 'react'

function Login() {
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const router = useRouter()

  const handelLogin = () => {
    const responce = {
      token: "nfjfdhdjsfift",
      expire: 8
    }

    Cookies.set("token", responce.token, {
      expires: responce.expire
    })

    router.push("/dashbord")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Container>
        <div className="flex items-center justify-center">
          <div className="w-80 h-80 bg-gray-500 shadow-xl rounded-2xl flex flex-col items-center justify-center gap-5 p-6">

            <h2 className="text-2xl font-bold text-white">
              ورود به حساب کاربری
            </h2>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="نام کاربری"
              className="w-full border border-gray-300 rounded-lg p-3 text-right outline-none focus:border-black bg-white"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="رمز عبور"
              className="w-full border border-gray-300 rounded-lg p-3 text-right outline-none focus:border-black bg-white"
            />

            <button
              onClick={handelLogin}
              className="w-full bg-gray-800 hover:bg-gray-600 text-white rounded-lg p-3 transition"
            >
              ورود
            </button>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default Login
