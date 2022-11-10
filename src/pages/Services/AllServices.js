import React, { useEffect, useState } from 'react';
import ServiceCard from '../shared/ServiceCard/ServiceCard';


const AllServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)
    console.log(services);


    useEffect(() => {
        fetch('https://architect-tauhid-hasan-server.vercel.app/allservices', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setServices(data)
            })
    }, [])

    if (loading) {
        return <div className='flex justify-center p-10 lg:p-56'>
            <svg className='animate-spin' fill="none" height="100" viewBox="0 0 20 20" width="100" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z" fill="#212121" /></svg>
        </div>
    }

    return (
        <div className='bg-nav-color px-5 lg:px-28 py-8 lg:py-16'>
            <div className='flex justify-center pb-20'>
                <p className='text-4xl text-white'>My Services</p>
            </div>
            <div className=' grid grid-cols-1  lg:grid-cols-3 gap-10 '>
                {
                    services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }

            </div>

        </div>

    );
};

export default AllServices;