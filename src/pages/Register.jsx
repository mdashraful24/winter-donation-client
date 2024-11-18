// import { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";

// const Register = () => {

//     const { createUser, updateUserProfile } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleRegister = (e) => {
//         e.preventDefault();
//         const name = e.target.name.value;
//         const email = e.target.email.value;
//         const photo = e.target.photo.value;
//         const password = e.target.password.value;

//         // const form = new FormData(e.target);
//         // const name = form.get("name");
//         // const email = form.get("email");
//         // const photo = form.get("photo");
//         // const password = form.get("password");
//         console.log({name, email, photo, password});

//         createUser(email, password)
//             .then(result => {
//                 updateUserProfile({
//                     displayName: name,
//                     photoURL: photo,
//                 })
//                     .then(() => {
//                         navigate("/");
//                     })
//                     .catch(error => {
//                         console.log(error);
//                     })
//             })
//             .catch(error => {
//                 console.log('ERROR', error.message);
//             })
//     }

//     return (
//         <div className="flex justify-center items-center py-10">
//             <div className="card bg-gray-100 w-full max-w-lg shrink-0 rounded-none p-10">
//                 <h2 className='text-2xl font-semibold text-center'>Register Now!!!</h2>
//                 <form onSubmit={handleRegister} className="card-body">
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Name</span>
//                         </label>
//                         <input
//                             type="name"
//                             name="name"
//                             placeholder="name"
//                             className="input input-bordered" required />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Email</span>
//                         </label>
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="email"
//                             className="input input-bordered" required />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Photo URL</span>
//                         </label>
//                         <input
//                             type="text"
//                             name="photo"
//                             placeholder="photo url"
//                             className="input input-bordered" required />
//                     </div>
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Password</span>
//                         </label>
//                         <input
//                             type="password"
//                             name="password"
//                             placeholder="password"
//                             className="input input-bordered" required />
//                         <label className="label">
//                             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                         </label>
//                     </div>
//                     <div className="form-control mt-6">
//                         <button className="btn btn-neutral rounded-none">Register</button>
//                     </div>
//                 </form>
//                 <p className='text-center font-semibold'>
//                     Already Have An Account? <Link to='/login' className='text-red-500'>Login</Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Register;


import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        // Password validation criteria
        const PassUpperCase = /[A-Z]/.test(password);
        const PassLowerCase = /[a-z]/.test(password);
        const isValidPassLength = password.length >= 6;

        if (!PassUpperCase) {
            setError("Password must contain at least one uppercase letter.");
            return;
        }

        if (!PassLowerCase) {
            setError("Password must contain at least one lowercase letter.");
            return;
        }

        if (!isValidPassLength) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        setError(""); // Clear error if validation passes

        createUser(email, password)
            .then((result) => {
                updateUserProfile({
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        navigate("/");
                    })
                    .catch((error) => {
                        setError(error.message);
                    });
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div className="flex justify-center items-center py-10">
            <div className="card bg-gray-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Register Now!!!</h2>
                <form onSubmit={handleRegister} className="card-body">
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
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold">
                    Already Have An Account? <Link to="/login" className="text-red-500">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
