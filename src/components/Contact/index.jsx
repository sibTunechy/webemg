import React from 'react';
import Contactimg from '../../images/contactimg.png';

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${Contactimg})`}}>
      </div>
      <div className='rightSide'></div>
    </div>
  )
}


export default Contact;