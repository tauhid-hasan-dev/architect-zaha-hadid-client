import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Carousel = ({ slide }) => {
    const { id, image, prev, next, heading, type, year, location } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className='carousel-image'>
                <img src={image} className="w-full" alt='' />
            </div>
            <div className="absolute flex justify-start left-12 lg:left-28  transform -translate-y-1/2  right-5 top-1/4">
                <p className='text-lg lg:text-5xl font-bold text-start text-white'>
                    {heading}
                </p>
            </div>
            <div className="absolute hidden lg:block flex flex-col justify-start left-28 w-2/5 transform -translate-y-1/2  right-5 top-[40%] font-light">
                <p className='text-xl text-slate-300  text-start '>
                    {type}
                </p>
                <p className='text-xl text-slate-300  text-start '>
                    {year}
                </p>
                <p className='text-xl text-slate-300  text-start '>
                    {location}
                </p>
            </div>
            <div className="absolute  flex justify-start gap-5 left-28 w-2/5 transform -translate-y-1/2  right-5 top-[55%]">
                <Link to='/services'>
                    <button className="btn btn-primary hidden lg:block">My Services</button>
                </Link>
            </div>
            <div className=" absolute flex justify-center gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle btn-warning">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle btn-warning">❯</a>
            </div>
        </div>
    );
};

export default Carousel;