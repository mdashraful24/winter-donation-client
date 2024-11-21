import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DonationLayout = () => {
    return (
        <div className="bg-gray-50">
            {/* Donation Route */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DonationLayout;