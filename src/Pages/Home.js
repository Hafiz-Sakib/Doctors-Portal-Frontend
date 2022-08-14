import React from 'react';
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { useEffect } from 'react';
import Infos from '../Components/Infos/Infos';
import Services from '../Components/Services/Services';
import FeaturedService from '../Components/FeaturedService/FeaturedService';
import AppointmentBanner from '../Components/AppointmentBanner/AppointmentBanner';
import Testimonials from '../Components/Testimonials/Testimonials';
import Blogs from '../Components/Blogs/Blogs';
import Doctors from '../Components/Doctors/Doctors';
import Contact from '../Components/Contact/Contact';
const Home = () => {
    useEffect(() => {window.scrollTo(0,0)}, [])

    return (
        <>
            <Header/>
            <Banner/>
            <Infos/>
            <Services/>
            <FeaturedService/>
            <AppointmentBanner/>
            <Testimonials/>
            <Blogs/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;