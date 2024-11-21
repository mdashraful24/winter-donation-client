import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DashboardLayout = () => {
    return (
        <div className="bg-gray-100">
            {/* Dashboard Route */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;