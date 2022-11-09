import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../shared/ServiceCard/ServiceCard';



const AllServices = () => {
    const [services, setServices] = useState([]);

    console.log(services);

    useEffect(() => {
        fetch('http://localhost:5000/allservices', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div className='bg-nav-color px-5 lg:px-28 py-8 lg:py-16'>
            <div className='flex justify-center pb-20'>
                <p className='text-4xl text-white'>My Services</p>
            </div>
            <div className=' grid grid-cols-1  lg:grid-cols-3 gap-10 '>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }

            </div>

        </div>

    );
};

export default AllServices;