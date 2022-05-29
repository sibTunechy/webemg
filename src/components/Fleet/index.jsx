import React from 'react';
import { Button } from '../ButtonElements';
import { FleetContainer, FleetWrap, TextWrap, FleetRows, Column1, FleetHead, Fleetdetails,Column2, ImgWrap, Img } from '../Fleet/FleetElements';

function Fleet({lightBg, id, imgStart, img, alt, dark, primary, darkText, lightText, topLine, lightTextDesc}) {
  return (
    <>
        <FleetContainer lightBg={lightBg} id={id}>
            <FleetWrap>
                <FleetRows imgStart={imgStart}>
                    <Column1>
                        <TextWrap>
                            <FleetHead>{topLine}</FleetHead>
                            <Heading lighText={lighText}>{headline}</Heading>
                            <Fleetdetails darkText={darkText}>{description}Whether it's a financial lease, an operations lease, or any other lease solution, we build up structures and controls to run fleet operations and maximize profit. We handle operations
                                for your fleet using our innovative and professional employees, advanced technology, and pool of knowledge. To decrease theft and loss and improve operational efficiency, we identify, track and monitor
                                the condition of your cars in real time.
                                Depending on your specific needs, we provide a variety of tracking solutions. Our solutions will provide you a clear, thorough picyure of your fleet, reducing delays and expenses. We provide necessary products
                                and services to help you manage your fleet effectively and efficiently.
                            </Fleetdetails>
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