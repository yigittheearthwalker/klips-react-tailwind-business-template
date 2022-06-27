import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logoBlack from '../../static/img/logo-black.png';
const Header = (props) => {
    const [display, setDisplay] = useState({
        showMenu: 'hidden'
    })
    const { showMenu } = display;

    const onClick = () => {
        setDisplay({ ...display, showMenu: showMenu === 'hidden' ? 'flex open' : 'hidden' })
        console.log(showMenu);
    }
    return (
        <nav className="fixed mx-auto p-3 bg-paleWhite w-full z-50">
            <div className='flex items-center justify-between mx-10'>
                <div className='flex items-center justify-between'>
                    <div className='pt-2'>
                        <Link to='/'><img className='w-32' src={logoBlack} alt="logo" /></Link>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='hidden md:flex space-x-6 mx-5 text-[#000]'>
                        <Link to='#' className='hover:text-darkGrayishBlue'>Home</Link>
                        <Link to='#' className='hover:text-darkGrayishBlue'>Features</Link>
                        <Link to='#' className='hover:text-darkGrayishBlue'>Pricing</Link>
                        <Link to='/jobs' className='hover:text-darkGrayishBlue'>Careers</Link>
                        <Link to='#' className='hover:text-darkGrayishBlue'>Contact</Link>

                    </div>
                    <Link to='#' className='hidden md:block p-2 px-3 pt-2 border-2 border-lightBlue text-lightBlue rounded-xl baseline hover:bg-lightBlue hover:text-white'>Try For Free</Link>
                </div>

                <button onClick={onClick} id='menu-btn' className='block hamburger md:hidden focus:outline-none'>
                    <span className='hamburger-top'></span>
                    <span className='hamburger-middle'></span>
                    <span className='hamburger-bottom'></span>
                </button>
            </div>
            <div className='md:hidden'>
                <div id='menu' className={'absolute flex-col items-center self-end py-8 mt-3 space-y-6 font-bold bg-paleWhite sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ' + showMenu}>
                    <Link to='#'>Home</Link>
                    <Link to='#'>Features</Link>
                    <Link to='#'>Pricing</Link>
                    <Link to='/jobs'>Careers</Link>
                    <Link to='#'>Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header