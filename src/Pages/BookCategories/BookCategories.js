import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BookCategory from './BookCategory';

const BookCategories = () => {
    
    const { data: bookcategories=[]} = useQuery({
        queryKey:['bookcategories'],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/bookcategories`)
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-5xl text-center mb-12 mt-16 font-semibold'>Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    bookcategories.map(category => <BookCategory
                        key={category._id}
                        category={category}
                    ></BookCategory>)
                }
            </div>
        </div>
    );
};

export default BookCategories;