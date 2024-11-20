import logo from '../../src/assets/donate-clothing.png'

const HowItWorks = () => {
    return (
        <div className='mb-32'>
            <h1 className='text-3xl md:text-4xl text-center text-[#6b2c83] font-bold mb-6 md:mb-14 lg:mb-16'>How It Works</h1>
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 px-5">
                {/* Text Section */}
                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-bold text-[#3e194b] mb-4">
                        Collect Your Items
                    </h2>
                    <p className="text-gray-600 text-lg text-justify leading-relaxed mb-4">
                        Pack the items you wish to donate in boxes or bags and label them clearly with "Purple Heart Donation" in large, bold letters.
                    </p>
                    <h2 className="text-2xl font-bold text-[#3e194b] mb-4">
                        Schedule your pickup
                    </h2>
                    <p className="text-gray-600 text-lg text-justify leading-relaxed mb-4">
                        Call or click to schedule your convenient at-home pickup, or drop off your donation at one of our designated locations. If you're in Dhaka or Rangpur, click here to schedule your pickup.
                    </p>
                    <h2 className="text-2xl font-bold text-[#3e194b] mb-4">
                        Set It & Forget It
                    </h2>
                    <p className="text-gray-600 text-lg text-justify leading-relaxed mb-10">
                        On the scheduled pickup day, simply place your donation outside your front door. Our driver will promptly collect it and leave your tax receipt for you!
                    </p>

                    <button
                        className="py-3 px-10 text-white font-semibold rounded-none"
                        style={{
                            backgroundColor: '#6b2f7b',
                            borderColor: '#6b2f7b',
                        }}
                    >
                        SCHEDULE PICKUP
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
        </div>
    );
};

export default HowItWorks;