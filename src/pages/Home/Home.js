import React from 'react';
import useTitle from '../../hooks/useTitle';
import About from './About';
import Banner from './Banner/Banner';
import ChooseMe from './ChooseMe';


import ServiceHome from './ServiceHome';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <ServiceHome></ServiceHome>
            <About></About>
            <ChooseMe></ChooseMe>
        </div>
    );
};

export default Home;