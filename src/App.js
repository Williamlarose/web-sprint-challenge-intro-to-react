import React, { useEffect, useState } from 'react';
import './App.css';
import People from './components/Character'
import Details from './Details'

import axios from 'axios'

const App = () => {
  const [cast, setCast] = useState([])
  const [peopleName, setPeoplename] = useState(null)

  function Open(name) {
    setPeoplename(name)
    console.log('yp', name)
  }
  function Close() {
    setPeoplename(null)
  }
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(yo => {
        setCast(yo.data)

        // setname(yo.data.name); setgender(yo.data.gender);
        // sethair(yo.data.hair_color); setmass(yo.data.mass)
        // setheight(yo.data.height); setbirth(yo.data.birth_year)

      })
      .catch(err => {

      })
  }, [])





  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (

    < div className="App" >
      <h1 className="Header">Character</h1>
      {cast.map((obj, ind) => { return <People key={ind} person={obj} open={Open} /> })}

      {cast.map((obj, ind) => {
        return
        <Details key={ind} close={Close} person={obj} />
      })}

    </div >

  );
}

export default App;