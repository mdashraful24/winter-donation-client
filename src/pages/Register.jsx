// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";
// import { toast } from "react-toastify";
// import { FcGoogle } from "react-icons/fc";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const Register = () => {

//     const { createNewUser, setUser, updateUserProfiles, handleGoogleSignIn } = useContext(AuthContext);
//     const [error, setError] = useState("");
//     const [showPassWord, setShowPassword] = useState(false);
//     const navigate = useNavigate();

//     const handleGoogleSignInClickReg = () => {
//         handleGoogleSignIn()
//             .then(result => {
//                 const user = result.user;
//                 setUser(user);
//                 toast.success("Successfully! Register with Google");
//                 navigate("/");  // Redirect to the previous or home page
//             })
//             .catch(error => {
//                 // console.log("ERROR", error);
//                 setError({ ...error, google: error.message });
//             })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const form = new FormData(e.target);
//         const name = form.get("name");
//         const email = form.get("email");
//         const photo = form.get("photo");
//         const password = form.get("password");
//         // console.log({ name, email, photo, password });

//         // Password validation criteria
//         // if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
//         //     if (!/[A-Z]/.test(password)) {
//         //         setError("Password must contain at least one uppercase letter.");
//         //         // toast.error("Password must contain at least one uppercase letter.");
//         //     } else if (!/[a-z]/.test(password)) {
//         //         setError("Password must contain at least one lowercase letter.");
//         //         // toast.error("Password must contain at least one lowercase letter.");
//         //     } else if (password.length < 6) {
//         //         setError("Password must be at least 6 characters long.");
//         //         // toast.error("Password must be at least 6 characters long.");
//         //     }
//         //     return;
//         // }

//         if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
//             setError("Password must contain at least six characters long one uppercase and one lowercase letter.")
//             return;
//         }
//         setError("");

//         createNewUser(email, password)
//             .then(result => {
//                 const user = result.user;
//                 setUser(user);
//                 updateUserProfiles({
//                     displayName: name,
//                     photoURL: photo
//                 })
//                     .then(() => {
//                         toast.success("Successfully Registered");
//                         navigate("/");
//                     })
//                     .catch((err) => {
//                         toast.error(err.message);
//                     })
//             })
//             .catch((error) => {
//                 // toast.error(error.message || "Please try again.");
//                 // setError(error.message);
//                 setError({ register: "Email already in use." });
//                 toast.error("Registration failed. Please try again.");
//             })
//     }

//     return (
//         <div className="flex justify-center items-center my-12 px-5">
//             <div className="card bg-white w-full max-w-md shrink-0 py-8">
//                 <h2 className="text-2xl font-semibold text-center">Register Now!!!</h2>
//                 <form onSubmit={handleSubmit} className="card-body pb-3 md:px-11">
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Name</span>
//                         </label>
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="name"
//                             className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                             required
//                         />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Email</span>
//                         </label>
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="email"
//                             className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                             required
//                         />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Photo URL</span>
//                         </label>
//                         <input
//                             type="text"
//                             name="photo"
//                             placeholder="photo url"
//                             className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                             required
//                         />
//                     </div>
//                     <div className="form-control relative">
//                         <label className="label">
//                             <span className="label-text">Password</span>
//                         </label>
//                         <input
//                             type={showPassWord ? 'text' : 'password'}
//                             name="password"
//                             placeholder="password"
//                             className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                             required
//                         />
//                         <button type="button" onClick={() => setShowPassword(!showPassWord)}
//                             className="absolute right-4 top-[52px]">
//                             {
//                                 showPassWord ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
//                             }
//                         </button>
//                         {
//                             error && <p className="text-red-500 text-sm">{error.register}</p>
//                         }
//                     </div>
//                     <div className="form-control mt-6">
//                         <button className="btn text-white font-medium bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-md transition-all duration-200 border-none">Register</button>
//                     </div>
//                 </form>

//                 <div className="flex justify-center items-center gap-2 my-2">
//                     <hr className="w-1/3 lg:w-[160px] border-t border-gray-400" />
//                     <p className="text-gray-600">or</p>
//                     <hr className="w-1/3 lg:w-[160px] border-t border-gray-400" />
//                 </div>


//                 <p className="text-center text-sm">
//                     Already Have An Account? <Link to="/auth/login" className="text-red-500 font-semibold">Login</Link>
//                 </p>
                
//                 <div className="text-center w-10/12 mx-auto mt-5">
//                     <button onClick={handleGoogleSignInClickReg}
//                         className="btn w-full text-white font-medium bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md transition-all duration-200 border-none"
//                     >
//                         <FcGoogle />
//                         Login with Google
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;




import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { createNewUser, setUser, updateUserProfiles, handleGoogleSignIn } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [showPassWord, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleGoogleSignInClickReg = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success("Successfully Registered with Google");
                navigate("/");
            })
            .catch(error => {
                console.error("Google Sign-In Error:", error);
                toast.error(error.message || "Google Sign-In failed.");
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");

        // Validate Password
        if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
            setError("Password must contain at least 6 characters, including one uppercase and one lowercase letter.");
            return;
        }

        // Validate Photo URL
        try {
            new URL(photo); // Throws if the URL is invalid
        } catch {
            toast.error("Invalid Photo URL. Please provide a valid URL.");
            return;
        }

        setError("");

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                return updateUserProfiles({
                    displayName: name,
                    photoURL: photo
                });
            })
            .then(() => {
                toast.success("Successfully Registered");
                navigate("/");
            })
            .catch((error) => {
                // console.error("Registration Error:", error);
                // toast.error(error.message || "Registration failed.");
                setError("Email already in use.");
            });
    };

    return (
        <div className="flex justify-center items-center my-12 px-5">
            <Helmet>
                <title>Register Now | Winter Clothing Donation</title>
            </Helmet>
            <div className="card bg-white w-full max-w-md shrink-0 py-8">
                <h2 className="text-2xl font-semibold text-center">Register Now!!!</h2>
                <form onSubmit={handleSubmit} className="card-body pb-3 md:px-11">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="photo url"
                            className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPassWord ? 'text' : 'password'}
                            name="password"
                            placeholder="password"
                            className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassWord)} className="absolute right-4 top-[52px]">
                            {showPassWord ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white font-medium bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-md transition-all duration-200 border-none">
                            Register
                        </button>
                    </div>
                </form>

                <div className="flex justify-center items-center gap-2 my-2">
                    <hr className="w-1/3 lg:w-[160px] border-t border-gray-400" />
                    <p className="text-gray-600">or</p>
                    <hr className="w-1/3 lg:w-[160px] border-t border-gray-400" />
                </div>

                <p className="text-center text-sm">
                    Already Have An Account? <Link to="/auth/login" className="text-red-500 font-semibold">Login</Link>
                </p>
                <div className="text-center w-10/12 mx-auto mt-5">
                    <button
                        onClick={handleGoogleSignInClickReg}
                        className="btn w-full text-white font-medium bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md transition-all duration-200 border-none"
                    >
                        <FcGoogle />
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
