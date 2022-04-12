import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='/' onClick={toggle}>Home</SidebarLink>
                <SidebarLink to='about' onClick={toggle}>About Us</SidebarLink>
                <SidebarLink to='services' onClick={toggle}>Service</SidebarLink>
                <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/joinus' onClick={toggle}>Join Us</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;