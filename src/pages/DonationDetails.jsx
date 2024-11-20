import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const DonationDetails = () => {
    const data = useLoaderData();
    const { title, image, description, contactInfo, status, division } = data;

    // State to hold form inputs
    const [formData, setFormData] = useState({
        quantity: "",
        itemType: "",
        pickupLocation: "",
        notes: "",
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmitForm = (e) => {
        e.preventDefault();

        // Show toast message
        toast.success("Thank you! We will reach your destination soon.");

        // Clear the form after submission
        setFormData({
            quantity: "",
            itemType: "",
            pickupLocation: "",
            notes: "",
        });
    };

    return (
        <div className="container mx-auto mt-14 mb-20 px-5">
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









// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";
// import { useLoaderData } from "react-router-dom";

// const DonationDetails = () => {

//     const handleSubmitForm = (e) => {
//         e.preventDefault();
//     }

//     const data = useLoaderData()
//     // console.log(data);
//     const { title, image, description, contactInfo, status, division } = data;

//     return (
//         // Demo Part
//         <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-stretch mb-20 px-5">
//             {/* Details Card */}
//             <div className="shadow-xl rounded-2xl border p-6 bg-white flex flex-col">
//                 <div className="lg:h-96 mb-6">
//                     <img
//                         src={image}
//                         alt="Item"
//                         className="w-full h-full rounded-lg shadow-md"
//                     />
//                 </div>

//                 <div className="flex-1 space-y-2">
//                     <h2 className="text-2xl font-semibold text-gray-800">Title: {title}</h2>
//                     <div className="text-lg">
//                         <p className="text-gray-700 font-semibold">Description: <span className="font-normal">{description}</span></p>
                        
//                     </div>
//                     <div className="mt-1 space-y-1">
//                         <p className="text-lg font-semibold">
//                             <span className="text-black">Status: </span>
//                             <span className={`${status === 'Active' ? 'text-red-600' : status === 'Complete' ? 'text-green-600' : 'text-blue-600'}`}>
//                                 {status}
//                             </span>
//                         </p>

//                         <p className="text-lg text-gray-600"><span className="font-semibold">Contact Info:</span> {contactInfo}</p>
//                         <p className="text-lg text-gray-600"><span className="font-semibold">Division:</span> {division}</p>
//                     </div>
//                 </div>
//             </div>

//             {/* Form Card */}
//             <div className="shadow-xl rounded-lg border p-6 bg-gray-100 flex flex-col">
//                 <form className="flex flex-col flex-1 justify-between">
//                     <h2 className="text-3xl text-center font-semibold mb-4">Donation Form</h2>
//                     <div className="mb-2">
//                         <label className="block mb-2 text-sm font-medium" htmlFor="quantity">
//                             Quantity of Items
//                         </label>
//                         <input
//                             type="number"
//                             id="quantity"
//                             name="quantity"
//                             className="input input-bordered w-full"
//                             placeholder="e.g., 2 jackets, 3 blankets"
//                             required
//                         />
//                     </div>
//                     <div className="mb-2">
//                         <label className="block mb-2 text-sm font-medium" htmlFor="itemType">
//                             Item Type
//                         </label>
//                         <input
//                             type="text"
//                             id="itemType"
//                             name="itemType"
//                             className="input input-bordered w-full"
//                             placeholder="e.g., blanket, jacket, sweater"
//                             required
//                         />
//                     </div>
//                     <div className="mb-2">
//                         <label className="block mb-2 text-sm font-medium" htmlFor="pickupLocation">
//                             Pickup Location
//                         </label>
//                         <input
//                             type="text"
//                             id="pickupLocation"
//                             name="pickupLocation"
//                             className="input input-bordered w-full"
//                             placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block mb-2 text-sm font-medium" htmlFor="notes">
//                             Additional Notes (Optional)
//                         </label>
//                         <textarea
//                             id="notes"
//                             name="notes"
//                             className="textarea textarea-bordered w-full"
//                             placeholder="Any additional information..."
//                         />
//                     </div>
//                     <div className="flex justify-end">
//                         <button
//                             className="btn w-32 text-base text-white font-semibold rounded-md"
//                             style={{
//                                 backgroundColor: '#6b2f7b',
//                                 borderColor: '#6b2f7b',
//                             }}
//                         >
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>

//     );
// };

// export default DonationDetails;


// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";

// const DonationDetails = () => {
//     const { data, id } = useContext(AuthContext);

//     // Wait for data to load and id to be valid
//     // if (!data.length) {
//     //     return <p className="text-gray-500 text-center">Loading donation details...</p>;
//     // }
//     // if (!id) {
//     //     return <p className="text-red-500 text-center">No donation selected.</p>;
//     // }

//     const selectedId = data.find((donation) => donation.id === id);

//     if (!selectedId) {
//         return <p className="text-red-500 text-center">Donation details not found.</p>;
//     }

//     const { title, image, description, contactInfo, status, division } = selectedId;

//     return (
//         <div className="container mx-auto p-5">
//             {/* Donation details */}
//             <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
//                 <div className="flex items-center space-x-4">
//                     <img
//                         src={image}
//                         alt="Item"
//                         className="w-24 h-24 rounded-lg object-cover border border-gray-300"
//                     />
//                     <div>
//                         <h2 className="text-xl font-bold text-gray-800">Title: {title}</h2>
//                     </div>
//                 </div>
//                 <div className="mt-4">
//                     <p className="text-gray-700 text-sm">Description: {description}</p>
//                 </div>
//                 <div className="mt-4">
//                     <p className="text-sm text-gray-600">
//                         <span className="font-semibold">Status:</span> {status}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                         <span className="font-semibold">Contact Info:</span> {contactInfo}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                         <span className="font-semibold">Division:</span> {division}
//                     </p>
//                 </div>
//             </div>

//             <h2 className="text-xl font-semibold mb-4">Donation Form</h2>
//             <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
//                 {/* Form fields */}
//                 <div className="mb-4">
//                     <label className="block mb-2 text-sm font-medium" htmlFor="quantity">
//                         Quantity of Items
//                     </label>
//                     <input
//                         type="number"
//                         id="quantity"
//                         name="quantity"
//                         className="input input-bordered w-full"
//                         placeholder="e.g., 2 jackets, 3 blankets"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block mb-2 text-sm font-medium" htmlFor="itemType">
//                         Item Type
//                     </label>
//                     <input
//                         type="text"
//                         id="itemType"
//                         name="itemType"
//                         className="input input-bordered w-full"
//                         placeholder="e.g., blanket, jacket, sweater"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block mb-2 text-sm font-medium" htmlFor="pickupLocation">
//                         Pickup Location
//                     </label>
//                     <input
//                         type="text"
//                         id="pickupLocation"
//                         name="pickupLocation"
//                         className="input input-bordered w-full"
//                         placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block mb-2 text-sm font-medium" htmlFor="notes">
//                         Additional Notes (Optional)
//                     </label>
//                     <textarea
//                         id="notes"
//                         name="notes"
//                         className="textarea textarea-bordered w-full"
//                         placeholder="Any additional information..."
//                     />
//                 </div>
//                 <div className="text-center">
//                     <button type="submit" className="btn btn-neutral rounded-none">
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default DonationDetails;
