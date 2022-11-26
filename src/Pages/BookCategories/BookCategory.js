import React from 'react';
import { Link } from "react-router-dom";

const BookCategory = ({ category }) => {
    const { name, img, _id } = category;

    return (
        <div>
            <div className='card 2-96 mx-auto bg-base-100 shadow-2xl rounded-xl border border-cyan-300'>
                <figure>
                    <img
                        className='rounded-xl'
                        src={img}
                        alt="" />
                </figure>
                <div className='card-body'>
                    <h1 className='card-title'>{name}</h1>
                    <p>Buy books to enrich your knowledge</p>
                </div>
            </div>
        </div>
    );
};

export default BookCategory;