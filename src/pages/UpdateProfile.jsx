import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
            <form onSubmit={handleUpdate} className="w-full max-w-md bg-gray-100 shadow-md p-6 rounded">
                <div className="form-control mb-4">
                    <label className="label">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="name"
                        className="input input-bordered"
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
                        placeholder="photoURL"
                        className="input input-bordered"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-neutral w-full mt-4">
                    Update Information
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;
