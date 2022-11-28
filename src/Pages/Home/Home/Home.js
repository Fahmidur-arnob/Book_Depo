import React from 'react';
import BookCategories from '../../BookCategories/BookCategories';
import Banner from '../Banner/Banner';
import HomeCard from '../HomeCard/HomeCard';
import HomeQuotes from '../HomeQuotes/HomeQuotes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCard></HomeCard>
            <BookCategories></BookCategories>
            <HomeQuotes></HomeQuotes>
        </div>
    );
};

export default Home;