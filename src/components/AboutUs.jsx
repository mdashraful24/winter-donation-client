import { useState } from "react";
import logo from '../../src/assets/winter-clothes-donationvector.png'

const AboutUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            {/* About Section */}
            <section className="mb-28 bg-slate-100 py-20">
                <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 rounded-lg px-5">
                    {/* Text Section */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl text-[#491558] font-bold text- mb-6">
                            About Us
                        </h2>
                        <p className="text-gray-600 text-lg text-justify leading-relaxed mb-4">
                            We are a community-driven initiative dedicated to spreading warmth and comfort during the coldest months of the year. Our mission is to connect generous donors with individuals and families in need of winter clothing, ensuring that no one has to face the harsh winter without proper protection. Through your donations of gently used winter clothing, we strive to make a meaningful difference in the lives of those who need it most, fostering a sense of community and compassion.
                        </p>
                        <div class="text-lg">
                            <p class="mb-4 font-medium">Why It Matters:</p>
                            <ul class="list-disc text-gray-600 pl-6 space-y-1">
                                <li>Protects against cold-related illnesses.</li>
                                <li>Provides warmth, dignity, and comfort.</li>
                                <li>Helps vulnerable communities stay safe.</li>
                                <li>Ensures no one faces winter without protection.</li>
                            </ul>
                        </div>
                        <button
                            className="py-2 px-6 text-white font-semibold rounded-md mt-4"
                            onClick={() => setIsModalOpen(true)}
                            style={{
                                backgroundColor: '#6b2f7b',
                                borderColor: '#6b2f7b',
                            }}
                        >
                            Read More
                        </button>
                    </div>

                    <div className="lg:w-1/2">
                        <img
                            src={logo}
                            alt="Winter Donation"
                            className="rounded-lg shadow-md w-full h-auto lg:h-[520px] object-cover"
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