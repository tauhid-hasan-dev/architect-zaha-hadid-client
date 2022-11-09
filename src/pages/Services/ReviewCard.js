import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, photoURL, reviewMessage, dateField } = review
    return (
        <div className='border border-slate-500 p-2'>
            <div className='flex gap-2 items-center mb-3 '>
                <div className='h-12 w-12 mb-3'>
                    <img src={photoURL} alt="" />
                </div>
                <div>
                    <div className='text-slate-400 font-extralight'>
                        <p>{name}</p>
                    </div>
                    <div className='text-slate-400 font-extralight'>
                        <p>{dateField}</p>
                    </div>

                </div>
            </div>

            <div className='bg-nav-color py-3 px-2 text-lg font-thin'>
                <p> "{reviewMessage}"  </p>
            </div>

        </div>

    );
};

export default ReviewCard;