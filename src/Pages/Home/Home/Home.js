import React from 'react';
import Banner from '../Banner/Banner';
import HomeCard from '../HomeCard/HomeCard';
import HomeQuotes from '../HomeQuotes/HomeQuotes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCard></HomeCard>
            <HomeQuotes></HomeQuotes>
        </div>
    );
};

export default Home;