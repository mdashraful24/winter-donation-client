import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Animation = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <div className="md:my-10 px-5">
            <section className="container mx-auto text-center bg-bul py-12">
                {/* Header */}
                <div
                    data-aos="fade-up"
                    className="mx-auto w-full lg:w-2/3 p-6 bg-blue-50 rounded-lg shadow-xl"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-[#491558] mb-4">Welcome to Winter Clothing Donation!</h2>
                    <p className="md:text-lg text-gray-600 mb-6">
                        Your old winter clothes can help those in need. Donate now and make a difference!
                    </p>
                </div>
            </section>

            {/* Winter Imagery Section */}
            {/* <section className="bg-gray-50 py-16">
                <div
                    data-aos="fade-up"
                    className="text-center mx-auto w-full md:w-2/3 p-6 bg-white rounded-lg shadow-xl"
                >
                    <h3 className="text-3xl font-bold text-blue-600 mb-4">
                        Spread Warmth this Winter
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                        Every coat, sweater, and scarf you donate helps someone stay warm. Let's make the winter season a little brighter for everyone.
                    </p>
                    <img
                        src="https://example.com/winter-clothing.jpg" // Replace with a winter-themed image URL
                        alt="Winter Clothing"
                        className="mx-auto rounded-lg shadow-lg"
                    />
                </div>
            </section> */}
        </div>
    );
};

export default Animation;
