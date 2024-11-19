import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const DonationDetails = () => {

    const data = useLoaderData()
    // console.log(data);
    const { title, image, description, contactInfo, status, division } = data;

    return (
        <div className="container mx-auto px-3">
            {/* donation details */}
            {/* <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                <div className="flex items-center space-x-4">
                    <img
                        src={image}
                        alt="Item"
                        className="w-24 h-24 rounded-lg object-cover border border-gray-300"
                    />
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">Title: {title} </h2>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-gray-700 text-sm">Description: {description}</p>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-gray-600"><span className="font-semibold">Status:</span> {status}</p>
                    <p className="text-sm text-gray-600"><span className="font-semibold">Contact Info:</span> {contactInfo}</p>
                    <p className="text-sm text-gray-600"><span className="font-semibold">Division:</span> {division}</p>
                </div>
            </div> */}

            {/* <div className="max-w-3xl mx-auto shadow-lg rounded-lg border p-5">
                <div className="flex flex-col md:flex-row lg:flex-row items-center">
                  
                    <div className="flex-1">
                        <h2 className="text-xl font-bold text-gray-800">Title: {title}</h2>
                        <div className="mt-4">
                            <p className="text-gray-700 text-sm">Description: {description}</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-gray-600"><span className="font-semibold">Status:</span> {status}</p>
                            <p className="text-sm text-gray-600"><span className="font-semibold">Contact Info:</span> {contactInfo}</p>
                            <p className="text-sm text-gray-600"><span className="font-semibold">Division:</span> {division}</p>
                        </div>
                    </div>

               
                    <div className="md:w-72 lg:w-96 lg:h-60">
                        <img
                            src={image}
                            alt="Item"
                            className="w-full h-full rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div> */}

            <div className="max-w-5xl mx-auto shadow-xl rounded-lg border p-6 bg-white">
                <div className="flex flex-col md:flex-row items-center gap-5">
                    {/* Left Side: Information */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Title: {title}</h2>
                        <div className="mt-4">
                            <p className="text-gray-700 text-base">Description: {description}</p>
                        </div>
                        <div className="mt-4 space-y-2">
                            <p className="text-sm text-gray-600"><span className="font-semibold">Contact Info:</span> {contactInfo}</p>
                            <p className="text-sm text-gray-600"><span className="font-semibold">Division:</span> {division}</p>
                            <p className={`text-sm font-semibold ${status === 'active' ? 'text-red-600' : status === 'complete' ? 'text-green-600' : 'text-blue-600'}`}>
                                <span className="font-semibold">Status:</span> {status}
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="md:w-72 lg:w-96 lg:h-60">
                        <img
                            src={image}
                            alt="Item"
                            className="w-full h-full rounded-lg object-cover shadow-md"
                        />
                    </div>
                </div>
            </div>





            {/* Donation form */}
            <h2 className="text-xl font-semibold mb-4">Donation Form</h2>
            <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="quantity">
                        Quantity of Items
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        className="input input-bordered w-full"
                        placeholder="e.g., 2 jackets, 3 blankets"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="itemType">
                        Item Type
                    </label>
                    <input
                        type="text"
                        id="itemType"
                        name="itemType"
                        className="input input-bordered w-full"
                        placeholder="e.g., blanket, jacket, sweater"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="pickupLocation">
                        Pickup Location
                    </label>
                    <input
                        type="text"
                        id="pickupLocation"
                        name="pickupLocation"
                        className="input input-bordered w-full"
                        placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
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
                        className="textarea textarea-bordered w-full"
                        placeholder="Any additional information..."
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-neutral rounded-none">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DonationDetails;


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
