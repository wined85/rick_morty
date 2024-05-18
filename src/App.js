//import logo from './logo.svg';
import imagen1 from "../src/assets/rick-morty.png";
import {useState} from "react";
import './App.css';

import  Personajes  from "./components/Personajes";


function App() {
  const [characters, setCharacters] = useState(null);
  const requestApi = async () => {
    console.log('Hola');
    const api = await fetch("https://rickandmortyapi.com/api/character");
    console.log(api);
    const characterApi = await api.json();
    console.log(characterApi);    
    console.log(characters);
    setCharacters(characterApi.results);
    console.log(characters);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'> Rick and Morty</h1>

        {characters ? (
          <Personajes characters = {characters}></Personajes>
        ) : (
          <>
            <img src={imagen1} className='img-home' alt="logo"></img>
            <button onClick = {requestApi} className = "btn-search">Buscar Personaje</button>
          </>
        )}

        
        
      </header>
    </div>
  );
}

export default App;
