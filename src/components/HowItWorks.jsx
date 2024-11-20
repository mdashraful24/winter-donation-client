import logo from '../../src/assets/donate-clothing.png'

const HowItWorks = () => {
    return (
        <div className='mb-32'>
            <h1 className='text-3xl md:text-4xl text-center text-[#6b2c83] font-bold mb-6 md:mb-14 lg:mb-16'>How It Works</h1>
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 px-5">
                {/* Text Section */}
                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-bold text-[#3e194b] mb-6">
                        1 - Collect Your Items
                    </h2>
                    <p className="text-gray-600 text-lg text-justify leading-relaxed mb-4">
                        Simply pack the items you want to donate in boxes or bags. Write “Purple Heart Donation” in large letters on the outside.
                    </p>
                    <h2 className="text-2xl font-bold text-[#3e194b] mb-6">
                        2 - Schedule your pickup
                    </h2>
                    <p className="text-gray-600 text-lg text-justify leading-relaxed mb-4">
                        Call or click to schedule your convenient at-home pickup or to drop your donation off at one of the applicable locations. For Texas or Michigan click here to schedule.
                    </p>
                    <h2 className="text-2xl font-bold text-[#3e194b] mb-6">
                        3 - Set It & Forget It
                    </h2>
                    <p className="text-gray-600 text-lg text-justify leading-relaxed mb-4">
                        On pickup day, leave your donation outside your front door. Our driver will promptly pick up and leave your tax receipt at the door!
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