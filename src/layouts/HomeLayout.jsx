import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div className="lg:w-11/12 mx-auto font-poppins pt-5">
            <Navbar></Navbar>
            <div className=" min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;