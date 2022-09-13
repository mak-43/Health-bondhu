import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1'>
                <div>
                    <h2 className='text-2xl font-bold'> <span className='text-primary'>Doc</span> <span className='text-secondary'>mic</span></h2>
                    <p className='justify my-5'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee</p>
                    <div className='text-primary text-xl i flex gap-2'>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-google"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Footer;