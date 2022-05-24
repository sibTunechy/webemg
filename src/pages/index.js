import React from 'react';
// import { useState } from 'react';
// import Sidebar from '../components/Sidebar'
// import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSectionC from '../components/InfoSectionC';
import { homeObjTwo } from '../components/InfoSectionC/Data';
import Services from '../components/Services';
import { homeObjOne, homeObjThree } from '../components/InfoSection/Data';
// import Footer from '../components/Footer';

const Home = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => {
    //     setIsOpen(!isOpen);
    // }

  return (
    <>
        {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
        {/* <Navbar toggle={toggle}/> */}
        <HeroSection/>
        <InfoSection {...homeObjOne}/> 
        {/* <InfoSection {...homeObjTwo}/> */}
        <InfoSectionC {...homeObjTwo}/>
        <Services/>
        <InfoSection {...homeObjThree}/>
        {/* <Footer/>  */}
    </>
  )
}

export default Home;