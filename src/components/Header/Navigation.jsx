import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserLogContext } from '../providers/AuthProvider';

const Navigation = () => {
    const { user, logOut } = useContext(UserLogContext);

    const hanldeLogOut = () => {
        logOut()
            .then(() => console.log('User LogOut Sucessfully'))
            .catch(error => console.error(error))
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        {user && <li><NavLink to='/order'>Orders</NavLink></li>}
        {!user && <>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
        </>}
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content gap-5 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl uppercase">Simple Auth App</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {links}
                </ul>
                {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={hanldeLogOut} className='btn mx-2'>Sing Out</button>
                    </> : <NavLink to="/login"></NavLink>
                }
            </div>
        </div>
    );
};

export default Navigation;
