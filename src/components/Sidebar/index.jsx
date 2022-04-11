import React from 'react';
import { SidebarContainer, Icon, CloseIcon } from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='/'>Home</SidebarLink>
                <SidebarLink to='about'>About Us</SidebarLink>
                <SidebarLink to='services'>Service</SidebarLink>
                <SidebarLink to='discover'>Discover</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/joinus'>Join Us</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;