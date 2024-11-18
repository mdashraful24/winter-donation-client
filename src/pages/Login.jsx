import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                // setUser(result.user);
                toast.success('Login successful!');
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
                toast.error('Login failed. Please check your credentials.');
            });
    };

    return (
        <div className='lg:h-[580px]'>
            <div className="flex justify-center items-center mt-16">
                <div className="card bg-gray-100 w-full max-w-lg shrink-0 rounded-none p-10">
                    <h2 className='text-2xl font-semibold text-center'>Login your account</h2>
                    <form onSubmit={handleLogin} className="card-body">
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral rounded-none">Login</button>
                        </div>
                    </form>
                    <p className='text-center font-semibold'>
                        Don't Have An Account? <Link to='/register' className='text-red-500'>Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
