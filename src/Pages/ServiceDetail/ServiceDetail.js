import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId)
    return (
        <div>
            <p>Welcome to Detail: {service.name}</p>
            <div className="text-center">
                <Link to={`/checkout/${serviceId}`}>
                    <button className="btn btn-primary">CheckOut</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetail;