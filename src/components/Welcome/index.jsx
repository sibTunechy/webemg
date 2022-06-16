import React, {useEffect} from 'react';
import  '../../styles/Welcome.css';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  let navigate = useNavigate()
  
  
  const userTest = localStorage.getItem("profile")
 const data =JSON.parse (userTest)
//  console.log(userTest.result);
 const nname = data.result.name
 
  useEffect(()=>{
    if(!userTest){
    navigate('/auth')
    };

  })
  
  return (
    <>
        <div className='welcome-container'>
            <h1>Welcome {nname}</h1>
        </div>
    </>
  )
}

export default Welcome;