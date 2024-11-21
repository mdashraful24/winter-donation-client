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
                <div
                    data-aos="fade-up"
                    className="mx-auto w-full lg:w-2/3 p-6 bg-blue-50 rounded-lg shadow-xl"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-[#491558] mb-4">Welcome to Winter Clothing Donation!</h2>
                    <p className="md:text-lg text-gray-600 mb-6">
                        Thank you for visiting! Your generosity can make a big difference this winter. Donating your gently used winter clothing will help keep those in need warm and comfortable. Together, we can spread kindness and warmth to those who need it most. Join us in this effort today!
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Animation;
