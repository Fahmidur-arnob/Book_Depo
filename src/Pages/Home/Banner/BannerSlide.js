import React from 'react';
import './BannerSlide.css';

const BannerSlide = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img-container'>
                <div className='carousel-img'>
                    <img src={image} alt="" className="carou-img rounded-xl" />
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4">
                <h1 className='font-bold text-gray-50 lg:text-6xl mt-8'>
                    A room without <br />
                    <span className='font-bold text-violet-600'>BOOKS</span><br />
                    is like a <br />
                    <span className='font-bold text-violet-600'>BODY</span><br />
                    without a <br />
                    <span className='font-bold text-violet-600'>SOUL</span>
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerSlide;