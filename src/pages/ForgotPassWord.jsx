import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const ForgotPassword = () => {
    const auth = getAuth();
    const location = useLocation();
    // const navigate = useNavigate();

    // Extract pre-filled email from query params
    // const queryParams = new URLSearchParams(location.search);
    // const preFilledEmail = queryParams.get("email") || "";

    const preFilledEmail = new URLSearchParams(location.search).get("email") || "";


    const [email, setEmail] = useState(preFilledEmail);
    const [error, setError] = useState("");

    const handleResetPassword = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // toast.success("Password reset email sent! Redirecting to Gmail...");
                toast.success("Password reset email sent!", {
                    autoClose: 800, // Toast will disappear after 5 seconds (5000ms)
                });

                setTimeout(() => {
                    // window.location.href = "https://mail.google.com/";
                    window.open("https://mail.google.com/", "_blank");
                }, 1500); // Wait for a moment before redirecting
            })
            .catch((error) => {
                setError(error.message);
                toast.error("Failed to send reset email. Check the email address.");
            });
    };

    return (
        <div className="flex justify-center items-center mt-28 mb-44 px-5">
            <div className="card bg-white w-full max-w-lg border py-5">
                <h2 className="text-2xl font-semibold text-center">
                    Reset Your Password
                </h2>
                <form onSubmit={handleResetPassword} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Email</span>
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <div className="form-control mt-6">
                        <button
                            className="btn text-base text-white"
                            style={{ background: "linear-gradient(to right, #003399 0%, #000066 100%)" }}
                        >
                            Reset Password
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
