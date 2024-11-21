import { useState } from "react";
import logo from '../../src/assets/winter-clothes-donationvector.png'

const AboutUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <section className="mb-12 md:mb-16 lg:mb-24 bg-slate-50 py-10 lg:py-20">
                <div className="container mx-auto flex flex-col lg:flex-row items-center lg:gap-16 rounded-lg px-5">
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
                            className="py-2 px-6 text-white font-semibold rounded-md mt-4 mb-10 md:mb-14"
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
                        <div className="modal-box text-justify">
                            <h3 className="text-lg font-bold">How You Can Contribute</h3>
                            <p className="py-4">
                                Contributing is simple and impactful:
                            </p>
                            <ul className="list-disc text-gray-600 pl-6 md:ml-2 space-y-1">
                                <li><span className="font-bold">Donate Clothes:</span> Log in to the website, fill out the donation form, and specify the type and quantity of winter clothing you'd like to donate.</li>
                                <li><span className="font-bold">Spread the Word:</span> Share the campaign with your friends, family, and social networks to amplify the reach and encourage more donations.</li>
                            </ul>
                            <div className="modal-action">
                                <button
                                    className="btn bg-[#6b2f7b] text-white hover:bg-[#5a0571]"
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