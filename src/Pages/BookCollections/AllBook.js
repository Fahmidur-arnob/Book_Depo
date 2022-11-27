import React from 'react';
import { Link } from "react-router-dom";

const AllBook = ({ book }) => {
    const { name, img, location, resalePrice, authorName, originalPrice, yearsOfUse, postingTime, sellersName } = book;
    return (
        <div>
            <div className='card card-compact w-96 shadow-2xl rounded-xl border border-cyan-300'>
                <figure>
                    <img
                        className='rounded-xl'
                        src={img}
                        alt=""
                    />
                </figure>
                <div className='card-body'>
                    <h2 className='card-title text-4xl'>{name}</h2>
                    <h2 className='text-2xl'>Author: {authorName}</h2>
                    <p>Location: {location}</p>
                    <p>Original Price: {originalPrice}</p>
                    <p>Resale Price: {resalePrice}</p>
                    <p>Used: {yearsOfUse}</p>
                    <p>Posted On: {postingTime}</p>
                    <p>Sellers Name: {sellersName}</p>
                </div>
                <div>
                    <Link to={`/bookcollections/${name}`}>
                        <button className='btn bg-indigo-700 rounded-xl'>View All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllBook;