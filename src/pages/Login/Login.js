import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero bg-bg-login-color">
            <div className="hero-content flex-col  lg:flex-row">
                {/* <div className="text-center lg:text-left w-1/2">
                    <img src={image} alt="" />
                </div> */}
                <div className='px-5 lg:px-20  py-10  flex flex-col items-center text-slate-300'>
                    <form /* onSubmit={handleSignIn} */ className="p-7 lg:p-10 border  border-slate-600 w-[350px]   lg:w-[450px] " >
                        <p className='text-center text-slate-300 text-2xl  font-semibold'>Login </p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-900">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered text-slate-100 font-semibold " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-slate-900">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered text-slate-100 font-semibold" required />
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
                                <label htmlFor="my-modal-3" className="cursor-pointer underline text-slate-100 ">Reset Password</label>
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn   ">Login</button>
                        </div>

                        <div className='text-center'>
                            <small className='mr-2'>New to My Website?</small>
                            <Link to='/register' className="label-text-alt link link-hover  text-white">Register Now</Link>
                        </div>
                    </form>
                    <div className='mb-3 mt-3'>
                        Or login with google
                    </div>
                    <div className='flex flex-row justify-center gap-3 mb-5 w-[100%]'>
                        <button className="btn  rounded-full  flex gap-2 "> <FaGoogle className='text-3xl'></FaGoogle> google </button>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Login;