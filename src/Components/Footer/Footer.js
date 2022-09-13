import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='bg-[#E9EEF7] ' >
            <div className='grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 mt-20  w-4/6 mx-auto'>
                <div className='mb-5'>
                    <h2 className='text-2xl font-bold my-5'> <span className='text-primary'>Doc</span> <span className='text-secondary'>mic</span></h2>
                    <p className='text-justify mb-5 w-[237px]'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee</p>
                    <div className='text-primary text-xl i flex gap-2 my-5'>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-google"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>

                </div>
                <div>
                    <h2 className='text-secondary my-5'>Quick Links</h2>
                    <div className='flex flex-col gap-2'>
                        <a href="#">About us</a>
                        <a href="#">Our Pricing</a>
                        <a href="#">Our Gallery</a>
                        <a href="#">Appointment</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
                <div>
                    <h2 className='text-secondary my-5'>Services</h2>
                    <div className='flex flex-col gap-2'>
                        <a href="#">Our Doctors</a>
                        <a href="#">Our Latest News</a>
                        <a href="#">Careers</a>
                        <a href="#">Contact Us</a>

                    </div>
                </div>
                <div >
                    <h2 className='text-secondary my-5'>Opening Hours</h2>
                    <div className='flex flex-col gap-2' >
                        <div className='flex gap-5'>
                            <span className='text-primary'>Mon- Tue</span> <p>08:00 AM- 05:00 PM</p>
                        </div>
                        <div className='flex gap-5'>
                            <span className='text-primary'>Wed- Thu</span> <p>09:00 AM- 06:00 PM</p>
                        </div>
                        <div className='flex gap-5'>
                            <span className='text-primary'>Fri- Sat</span> <p>10:00 AM- 07:00 PM</p>
                        </div>
                        <div className='flex gap-5'>
                            <span className='text-primary'>Sunday</span> <p>Emergency Only</p>
                        </div>
                        <div className='flex gap-5'>
                            <span className='text-primary'>Personal</span> <p>Mon- 05:00 PM</p>
                        </div>
                    </div>

                </div>
                <small className='mb-5'>Copyright &copy; Health Bondhu All Rights Reserved</small>
            </div>
        </div>
    );
};

export default Footer;