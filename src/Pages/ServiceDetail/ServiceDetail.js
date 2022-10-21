import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <p>Welcome to Detail: {serviceId}</p>
        </div>
    );
};

export default ServiceDetail;