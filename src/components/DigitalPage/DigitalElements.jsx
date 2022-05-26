import styled from 'styled-components';
import img from '../../images/Blacksetting.jpg';

export const DigitalContainer = styled.div`
    color: #fff;
    background-image: url('${img}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    // background-color: green;

    // make image the background//
    

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const DigitalWrap = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 600px;
    max-width: 1500px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    border: 5px solid red;
`;

export const DigitalRows = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`: `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

// export const Column2 = styled.div`
//     margin-bottom: 15px;
//     padding: 0 15px;
//     grid-area: col2;
// `;

export const DigitalText = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.div`
    color: #01bf71;
    font-size: 25px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.p`
    // font-family: Georgia, 'Times New Roman', Times, serif;
    // margin-top: 24px;

    // align text here

    text-align: center;
    font-size: 24px;
    max-width: 900px;
    line-height: 180%;
    text-shadow: 1px -1px blue;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? 'white' : 'white')};

    @media screen and (max-width : 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-shadow: 1px 1px black;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 28px;
    line-height: 140%;
    // justify-content: center;
    // align-items: center;
    // align-text: center;
    color: ${({darkText}) => (darkText ? 'white' : 'white')};
`;

// export const DigitalImage = styled.div`
//     max-width: 555px;
//     height: 100%;
// `;

// export const Img = styled.img`
//     width: 100%;
//     margin: 0 0 10px 0;
//     padding-right: 0;
// `;