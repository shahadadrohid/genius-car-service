import React from 'react';
import './Expert.css'

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div className="g-5 col-sm-12 col-md-6 col-lg-4">
            <div className="expert-card">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={img} alt="" className="card-img-top" />
                    <div className='card-body'>
                        <h5 className='card-tilte'>{name}</h5>
                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, distinctio!</p>
                        <a href="#" className="btn bg-success text-white rounded border-0 px-5 py-2">Hire Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expert;