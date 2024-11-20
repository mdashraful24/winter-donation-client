import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UpdateProfile = () => {
    const { user, updateUserProfiles, setUser } = useContext(AuthContext);
    const [name, setName] = useState();
    const [photoURL, setPhotoURL] = useState();
    const navigate = useNavigate();

    const validateInputs = () => {
        const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
        // if (urlPattern.test(name)) {
        //     toast.error("Name field cannot contain a URL!");
        //     return false;
        // }
        // if (!urlPattern.test(photoURL)) {
        //     toast.error("Photo URL field must contain a valid URL!");
        //     return false;
        // }
        if (urlPattern.test(name) || !urlPattern.test(photoURL)) {
            toast.error("Photo URL field must contain a valid URL!");
            return false;
        }
        return true;
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        // Input validation
        if (!validateInputs()) {
            return;
        }

        const updatedData = {
            displayName: name,
            photoURL,
        };

        updateUserProfiles(updatedData)
            .then(() => {
                setUser({
                    ...user,
                    displayName: name,
                    photoURL,
                });

                setName("");
                setPhotoURL("");

                // Show success toast
                toast.success("Profile updated successfully!");

                // Optionally navigate back to the dashboard
                setTimeout(() => {
                    navigate("/dashboard");
                }, 100);
            })
            .catch((error) => {
                // console.error("Error updating profile:", error);
                toast.error(error.message || "Failed to update profile. Please try again.");
            });
    };

    return (
        <div className="bg-gray-100">
            <Navbar></Navbar>
            <div className="flex flex-col items-center justify-center mt-20 mb-36 px-5">
                <h2 className="text-3xl md:text-4xl text-center text-[#491558] font-bold mb-6">Update Profile</h2>
                <form onSubmit={handleUpdate} className="w-full max-w-md bg-white shadow-md p-6 rounded-xl">
                    <div className="form-control mb-4">
                        <label className="label">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="name"
                            className="input input-bordered border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#660066]"
                            required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">Photo URL</label>
                        <input
                            type="text"
                            name="photoURL"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            placeholder="photo-URL"
                            className="input input-bordered border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#660066]"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn w-full text-white text-base mt-4"
                        style={{ background: "linear-gradient(to right, #000066 0%, #660066 100%)" }}
                    >
                        Update Information
                    </button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateProfile;



// [
//     {
//         "id": 1,
//         "title": "Warmth for All - Dhaka",
//         "image": "https://i.ibb.co.com/jbJcv2P/warm-for-dhaka.jpg",
//         "description": "Providing winter clothing to underprivileged communities in Dhaka city.",
//         "status": "Active",
//         "contactInfo": "dhaka_campaign@winterdonation.org | +880123456789",
//         "division": "Dhaka"
//     },
//     {
//         "id": 2,
//         "title": "Keep Sylhet Warm",
//         "image": "https://i.ibb.co.com/3fWMY00/pexels-photo-11319521.jpg",
//         "description": "Collecting warm clothes for rural villages in Sylhet division.",
//         "status": "Active",
//         "contactInfo": "sylhet_support@winterdonation.org | +880987654321",
//         "division": "Sylhet"
//     },
//     {
//         "id": 3,
//         "title": "Chattogram Winter Aid",
//         "image": "https://i.ibb.co.com/jbJcv2P/warm-for-dhaka.jpg",
//         "description": "Distributing winter clothes to coastal areas in Chattogram.",
//         "status": "Completed",
//         "contactInfo": "chattogram_aid@winterdonation.org | +880135792468",
//         "division": "Chattogram"
//     },
//     {
//         "id": 4,
//         "title": "Rajshahi Warmth Campaign",
//         "image": "https://i.ibb.co.com/jbJcv2P/warm-for-dhaka.jpg",
//         "description": "Helping low-income families in Rajshahi to stay warm this winter.",
//         "status": "Active",
//         "contactInfo": "rajshahi_campaign@winterdonation.org | +880246810121",
//         "division": "Rajshahi"
//     },
//     {
//         "id": 5,
//         "title": "Khulna Care Initiative",
//         "image": "https://i.ibb.co.com/jbJcv2P/warm-for-dhaka.jpg",
//         "description": "Distributing sweaters and blankets in cold-affected areas of Khulna.",
//         "status": "Ongoing",
//         "contactInfo": "khulna_help@winterdonation.org | +880123987654",
//         "division": "Khulna"
//     },
//     {
//         "id": 6,
//         "title": "Barisal Blanket Drive",
//         "image": "https://i.ibb.co.com/jbJcv2P/warm-for-dhaka.jpg",
//         "description": "Providing blankets to homeless people in Barisal city.",
//         "status": "Ongoing",
//         "contactInfo": "barisal_donation@winterdonation.org | +880159753486",
//         "division": "Barisal"
//     },
//     {
//         "id": 7,
//         "title": "Mymensingh Warm Smiles",
//         "image": "https://i.ibb.co.com/jbJcv2P/warm-for-dhaka.jpg",
//         "description": "Helping children in Mymensingh with warm clothes and scarves.",
//         "status": "Active",
//         "contactInfo": "mymensingh_aid@winterdonation.org | +880187654321",
//         "division": "Mymensingh"
//     },
//     {
//         "id": 8,
//         "title": "Rangpur Warmth Drive",
//         "image": "https://i.ibb.co.com/jbJcv2P/warm-for-dhaka.jpg",
//         "description": "Distributing winter clothes to the poor in remote villages of Rangpur.",
//         "status": "Completed",
//         "contactInfo": "rangpur_drive@winterdonation.org | +880112233445",
//         "division": "Rangpur"
//     },
//     {
//         "id": 9,
//         "title": "Comilla Helping Hands",
//         "image": "https://i.ibb.co.com/jbJcv2P/warm-for-dhaka.jpg",
//         "description": "Providing jackets and shawls to orphans in Comilla district.",
//         "status": "Active",
//         "contactInfo": "comilla_help@winterdonation.org | +880223344556",
//         "division": "Chattogram"
//     }
// ]