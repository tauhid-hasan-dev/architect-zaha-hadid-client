import React from 'react';
import Banner from './Banner/Banner';
import Client from './Client';
import Projects from './Projects';
import ServiceHome from './ServiceHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceHome></ServiceHome>
            <Projects></Projects>
            <Client></Client>
        </div>
    );
};

export default Home;