const DonationDetails = () => {

    return (
        <div className="container mx-auto p-5">
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
