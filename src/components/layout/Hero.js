import React from 'react'
import laptop from '../../static/svg/laptop.svg';
const Hero = () => {

    return (
        <section id='home' className="">
            <div className='flex flex-col h-screen'>
                <div className='flex flex-col w-full h-2/3 bg-hero-bg bg-cover bg-center text-white items-center justify-center px-2'>
                    <div className='mb-5 text-center'>
                        <p className='text-3xl font-light mb-5 md:text-5xl'>Best Business Suite For You Team</p>
                        <p className='text-md md:text-lg'>To keep up with maximum efficiency and boosted service quality</p>
                    </div>
                    <div className='flex space-x-3'>
                        <a href='#' className='px-2 text-sm md:text-md md:px-6 p-2 pt-2 border-2 border-white text-white rounded-xl baseline hover:bg-green-500 hover:text-white'>Try For Free</a>
                        <a href='#' className='px-2 text-sm md:text-md md:px-6 p-2 pt-2 border-2 border-white text-white rounded-xl baseline hover:bg-white hover:text-darkGrayishBlue'>Get In Touch</a>
                    </div>
                </div>
                <div className='px-12 flex md:flex-row h-1/3 items-center justify-center'>
                    <div className='hidden md:flex w-1/3 justify-center'>
                        <img className='laptop' src={laptop} alt="laptop" />
                    </div>
                    <div className=' flex flex-col px-6 py-6 bg-lightGray shadow-darkerLightGray rounded-md shadow-lg md:w-1/2'>
                        <p className='mb-3 text-lg'>Provide a creative and friendly work environment for your team. Make a change today</p>
                        <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  </p>
                        <a className='underline underline-offset-4 text-lg text-black hover:text-darkBlue' href='#'>See Plans </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero