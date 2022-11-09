import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { title, img, price, description, _id } = service;
    return (
        <div className="items-stretch cursor-pointer card rounded-none card-compact bg-bg-login-color  border-green-500  shadow-green-500">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="thumbnail" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body items-center text-center ">
                <h2 className="card-title text-white text-2xl">{title}</h2>
                <p className='text-slate-500 p-3'>Service fee starts from: <br /> <span className='text-slate-300 text-xl font-bold'>${price}K</span></p>
                <p className='text-slate-300'>{description.slice(0, 100) + '...'}</p>
            </div>

            <div className="py-5 px-5">
                <Link to={`/servicedetails/${_id}`}>
                    <button className=" border border-slate-500 w-full py-1 px-10 text-white hidden lg:block hover:bg-slate-600">View Details</button>
                </Link>

            </div>
        </div>
    );
};

export default ServiceCard;