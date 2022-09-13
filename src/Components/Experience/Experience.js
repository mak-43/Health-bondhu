import React from 'react';
import './Experience.css'

const Experience = () => {
    return (
        <div className='mt-20 w-4/6 mx-auto'>
            <div className='flex sm:flex-col md:flex-row justify-center items-center gap-5'>
                <div className='basis-1/2 '>
                    <h2 className='text-secondary  my-4 font-bold'>16+ Years Experience</h2>
                    <h1 className='font-bold text-2xl '>We Are Always Ensure Best Medical <br />Treatment For Your Health</h1>
                    <p className='my-3  text-accent'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik</p>
                </div>
                <div className='basis-1/3 relative'>
                    <div className='exp-bottom'>

                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Experience;