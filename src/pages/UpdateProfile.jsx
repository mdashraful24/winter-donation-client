import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const { user, updateUserProfiles, setUser } = useContext(AuthContext);
    const [name, setName] = useState();
    const [photoURL, setPhotoURL] = useState();
    const navigate = useNavigate();

    // Validation and Conditions
    const validateInputs = () => {
        const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
        if (urlPattern.test(name) || !urlPattern.test(photoURL)) {
            toast.error("Photo URL field must contain a valid URL!");
            return false;
        }
        return true;
    };
    // Handle update
    const handleUpdate = (e) => {
        e.preventDefault();
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
                toast.success("Profile updated successfully!");
                setTimeout(() => {
                    navigate("/dashboard");
                }, 100);
            })
            .catch((error) => {
                toast.error(error.message || "Failed to update profile. Please try again.");
            });
    };

    return (
        <div className="bg-gray-100">
            {/* Helmet */}
            <Helmet>
                <title>Update Profile | Winter Clothing Donation</title>
            </Helmet>
            <Navbar></Navbar>
            {/* Update profile */}
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
