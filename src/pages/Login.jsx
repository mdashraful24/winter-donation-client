import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { userLogin, setUser, handleGoogleSignIn } = useContext(AuthContext);
    const [error, setError] = useState({});
    const [showPassWord, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location)

    const handleGoogleSignInClick = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);  // Store the authenticated user
                toast.success("Successfully! Login with Google");
                navigate(location?.state ? location.state : "/");  // Redirect to the previous or home page
            })
            .catch(error => {
                // console.log("ERROR", error);
                setError({ ...error, google: error.message });
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password });

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success("Login Successfully!");
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                setError({ ...error, login: err.code });
            })
    }

    return (
        <div className='lg:h-[580px]'>
            <div className="flex justify-center items-center mt-16">
                <div className="card bg-gray-100 w-full max-w-lg shrink-0 rounded-none p-10">
                    <h2 className='text-2xl font-semibold text-center'>Login your account</h2>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassWord ? 'text' : 'password'}
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassWord)}
                                className="absolute right-4 top-[52px]">
                                {
                                    showPassWord ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                            {
                                error.login && (
                                    <label className="label text-sm text-red-600">
                                        {error.login}
                                    </label>
                                )
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/* {error && <p className="text-red-500 text-center">{error}</p>} */}
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral rounded-none">Login</button>
                        </div>
                    </form>
                    <p className='text-center font-semibold'>
                        Don't Have An Account? <Link to='/auth/register' className='text-red-500'>Register</Link>
                    </p>
                    {/* Google Login Button */}
                    <div className="text-center lg:w-10/12 mx-auto mt-4">
                        <button onClick={handleGoogleSignInClick}
                            className="btn btn-neutral rounded-none w-full"
                        >
                            <FcGoogle />
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

