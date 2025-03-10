import { LogInIcon } from 'lucide-react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from "../assets/logo.png"

export default function Layout() {
  return (
    <>
<header>
      <div
        className="items-center justify-between flex bg-gray-800 bg-opacity-90 px-12 py-4 mb-4 mx-auto shadow-2xl">
        <div className="text-2xl text-white font-semibold inline-flex items-center">
        <Link to={'/'}><img src={Logo} alt="no image" style={{height : '50px'}}/></Link>
        </div>
        <div>
          <ul className="flex text-white">
            <li className="ml-5 px-2 py-1">
                <Link to={'/'}>Home</Link>
            </li>
            <li className="ml-5 px-2 py-1">
                <Link to={'/Login'}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
        
    <main className="container">
        <Outlet/>
    </main>
    </>
  )
}
