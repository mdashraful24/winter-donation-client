import AboutUs from "./AboutUs";
import Animation from "./Animation";
import Banner from "./Banner";
import ExtraSecOne from "./ExtraSecOne";
import ExtraSecTwo from "./ExtraSecTwo";
import HowItWorks from "./HowItWorks";

const Home = () => {

    return (
        <div className="">
            {/* Banner */}
            <Banner></Banner>

            {/* Animation */}
            <Animation></Animation>

            {/* About us */}
            <AboutUs></AboutUs>

            {/* How It Works Section */}
            <HowItWorks></HowItWorks>

            {/* Extra Section 1: Testimonials */}
            <ExtraSecOne></ExtraSecOne>

            {/* Extra Section 2: Volunteer Sign-Up */}
            {/* <section className="py-12">
                <div className="w-10/12 mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">Become a Volunteer</h2>
                    <p className="mb-6">Join us in making a difference! Help us organize and distribute donations this winter.</p>
                    <button className="btn btn-neutral rounded-lg">Sign Up as a Volunteer</button>
                </div>
            </section> */}
            <ExtraSecTwo></ExtraSecTwo>
        </div>
    );
};

export default Home;