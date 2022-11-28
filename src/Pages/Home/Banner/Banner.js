import React from 'react';
import imgOne from "../../../assets/images/JpgOne.jpg";
import imgTwo from "../../../assets/images/JpgTwo.jpg";
import imgThree from "../../../assets/images/JpgThree.jpg";
import imgFour from "../../../assets/images/JpgFour.jpg";
import BannerSlide from './BannerSlide';

const bannerData = [
    {
        image: imgOne,
        prev: 4,
        id: 1,
        next: 2
    },
    {
        image: imgTwo,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: imgThree,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: imgFour,
        prev: 3,
        id: 4,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className='w-full mx-auto mt-5'>
            <div className='carousel py-2 mx-auto'>
                {
                    bannerData.map(slide => <BannerSlide
                        key={slide.id}
                        slide={slide}
                    ></BannerSlide>)
                }
            </div>
        </div>
    );
};

export default Banner;