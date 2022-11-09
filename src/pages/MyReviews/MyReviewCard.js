import React from 'react';
import toast from 'react-hot-toast';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const MyReviewCard = ({ myreview }) => {
    const { reviewMessage, serviceName, serviceImage, _id } = myreview;

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    toast.success('Your Review deleted')
                }
            })
    }

    return (
        <div className='border border-slate-500 p-2 '>
            <div className='flex justify-between   '>
                <div className='flex flex-col lg:flex-row gap-2  mb-3'>
                    <div className='w-[100px] '>
                        <img src={serviceImage} alt="" />
                    </div>
                    <div className='text-slate-300 font-semibold '>
                        <p>{serviceName}</p>
                    </div>
                </div>
                <div className='text-white text-2xl flex gap-3 '>
                    <div className='hover:text-green-300 cursor-pointer'>
                        <FaEdit ></FaEdit>
                    </div>
                    <div className='hover:text-red-300 cursor-pointer'>
                        <FaTrashAlt onClick={() => handleDelete(_id)}></FaTrashAlt>
                    </div>


                </div>
            </div>

            <div className='bg-nav-color py-3 px-2 text-lg font-thin text-white'>
                <p> "{reviewMessage}"  </p>
            </div>

        </div>
    );
};

export default MyReviewCard;