import React from 'react';
import img1 from '../../../images/banner/1.jpg'
import img2 from '../../../images/banner/2.jpg'
import img3 from '../../../images/banner/3.jpg'

import Carousel from './Carousel';

const bannerData = [
    {
        image: 'https://i.ibb.co/hyrRS3J/img-1.jpg',
        heading: 'Heydar Aliyev Centre, Azerbaijan',
        type: 'Cultural Centre',
        year: 2012,
        location: 'Baku, Azerbaijan',
        prev: 6,
        id: 1,
        next: 2,
    },
    {
        image: 'https://i.ibb.co/G02rPKQ/img-2.jpg',
        heading: 'London Aquatics Centre',
        year: 2011,
        type: 'Swimming Pool',
        location: 'London, United Kingdom',
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: 'https://i.ibb.co/8PHZsPq/img-3.jpg',
        heading: 'King Abdullah Metro Station',
        year: 2020,
        type: 'Transport & Infrastructure',
        location: 'Reyadh, Kingdom of Saudi Arabia',
        prev: 2,
        id: 3,
        next: 1
    },

]

const Banner = () => {
    return (
        <div className="carousel w-full ">
            {
                bannerData.map(slide => <Carousel key={slide.id} slide={slide}></Carousel>)
            }
        </div>
    );
};

export default Banner;