
import logo from '../../src/assets/banner1.jpeg'

const HowItWorks = () => {
    return (
        <div>
            {/* <section className="py-12">
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
            </section> */}
            {/* <section className="py-12 bg-blue-50">
                <div className="w-10/12 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div></div>
                        <div className="p-6 bg-blue-100 rounded-lg shadow-md">
                            <img
                                src="https://via.placeholder.com/150?text=Donate"
                                alt="Donate"
                                className="w-20 h-20 mx-auto mb-4 rounded-full"
                            />
                            <h3 className="font-semibold mb-2 text-gray-800">Step 1: Donate</h3>
                            <p className="text-gray-600">Choose winter clothes you no longer use and donate them through our website or collection points.</p>
                        </div>

                        <div></div>
                        <div className="p-6 bg-blue-200 rounded-lg shadow-md">
                            <img
                                src="https://via.placeholder.com/150?text=Collection"
                                alt="Collection Points"
                                className="w-20 h-20 mx-auto mb-4 rounded-full"
                            />
                            <h3 className="font-semibold mb-2 text-gray-800">Step 2: Collection Points</h3>
                            <p className="text-gray-600">Visit our collection points in Dhaka, Sylhet, and Chattogram to drop off your donations.</p>
                        </div>

                        <div></div>
                        <div className="p-6 bg-blue-300 rounded-lg shadow-md">
                            <img
                                src="https://via.placeholder.com/150?text=Distribute"
                                alt="Distribution"
                                className="w-20 h-20 mx-auto mb-4 rounded-full"
                            />
                            <h3 className="font-semibold mb-2 text-gray-800">Step 3: Distribution</h3>
                            <p className="text-gray-600">Your donations are distributed to families in need across all divisions.</p>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="py-12 bg-gray-50">
                <div className="w-10/12 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">How It Works</h2>

                    <div className="flex flex-col gap-7">

                        {/* 1st Section: Left side theory, Right side picture */}
                        <div className="flex flex-col md:flex-row lg:flex-row items-center border p-5 rounded-xl">
                            <div className="w-full md:w-1/2 pr-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 1: Donate</h3>
                                <p className="text-gray-600">Choose winter clothes you no longer use and donate them through our website or collection points. Your old clothes can provide warmth to someone in need!</p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <img
                                    src={logo}
                                    alt="Donate"
                                    className="w-full h-auto rounded-lg shadow-md"
                                />
                            </div>
                        </div>

                        {/* 2nd Section: Left side picture, Right side theory */}
                        <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center border p-5 rounded-xl">
                            <div className="w-full md:w-1/2">
                                <img
                                    src={logo}
                                    alt="Collection Points"
                                    className="w-full h-auto rounded-lg shadow-md"
                                />
                            </div>
                            <div className="w-full md:w-1/2 pl-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 2: Collection Points</h3>
                                <p className="text-gray-600">Visit our collection points in Dhaka, Sylhet, and Chattogram to drop off your donations. Find the nearest location on our website or by calling our helpline.</p>
                            </div>
                        </div>

                        {/* 3rd Section: Left side theory, Right side picture */}
                        <div className="flex flex-col md:flex-row lg:flex-row  items-center border p-5 rounded-xl">
                            <div className="w-full md:w-1/2 pr-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Step 3: Distribution</h3>
                                <p className="text-gray-600">Your donations are distributed to families in need across all divisions. Help us reach more people by spreading the word.</p>
                            </div>
                            <div className="w-full md:w-1/2">
                                <img
                                    src={logo}
                                    alt="Distribution"
                                    className="w-full h-auto rounded-lg shadow-md"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    );
};

export default HowItWorks;