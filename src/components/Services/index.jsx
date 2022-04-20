import React from 'react'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon}/>
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP></ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;