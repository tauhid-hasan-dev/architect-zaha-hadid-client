import React, { useEffect, useState } from 'react';


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
    const [sliders, setSliders] = useState([]);

    console.log(sliders);

    useEffect(() => {
        fetch('https://architect-tauhid-hasan-server.vercel.app/sliders', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setSliders(data)
            })
    }, [])


    return (
        <div className="carousel w-full ">
            {
                sliders.map(slide => <Carousel key={slide.id} slide={slide}></Carousel>)
            }
        </div>
    );
};

export default Banner;