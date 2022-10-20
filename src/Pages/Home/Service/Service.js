import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    // console.log(service)
    const { name, img, description, price } = service;
    return (
        <div className='card service'>
            <img src={img} alt="" />
            <h4 className='mt-2'>Name: {name}</h4>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button className="bg-success text-white rounded border-0 p-2 w-50 mx-auto">Book: {name.slice(0, 8)}</button>
        </div>
    );
};

export default Service;