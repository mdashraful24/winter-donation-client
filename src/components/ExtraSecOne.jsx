const ExtraSecOne = () => {
    return (
        <div>
            <section className="bg-gray-100 py-12">
                <div className="w-10/12 mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">What People Are Saying</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Testimonial 1 */}
                        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Beneficiary"
                                className="w-16 h-16 mx-auto rounded-full mb-4"
                            />
                            <p className="text-gray-600">"This initiative changed our winter experience. Thank you for your support!"</p>
                            <span className="block mt-4 font-semibold text-gray-800">- A Beneficiary</span>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Donor"
                                className="w-16 h-16 mx-auto rounded-full mb-4"
                            />
                            <p className="text-gray-600">"Donating my old clothes was super easy. I love the mission!"</p>
                            <span className="block mt-4 font-semibold text-gray-800">- A Donor</span>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Volunteer"
                                className="w-16 h-16 mx-auto rounded-full mb-4"
                            />
                            <p className="text-gray-600">"The team is doing an amazing job ensuring no one suffers this winter."</p>
                            <span className="block mt-4 font-semibold text-gray-800">- A Volunteer</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ExtraSecOne;