import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
// import Footer from "./Footer";

const Dashboard = () => {

    const {user} = useContext(AuthContext);

    return (
        <div className="">
            {/* <nav>
                <Navbar></Navbar>
            </nav> */}
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">Welcome, {user?.displayName || "User"}!</h1>
                <div className="card w-full max-w-md bg-gray-100 shadow-md p-6">
                    <img
                        src={user?.photoURL || "/default-avatar.jpg"}
                        alt="User Avatar"
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <div className="text-center space-y-2">
                        <p><strong>Email:</strong> {user?.email}</p>
                        <p><strong>Name:</strong> {user?.displayName || "Not Set"}</p>
                        <Link to="/dashboard/update-profile">
                            <button className="btn btn-neutral mt-4">Update Profile</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <footer>
                <Footer></Footer>
            </footer> */}
        </div>
    );
};

export default Dashboard;