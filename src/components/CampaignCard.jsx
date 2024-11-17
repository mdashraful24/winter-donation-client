const CampaignCard = () => {
    return (
        <div className="card w-72 bg-base-100 shadow-md p-4 rounded-md">
            {/* Placeholder Image */}
            <figure className="mb-4">
                {/* <div className="bg-gray-300 h-32 w-full rounded-md"></div> */}
                <img className="h-32 w-full rounded-md" src="" alt="" />
            </figure>
            {/* Card Body */}
            <div className="card-body p-0">
                {/* Product Name */}
                <h2 className="card-title text-lg font-semibold">
                    Dell XPS 13
                </h2>
                {/* Price */}
                <p className="text-gray-600">Price: 99.99k</p>
                {/* Button */}
                <div className="mt-4">
                    <button className="btn btn-outline btn-primary w-full rounded-full">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;