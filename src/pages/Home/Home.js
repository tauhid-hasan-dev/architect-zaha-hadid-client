import React from 'react';
import About from './About';
import Banner from './Banner/Banner';
import Client from './Client';
import Projects from './Projects';
import ServiceHome from './ServiceHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <ServiceHome></ServiceHome>
            <Projects></Projects>
            <Client></Client>
        </div>
    );
};

export default Home;