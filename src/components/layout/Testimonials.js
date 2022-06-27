import React, { } from 'react'
import Slider from "react-slick";
import tom from '../../static/img/testimonials/tom.jpg'
import anastasia from '../../static/img/testimonials/anastasia.jpg'
import natasha from '../../static/img/testimonials/natasha.jpg'
import aboubakar from '../../static/img/testimonials/aboubakar.jpg'
import CountUp from 'react-countup';

const Testimonials = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    autoplay: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                }
            }
        ]
    };

    return (
        <section id='testimonials' className='md:flex md:flex-col bg-veryLightGray md:h-screen'>
            <div className='max-w-6xl px-5 mx-auto py-32 text-center'>
                <div className='flex flex-col items-center space-y-3 text-4xl font-bold'>
                    <p>Testimonials</p>
                    <hr className='w-24 border-2 border-lightBlue rounded-3xl' />
                </div>
                <div className="">
                    <Slider className="h-1/3 py-3" {...settings}>
                        <div className='items-center py-12 rounded-lg mb-0 md:mb-8 md:w-1/3 h-[25rem]'>
                            <div className='flex flex-col space-y-8 pb-6 px-6 items-center w-[80%] bg-white shadow-xl mx-auto sm:h-[22rem]'>
                                <img src={tom} alt='avatar' className='w-28 -mt-10 mx-auto bg-darkBlue rounded-full p-2 md:-mt-8' />
                                <h5 className='text-lg font-bold'>Tom Stark</h5>
                                <p className='text-sm text-darkGrayishBlue'>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                </p>
                            </div>
                        </div>
                        <div className='items-center py-12 rounded-lg mb-0 md:mb-8 md:w-1/3 h-[25rem]'>
                            <div className='flex flex-col space-y-8 pb-6 px-6 items-center w-[80%] bg-white shadow-xl mx-auto sm:h-[22rem]'>
                                <img src={natasha} alt='avatar' className='w-28 -mt-10 mx-auto bg-darkBlue rounded-full p-2 md:-mt-8' />
                                <h5 className='text-lg font-bold'>Natasha Vodna</h5>
                                <p className='text-sm text-darkGrayishBlue'>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                </p>
                            </div>
                        </div>
                        <div className='items-center py-12 rounded-lg mb-0 md:mb-8 md:w-1/3 h-[25rem]'>
                            <div className='flex flex-col space-y-8 pb-6 px-6 items-center w-[80%] bg-white shadow-xl mx-auto sm:h-[22rem]'>
                                <img src={anastasia} alt='avatar' className='w-28 -mt-10 mx-auto bg-darkBlue rounded-full p-2 md:-mt-8' />
                                <h5 className='text-lg font-bold'>Anastasia Lee</h5>
                                <p className='text-sm text-darkGrayishBlue'>
                                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                </p>
                            </div>
                        </div>
                        <div className='items-center py-12 rounded-lg mb-0 md:mb-8 md:w-1/3 h-[25rem]'>
                            <div className='flex flex-col space-y-8 pb-6 px-6 items-center w-[80%] bg-white shadow-xl mx-auto sm:h-[22rem]'>
                                <img src={aboubakar} alt='avatar' className='w-28 -mt-10 mx-auto bg-darkBlue rounded-full p-2 md:-mt-8' />
                                <h5 className='text-lg font-bold'>Aboubakar Hamidou</h5>
                                <p className='text-sm text-darkGrayishBlue'>
                                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='flex flex-col space-y-12 md:space-y-0 md:flex-row bg-features-bg bg-cover bg-fixed h-96 md:h-auto md:grow text-white px-6 items-center justify-evenly'>
                <CountUp
                    enableScrollSpy
                    start={0}
                    end={1267}
                    duration={2.5}
                    separator="."
                    suffix='+'
                >
                    {({ countUpRef, start }) => (
                        <div className='flex flex-col items-center'>
                            <span className='text-4xl font-bold' ref={countUpRef} />
                            <p className='text-xl'>Clients</p>
                        </div>
                    )}
                </CountUp>
                <CountUp
                    enableScrollSpy
                    start={0}
                    end={2836}
                    duration={2.75}
                    separator="."
                    suffix='+'
                >
                    {({ countUpRef, start }) => (
                        <div className='flex flex-col items-center'>
                            <span className='text-4xl font-bold' ref={countUpRef} />
                            <p className='text-xl'>Workspaces</p>
                        </div>
                    )}
                </CountUp>
                <CountUp
                    enableScrollSpy
                    start={0}
                    end={13967}
                    duration={3}
                    separator="."
                    suffix='+'
                >
                    {({ countUpRef, start }) => (
                        <div className='flex flex-col items-center'>
                            <span className='text-4xl font-bold' ref={countUpRef} />
                            <p className='text-xl'>Happy Team Users</p>
                        </div>
                    )}
                </CountUp>
            </div>
        </section>
    )
}

export default Testimonials