import Banner from "./Banner";

const Home = () => {
    return (
        <div className="lg:container mx-auto">
            {/* Banner */}
            <Banner></Banner>

            {/* About Section */}
            <section className="mt-10 bg-gray-100 py-12">
                <div className="w-10/12 mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">About Us</h2>
                    <p className="text-gray-600 lg:w-1/2 mx-auto">
                        Winter Clothing Donation is committed to supporting underprivileged communities during harsh winters.
                        We collect and distribute warm clothing to those in need across various divisions. Join us in making a difference this winter!
                    </p>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-12">
                <div className="w-10/12 mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-4">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <h3 className="font-semibold mb-2">Step 1: Donate</h3>
                            <p>Choose winter clothes you no longer use and donate them through our website or collection points.</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <h3 className="font-semibold mb-2">Step 2: Collection Points</h3>
                            <p>Visit our collection points in Dhaka, Sylhet, and Chattogram to drop off your donations.</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg">
                            <h3 className="font-semibold mb-2">Step 3: Distribution</h3>
                            <p>Your donations are distributed to families in need across all divisions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extra Section 1: Testimonials */}
            <section className="bg-gray-100 py-12">
                <div className="w-10/12 mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">What People Are Saying</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 bg-white shadow-md rounded-lg">
                            <p>"This initiative changed our winter experience. Thank you for your support!"</p>
                            <span className="block mt-2 font-semibold">- A Beneficiary</span>
                        </div>
                        <div className="p-4 bg-white shadow-md rounded-lg">
                            <p>"Donating my old clothes was super easy. I love the mission!"</p>
                            <span className="block mt-2 font-semibold">- A Donor</span>
                        </div>
                        <div className="p-4 bg-white shadow-md rounded-lg">
                            <p>"The team is doing an amazing job ensuring no one suffers this winter."</p>
                            <span className="block mt-2 font-semibold">- A Volunteer</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extra Section 2: Volunteer Sign-Up */}
            <section className="py-12">
                <div className="w-10/12 mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">Become a Volunteer</h2>
                    <p className="mb-6">Join us in making a difference! Help us organize and distribute donations this winter.</p>
                    <button className="btn btn-neutral rounded-lg">Sign Up as a Volunteer</button>
                </div>
            </section>
        </div>
    );
};

export default Home;