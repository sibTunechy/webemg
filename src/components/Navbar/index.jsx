import React from 'react';
import { AiOutlineBars } from 'react-icons/ai'
import { NavbarContainer, NavLogo, Nav, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>EMG</NavLogo>
                <MobileIcon>
                  <AiOutlineBars/>
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to='/'>Home</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='about'>About Us</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='services'>Services</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='contact'>Contact</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='discover'>Discover</NavLinks>
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