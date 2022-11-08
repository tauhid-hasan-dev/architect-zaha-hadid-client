import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div>
            <p>this is service details</p>
        </div>
    );
};

export default ServiceDetails;