import React from 'react';
import AllServices from './AllServices';
import IntroService from './IntroService';
import Review from './Review';

const Services = () => {
    return (
        <div>
            <p>this is services page</p>
            <IntroService></IntroService>
            <AllServices></AllServices>
            <Review></Review>
        </div>
    );
};

export default Services;