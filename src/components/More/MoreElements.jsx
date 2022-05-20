import styled from 'styled-components';

export const Container = styled.div`
    // background-color: green;
    // background: ${({lightBg}) => (lightBg ? '#f9f9f9' : 'white')};
    opacity: 1;
    color: green;
    // display: grid;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const SectionWrap = styled.div`
    // padding-top: 0;
    // padding-bottom: 60px;
    // max-width: 540px;
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const SectionContent = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const SectionContent2 = styled.div`
    
`;

export const SectionContent3 = styled.div`
   
`;

export const Heading = styled.h1`
    color: #01bf71;
    font-size: 25px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    padding-top: 20px;
`;

export const Paragraph = styled.p`

`;

export const Heading2 = styled.h2`
    color: #01bf71;
    font-size: 25px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Paragraph2 = styled.p`

`;

export const Heading3 = styled.h2`
    color: #01bf71;
    font-size: 25px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Paragraph3 = styled.p`

`;

export const ImgWrapper = styled.div`

`;

export const Img = styled.img`

`;
