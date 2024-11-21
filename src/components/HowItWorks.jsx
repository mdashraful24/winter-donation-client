import logo from '../../src/assets/donate-clothing.png';

const HowItWorks = () => {
    return (
        <div className="mb-16 md:mb-24 lg:mb-32">
            <h1 className="text-3xl md:text-4xl text-center text-[#6b2c83] font-bold mb-6 md:mb-14 lg:mb-16">
                How It Works
            </h1>
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:gap-16 px-5">
                {/* Text Section */}
                <div className="lg:w-1/2 text-lg">
                    <h2 className="text-2xl font-bold text-[#552367] mb-4">
                        Instructions for Donation
                    </h2>
                    <ul className="text-gray-600 text-justify leading-relaxed mb-6 md:ml-4 space-y-2 list-disc list-inside">
                        <li><span className='font-semibold'>Register or Log In:</span> Create an account or log in to access the donation form and track your contributions.</li>
                        <li><span className='font-semibold'>Fill Out the Donation Form:</span> Specify the type (e.g., jackets, blankets) and quantity of winter clothing you'd like to donate.</li>
                        <li><span className='font-semibold'>Confirm Your Donation:</span> You'll receive a confirmation with instructions for drop-off or pickup.</li>
                    </ul>
                    <h2 className="text-2xl font-bold text-[#552367] mb-4">
                        Collection Points
                    </h2>
                    <p className="text-gray-600 text-justify leading-relaxed mb-6">
                        Drop off your donations at designated collection points in city centers, community halls, or volunteer hubs. Exact locations will be provided after confirmation.
                    </p>
                    <h2 className="text-2xl font-bold text-[#552367] mb-4">
                        Supported Divisions
                    </h2>
                    <p className="text-gray-600 text-justify leading-relaxed mb-10">
                        The campaign covers all major divisions in Bangladesh, including Dhaka, Chittagong, Khulna, Rajshahi, Sylhet, Barisal, Rangpur, and Bandarban. Choose the nearest division for convenient donation.
                    </p>
                </div>
                {/* Image Section */}
                <div className="lg:w-1/2">
                    <img
                        src={logo}
                        alt="Winter Donation"
                        className="rounded-lg shadow-xl w-full h-auto lg:h-[500px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
