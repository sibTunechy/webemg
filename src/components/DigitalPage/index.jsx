import React from 'react';
import { DigitalContainer, DigitalWrap, DigitalRows, Column1, Column2, DigitalImage, Img, DigitalText, TopLine, Heading, Subtitle  } from '../DigitalPage/DigitalElements';

function Digital({lightBg, id, topLine, imgStart, lightText, darkText, headline, description, img, alt}) {
  return (
    <>
        <DigitalContainer lightBg={lightBg} id={id}>
            <DigitalWrap>
                {/* <DigitalRows imgStart={imgStart}> */}
                    <Column1>
                        <DigitalText>
                            <TopLine>DIGITAL TECHNOLOGY</TopLine>
                            <Heading  lightText={lightText}>Advanced Agile and other SDLC (Software Development Life Cycle) Methodologies, Cyber Security, Cloud Computing, Design thinking/Product Development Labs, and others are among our digital technology strengths. With SORO, we are championing new ways for governments and public servants to communicate with the general public, one personal text at a time. Platform as a Service (PaaS) and Software as a Servive (SaaS) are scalable solutions for businesses of all sizes. Our technologies have ushered new era of automation and great customer service where customer is king and the most innovative way wins.</Heading>
                            {/* <Subtitle darkText={darkText}>With SORO, we are championing new ways for governments and public servants to communicate with the general public, one personal text at a time. Platform as a Service (PaaS) and Software as a Servive (SaaS) are scalable solutions for businesses of all sizes. Our technologies have ushered new era of automation and great customer service where customer is king and the most innovative way wins.</Subtitle> */}
                        </DigitalText>
                    </Column1>
                    {/* <Column2>
                        <DigitalImage>
                            <Img src={img} alt={alt}/>
                        </DigitalImage>
                    </Column2> */}
                {/* </DigitalRows> */}
            </DigitalWrap>
        </DigitalContainer>
    </>
  )
}

export default Digital;