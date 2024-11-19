import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
// import logo from '../../src/assets/winter-clothes-donationvector.png'

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
        <div className="navbar bg-base-100">
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
                <a className="md:text-xl lg:text-2xl font-bold">Winter Donation</a>
                {/* <div className="w-20 h-20 rounded-full">
                    <img className="w-full h-full" src={logo} alt="" />
                </div> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {/* {
                    user && user?.email ?
                        <div className="w-10 h-10">
                            <img className="w-full h-full rounded-full" src={user?.photoURL} alt="" />
                        </div> :
                        <div>
                            {user && user?.email ? (
                                <button onClick={logOut} className="btn btn-neutral btn-sm rounded-none px-7">Log Out</button>
                            ) : (
                                <Link to="/auth/login" className="btn btn-neutral btn-sm rounded-none px-7">Login</Link>
                            )}
                        </div>
                } */}


                {user ? (
                    <div className="relative dropdown-container">
                        <img
                            className="rounded-full w-10 h-10 object-cover cursor-pointer"
                            src={user?.photoURL}
                            alt="User profile"
                            onClick={toggleDropdown}
                        />
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-28 bg-white border rounded-lg shadow-lg z-10">
                                <ul className="py-">
                                    <li>
                                        <button
                                            className="block w-full py-2 font-bold bg-red-300 rounded-lg text-center hover:bg-gray-100"
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
    );
};

export default Navbar;