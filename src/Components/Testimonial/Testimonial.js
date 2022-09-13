import React from 'react';
import './testimonila.css'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";
import h from '../../Assets/pose_2.png'
import h1 from '../../Assets/pose_4.png'
import h2 from '../../Assets/pose_7.png'
import h3 from '../../Assets/pose_8.png'
import i from '../../Assets/Ikbal 1.png'

const Testimonial = () => {
    return (
        <div className='md:w-[900px] sm:w-full mx-auto'>
            <h2 className='text-center text-secondary mt-20 my-3 font-bold'>Testimonial</h2>
            <p className='font-bold text-2xl my-5 text-center'>What they say?</p>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-5 md:w-[664px]  sm:w-full">
                <SwiperSlide>
                    <div className='flex gap-10 p-5 slide-1 '>
                        <div className='basis-1/2 flex flex-col  items-start'>
                            <p className='font-light'>David Jeams </p>
                            <p  className='font-light my-5'>Patient</p>
                            <p className='w-[392px] text-justify '>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content </p>
                        </div>
                        <div className='basis-1/3 ml-10'>
                            <img src={i} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex gap-10 p-5 slide-1'>
                        <div className='basis-1/2 flex flex-col  items-start'>
                            <p className='font-light'>David Jeams </p>
                            <p  className='font-light my-5'>Patient</p>
                            <p className='w-[392px] text-justify '>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content </p>
                        </div>
                        <div className='basis-1/3 ml-10'>
                            <img src={h3} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>  <div className='flex gap-10 p-5 slide-1'>
                        <div className='basis-1/2 flex flex-col  items-start'>
                            <p className='font-light'>David Jeams </p>
                            <p  className='font-light my-5'>Patient</p>
                            <p className='w-[392px] text-justify '>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content </p>
                        </div>
                        <div className='basis-1/3 ml-10'>
                            <img src={h1} alt="" />
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>  <div className='flex gap-10 p-5 slide-1'>
                        <div className='basis-1/2 flex flex-col  items-start'>
                            <p className='font-light'>David Jeams </p>
                            <p  className='font-light my-5'>Patient</p>
                            <p className='w-[392px] text-justify '>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content </p>
                        </div>
                        <div className='basis-1/3 ml-10'>
                            <img src={h2} alt="" />
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>  <div className='flex gap-10 p-5 slide-1'>
                        <div className='basis-1/2 flex flex-col  items-start'>
                            <p className='font-light'>David Jeams </p>
                            <p  className='font-light my-5'>Patient</p>
                            <p className='w-[392px] text-justify '>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content </p>
                        </div>
                        <div className='basis-1/3 ml-10'>
                            <img src={i} alt="" />
                        </div>
                    </div></SwiperSlide>
               
            </Swiper>

        </div>
    );
};

export default Testimonial;