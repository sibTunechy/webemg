import React from 'react';

function InfoSectC() {
  return (
    <>
        <InfoContain>
            <InfoWrap>
                <InfoRow>
                    <Column1>
                        <TextWrap>
                            <TopLine></TopLine>
                            <Heading></Heading>
                            <Subtitle></Subtitle>
                            <BtnWrap>
                                <Button 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                ><LinkF to='/'>
                                    
                                </LinkF>
                                </Button>
                            </BtnWrap>
                        </TextWrap>
                    </Column1>
                </InfoRow>
            </InfoWrap>
        </InfoContain>
    </>
  )
}

export default InfoSectC;