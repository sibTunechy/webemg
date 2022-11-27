import React, { useEffect, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import {
  NavbarContainer,
  NavLogo,
  Nav,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Link,
  myLogo
} from "./NavbarElements";
// import myLogo from "../../images/emg.svg";
import { animateScroll as scroll } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
// import { LOGOUT } from '../../constants/actionTypes';
import decode from "jwt-decode";
import { useDispatch } from "react-redux";
// import * as actionType from '../../constants/actionTypes';

const Navbar = ({ toggle }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const userTest = localStorage.getItem("profile");

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // scroll NAv
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    navigate.push("/auth");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
const handleLogout = ()=>{
  localStorage.clear()
}
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome} >
           <img src={myLogo} alt='myLogo' />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <AiOutlineBars />
          </MobileIcon>
          <NavM>
            <NavItem>
              <NavLinks to="/" onClick={toggleHome}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/aboutus"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About Us
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <Link
                to="/contactpage"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact
              </Link>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Discover
              </NavLinks>
            </NavItem>
          </NavM>
          <NavBtn>
            {user? (
              <NavBtnLink to="/" onClick={handleLogout}>Logout</NavBtnLink>
            ) : (
              <NavBtnLink to="/auth">Join Us</NavBtnLink>
            )}
            {/* <NavBtnLink to='/auth'>Join Us</NavBtnLink> */}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
