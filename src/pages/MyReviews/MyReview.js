import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
    const [myreviews, setMyReviews] = useState([]);
    const { user, logout } = useContext(AuthContext)
    useTitle('My Review')
    /* console.log(myreviews) */

    useEffect(() => {
        fetch(`https://architect-tauhid-hasan-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('zaha-hadid-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logout()
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setMyReviews(data)
            })
    })
    return (
        <div className='bg-bg-login-color'>
            {
                myreviews.length > 0 ?
                    <div className='px-5 lg:px-28 bg-bg-login-color flex flex-col gap-10 pt-20 pb-64'>
                        {
                            myreviews.map(myreview => <MyReviewCard key={myreview._id} myreview={myreview}></MyReviewCard>)
                        }
                    </div>

                    : <div className='flex justify-center p-10  lg:p-56'>
                        <p className='text-white text-5xl'>No reviews were added </p>
                    </div>
            }
        </div>
    );
};

export default MyReview;