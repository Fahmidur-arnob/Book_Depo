import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllBook from './AllBook';
import BookingModal from './BookingModal/BookingModal';

const BookCollections = () => {
    const loaderData = useLoaderData();
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-8 m-4'>
                {
                    loaderData.map(book => <AllBook
                        key={book._id}
                        book={book}
                    ></AllBook>)
                }
            </div>
            <BookingModal></BookingModal>
        </section>
    );
};

export default BookCollections;