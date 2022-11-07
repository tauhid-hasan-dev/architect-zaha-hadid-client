import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaThLarge } from 'react-icons/fa';

const Header = ({ user }) => {

    const menuItem = <>
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? 'text-blue-500 border-b-2 border-logo-color' : undefined
            }
        >Home</NavLink>

        <NavLink to='/services' className={({ isActive }) =>
            isActive ? 'text-blue-500 border-b-2 border-logo-color' : undefined
        } >Services</NavLink>

        <NavLink to='/blog' className={({ isActive }) =>
            isActive ? 'text-blue-500 border-b-2 border-logo-color' : undefined
        }>Blog</NavLink>



        <NavLink to='/addservice' className={({ isActive }) =>
            isActive ? 'text-blue-500 border-b-2 border-logo-color' : undefined
        }>Add Service</NavLink>

        <NavLink to='/myreview' className={({ isActive }) =>
            isActive ? 'text-blue-500 border-b-2 border-logo-color ' : undefined
        }>My Reviews</NavLink>

        {/* <Link className='pl-2 lg:pl-5'><button className="btn  btn-sm lg:btn-sm rounded-sm btn-error">LogOut</button></Link> */}

        <Link to='/login' className='pl-2 lg:pl-5'><button className="btn  btn-sm lg:btn-sm rounded-sm ">LogIn</button></Link>

        {/* <Link to='/login' className='pl-20 lg:pl-5'><button className="rounded-none  border px-2  border-white   text-white py-1">Login</button></Link> */}


    </>
    return (
        <div className={`navbar bg-nav-color shadow-md px-5 border-b border-slate-900 lg:px-28 py-5 $`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white text-6xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow  rounded-box w-52 flex flex-col gap-5 bg-slate-800 text-white p-5">
                        {menuItem}
                    </ul>
                </div>
                <Link to="/" className="normal-case text-2xl  lg:text-4xl text-white font-semibold ">
                    <div className='flex  items-center gap-2'>
                        <FaThLarge className='text-3xl lg:text-5xl'></FaThLarge>
                        <span className='hidden lg:block ml-2 font-light'>Zaha <span className='font-bold'>Hadid</span> </span>
                    </div>
                </Link>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-slate-100 gap-10 text-lg ">
                    {menuItem}
                </ul>
            </div>
        </div >
    );
};

export default Header;