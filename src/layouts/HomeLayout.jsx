import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <header className="bg-gray-50">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
            <footer className="bg-gray-200">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;