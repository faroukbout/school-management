import React, { useContext } from 'react'
import { useUserContext } from '../context/UserContext'


export default function home() {
  const context = useUserContext()
  return (
    <>
    {context.user.name}
    <h1 className="text-3xl">hey from home </h1>
    
    </>
    
  )
}
