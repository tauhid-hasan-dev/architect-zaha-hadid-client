import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Review = ({ serviceId }) => {
    console.log(serviceId)
    const [serviceReviews, setServiceReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviewsbyid?serviceId=${serviceId}`)
            .then(res => res.json())
            .then(data => setServiceReviews(data))
    })

    return (
        <div className=' '>
            <div className='flex justify-center mb-8'>
                <p className='text-slate-300 text-3xl'>Customer Reviews</p>
            </div>
            <div className='text-white flex flex-col gap-10'>
                {
                    serviceReviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;