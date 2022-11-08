import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Review from './Review';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { title, img, price, description, _id } = service;
    const { user } = useContext(AuthContext);

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewMessage = form.review.value;
        //console.log(name, email, photoURL, reviewMessage)

        const review = {
            serviceId: _id,
            serviceName: title,
            serviceImage: img,
            name: user?.displayName,
            email: user?.email,
            photoURL: user?.photoURL,
            reviewMessage,
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Your review added');
                    form.reset()
                }
            })
            .catch(err => console.error(err))
    }

    console.log(service);
    return (
        <div className="items-stretch cursor-pointer card rounded-none card-compact bg-bg-login-color  border-green-500  shadow-green-500 pb-16 px-5 pt-5 lg:px-28 lg:pt-20">
            <figure><img src={img} alt="Shoes" /></figure>

            <div className="card-body items-center text-center ">
                <h2 className="card-title text-white text-2xl lg:text-5xl">{title}</h2>
                <p className='text-slate-500 p-3'>Service fee starts from: <br /> <span className='text-slate-300 text-xl font-bold'>${price}K</span></p>
                <p className='text-slate-300  lg:text-lg pb-10'>{description}</p>
            </div>

            <div className='border-b border-slate-600'>
            </div>

            <Review serviceId={_id}></Review>

            {
                user?.email ?
                    <div className='w-full flex justify-center '>
                        <div className='pb-10 lg:w-1/2 w-[90%]'>
                            <p className='text-xl  text-slate-300 font-bold text-center mb-5'>Please add your review for <span className='text-white font-bold text-xl'>{title}</span> service</p>
                            <form onSubmit={handleReview} className='p-10  bg-nav-color flex flex-col gap-5'>

                                <textarea name='review' className="bg-slate-500 text-white  focus:bg-slate-700 textarea rounded-none w-full" placeholder="Write your review here" required></textarea>
                                <button type='submit' className=" border border-slate-500 w-full py-3 px-10 text-white hidden lg:block hover:bg-slate-800">Add Review</button>
                            </form>
                        </div>
                    </div>
                    :
                    <div className="py-5 px-5 flex flex-col justify-center items-center gap-5 ">
                        <p className='text-xl text-white'> Please login to add a review</p>
                        <Link to='/login'>
                            <button className="r border border-slate-500 w-[300px] py-3 px-10 text-white hidden lg:block hover:bg-slate-600">login</button>
                        </Link>
                    </div>
            }

        </div >
    );
};

export default ServiceDetails;