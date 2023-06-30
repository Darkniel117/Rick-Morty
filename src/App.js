import ImgRickmorty from "./img/rick-morty.png"
import './Styles/App.css';
import { useState } from "react";
import Characters from "./Components/Characters";
function App() {
  const [characters, setCharacters] = useState(null);
  const ReqApi = async() =>{
    const Api = await fetch("https://rickandmortyapi.com/api/character/")
    const characterApi = await Api.json();

    setCharacters(characterApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>

        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          //Fractment
          <>
          <img src={ImgRickmorty} alt="Rick & Morty" className="img-home"></img>
          <button onClick={ReqApi} className="btn-search">Buscar Personaje</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
