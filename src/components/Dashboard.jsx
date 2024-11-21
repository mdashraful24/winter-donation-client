import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
// import Footer from "./Footer";
import welcome from '../../src/assets/welcome-bg.jpg'
import { Helmet } from "react-helmet-async";

const Dashboard = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className="mt-20 mb-24 px-5">
            <Helmet>
                <title>Dashboard | Winter Clothing Donation</title>
            </Helmet>
            <div
                className="md:w-2/3 lg:w-1/4 mx-auto rounded-t-2xl bg-cover bg-center px-2 py-5 md:py-10"
                style={{ backgroundImage: `url(${welcome})` }}
            >
                <h1 className="text-xl md:text-2xl text-white text-center font-bold">
                    Welcome, <span className="text-orange-600">{user?.displayName || "User"}!</span>
                </h1>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="card w-full md:w-2/3 lg:w-1/4 rounded-t-none bg-white shadow-md p-6">
                    <img
                        src={user?.photoURL || "/default-avatar.jpg"}
                        alt="User Avatar"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <div className="text-center space-y-2">
                        <p className="break-words">
                            <strong>Email:</strong> {user?.email}
                        </p>
                        <p><strong>Name:</strong> {user?.displayName || "Not Set"}</p>
                        <Link to="/update-profile">
                            <button
                                className="btn text-white mt-4"
                                style={{ background: "linear-gradient(to right, #000066 0%, #0033cc 100%)" }}
                            >
                                Update Profile
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;