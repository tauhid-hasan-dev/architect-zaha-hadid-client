import React, { useEffect, useState } from 'react';


import Carousel from './Carousel';


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