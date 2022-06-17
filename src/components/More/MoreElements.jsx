import styled from 'styled-components';

export const MoreContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.6) 100%
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent
        100%);
        z-index: 2;
    }
`;

export const MoreBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const MoreContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px solid red;

    // @media screen and (max-width: 480px) {
    //     max-height: 30px;
    //     padding-top: 100px;
    // }
`;

export const MoreH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const MoreP = styled.p`
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 900px;
    line-height: 180%;
    text-shadow: 1px -1px;
    // background-color: #01BF71;

    @media screen and (max-width: 768px) {
        padding: 10px;
        margin-top: 100px;
        line-height: 140%;
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        padding: 10px;
        margin-top: 100px;
        line-height: 140%;
        font-size: 18px;
    }
`;

