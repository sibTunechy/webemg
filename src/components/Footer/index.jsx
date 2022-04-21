import React from 'react';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            <FooterLink to='/about'>About Us</FooterLink>
                            <FooterLink to='/about'>How it works</FooterLink>
                            <FooterLink to='/about'>Testimonials</FooterLink>
                            <FooterLink to='/about'>Careers</FooterLink>
                            <FooterLink to='/about'>Terms of Use</FooterLink>
                            <FooterLink to='/about'>Privacy Policy</FooterLink>
                        </FooterLinkTitle>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;