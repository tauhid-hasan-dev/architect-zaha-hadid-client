import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const servicePrice = form.servicePrice.value;
        const serviceDetails = form.serviceDetails.value;
        const serviceImage = form.serviceImage.value;
        let today = new Date().toLocaleString();

        const newService = {
            dateField: today,
            title: serviceName,
            img: serviceImage,
            price: servicePrice,
            description: serviceDetails
        }

        fetch('https://architect-tauhid-hasan-server.vercel.app/allservices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('You added a service successfully!');
                    form.reset()
                }
            })
            .catch(err => console.error(err))


    }

    return (
        <div className='w-full flex justify-center bg-bg-login-color py-16'>
            <div className='pb-10 lg:w-1/2 w-[90%]'>
                <p className='text-xl  text-slate-300 font-bold text-center mb-5'>Add a new Service</p>
                <form onSubmit={handleAddService} className='p-10  bg-nav-color flex flex-col gap-5'>
                    <input name='serviceName' type='text' className="bg-slate-500 text-white  focus:bg-slate-700 input rounded-none w-full" placeholder="Service Name" required></input>
                    <input name='servicePrice' type='text' className="bg-slate-500 text-white  focus:bg-slate-700 input rounded-none w-full" placeholder="Service Price" required></input>
                    <input name='serviceImage' type='text' className="bg-slate-500 text-white  focus:bg-slate-700 input rounded-none w-full" placeholder="Image Url for service" required></input>
                    <textarea name='serviceDetails' type='text' className="bg-slate-500 text-white  focus:bg-slate-700 textarea rounded-none w-full" placeholder="Service Details" required></textarea>
                    <button type='submit' className=" border border-slate-500 w-full py-3 px-10 text-white  hover:bg-slate-800">Add Service</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;