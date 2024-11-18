import { Link } from "react-router-dom";

const CampaignCard = ({ donation }) => {

    const { id, image, title, description, division } = donation;

    return (
        <div className="card bg-base-100 shadow-md p-4 rounded-md">
            <figure className="mb-4">
                <img className="h-80 w-full rounded-md" src={image} alt={title} />
            </figure>
            <div className="card-body p-0">
                <h2 className="card-title text-lg font-semibold">{title}</h2>
                <p className="text-gray-600">{description}</p>
                <p>{division}</p>
                <div className="mt-4">
                    <Link to={`/donation/camp/details/${id}`}
                        className="btn btn-outline btn-primary">
                        Donate Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;
