import { useState } from "react";
import logo from '../../src/assets/banner1.jpeg'

const AboutUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            {/* About Section */}
            {/* <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 lg:px-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">About Us</h2>
                    <div className="card bg-white shadow-lg p-8 rounded-lg">
                        <h3 className="text-2xl font-semibold text-secondary mb-4 text-center">
                            Welcome to Winter Clothing Donation!
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            We are a community-driven initiative dedicated to spreading warmth and comfort during the coldest
                            months of the year. Our mission is to connect generous donors with individuals and families in need
                            of winter clothing, ensuring no one faces the harsh winter without proper protection.
                        </p>
                        <h4 className="text-xl font-semibold text-accent mb-4">What We Do</h4>
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                            <li>
                                <span className="font-medium text-gray-800">Collect Donations:</span> Accepting winter clothing like
                                coats, hats, gloves, scarves, and blankets in good condition.
                            </li>
                            <li>
                                <span className="font-medium text-gray-800">Distribute to Those in Need:</span> Partnering with shelters,
                                schools, and local organizations to distribute donations efficiently.
                            </li>
                            <li>
                                <span className="font-medium text-gray-800">Raise Awareness:</span> Highlighting the importance of
                                sharing and caring during the winter season.
                            </li>
                        </ul>
                        <h4 className="text-xl font-semibold text-accent mt-6 mb-4">Why It Matters</h4>
                        <p className="text-gray-600 leading-relaxed">
                            Winter can be especially tough for vulnerable communities. With your help, we can make a difference and
                            provide warmth, dignity, and hope to those who need it most.
                        </p>
                    </div>
                </div>
            </section> */}

            {/* <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
                    Text Section
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            About Us
                        </h2>
                        <h3 className="text-2xl font-semibold text-secondary mb-4">
                            Welcome to Winter Clothing Donation!
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            We are a community-driven initiative dedicated to spreading warmth and comfort during the coldest
                            months of the year. Our mission is to connect generous donors with individuals and families in need
                            of winter clothing, ensuring no one faces the harsh winter without proper protection.
                        </p>
                        <h4 className="text-xl font-semibold text-accent mb-2">
                            Why It Matters
                        </h4>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Winter can be especially tough for vulnerable communities. With your help, we can make a difference and
                            provide warmth, dignity, and hope to those who need it most.
                        </p>
                        <button className="btn btn-primary rounded-lg mt-4">Learn More</button>
                    </div>

                    Image Section
                    <div className="lg:w-1/2">
                        <img
                            src={logo}
                            alt="Winter Donation"
                            className="rounded-lg shadow-lg w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section> */}

            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
                    {/* Text Section */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            About Us
                        </h2>
                        <h3 className="text-2xl font-semibold text-secondary mb-4">
                            Welcome to Winter Clothing Donation!
                        </h3>
                        <p className="text-gray-600 text-lg text-justify leading-relaxed mb-4">
                            We are a community-driven initiative dedicated to spreading warmth and comfort during the coldest
                            months of the year. Our mission is to connect generous donors with individuals and families in need
                            of winter clothing, ensuring no one faces the harsh winter without proper protection.
                        </p>
                        <h4 className="text-xl font-semibold text-accent mb-2">
                            Why It Matters
                        </h4>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Winter can be especially tough for vulnerable communities. With your help, we can make a difference and
                            provide warmth, dignity, and hope to those who need it most.
                        </p>
                        <button
                            className="btn btn-primary rounded-lg mt-4"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Learn More
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-1/2">
                        <img
                            src={logo}
                            alt="Winter Donation"
                            className="rounded-lg shadow-lg w-full h-auto lg:h-[500px] object-cover"
                        />
                    </div>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="modal modal-open">
                        <div className="modal-box">
                            <h3 className="text-lg font-bold">More About Us</h3>
                            <p className="py-4">
                                Winter Clothing Donation is not just an initiative; it’s a movement to bring comfort to those in
                                need during the most challenging season. By contributing to our cause, you’re directly helping
                                individuals and families stay warm and protected. Join us in spreading love and warmth!
                            </p>
                            <p>
                                Through partnerships, donations, and community engagement, we aim to bring hope and dignity to
                                those who need it most. Together, we can make a lasting impact.
                            </p>
                            <div className="modal-action">
                                <button
                                    className="btn btn-neutral"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default AboutUs;