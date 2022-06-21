import React from 'react';
import '../../styles/Secabout.css';

const Secabout = () => {
  return (
    <>
        <div className='first-section'>
            <h1>About Us</h1>
            <div className='first-wrapper'>            
                <div className='first-section-detail' style={{float:'left',width:'50%',height:'100%'}}>
                    <h1>Our Mission</h1>
                    <p>We create personalized, customer-centric experiences, the right technology and people with our
                        solutions deployed across various channels to suit the demography of the target market and analyze
                        the data from Our two-way engagement with the market for strategic use of clients.
                    </p>
                </div>
                <div className='first-section-image' style={{float:'left',width:'50%',height:'100%'}} >

                </div>
            </div>
        </div>

        <div className='second-section'>
            <div className='second-container'>
                <div className='second-section-detail'>
                    <h2>Excellense Statement</h2>

                </div>

                <div className='second-section-image'>

                </div>
            </div>
        </div>

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