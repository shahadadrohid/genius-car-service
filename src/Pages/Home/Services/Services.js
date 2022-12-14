import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services] = useServices()
    return (
        <div id="services" className="mt-5">
            <h3 className='bg-dark p-2 rounded-pill text-white w-50 mx-auto text-center'>Our Services</h3>
            <div className="container">
                <div className='row services-container mt-5'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;