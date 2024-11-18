import { useEffect, useState } from "react";
import CampaignCard from "./CampaignCard";

const DonationCamp = () => {

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch("./donation.json")
        .then(res => res.json())
        .then(data => setDonations(data))
    }, [])

    return (
        <div className="w-11/12 mx-auto my-10">
            <h2 className="text-center">Donation Campaign</h2>
            <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    donations.map(donation => <CampaignCard donation={donation} key={donation.id}></CampaignCard>)
                }
            </div>
        </div>
    );
};

export default DonationCamp;