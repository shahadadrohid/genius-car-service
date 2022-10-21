import React from 'react';

const Footer = () => {
    const today = new Date();
    const thisYear = today.getFullYear();
    return (
        <footer className='bg-dark p-4 mt-5 '>
            <p className='fs-4 text-white mb-0 text-center'>Copyright © {thisYear}</p>
            <p className='fs-5 text-white text-center'>Mohammad Shahadad Hossain</p>
        </footer>
    );
};

export default Footer;