import { useEffect, useState } from "react";
import CampaignCard from "./CampaignCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const DonationCamp = () => {

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch("./donation.json")
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])

    return (
        <div className="bg-gray-50">
            <Helmet>
                <title>Donation Campaign | Winter Clothing Donation</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="container mx-auto mt-14 mb-28 px-5">
                <h2 className="text-4xl text-center md:text-5xl text-[#491558] font-bold mb-14">
                    Donation Campaign
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        donations.map(donation =>
                            <CampaignCard
                                donation={donation}
                                key={donation.id}>
                            </CampaignCard>)
                    }
                </div>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default DonationCamp;