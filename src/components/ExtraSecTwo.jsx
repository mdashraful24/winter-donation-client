import { FaHandHoldingHeart, FaPeopleArrows, FaSnowflake } from "react-icons/fa";

const ExtraSecTwo = () => {
    return (
        <div>
            <div class="px-5 mb-14 md:mb-20 lg:mb-28">
                <div class="max-w-5xl mx-auto text-center">
                    <h2 class="text-3xl md:text-4xl text-center text-[#6b2c83] font-bold mb-6 md:mb-10">Our Goal</h2>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        At <span class="font-semibold text-blue-800">Winter Clothing Donation</span>, our mission is to bring warmth, dignity,
                        and hope to individuals and families facing harsh winters without proper clothing. We strive to create a
                        compassionate community where everyone plays a role in spreading kindness and ensuring no one is left out in the cold.
                    </p>
                </div>
                <div class="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                    {/* Goal 1 */}
                    <div class="bg-blue-50 p-6 rounded-lg shadow-md">
                        <div class="text-center">
                            <span class="inline-block text-4xl text-[#6b2c83] mb-4 animate-pulse">
                                <FaHandHoldingHeart />
                            </span>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3">Empower Communities</h3>
                            <p class="text-gray-700">
                                Mobilizing individuals to make a difference by donating, volunteering, and supporting those in need.
                            </p>
                        </div>
                    </div>
                    {/* Goal 2 */}
                    <div class="bg-amber-50 p-6 rounded-lg shadow-md">
                        <div class="text-center">
                            <span class="inline-block text-4xl text-[#6b2c83] mb-4 animate-bounce">
                                <FaPeopleArrows />
                            </span>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3">Bridge the Gap</h3>
                            <p class="text-gray-700">
                                Connecting generous donors with underserved individuals to ensure no one faces winter unprepared.
                            </p>
                        </div>
                    </div>
                    {/* Goal 3 */}
                    <div class="bg-gray-100 p-6 rounded-lg shadow-md">
                        <div class="text-center">
                            <span class="inline-block text-4xl text-[#6b2c83] mb-4 animate-spin">
                                <FaSnowflake />
                            </span>
                            <h3 class="text-xl font-semibold text-gray-800 mb-3">Spread Warmth</h3>
                            <p class="text-gray-700">
                                Providing winter essentials to promote health, safety, and comfort for vulnerable populations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ExtraSecTwo;