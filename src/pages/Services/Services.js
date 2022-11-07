import React from 'react';
import AllServices from './AllServices';
import IntroService from './IntroService';
import Review from './Review';

const Services = () => {
    return (
        <div>
            <IntroService></IntroService>
            <AllServices></AllServices>
            <Review></Review>
        </div>
    );
};

export default Services;