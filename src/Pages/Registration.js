import React from 'react'
import './Home.css'
const Registration = () => {
  return (
    <div>
      <h1>welcome and feel free to register</h1>
      <form action="#">
        <div className="form-group">
          <h2>Fill out the form bellow</h2>
        <label for="name">Patient First Name</label>
        <input type="text" placeholder='enter Patient name' id='name' />
        <label for="lastName">Patient LastName</label>
        <input type="text" placeholder='enter last name' id='lastName' />
        <label for="age">Age</label>
        <input type="number" placeholder='enter patients age' id='age'/>
        <label for="alergy">Alargies</label>
        <input type="text" placeholder='Any alergies should be provided here' id='alergy'/>
        <button>Submit</button>
        </div>
      </form>
          
    </div>
  ) 
}

export default Registration
