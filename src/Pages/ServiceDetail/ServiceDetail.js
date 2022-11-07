import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <p>Welcome to Detail: {service.name}</p>
            <div className="text-center">
                <Link to="/checkout">
                    <button className="btn btn-primary">CheckOut</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetail;