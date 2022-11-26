import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllBook from './AllBook';

const BookCollections = () => {
    const loaderData = useLoaderData();
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7'>
                {
                    loaderData.map(book => <AllBook
                        key={book._id}
                        books = {book}
                    ></AllBook>)
                }
            </div>
        </section>
    );
};

export default BookCollections;