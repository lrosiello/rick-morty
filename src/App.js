import image from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  // destructuring de useState para usar con los datos que se van a solicitar a la api
  const [characters, setCharacters] = useState(null);

  //PETICION DE INFORMACION A LA API
  async function reqApi() {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json(); //convierte en json los personajes importados por la api
    setCharacters(characterApi.results); //results es un array de personajes
  }
  /////////

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? ( //Condicional en lenguaje JSX, si contiene algo es con ?
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          //el dos puntos significa else
          <>
            <img src={image} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
