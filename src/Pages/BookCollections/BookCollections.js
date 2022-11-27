import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllBook from './AllBook';
import BookingModal from './BookingModal/BookingModal';

const BookCollections = () => {
    const loaderData = useLoaderData();
    const [bookName, setBookName] = useState('');
    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-8 m-4'>
                {
                    loaderData.map(book => <AllBook
                        key={book._id}
                        book={book}
                        setBookName={setBookName}
                    ></AllBook>)
                }
            </div>
            {
                bookName && 
                <BookingModal
                    bookName={bookName}
                    setBookName={setBookName}
                ></BookingModal>
                
            }
        </section>
    );
};

export default BookCollections;