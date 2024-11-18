import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const { createNewUser, setUser, updateUserProfiles } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
        console.log({ name, email, photo, password });

        // Password validation criteria
        if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
            setError(
                "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
            );
            return;
        }

        setError("");

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateUserProfiles({
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        navigate("/");
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(error => {
                console.log('ERROR', error.message);
            })
    }

    return (
        <div className="flex justify-center items-center py-10">
            <div className="card bg-gray-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Register Now!!!</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            className="input input-bordered"
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
                            className="input input-bordered"
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
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold">
                    Already Have An Account? <Link to="/auth/login" className="text-red-500">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
