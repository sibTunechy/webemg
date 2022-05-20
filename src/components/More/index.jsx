import React from 'react';
import { Container, SectionWrap, SectionContent, SectionContent2, SectionContent3, Heading, Paragraph, Heading2, Paragraph2, Heading3, Paragraph3, ImgWrapper, Img } from './MoreElements';

const More = ({lightBg, id, imgStart, lightText, darkText, img, alt}) => {
  return (
    <>
      <Container lightBg={lightBg} id={id}>
        <SectionWrap imgStart={imgStart}>
          <SectionContent>
              <Heading lightText={lightText}>{Heading}</Heading>
              <Paragraph darkText={darkText}>{Paragraph}</Paragraph>
          </SectionContent>
          <SectionContent2>
              <Heading2 lightText={lightText}>{Heading2}</Heading2>
              <Paragraph2 darkText={darkText}>{Paragraph2}</Paragraph2>
          </SectionContent2>
          <SectionContent3>
              <Heading3 lightText={lightText}>{Heading3}</Heading3>
              <Paragraph3 darkText={darkText}>{Paragraph3}</Paragraph3>
          </SectionContent3>
          <ImgWrapper>
              <Img src={img} alt={alt}/>
          </ImgWrapper>
        </SectionWrap>
      </Container>
    </>
  )
}

export default More;