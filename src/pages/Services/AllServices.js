import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import ServiceCard from '../shared/ServiceCard/ServiceCard';


const AllServices = () => {
    const [services, setServices] = useState([]);
    //const { loading } = useContext(AuthContext);
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
        return <p>loading.....</p>
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