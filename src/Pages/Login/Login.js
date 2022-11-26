import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FaGooglePlusG } from "react-icons/fa";
import pic from "../../assets/images/bookOne.avif"

const Login = () => {
    const [errorMsg, setErrorMsg] = useState(null);
    const { googleProviderLogin, signIn } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleGoogleLogin = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(`Error is ${error}`));
    }

    const handleLoginSubmission = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password < 6) {
            setErrorMsg(`${password} is too short.`);
            return;
        }

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                form.reset();
            })
            .catch(error => console.log(`Error is ${error}`));
    }

    return (
        <section className="h-full gradient-form bg-gray-200 md:h-screen">
            <div className="container py-12 px-6 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="xl:w-10/12">
                        <div className="block bg-white shadow-lg rounded-lg">
                            <div className="lg:flex lg:flex-wrap g-0">
                                <div className="lg:w-6/12 px-4 md:px-0">
                                    <div className="md:p-12 md:mx-6">
                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-48 rounded-2xl pt-12"
                                                src={pic}
                                                alt="logo"
                                            />
                                            <h4 className="text-xl font-semibold mt-1 mb-12 pb-1"> <span className='font-semibold text-xl text-indigo-700'>Good friends,</span> <span className='font-semibold text-xl text-indigo-700'>good books,</span> and a <span className='font-semibold text-xl text-indigo-700'>sleepy conscience </span>: <span className='font-semibold text-2xl text-indigo-800'>this is the ideal life.</span></h4>
                                        </div>
                                        <form onSubmit={handleLoginSubmission}>
                                            <p className="mb-4">Please login to your account</p>
                                            <div className="mb-4">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                                    placeholder="Enter Your Email"
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                                    placeholder="Enter Your Password"
                                                />
                                            </div>
                                            <div className="text-center pt-1 mb-12 pb-1">
                                                <button
                                                    className="inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-400 hover:text-white hover:shadow-lg focus:shadow-lg  focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                    type="submit"
                                                    data-mdb-ripple="true"
                                                    data-mdb-ripple-color="light"
                                                >
                                                    Log in
                                                </button>
                                                <a className="text-gray-500" href="#!">Forgot password?</a>
                                            </div>
                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 mr-2">Don't have an account?</p>
                                                <Link to='/signup'>
                                                    <button
                                                        type="button"
                                                        className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light">
                                                        Sign Up
                                                    </button>
                                                </Link>
                                                <Link>
                                                    <button
                                                        onClick={handleGoogleLogin}
                                                        type="button"
                                                        className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light">
                                                        <FaGooglePlusG></FaGooglePlusG>
                                                    </button>
                                                </Link>
                                                <p>{errorMsg}</p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div
                                    className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                                >
                                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                                        <h4 className="text-xl font-semibold mb-6">Creating Poetry through Pictures is always the first priority here</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;