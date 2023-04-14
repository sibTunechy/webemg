import React from 'react';
import Icon4 from '../../images/timegear.jpg';
import './styles.css';

const Infosec = () => {
  return (
    <>  
    <div>
      <h1>Digital Technology</h1>
      <span>Advanced Agile and other SDLC (Software Development Life Cycle) Methodologies, Cyber Security, Cloud Computing, Design thinking/Product Development Labs, and others are among our digital technology strengths.</span>
    </div>
    <br></br>
    <div className='container-parent'>
      <div className='div-info'>
        <h1>With SORO, we are championing new ways for governments and public servants to communicate with the general public, one personal text at a time.</h1>
        <p>Platform as a Service (PaaS) and Software as a Servive (SaaS) are scalable solutions for businesses of all sizes. Our technologies have ushered new era of automation and great customer service where customer is king and the most innovative way wins.</p>
      </div>
      <div className='div-image'>
        <img alt='timegear' src={Icon4} width='80' height='150'/>
      </div>
    </div>     
    </>
  )
}

export default Infosec;