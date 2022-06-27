import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import logoWhite from '../../static/img/logo-white.png';
import GoogleLogo from '../../static/svg/google';
const Footer = (props) => {

    return (
        <section id='footer' className="bg-lightBlue text-white">
            <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
                <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-6 md:items-start'>
                    <div className='mx-auto my-6 text-center text-white md:hidden'>
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                    <div>
                        <img className='w-32' src={logoWhite} alt="logo" />
                    </div>
                    <div className='flex justify-center space-x-4 text-3xl'>
                        <FaFacebook />
                        <FaLinkedin />
                        <FaTwitter />
                        <FaInstagram />
                    </div>
                </div>
                <div className='flex justify-around space-x-32'>
                    <div className='flex flex-col space-y-3 text-white'>
                        <a href='#' className='hover:text-veryDarkBlue'>Home</a>
                        <a href='#' className='hover:text-veryDarkBlue'>Pricing</a>
                        <a href='#' className='hover:text-veryDarkBlue'>Products</a>
                        <a href='#' className='hover:text-veryDarkBlue'>About</a>
                    </div>
                    <div className='flex flex-col space-y-3 text-white'>
                        <a href='#' className='hover:text-veryDarkBlue'>Careers</a>
                        <a href='#' className='hover:text-veryDarkBlue'>Community</a>
                        <a href='#' className='hover:text-veryDarkBlue'>Privacy Policy</a>
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <form>
                        <div className='flex space-x-3'>
                            <input className='flex-1 px-4 rounded-full focus:outline-none' type='text' placeholder='Update in your inbox' />
                            <button className='px-6 py-2 text-white rounded-full border-2 border-white hover:bg-brightRedLight focus:outline-none'>Go</button>
                        </div>
                    </form>
                    <div className='hidden text-white md:block'>
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer