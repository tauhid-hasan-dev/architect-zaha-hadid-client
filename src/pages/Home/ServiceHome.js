import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../shared/ServiceCard/ServiceCard';

const ServiceHome = () => {
    const [services, setServices] = useState([]);

    console.log(services);

    useEffect(() => {
        fetch('http://localhost:5000/services', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <div className='bg-nav-color px-28  py-20'>
            <div className='flex justify-center pb-20'>
                <p className='text-4xl text-white'>My Services</p>
            </div>
            <div className=' grid grid-cols-1  lg:grid-cols-3 gap-10 '>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }

            </div>
            <div className='flex justify-center  my-10'>
                <Link to='/services'>
                    <button className=" border py-3  px-10 text-white hidden lg:block hover:bg-slate-600">See All</button>
                </Link>
            </div>
        </div>

    );
};

export default ServiceHome;