import React from 'react'
import { Link } from "react-router-dom";
const Pricing = () => {

    return (
        <section id='pricing' className="bg-veryLightGray">
            <div className='max-w-6xl px-5 py-32 mx-auto text-center'>
            <div className='flex flex-col items-center space-y-3 text-4xl font-bold mb-20'>
                    <p>Select Your Plan</p>
                    <hr className='w-24 border-2 border-lightBlue rounded-3xl' />
                </div>
                <div className='mx-auto flex flex-col md:flex-row md:space-x-6 justify-around'>
                    <div className='w-full flex flex-col items-center text-center pb-12 space-y-6 rounded-lg bg-white shadow-darkerLightGray shadow-lg mb-12 md:mb-0'>
                        <p className='uppercase tracking-wider text-lg bg-lightBlue text-white py-2 px-3 -mt-5 rounded-lg'>Starter</p>
                        <div className='w-full text-white py-1 bg-lightBlue'>
                            <p>
                                <span className='text-paleWhite text-sm'>$</span>
                                <span className='text-4xl'>25</span>
                                <span className='text-paleWhite text-sm'>/month</span>
                            </p>
                        </div>
                        <ul className='w-full grow'>
                            <li className='border-t-2 border-lightGray py-3'>Admin Panel</li>
                            <li className='border-t-2 border-lightGray py-3'>100GB Storage</li>
                            <li className='border-y-2 border-lightGray py-3'>Unlimited SMS</li>
                        </ul>  
                        <Link to='#' className='px-2 text-sm md:text-md md:px-6 p-2 pt-2 border-2 border-lightBlue text-lightBlue rounded-xl baseline hover:bg-lightBlue hover:text-white'>Get Started</Link>
                    </div>
                    <div className='w-full flex flex-col items-center text-center  pb-12 space-y-6 rounded-lg bg-white shadow-darkerLightGray shadow-lg mb-12 md:mb-0'>
                        <p className='uppercase tracking-wider text-lg bg-lightBlue text-white py-2 px-3 -mt-5 rounded-lg'>Premium</p>
                        <div className='w-full text-white py-1 bg-lightBlue'>
                            <p>
                                <span className='text-paleWhite text-sm'>$</span>
                                <span className='text-4xl'>45</span>
                                <span className='text-paleWhite text-sm'>/month</span>
                            </p>
                        </div>
                        <ul className='w-full grow'>
                            <li className='border-t-2 border-lightGray py-3'>Admin Panel</li>
                            <li className='border-t-2 border-lightGray py-3'>100GB Storage</li>
                            <li className='border-t-2 border-lightGray py-3'>Unlimited SMS</li>
                            <li className='border-y-2 border-lightGray py-3'>Dedicated Support</li>
                        </ul>  
                        <Link to='#' className='px-2 text-sm md:text-md md:px-6 p-2 pt-2 border-2 border-lightBlue text-lightBlue rounded-xl baseline hover:bg-lightBlue hover:text-white'>Get Started</Link>
                    </div>
                    <div className='w-full flex flex-col items-center text-center pb-12 space-y-6 rounded-lg bg-white shadow-darkerLightGray shadow-lg mb-12 md:mb-0'>
                        <p className='uppercase tracking-wider text-lg bg-lightBlue text-white py-2 px-3 -mt-5 rounded-lg'>Enterprise</p>
                        <div className='w-full text-white py-1 bg-lightBlue'>
                            <p>
                                <span className='text-paleWhite text-sm'>$</span>
                                <span className='text-4xl'>75</span>
                                <span className='text-paleWhite text-sm'>/month</span>
                            </p>
                        </div>
                        <ul className='w-full grow'>
                            <li className='border-t-2 border-lightGray py-3'>Admin Panel</li>
                            <li className='border-t-2 border-lightGray py-3'>100GB Storage</li>
                            <li className='border-t-2 border-lightGray py-3'>Unlimited SMS</li>
                            <li className='border-t-2 border-lightGray py-3'>Dedicated Support</li>
                            <li className='border-y-2 border-lightGray py-3'>Unlimited Users</li>
                        </ul>  
                        <Link to='#' className='px-2 text-sm md:text-md md:px-6 p-2 pt-2 border-2 border-lightBlue text-lightBlue rounded-xl baseline hover:bg-lightBlue hover:text-white'>Get Started</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing