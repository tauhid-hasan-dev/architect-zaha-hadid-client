import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
    const review = useLoaderData();
    console.log(review);

    const handleEditReview = (event) => {
        event.preventDefault();
    }
    return (
        <div className='w-full flex justify-center '>
            <div className='p-10 lg:w-1/2 w-[90%] '>
                <p className='text-xl  text-slate-300 font-bold text-center mb-5'>Please add your review for <span className='text-white font-bold text-xl'>{/* {title} */}</span> service</p>
                <form onSubmit={handleEditReview} className='p-10  bg-nav-color flex flex-col gap-5'>
                    <textarea name='review' className="bg-slate-500 text-white  focus:bg-slate-700 textarea rounded-none w-full" placeholder="Write your review here" required></textarea>
                    <button type='submit' className=" border border-slate-500 w-full py-3 px-10 text-white hidden lg:block hover:bg-slate-800">Update Review</button>
                </form>
            </div>
        </div>
    );
};

export default EditReview;