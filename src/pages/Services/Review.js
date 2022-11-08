import React, { useEffect, useState } from 'react';

const Review = ({ serviceId }) => {
    const [serviceReviews, setServiceReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceId=${serviceId}`)
            .then(res => res.json())
            .then(data => setServiceReviews(data))
    })

    return (
        <div className='text-white'>
            {
                serviceReviews.map(review => <p>{review.reviewMessage}</p>)
            }
            <p>this is the review</p>
        </div>
    );
};

export default Review;