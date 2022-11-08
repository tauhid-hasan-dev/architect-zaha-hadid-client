import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { title, img, price, description, _id } = service;
    return (
        <div className="items-stretch cursor-pointer card rounded-none card-compact bg-bg-login-color  border-green-500  shadow-green-500">
            <figure><img src={img} alt="Shoes" /></figure>

            <div className="card-body items-center text-center ">
                <h2 className="card-title text-white text-2xl">{title}</h2>
                <p className='text-slate-500 p-3'>Price starts from: <br /> <span className='text-slate-300 text-xl font-bold'>${price}K</span></p>
                <p className='text-slate-300'>{description.slice(0, 100) + '...'}</p>
            </div>

            <button className="py-5 px-5">
                <Link to={`/servicedetails/${_id}`}>
                    <button className=" border border-slate-500 w-full py-1 px-10 text-white hidden lg:block hover:bg-slate-600">View Details</button>
                </Link>

            </button>
        </div>
    );
};

export default ServiceCard;