import React from 'react'
import { Navbar } from './UI'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from './auth'

export const ChampionsApp = () => {
    return (
        <>
            <Navbar/>
            
            <div className='container'>
                    <Outlet/>
            </div>
        </>
    )
}
