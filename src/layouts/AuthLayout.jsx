import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuthLayout = () => {
    return (
        <div>
            <nav className="container mx-auto py-6">
                <Navbar></Navbar>
            </nav>
            <section className="container mx-auto">
                <Outlet></Outlet>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;