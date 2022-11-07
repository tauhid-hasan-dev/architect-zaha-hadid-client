import React from 'react';
import Client from './Client';
import Intro from './Intro';
import Projects from './Projects';
import ServiceHome from './ServiceHome';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <ServiceHome></ServiceHome>
            <Projects></Projects>
            <Client></Client>
        </div>
    );
};

export default Home;