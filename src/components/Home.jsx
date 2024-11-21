import { Helmet } from "react-helmet-async";
import AboutUs from "./AboutUs";
import Animation from "./Animation";
import Banner from "./Banner";
import ExtraSecOne from "./ExtraSecOne";
import ExtraSecTwo from "./ExtraSecTwo";
import HowItWorks from "./HowItWorks";

const Home = () => {

    return (
        <div className="">
            {/* Helmet */}
            <Helmet>
                <title>Home | Winter Clothing Donation</title>
            </Helmet>

            {/* Banner */}
            <Banner></Banner>

            {/* Animation */}
            <Animation></Animation>

            {/* About us */}
            <AboutUs></AboutUs>

            {/* How It Works Section */}
            <HowItWorks></HowItWorks>

            {/* Extra Section */}
            <ExtraSecOne></ExtraSecOne>
            <ExtraSecTwo></ExtraSecTwo>
        </div>
    );
};

export default Home;