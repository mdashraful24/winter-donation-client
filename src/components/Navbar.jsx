import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
// import logo from '../../src/assets/logo.png'
// import siteLogo from '../../src/assets/site-logo.png'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success("User signed out successfully");
            })
            .catch((error) => {
                toast.error(error.message);
            })
    };

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    }
    const closeDropdown = (e) => {
        if (!e.target.closest('.dropdown-container')) {
            setDropdownOpen(false);
        }
    }
    useEffect(() => {
        document.addEventListener('click', closeDropdown);
        return () => {
            document.removeEventListener('click', closeDropdown);
        }
    }, [])

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/donation">Donation Campaigns</NavLink></li>
            <li><NavLink to="/help">How to Help</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </>
    );

    return (
        <div className="bg-gray-300 p-2 bg-opacity-2">
            <div className="container mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <a href="/" className="md:text-2xl lg:text-3xl text-[#591a6a] font-bold cursor-pointer">Winter Clothing Donation</a>
                        {/* <a href="/"><img src={siteLogo} alt="siteLogo" /></a> */}
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">

                        {user ? (
                            <div className="relative dropdown-container">
                                <img
                                    className="rounded-full w-12 h-12 object-cover cursor-pointer border p-1 bg-white"
                                    src={user?.photoURL}
                                    alt="User profile"
                                    onClick={toggleDropdown}
                                />
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-28 shadow-lg z-10">
                                        <ul className="py-">
                                            <li>
                                                <button
                                                    className="block w-full py-2 rounded-lg bg-zinc-700 font-semibold text-white hover:bg-[#2d0c36]"
                                                    onClick={handleSignOut}
                                                >
                                                    Sign Out
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/auth/login" className="btn">Login</Link>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;