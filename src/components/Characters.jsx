import React from 'react';
import './CSS/characters.css';

const Characters = (darkMode) =>
{
    const [characters, setCharacters] = React.useState([])
    
    React.useEffect(() =>
    {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }, []);

    return(
        <div className="Characters">
            {characters.map(character => (
                <div className='character'>
                    <img src={character.image} />
                    <h2 className="name, text">{character.name}</h2>
                    <p>Species: {character.species}</p>
                    <p>Status: {character.status}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin.name}</p>
                    <p>Location: {character.location.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Characters;