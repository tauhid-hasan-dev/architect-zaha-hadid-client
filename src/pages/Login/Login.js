import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  let location = useLocation();
  const navigate = useNavigate();
  useTitle("Login");

  let from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        setLoading(true);
        const user = result.user;

        const currentUser = {
          email: user.email,
        };

        fetch(`https://architect-tauhid-hasan-server.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            setLoading(false);
            localStorage.setItem("zaha-hadid-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Firebase error");
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center p-10 lg:p-56">
        <svg
          className="animate-spin"
          fill="none"
          height="100"
          viewBox="0 0 20 20"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z"
            fill="#212121"
          />
        </svg>
      </div>
    );
  }

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };

        fetch(`https://architect-tauhid-hasan-server.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("zaha-hadid-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        toast.error("Error occurred");
      });
  };

  return (
    <div className="hero bg-bg-login-color">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="px-5 lg:px-20 py-10 flex flex-col items-center text-slate-300">
          <div>
            <form
              onSubmit={handleSignIn}
              className="p-7 lg:p-10 border border-slate-600 w-[350px] lg:w-[450px]"
            >
              <p className="text-center text-slate-300 text-2xl font-semibold">
                Login
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-slate-300">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered text-slate-200 font-semibold rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-slate-300">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered rounded-none text-slate-900 font-semibold"
                  required
                />
              </div>

              <div className="flex justify-between mt-3">
                <div>
                  <label htmlFor="terms">Forgot Password?</label>
                </div>
                <div>
                  <label
                    htmlFor="my-modal-3"
                    className="cursor-pointer underline text-slate-300"
                  >
                    Reset Password
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="border p-3 text-white hover:bg-slate-600">
                  Login
                </button>
              </div>

              <div className="text-center">
                <small className="mr-2">New to My Website?</small>
                <Link
                  to="/register"
                  className="label-text-alt link link-hover text-white"
                >
                  Register Now
                </Link>
              </div>
            </form>

            <div className="mb-3 mt-3">Or login with google</div>
            <div
              onClick={handleGoogleSignIn}
              className="flex flex-row justify-center gap-3 mb-5 w-[100%]"
            >
              <button className="btn rounded-full flex gap-2">
                <FaGoogle className="text-3xl"></FaGoogle> google
              </button>
            </div>
          </div>
        </div>
        {/* Credentials Section */}
        <div className="mt-6  p-4 bg-slate-700 text-slate-300 rounded">
          <h2 className="text-center font-bold mb-4">Test Credential</h2>
          <p className="mb-2">Email: admin@zaha.com</p>
          <p className="mb-4">Password: 123456</p>
        </div>
        {/* End of Credentials Section */}
      </div>
    </div>
  );
};

export default Login;
