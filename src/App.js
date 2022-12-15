import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Character from './components/Character';

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  padding: 5px 8%;
  justify-content: space-around;
  align-content: center;
`
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: papayawhip;
  padding: 3%
  width: 35%
  border-radius: 20px;
`

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
    <>
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
    <StyledMainContainer className='main-container'>
      <StyledContainer className='character-container'>
        {
          characters.map((char) => {
            return <Character key={char.key} action={loadedDetails} props={char}/>
          })
        }
      </StyledContainer>
      <StyledContainer className='details'>
        
      </StyledContainer>
    </StyledMainContainer>
    </>
  );
}

export default App;
