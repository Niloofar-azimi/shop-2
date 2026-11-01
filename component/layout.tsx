import React from 'react'
import Navbar from './Navbar';
interface ILayout{
    children:React.ReactNode;
}

function Layout({children}:ILayout) {
  return (
    <div>
        <Navbar/>
        {children}</div>
  )
}

export default Layout