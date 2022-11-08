import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { title, img, price, description, _id } = service;
    console.log(service);
    return (
        <div className="items-stretch cursor-pointer card rounded-none card-compact bg-bg-login-color  border-green-500  shadow-green-500 px-5 pt-5 lg:px-28 lg:pt-20">
            <figure><img src={img} alt="Shoes" /></figure>

            <div className="card-body items-center text-center ">
                <h2 className="card-title text-white text-2xl lg:text-5xl">{title}</h2>
                <p className='text-slate-500 p-3'>Price starts from: <br /> <span className='text-slate-300 text-xl font-bold'>${price}K</span></p>
                <p className='text-slate-300  lg:text-lg'>{description}</p>
            </div>

            <button className="py-5 px-5 flex flex-col justify-center items-center gap-5 ">
                <p className='text-xl text-white'> Please login to add a review</p>
                <Link to='/login'>
                    <button className="r border border-slate-500 w-[300px] py-2 px-10 text-white hidden lg:block hover:bg-slate-600">login</button>
                </Link>

            </button>
        </div >
    );
};

export default ServiceDetails;