import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    let location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        //console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const currentUser = {
                    email: user.email
                }

                fetch(`https://architect-tauhid-hasan-server.vercel.app/jwt`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('zaha-hadid-token', data.token);
                        navigate(from, { replace: true });
                    })


            })
            .catch(err => {
                console.error(err);
                toast.error(err)
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }

                fetch(`https://architect-tauhid-hasan-server.vercel.app/jwt`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('zaha-hadid-token', data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(err => {
                console.error(err);
                toast.error(err)
            })
    }

    return (
        <div className="hero bg-bg-login-color">
            <div className="hero-content flex-col  lg:flex-row">
                <div className='px-5 lg:px-20  py-10  flex flex-col items-center text-slate-300'>
                    <form onSubmit={handleSignIn} className="p-7 lg:p-10 border  border-slate-600 w-[350px]   lg:w-[450px] " >
                        <p className='text-center text-slate-300 text-2xl  font-semibold'>Login </p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-300">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered text-slate-900 font-semibold rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-300">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered rounded-none text-slate-900 font-semibold" required />
                        </div>
                        <div className='text-red-600 bg-red-100 mb-3 mt-2 '>
                            {/* {error} */}
                        </div>
                        <div className='flex justify-between mt-3'>
                            <div>

                                <label htmlFor="terms"> {<>
                                    Forgot Password?
                                </>}</label>
                            </div>
                            <div >
                                <label htmlFor="my-modal-3" className="cursor-pointer underline text-slate-300 ">Reset Password</label>
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <button className="border p-3 text-white hidden lg:block hover:bg-slate-600 ">Login</button>
                        </div>

                        <div className='text-center'>
                            <small className='mr-2'>New to My Website?</small>
                            <Link to='/register' className="label-text-alt link link-hover  text-white">Register Now</Link>
                        </div>
                    </form>
                    <div className='mb-3 mt-3'>
                        Or login with google
                    </div>
                    <div onClick={handleGoogleSignIn} className='flex flex-row justify-center gap-3 mb-5 w-[100%]'>
                        <button className="btn  rounded-full  flex gap-2 "> <FaGoogle className='text-3xl'></FaGoogle> google </button>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Login;