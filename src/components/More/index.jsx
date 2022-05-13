import React from 'react';
import { Container, SectionWrap, SectionContent, SectionContent2, SectionContent3, Heading, Paragraph, Heading2, Paragraph2, Heading3, Paragraph3 } from './MoreElements';

const More = () => {
  return (
    <>
      <Container>
        <SectionWrap>
          <SectionContent>
              <Heading>Our Mission</Heading>
              <Paragraph>We create Personalized, customer-centric experiences, the right technology and people with our solutions deployed across various channels to suit the demography of the target market and analyze the data from Our two-way engagement with the market for the strategic use of clients.</Paragraph>
          </SectionContent>
          <SectionContent2>
              <Heading2>Execution</Heading2>
              <Paragraph2>A strong drive to see things through to completion as quickly, efficiently, and effectively as possible. We believe in the time to see projects through from start to finish in order to get exceptional results.</Paragraph2>
          </SectionContent2>
          <SectionContent3>
              <Heading3>Enterprise</Heading3>
              <Paragraph3>Having the will and commitment to go to any length to complete a task. What differentiates us in a competitive business atmosphere is our individual and collective duty to own our goals and lead creative projects leading us to achieving them.</Paragraph3>
          </SectionContent3>
        </SectionWrap>
      </Container>
    </>
  )
}

export default More;