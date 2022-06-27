import React from 'react'
import { FcClock, FcAssistant, FcConferenceCall } from "react-icons/fc";

const Features = () => {

    return (
        <section id='features' className="flex flex-col md:h-screen">
            <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
                <div className='flex flex-col items-center space-y-3 text-4xl font-bold'>
                    <p>Features</p>
                    <hr className='w-24 border-2 border-lightBlue rounded-3xl' />
                </div>
                <div className='mx-auto flex flex-col my-24 md:flex-row md:space-x-6 justify-around'>
                    <div className='flex flex-col items-center text-center p-6 space-y-6 rounded-lg bg-veryLightGray shadow-darkerLightGray shadow-lg mb-12 md:mb-0 md:w-1/4'>
                        <FcClock className='text-8xl mb-5' />
                        <p>Save your time with all the features</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                    <div className='flex flex-col items-center text-center p-6 space-y-6 rounded-lg bg-veryLightGray shadow-darkerLightGray shadow-lg mb-12 md:mb-0 md:w-1/4'>
                        <FcAssistant className='text-8xl mb-5' />
                        <p>7/24 customer support</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                    <div className='flex flex-col items-center text-center p-6 space-y-6 rounded-lg bg-veryLightGray shadow-darkerLightGray shadow-lg mb-12 md:mb-0 md:w-1/4'>
                        <FcConferenceCall className='text-8xl mb-5' />
                        <p>Increase the team work</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col bg-features-bg bg-cover bg-fixed h-96 md:h-auto md:grow text-white items-center justify-center px-6 text-center'>
                <h1 className='font-bold text-2xl md:text 3xl'>Best Business Managemend Tool In The Market</h1>
            </div>
        </section>
    )
}

export default Features