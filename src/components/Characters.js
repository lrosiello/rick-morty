export default function characters(props) {
  //Antes se hacia asi
  // const characters = props.characters
  // const setCharacters = props.characters

  //ahora con ES6
  const { characters, setCharacters } = props;

  const resetCharacters =  () => {
    setCharacters(null);
  }

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>volver a la home</span>
      <div className="container-characters">
        {characters.map((character, index) => (  //return implicito, utilizamos map para recorrer y su index
            <div className="character-container" key={index}>
                <div>
                    <img src={character.image} alt={character.name}/>   
                </div>
                <div>
                    <h3>{character.name}</h3>
                    <h6> 
                        {character.status === "Alive" ? (
                          <>
                          <span className="alive"></span>
                          Alive
                          </>
                        ) : (
                          <>
                          <span className="dead"></span>
                          Dead
                          </>
                        ) }
                    </h6>

                    <p>
                          <span className="text-grey">Episodos: </span>
                          <span>{character.episode.length}</span>
                    </p>
                    <p>
                          <span className="text-grey">Especie: </span>
                          <span>{character.species}</span>
                    </p>
                </div>
            </div>
          )
        )}
      </div>
      <span className="back-home" onClick={resetCharacters}>Volver a la home</span>
    </div>
  );
}
