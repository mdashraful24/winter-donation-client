import { Link } from "react-router-dom";

const CampaignCard = ({ donation }) => {

    const { id, image, title, description, division } = donation;
    return (
        <div className="card bg-base-100 shadow-lg p-6 rounded-xl">
            <figure className="mb-4">
                <img className="h-80 w-full rounded-xl md:object-contain lg:object-cover" src={image} alt={title} />
            </figure>
            <div className="card-body p-0">
                <h2 className="card-title text-2xl font-semibold mb-2">{title}</h2>
                <p className="font-semibold">Description: <span className="font-normal">{description}</span></p>
                <p className="font-semibold">Division: <span className="font-normal">{division}</span></p>
                <div className="mt-4">
                    <Link to={`/donation/camp/${id}`}
                        className="btn text-base text-white bg-[#6b2f7b] border-[#6b2f7b] hover:text-black font-semibold rounded-md"
                        >
                        Donate Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;
