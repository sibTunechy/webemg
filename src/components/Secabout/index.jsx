import React from 'react';
import '../../styles/Secabout.css';
import mainimage from '../../images/yellowBulb.jpg';

const Secabout = () => {
  return (
    <>
        {/* <div className='first-section'> */}
            <h1>About Us</h1>
            <div className='first-wrapper'>            
                <div className='first-section-detail'>
                    <h1>Our Mission</h1>
                    <p>We create personalized, customer-centric experiences, the right technology and people with our
                        solutions deployed across various channels to suit the demography of the target market and analyze
                        the data from Our two-way engagement with the market for strategic use of clients.
                    </p>
                </div>
                <div className='first-section-image' >
                    
                </div>
            </div>
        {/* </div> */}

        {/* <div className='second-section'> */}
        <div className='second-container'>
            <div className='second-section-detail'>
                <h2>Excellence</h2>
                <br></br>
                <h3>Consistently delivering exceptional results.</h3>
                <p>Every employee's heart beat with the phrase of <em>Excellence</em>.
                To provide measureable value to ur stakholders, we go above and beyond the ordinary. 
                </p>
            </div>

            <div className='second-section-image'>
                {/* <img src={mainimage} height='500rem' width='600rem' alt='aboutimage'/> */}
            </div>
        </div>
        {/* </div> */}

        <div className='third-section'>
        <div className='third-container'>
                <div className='third-section-detail'>
                    <h2>Enterprise</h2>

                </div>

                <div className='third-section-image'>

                </div>
            </div>
        </div>

        <div className='fourth-section'> 
        <div className='fourth-container'>
                <div className='fourth-section-detail'>
                    <h2>Mission</h2>

                </div>

                <div className='fourth-section-image'>

                </div>
            </div>
        </div>
    </>
  )
}

export default Secabout;