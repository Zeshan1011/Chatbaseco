
import React from 'react';

const Affiliate = () => {
    return (
        <div className='max-w-[1640px] w-full bg-gray-200'>
            <h1 className='text-center font-bold text-3xl pt-9'>Chatbase.co</h1>
            <p className='text-center text-gray-700 my-4'>Friends of Chatbase.co</p>
            <div className='bg-white  mx-4 md:mx-10 rounded shadow-lg pb-6 lg:w-[690px] lg:mx-[450px]'>
                <form action="">
                    <div className='mx-10'>
                        <p className='text-gray-700 text-center pt-[60px] mx-[9px]'>
                            <span className='font-bold text-black '> Join friends of Chatbase.co</span> and receive a
                            20% commission on all payments within the first 12 months for paying customers you refer to{' '}
                            <span className='block underline'> www.chatbase.co!</span>
                        </p>
                        <hr />
                        <div>
                            <label htmlFor="" className='block text-lg my-2'>
                                First Name
                            </label>
                            <input type="text" placeholder='Luke' className='block h-12 px-3 bg-gray-100 w-full border rounded-md' />
                            <label htmlFor="" className='block text-lg my-2'>Last Name</label>
                            <input type="text" placeholder='Skywalker' className='block h-12 px-3 bg-gray-100 w-full border rounded-md' />
                            <label htmlFor="" className='block text-lg my-2'>Email</label>
                            <input type="email" placeholder='luke@jedi.com' className='block h-12 px-3 bg-gray-100 w-full border rounded-md' />
                            <label htmlFor="" className='block text-lg my-2'>Password</label>
                            <input type="password" placeholder='hunter2' className='block h-12 px-3 bg-gray-100 w-full border rounded-md' />
                            <p className='text-xs'>Minimum 8 characters, ideally more</p>
                            <label htmlFor="" className='block text-lg my-2'>Confirm Password</label>
                            <input type="password" placeholder='hunter2' className='block h-12 px-3 bg-gray-100 w-full border rounded-md' />
                            <div className='flex justify-center w-[100%] items-center  my-8 '>
                                <div className='bg-gray-100 py-6 px-4 h-[70px]'>

                                <input type="checkbox" id="robotCheckbox" className='h-5 w-5 mx-3' />
                                <label htmlFor="robotCheckbox" className='text-lg mx-3'>I am not a robot</label>
                                </div>
                            </div>
                        </div>
                        <button className='bg-blue-400 h-14 border rounded-md text-white  w-full'>Sign up</button>
                        <p className='text-center text-xs'>By signing up you agree the to the <span className='text-blue-300'> terms of Services </span></p>
                    </div>

                </form>


            </div>

            <div className='mx-10 py-10'>
                <p className='text-center mb-4'>Already have account ? <span className='underline hover:cursor-pointer'>Login</span> </p>
                <div className='text-sm '>
                    <p className='text-center px-1'>Friends of chatbase.co is powered by <span className='underline hover:cursor-pointer'>Rewardful</span> </p>
                    <p className='underline text-center h ml-2 hover:cursor-pointer'>Terms of services</p>
                </div>
            </div>
        </div>
    );
};

export default Affiliate;


