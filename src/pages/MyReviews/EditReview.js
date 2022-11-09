import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
    const storedReview = useLoaderData();
    const [review, setReview] = useState(storedReview);


    const handleEditReview = (event) => {
        event.preventDefault();
        console.log(review);
        fetch(`https://architect-tauhid-hasan-server.vercel.app/reviews/${review._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.modifiedCount) {
                    toast.success('Your review updated successfully')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    const handleInputChange = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        /* console.log(field, value); */
        const newReview = { ...review };
        /* console.log(newReview); */
        newReview[field] = value;
        setReview(newReview);

    }

    return (
        <div className='w-full flex justify-center bg-bg-login-color pb-20 pt-10 '>
            <div className='p-10 lg:w-1/2 w-[90%] '>
                <p className='text-xl  text-slate-300 font-bold text-center mb-5'>Edit your review for <span className='text-white font-bold text-xl'>{storedReview?.serviceName}</span> service</p>
                <form onSubmit={handleEditReview} className='p-10  bg-nav-color flex flex-col gap-5'>
                    <textarea onChange={handleInputChange} name='reviewMessage' className="bg-slate-500 text-white  focus:bg-slate-700 textarea rounded-none w-full" placeholder="Write your review here" defaultValue={storedReview?.reviewMessage} required></textarea>
                    <input className='border border-slate-500 w-full py-3 px-10 text-white hidden lg:block hover:bg-slate-800 cursor-pointer' type="submit" value="Update Review" />
                </form>
            </div>
        </div>
    );
};

export default EditReview;