import React, { useContext, useEffect } from 'react';
import './App.css';
import { Character } from './interfaces/StartWars';
import { ContextStarWars } from './store/ContextStarWars';


function App() {
  const { onLoadCharacters, characters, character, onLoadCharacter, onChangePage, maxPage, currentPage } = useContext(ContextStarWars)

  const handleGetDetail = (character: Character) => {
    onLoadCharacter(character)
  }
  const handleChangePage = (page: number) => {
    onChangePage(page)
  }

  useEffect(() => {
    onLoadCharacters()
  }, [onLoadCharacters])

  return (
    <div className="App">
      <h1>Personajes</h1>
      {
        characters && characters.map(character => (
          <p key={character.name} onClick={() => handleGetDetail(character)}>{character.name}</p>
        ))
      }

      <h2>detalle</h2>
      {
        character && (
          <div>
            <p>{character.name}</p>
            <p>{character.birth_year}</p>
          </div>
        )
      }

      <button disabled={currentPage === 1} onClick={() => handleChangePage(currentPage - 1)}>prev</button>
      {
        Array.from({ length: maxPage }, (_, i) => i).map(page => (
          <button
            key={page}
            className={currentPage === page + 1 ? 'active' : ''}
            onClick={() => handleChangePage(page + 1)}>
            {page + 1}
          </button>
        ))
      }
      <button disabled={currentPage === maxPage} onClick={() => handleChangePage(currentPage + 1)}>next</button>

    </div>
  );
}

export default App;
