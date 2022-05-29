import React from 'react';
import { Button } from '../ButtonElements';
import { FleetContainer, FleetWrap, TextWrap, FleetRows, Column1, FleetHead, Fleetdetails,Column2, ImgWrap, Heading, BtnWrap, Img } from '../Fleet/FleetElements';

function Fleet({lightBg, id, imgStart, img, alt, dark, primary, darkText, lightText, topLine, headline, description, dark2, lightTextDesc}) {
  return (
    <>
        <FleetContainer lightBg={lightBg} id={id}>
            <FleetWrap>
                <FleetRows imgStart={imgStart}>
                    <Column1>
                        <TextWrap>
                            <FleetHead>{topLine}</FleetHead>
                            <Heading lighText={lightText}>{headline}</Heading>
                            <Fleetdetails darkText={darkText}>{description}</Fleetdetails>
                            <BtnWrap>
                                <Button smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark= {dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}>
                                </Button>
                            </BtnWrap>
                        </TextWrap>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </FleetRows>
            </FleetWrap>
        </FleetContainer>
    </>
  )
}

export default Fleet;