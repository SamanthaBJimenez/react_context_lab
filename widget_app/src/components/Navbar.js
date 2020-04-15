import React from 'react'
import { NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav>
            <NavLink exact to={"/home"}>Home</NavLink>
            <NavLink exact to={"/weather"}>Weather</NavLink>
            <NavLink exact to={"/clock"}>Clock</NavLink>
        </nav>
    )
}
