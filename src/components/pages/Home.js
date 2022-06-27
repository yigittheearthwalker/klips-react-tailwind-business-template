import React, { Fragment } from 'react'
import Hero from '../layout/Hero'
import Features from '../layout/Features'
import Pricing from '../layout/Pricing'
import Footer from '../layout/Footer'
import Testimonials from '../layout/Testimonials'
import Contact from '../layout/Contact'

const Home = (props) => {

    return (
        <Fragment>
        <Hero />
        <Features />
        <Testimonials logo={props.logo}/>
        <Pricing />
        <Contact />
        <Footer logo={props.logo}/>
        </Fragment>
    )
}

export default Home