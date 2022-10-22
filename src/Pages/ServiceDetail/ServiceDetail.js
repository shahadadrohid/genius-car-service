import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <p>Welcome to Detail: {serviceId}</p>
            <div className="text-center">
                <Link to="/checkout">
                    <button className="btn btn-primary">CheckOut</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetail;