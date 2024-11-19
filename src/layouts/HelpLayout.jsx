import Footer from "../components/Footer";
import HowToHelp from "../components/HowToHelp";
import Navbar from "../components/Navbar";

const HelpLayout = () => {
    return (
        <div className="container mx-auto space-y-10 py-6">
            <Navbar></Navbar>
            <HowToHelp></HowToHelp>
            <Footer></Footer>
        </div>
    );
};

export default HelpLayout;