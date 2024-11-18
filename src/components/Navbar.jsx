import { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
// import userIcon from '../../src/assets/user.png';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('User signed out successfully');
            })
            .catch(error => console.log('ERROR', error.message));
    };

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };

    const closeDropdown = (e) => {
        if (!e.target.closest('.dropdown-container')) {
            setDropdownOpen(false);
        }
    };

    // Close the dropdown if clicking outside
    useEffect(() => {
        document.addEventListener('click', closeDropdown);
        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    }, []);

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/donationCamp">Donation Campaigns</NavLink></li>
            <li><NavLink to="/howHelp">How to Help</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        </>
    );

    return (
        <div className="navbar lg:container mx-auto font-poppins pt-5">
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
                <a className="font-semibold lg:text-2xl lg:font-bold">Winter Donation</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {user ? (
                    <div className="relative dropdown-container">
                        <img
                            className="rounded-full w-8 h-8 cursor-pointer"
                            src={user?.photoURL}
                            alt="User profile"
                            onClick={toggleDropdown}
                        />
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                                <ul className="py-2">
                                    <li>
                                        <button
                                            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
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
                    <Link to="/login" className="btn">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
