import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import pic from "../../assets/images/bookTwo.avif";
import toast from "react-hot-toast";

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState(null);

    const navigate = useNavigate();

    const handleRegisterSubmission = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password < 6) {
            setErrorMsg(`${password} is too short.`);
            return;
        }
        else if (password !== confirm) {
            setErrorMsg(`Didnot Match.`);
            return;
        }

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success(`User Created Successfully`);
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                .then(()=>{
                    navigate('/');
                })
                .catch(error => console.log(`Error is: ${error}`));
                form.reset();
            })
            .catch(err => console.error(`Error is ${err}`));
    }



    return (
        <section className="h-full gradient-form bg-gray-200 md:h-screen">
            <div className="container py-12 px-6 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="xl:w-10/12">
                        <div className="block bg-white shadow-lg rounded-lg">
                            <div className="lg:flex lg:flex-wrap flex-row-reverse g-0">

                                <div className="lg:w-6/12 px-4 md:px-0">
                                    <div className="md:p-12 md:mx-6">
                                        <form onSubmit={handleRegisterSubmission}>
                                            <p className="mb-4">Please Sign In</p>
                                            <div className="mb-4">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                                    placeholder="Enter Your Name"
                                                />
                                            </div>
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
                                            <div className="mb-4">
                                                <input
                                                    type="password"
                                                    name="confirm"
                                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                                    placeholder="Confirm Your Password"
                                                />
                                            </div>
                                            <div className="text-center pt-1 mb-12 pb-1">
                                                <button
                                                    className="inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-400 hover:text-white hover:shadow-lg focus:shadow-lg  focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                    type="submit"
                                                    data-mdb-ripple="true"
                                                    data-mdb-ripple-color="light"
                                                >
                                                    Sign Up
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-between pb-6">
                                                <p className="mb-0 mr-2">Already have an account?</p>
                                                <Link to='/login'>
                                                    <button
                                                        type="button"
                                                        className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light">
                                                        Login
                                                    </button>
                                                </Link>
                                                <p>{errorMsg}</p>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="lg:w-6/12 items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                                    <div className="text-indigo-800 px-4 py-6 md:p-12 md:mx-6">
                                        <div className="text-center">
                                            <img
                                                className="mx-auto w-full rounded-xl"
                                                src={pic}
                                                alt="logo"
                                            />
                                        </div>
                                        <h4 className="text-xl font-semibold mt-6">
                                            “That’s the thing about books. They let you travel without moving your feet.”
                                            ―Jhumpa Lahiri, <br /> <span className='text-rose-800'>The Namesake</span>
                                        </h4>
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

export default SignUp;