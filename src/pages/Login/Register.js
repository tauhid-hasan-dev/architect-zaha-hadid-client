import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();
    useTitle('Register')
    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name);

        console.log(email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('Registration successful!');
                updateUserInfo(name, photoURL);
                navigate('/')
                console.log(user);
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


    const updateUserInfo = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUser(profile)
            .then(() => { })
            .catch(e => console.log(e))
    }
    return (
        <div className="hero bg-bg-login-color">
            <div className="hero-content flex-col  lg:flex-row">
                {/* <div className="text-center lg:text-left w-1/2">
                    <img src={image} alt="" />
                </div> */}
                <div className='px-5 lg:px-20  py-10  flex flex-col items-center text-slate-300 '>
                    <form onSubmit={handleSignUp} className="p-7 lg:p-10  rounded-none border-slate-600 w-[350px]   lg:w-[450px] border " >
                        <p className='text-center text-2xl  font-semibold'>Register</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-300">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered text-slate-900 font-semibold rounded-none" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-300">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Valid Email" className="input input-bordered text-slate-900 font-semibold rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-300">Your Photo URL</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Your Photo Url" className="input input-bordered text-slate-900 font-semibold rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-300">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered text-slate-900 font-semibold " required />

                        </div>
                        <div className='text-red-600 bg-red-100 mb-3 mt-2 '>
                            {/* {error} */}
                        </div>
                        <div >
                            <input type="checkbox" id="terms" name="terms" value="terms" />
                            <label htmlFor="terms"> {<>
                                Accept <Link to='/terms' className="underline text-slate-300">Terms and Conditions</Link>
                            </>}</label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="border p-3 text-white hidden lg:block hover:bg-slate-600  ">Register</button>
                        </div>
                        <div className="text-center">
                            <small className="mr-2">Already have an account?</small>
                            <Link
                                to="/login"
                                className="label-text-alt link link-hover text-white"
                            >
                                Please Login
                            </Link>
                        </div>
                    </form>
                    <div className='mb-3 mt-3'>
                        Or login with with google
                    </div>
                    <div className='flex flex-row justify-center gap-3 mb-5 w-[100%]'>
                        <button onClick={handleGoogleSignIn} className="btn rounded-full  flex gap-2 "> <FaGoogle className='text-3xl'></FaGoogle> google </button>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Register;