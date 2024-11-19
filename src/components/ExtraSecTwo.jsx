const ExtraSecTwo = () => {
    return (
        <div>
            <section className="py-12 bg-gray-50">
                <div className="w-10/12 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">How You Can Support</h2>
                    <div className="mt-12 text-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            {/* Volunteer Section */}
                            <div className="p-6 bg-green-100 rounded-lg shadow-md">
                                <h4 className="font-semibold text-xl text-gray-800 mb-2">Volunteer with Us</h4>
                                <p className="text-gray-600">Your time can make a huge difference. Volunteer to help us organize, collect, or distribute donations. Your effort will directly impact the lives of others.</p>
                                <a href="#" className="mt-4 inline-block text-blue-600 font-semibold">Learn More</a>
                            </div>

                            {/* FAQ Section */}
                            <div className="p-6 bg-yellow-100 rounded-lg shadow-md">
                                <h4 className="font-semibold text-xl text-gray-800 mb-2">Frequently Asked Questions</h4>
                                <p className="text-gray-600">Find answers to common questions about the donation process, collection points, and how you can get involved. We're here to assist you every step of the way.</p>
                                <a href="#" className="mt-4 inline-block text-blue-600 font-semibold">Read FAQs</a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Get In Touch</h3>
                        <p className="text-gray-600">Have any questions? Feel free to contact us via email, phone, or visit one of our offices. We're here to help!</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ExtraSecTwo;