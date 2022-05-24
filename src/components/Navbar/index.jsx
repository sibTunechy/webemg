import React, {useEffect, useState} from 'react';
import { AiOutlineBars } from 'react-icons/ai'
import { NavbarContainer, NavLogo, Nav, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';


const Navbar = ({toggle}) => {
  // scroll NAv
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => { 
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop()
  };

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>EMG</NavLogo>
                <MobileIcon onClick={toggle}>
                  <AiOutlineBars/>
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to='/' onClick={toggleHome}>Home</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='/aboutus' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About Us</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='services'  smooth={true} duration={500} spy={true} exact='true' offset={-80} >Services</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='contact'  smooth={true} duration={500} spy={true} exact='true' offset={-80} >Contact</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='discover'  smooth={true} duration={500} spy={true} exact='true' offset={-80} >Discover</NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to='/joinus'>Join Us</NavBtnLink>
                </NavBtn> 
            </NavbarContainer>
        </Nav> 
    </>
  )
}

export default Navbar;