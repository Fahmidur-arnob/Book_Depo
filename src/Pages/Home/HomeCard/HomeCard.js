import React from 'react';
import { Link } from 'react-router-dom';
import imgOne from "../../../assets/images/gridOne.avif";
import imgTwo from "../../../assets/images/gridTwo.avif";
import imgThree from "../../../assets/images/gridThree.avif";
import imgFour from "../../../assets/images/gridFour.avif";
import imgFive from "../../../assets/images/gridFive.avif";
import imgSix from "../../../assets/images/gridSix.avif";
import './HomeCard.css';

const HomeCard = () => {
    return (
        <>
            <h1 className='text-5xl mt-24 mb-16 font-bold text-center'>Books are a uniquely portable magic</h1>

            <div className='mainPicGrid'>
                <div className="max-w-6xl mb-24 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 picGrid">
                    <Link >
                        <img className="rounded-lg" src={imgOne} alt="" />
                    </Link>
                    <Link >
                        <img className="rounded-lg" src={imgTwo} alt="" />
                    </Link>
                    <Link >
                        <img className="rounded-lg" src={imgThree} alt="" />
                    </Link>
                    <Link >
                        <img className="rounded-lg" src={imgFour} alt="" />
                    </Link>
                    <Link >
                        <img className="rounded-lg" src={imgFive} alt="" />
                    </Link>
                    <Link >
                        <img className="rounded-lg" src={imgSix} alt="" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default HomeCard;