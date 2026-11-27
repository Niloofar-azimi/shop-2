import React from 'react'
import Navbar from './Navbar';

interface ILayout {
    children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <div className="flex min-h-screen flex-col">
        <Navbar/>
        <main className="flex-1">{children}</main>
    </div>
  )
}

export default Layout
