import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';
import './Experts.css'


const experts = [
    { id: 1, name: 'Smith', img: expert1 },
    { id: 2, name: 'Will', img: expert2 },
    { id: 3, name: 'Khabib', img: expert3 },
    { id: 4, name: 'Noyon', img: expert4 },
    { id: 5, name: 'Shahadad', img: expert5 },
    { id: 6, name: 'Rafi', img: expert6 },
]
const Experts = () => {
    return (
        <div className="container mt-5">
            <h2 className='bg-dark p-2 rounded-pill text-white w-50 mx-auto'>Our Experts</h2>
            <div className="row experts-container">
                {experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}></Expert>
                )}
            </div>
        </div>
    );
};

export default Experts;