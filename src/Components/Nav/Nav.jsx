import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Nav = () => {
    return (
        <div >
            <div className='px-3 d-flex gap-5 bg-dark p-3 '>
                <NavLink to={"/"} className={"cursor-pointer text-decoration-none text-white"}>Home</NavLink>
                <NavLink to={"contact"} className={"cursor-pointer text-decoration-none text-white"}>Contact</NavLink>
                <NavLink to={"gallery"} className={"cursor-pointer text-decoration-none text-white"}>Gallery</NavLink>
            </div>
            <Outlet />
        </div>
    )
}

export default Nav