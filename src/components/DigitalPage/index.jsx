import React from 'react'

function Digital() {
  return (
    <>
        <DigitalContainer>
            <DigitalWrap>
                <DigitalRows>
                    <Column1>
                        <DigitalText>
                            <TopLine></TopLine>
                            <Heading></Heading>
                            <Subtitle></Subtitle>
                        </DigitalText>
                    </Column1>
                    <Column2>
                        <DigitalImage>
                            <Img src={img} alt={alt}/>
                        </DigitalImage>
                    </Column2>
                </DigitalRows>
            </DigitalWrap>
        </DigitalContainer>
    </>
  )
}

export default Digital;