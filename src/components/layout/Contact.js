import React from 'react'
import { FaPhoneAlt, FaRegEnvelope, FaLocationArrow } from "react-icons/fa";
const Contact = () => {

    return (
        <section id='contact' className="py-32">
            <div className='max-w-6xl px-5 mx-auto text-center'>
                <div className='flex flex-col items-center space-y-3 text-4xl font-bold mb-12'>
                    <p>Get In Touch</p>
                    <hr className='w-24 border-2 border-lightBlue rounded-3xl' />
                </div>
                <div className='flex flex-col-reverse md:flex-row md:space-x-12 md:items-end'>
                    <div className='flex flex-col space-y-6 md:w-1/3 items-start'>
                        <h2 className='text-xl'>Contact Us:</h2>
                        <p className='text-xs text-start text-gray-400'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className='flex flex-row items-center space-x-6'>
                            <div className='text-4xl text-lightBlue'><FaPhoneAlt /></div>
                            <div className='flex flex-col items-start'>
                                <h2 className='text-lg font-bold'>Phone:</h2>
                                <p>+1234567890</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center space-x-6'>
                            <div className='text-4xl text-lightBlue'><FaRegEnvelope /></div>
                            <div className='flex flex-col items-start'>
                                <h2 className='text-lg font-bold'>Email:</h2>
                                <p>hello@welldoneworks.com</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center space-x-6'>
                            <div className='text-4xl text-lightBlue'><FaLocationArrow /></div>
                            <div className='flex flex-col items-start'>
                                <h2 className='text-lg font-bold'>Address:</h2>
                                <p className=''>221B Baker Street, London</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-2/3 mb-12 md:mb-0'>
                        <form>
                            <div className='flex flex-col  md:space-y-6'>
                                <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-12 mb-6 md:mb-0'>
                                    <input className='grow bg-lightGray py-1.5 px-3 border-transparent border-b-2 focus:border-b-lightBlue focus:outline-none rounded-lg transition-[border] duration-200'
                                        type="text" placeholder='Name' />
                                    <input className='grow bg-lightGray py-1.5 px-3 border-transparent border-b-2 focus:border-b-lightBlue focus:outline-none rounded-lg transition-[border] duration-200'
                                        type="text" placeholder='Email' />
                                </div>
                                <div className='flex flex-col'>
                                    <textarea className='grow bg-lightGray py-1.5 px-3 border-transparent border-b-2 focus:border-b-lightBlue focus:outline-none rounded-lg transition-[border] duration-200'
                                        type="text" placeholder='Your Message' rows={8}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact