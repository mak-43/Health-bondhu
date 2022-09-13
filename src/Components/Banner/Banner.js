import React from 'react';
import './Banner.css'
import p1 from '../../Assets/Ellipse 6.png'
import p2 from '../../Assets/Ellipse 7.png'
import p3 from '../../Assets/Ellipse 8.png'
import p4 from '../../Assets/Ellipse 9.png'
import p5 from '../../Assets/Ellipse 11.png'


const Banner = () => {
    return (
        <div className=' mt-20 flex justify-center banner'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 relative'>
                <div className='md:ml-[100px] md:order-1 sm:order-2'>
                    <div className=' my-10 text-9xl'>
                        <h2 className='text-4xl font-semibold'> Your <span className='text-primary'>Health</span> Is Our</h2>
                        <h2 className='text-4xl font-semibold'> Top <span className='text-secondary'>Priority</span></h2>
                    </div>
                    <p className=' text-accent my-7'>There are many variations of passages of lpsum <br></br> available, but the majority hae suffered.</p>
                    <button className='bg-primary text-white px-3 py-2 rounded-md mb-10'>Meet Our Specialist</button>

                    <div className='flex gap-10  items-center my-[25px]'>
                        <div>
                            <h4 className='text-center text-secondary font-bold text-2xl'>262k+</h4>
                            <p>Recovered Patients</p>
                            <div className='banner-filter'></div>
                        </div>
                        <div>
                            <h4 className='text-center text-secondary font-bold text-2xl'>96%</h4>
                            <p>Satisfaction Rate</p>
                        </div>
                        <div>
                            <h4 className='text-center text-secondary font-bold text-2xl'>86+</h4>
                            <p>Expert Doctors</p>
                        </div>

                    </div>


                </div>

                <div className="banner-bottom sm:order-1 md:order-2">
             
                    <button className='bg-secondary text-white px-3 py-2 rounded-md mt-30 banner-button'><i class="fa-regular fa-circle-check "></i> Regular Checkup</button>
                    <div className="bottom-div px-2 pb-3">
                        <h2 className='my-2'>Meet Our Doctors</h2>
                        <div className='flex gap-2'>
                            <img  src={p1} alt="" />
                            <img src={p2} alt="" />
                            <img src={p3} alt="" />
                            <img src={p4}alt="" />
                            <i class="fa-solid fa-circle-plus text-primary text-3xl"></i>
                        </div>
                        <div className='div-lower'></div>
                        <div className='div-lowerr'></div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;