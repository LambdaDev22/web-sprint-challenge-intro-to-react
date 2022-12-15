import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);
  const [activeCharacter, setActiveCharacter] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  //https://swapi.dev/api/films/

  const loadedDetails = key => {
    setActiveCharacter(key);
  };

  const closedDetails = () => {
    setActiveCharacter(null);
  };

  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/`)
      .then(res => {
        const data = res.data;
        data.forEach((element, index) => {
          element.key = index + 1;
        });
        setCharacters(data);
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
