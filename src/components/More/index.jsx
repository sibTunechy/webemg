import React from 'react';
import { Container, SectionWrap, InfoRow, Column1, Column2, SectionContent, Heading, Paragraph, Heading2, Paragraph2, Heading3, Paragraph3, ImgWrapper, Img } from './MoreElements';

const More = ({lightBg, id, imgStart, lightText, darkText, img, alt}) => {
  return (
    <>
      <Container lightBg={lightBg} id={id}>
        <SectionWrap>
          <InfoRow imgStart={imgStart}>
            <Column1>
                <SectionContent>
                      <Heading lightText={lightText}>{Heading}</Heading>
                      <Paragraph darkText={darkText}>{Paragraph}</Paragraph>
                  {/* <SectionContent2> */}
                      <Heading2 lightText={lightText}>{Heading2}</Heading2>
                      <Paragraph2 darkText={darkText}>{Paragraph2}</Paragraph2>
                  {/* </SectionContent2> */}
                  {/* <SectionContent3> */}
                      <Heading3 lightText={lightText}>{Heading3}</Heading3>
                      <Paragraph3 darkText={darkText}>{Paragraph3}</Paragraph3>
                  {/* </SectionContent3> */}
                </SectionContent>
            </Column1>
            <Column2>
              <ImgWrapper>
                  <Img src={img} alt={alt}/>
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </SectionWrap>
      </Container>
    </>
  )
}

export default More;