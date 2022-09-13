import React from 'react';
import i from '../../Assets/v4.png'
import i2 from '../../Assets/v1.png'
import i3 from '../../Assets/v2.png'
import i4 from '../../Assets/v3.png'
const Service = () => {
    return (
        <div className='flex justify-center'>
            <div className='mt-20 '>
                <p className='text-secondary text-center my-5 font-bold'>Our Services</p>
                <h2 className=' text-center text-2xl font-bold'>Services For Your Health</h2>
                <div className='grid md:grid-cols-2 sm:grid-clos-1 lg:grid-cols-4 my-5 gap-10 '>
                    <div className='bg-white rounded w-[236px] p-5'>
                        <div className='flex justify-between my-5'>
                            <p>Cardiology</p>
                            <i class="fa-solid fa-heart-pulse text-secondary text-xl"></i>
                        </div>
                        <p>Seduahag perspiciati under <br /> omnised atused error</p>

                        <button className='mt-5'>Explore Now</button>
                    </div>
                    <div className='bg-white rounded w-[236px] p-5'>
                        <div className='flex justify-between my-5'>
                            <p>Monthly Check Up</p>
                            <img src={i2} alt="" />
                        </div>
                        <p>Seduahag perspiciati under <br /> omnised atused error</p>

                        <button className='mt-5'>Explore Now</button>
                    </div>
                    <div className='bg-white rounded w-[236px] p-5'>
                        <div className='flex justify-between my-5'>
                            <p>Dental Care</p>
                            <img src={i3} alt="" />
                        </div>
                        <p>Seduahag perspiciati under <br /> omnised atused error</p>

                        <button className='mt-5'>Explore Now</button>
                    </div>
                    <div className='bg-white rounded w-[236px] p-5'>
                        <div className='flex justify-between my-5'>
                            <p>Opthalmology</p>
                            <img src={i} alt="" />
                        </div>
                        <p>Seduahag perspiciati under <br /> omnised atused error</p>

                        <button className='mt-5'>Explore Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;