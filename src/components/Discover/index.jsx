import React from 'react';

const Discover = () => {
  return (
    <>
        <InfoCon>
            <InfoWraps>
                <InfoRows>
                    <Column1>
                        <TextWraps>
                            <TopLine></TopLine>
                            <Heading></Heading>
                            <Subtitle></Subtitle>
                            <BtnWraps>
                                <Button 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                ><LinkE to=''>
                                    More
                                </LinkE>
                                </Button>
                            </BtnWraps>
                        </TextWraps>
                    </Column1>
                    <Column2>
                        <Imgwraps>
                            <Img src={img} alt={alt}/>
                        </Imgwraps>
                    </Column2>
                </InfoRows>
            </InfoWraps>
        </InfoCon>
    </>
  )
}

export default Discover;