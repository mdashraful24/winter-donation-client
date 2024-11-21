import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div>
            {/* Home Route */}
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;