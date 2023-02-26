import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../components/pokeball.ico';
import { PokeDex } from './PokeDex';
import { fetchPoke } from '../utils/lib';


export const List = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pic,setPic]=useState(logo);

  useEffect(() => {
    fetchPoke(setPokemon);
  }, [])

  return (
      <div className="dextext">
        <img className="preview" src={pic}/> 
        { pokemon.length && pokemon.map((pokeman, index) => (
          <ListItem key={index}>
            <Link 
              onMouseOver={() => setPic(pokeman.sprite)}
              onMouseLeave={() => setPic(logo)} 
              style={{color:"black", textDecoration:"none"}}to={`/pokemon/${index+1}`}
              >
                {pokeman.name}
            </Link>
          </ListItem>
        ))}
      </div>
  )
}

const ListItem = styled.div`
{
  align-items: center;
  justify-content: center;
}
`