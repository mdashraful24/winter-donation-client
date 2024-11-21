import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const DonationDetails = () => {
    const data = useLoaderData();
    const { title, image, description, contactInfo, status, division } = data;
    
    const [formData, setFormData] = useState({
        quantity: "",
        itemType: "",
        pickupLocation: "",
        notes: "",
    });
    // Handle input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    // Handle form
    const handleSubmitForm = (e) => {
        e.preventDefault();
        toast.success("Thank you! We will reach your destination soon.");
        setFormData({
            quantity: "",
            itemType: "",
            pickupLocation: "",
            notes: "",
        });
    };

    return (
        <div className="container mx-auto mt-14 mb-20 px-5">
            {/* Helmet */}
            <Helmet>
                <title>Donation Details | Winter Clothing Donation</title>
            </Helmet>

            {/* Donation details */}
            <h2 className="text-4xl text-center md:text-5xl text-[#491558] font-bold mb-12">
                Donation Details
            </h2>
            <div className="grid lg:grid-cols-2 gap-10 items-stretch">
                {/* Details Card */}
                <div className="shadow-xl rounded-2xl border p-6 bg-white flex flex-col">
                    <div className="lg:h-96 mb-6">
                        <img
                            src={image}
                            alt="Item"
                            className="w-full h-full rounded-lg shadow-md"
                        />
                    </div>
                    <div className="flex-1 space-y-2">
                        <h2 className="text-2xl font-semibold">Title: {title}</h2>
                        <div className="">
                            <p className="font-semibold">Description: <span className="font-normal text-gray-600">{description}</span></p>
                        </div>
                        <div className="mt-1 space-y-1">
                            <p className="font-semibold">
                                <span>Status: </span>
                                <span className={`${status === 'Active' ? 'text-blue-600' : status === 'Complete' ? 'text-green-600' : 'text-amber-600'}`}>
                                    {status}
                                </span>
                            </p>
                            <p className="font-semibold">Contact Info: <span className="font-normal text-gray-600">{contactInfo}</span></p>
                            <p className="font-semibold">Division: <span className="font-normal text-gray-600">{division}</span></p>
                        </div>
                    </div>
                </div>
                {/* Form Card */}
                <div className="shadow-xl rounded-lg border p-6 bg-white flex flex-col">
                    <form className="flex flex-col flex-1 justify-between" onSubmit={handleSubmitForm}>
                        <h2 className="text-3xl text-center font-semibold mb-4">Donation Form</h2>
                        <div className="mb-2">
                            <label className="block mb-2 text-sm font-medium" htmlFor="quantity">
                                Quantity of Items
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                className="input input-bordered w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#660066]"
                                placeholder="e.g., 2 jackets, 3 blankets"
                                value={formData.quantity}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block mb-2 text-sm font-medium" htmlFor="itemType">
                                Item Type
                            </label>
                            <input
                                type="text"
                                id="itemType"
                                name="itemType"
                                className="input input-bordered w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#660066]"
                                placeholder="e.g., blanket, jacket, sweater"
                                value={formData.itemType}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block mb-2 text-sm font-medium" htmlFor="pickupLocation">
                                Pickup Location
                            </label>
                            <input
                                type="text"
                                id="pickupLocation"
                                name="pickupLocation"
                                className="input input-bordered w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#660066]"
                                placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                                value={formData.pickupLocation}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium" htmlFor="notes">
                                Additional Notes (Optional)
                            </label>
                            <textarea
                                id="notes"
                                name="notes"
                                className="textarea textarea-bordered w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#660066]"
                                placeholder="Any additional information..."
                                value={formData.notes}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="btn w-32 text-base text-white font-semibold rounded-md"
                                style={{
                                    backgroundColor: '#6b2f7b',
                                    borderColor: '#6b2f7b',
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;
