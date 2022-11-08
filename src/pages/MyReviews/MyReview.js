import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
    const [myreviews, setMyReviews] = useState([]);
    const { user } = useContext(AuthContext)
    console.log(myreviews)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    })
    return (
        <div className='px-5 lg:px-28 bg-bg-login-color flex flex-col gap-10 p-10'>
            {
                myreviews.map(myreview => <MyReviewCard key={myreview._id} myreview={myreview}></MyReviewCard>)
            }
        </div>
    );
};

export default MyReview;