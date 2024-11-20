import Footer from "../components/Footer";
import HowToHelp from "../components/HowToHelp";
import Navbar from "../components/Navbar";

const HelpLayout = () => {
    return (
        <div className="bg-gray-100 ">
            <Navbar></Navbar>
            <HowToHelp></HowToHelp>
            <Footer></Footer>
        </div>
    );
};

export default HelpLayout;