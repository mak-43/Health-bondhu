import React from 'react';

const Faq = () => {
    return (
        <div className='mt-20 w-4/6 mx-auto'>
            <div className='flex sm:flex-col md:flex-row lg:flex-row justify-center items-center gap-10'>
                <div className='basis-1/3 '>
                    <h2 className='text-secondary  my-4 font-bold'>FAQ Questions</h2>
                    <h1 className='font-bold text-2xl mb-5 '>Get Your General Answer</h1>
                    <div className='flex justify-between items-center mb-3'>
                        <p className='  text-accent font-semibold'>
                            Get Your General Answer
                        </p>
                        <i class="fa-solid fa-plus text-primary font-bold"></i>
                    </div>
                    <div className='flex justify-between items-center mb-3'>
                        <p className='  text-accent font-semibold'>
                        Will I always see my own doctor?             
                        </p>
                        <i class="fa-solid fa-plus text-primary font-bold"></i>
                    </div>
                    <div className='flex justify-between items-center mb-3'>
                        <p className='  text-accent font-semibold'>
                        What is one Medical’s care?                      
                        </p>
                        <i class="fa-solid fa-plus text-primary font-bold"></i>
                    </div>
                    <div className='flex justify-between items-center mb-3'>
                        <p className='  text-accent font-semibold'>
                        What is evidence based medicine?          
                        </p>
                        <i class="fa-solid fa-plus text-primary font-bold"></i>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='  text-accent font-semibold'>
                        What is an academic medical center?      
                        </p>
                        <i class="fa-solid fa-plus text-primary font-bold"></i>
                    </div>


                </div>
                <div className='basis-1/2 relative '>
                    <div className='exp-bottom mx-auto'>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Faq;