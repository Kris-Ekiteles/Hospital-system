import React from 'react'
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate();
    const navigateToRegistration = () => {
        navigate('/Registration');
    }
  return (
    <div>
      <h1>welcome to the emergency patient registration</h1>
       <div className="CTa">
        <button onClick={navigateToRegistration}>Get Started</button>
    </div>
    </div>
   
  )
}

export default Home
