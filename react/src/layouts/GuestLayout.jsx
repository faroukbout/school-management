import { LogInIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import { data, Link, Outlet, useNavigate } from 'react-router-dom'
import Logo from "../assets/logo.png"
import { STUDENT_DASHBOARD_ROUTE } from '../router/router'
import { axiosClient } from '../api/axios'

export default function GuestLayout() {
  const navigate = useNavigate()

  useEffect(()=> {
    if(window.localStorage.getItem('ACCESS_TOKEN')){
      navigate(STUDENT_DASHBOARD_ROUTE  )
    }
 
  });
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
