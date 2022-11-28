import React from 'react';
import { Link } from 'react-router-dom';
import imgOne from "../../../assets/images/gridOne.jpg";
import imgTwo from "../../../assets/images/gridTwo.jpg";
import imgThree from "../../../assets/images/gridThree.jpg";
import imgFour from "../../../assets/images/gridFour.jpg";
import imgFive from "../../../assets/images/gridFive.jpg";
import imgSix from "../../../assets/images/gridSix.jpg";


const HomeCard = () => {
    return (
        <>
            <h1 className='text-3xl mt-24 mb-16 font-bold text-center'>Books are a uniquely portable magic</h1>

            <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:w-full w-96 mx-auto gap-5 mb-24 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                    <Link >
                        <img className="rounded-lg w-[95%] mx-auto" src={imgOne} alt="" />
                    </Link>
                    <Link >
                        <img className="rounded-lg w-[95%] mx-auto" src={imgTwo} alt="" />
                    </Link>
                    <Link >
                        <img className="rounded-lg w-[95%] mx-auto" src={imgThree} alt="" />
                    </Link>
                    <Link >
                        <img className="rounded-lg w-[95%] mx-auto" src={imgFour} alt="" />
                    </Link>
                    <Link >
                        <img className="rounded-lg w-[95%] mx-auto" src={imgFive} alt="" />
                    </Link>
                    <Link >
                        <img className="rounded-lg w-[95%] mx-auto" src={imgSix} alt="" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default HomeCard;