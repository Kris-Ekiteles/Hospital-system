import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'



const Home = () => {
    const navigate = useNavigate();
    const navigateToRegistration = () => {
        navigate('/Registration');
    }
    const Navigate = useNavigate();
    const navigatetoAmbulance = () => {
      navigate('/Ambulance');
    }

  return (
    <div>
      <h1>welcome to the emergency patient registration</h1>
       <div className="CTA">
        <button onClick={navigateToRegistration}>Get Started</button>
        <button onClick={navigatetoAmbulance}>Request an Ambulance</button>
    </div>
    </div>
   
  )
}

export default Home
