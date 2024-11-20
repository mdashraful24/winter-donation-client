import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <nav className="">
                <Navbar></Navbar>
            </nav>
            <main>
                <Home></Home>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;