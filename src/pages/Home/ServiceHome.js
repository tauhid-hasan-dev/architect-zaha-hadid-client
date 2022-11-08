import React, { useEffect, useState } from 'react';
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
        <div>
            {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default ServiceHome;