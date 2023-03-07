import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPoke } from '../utils/lib';
import logo from '../components/pokeball.ico';
import { PokeDex } from './Dex';
import { pokeApi } from "../utils/consts";


export const List = () => {
  const [pokemon, setPokemon] = useState([]);
  const [Pic,setPic]=useState(logo);

  useEffect(() => {
    const fetchPoke = async () => {
      fetch(`${pokeApi}/pokemon?limit=151`)
        .then(r => r.json())
        .then( data => {
          
          setPokemon(data.results);
        })
      };
      fetchPoke();
    }, [])

  return (
    <div>
      <img className="preview" src={Pic}/> 
      <div className="scroll">
      { pokemon.length && pokemon.map((pokeman, index) => (
        <ListItem key={index}>
          <Link 
            onMouseOver={() => setPic("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index+1) + ".png")}
            onMouseLeave={() => setPic(logo)} 
            style={{color:"black", textDecoration:"none"}}to={`/pokemon/${index+1}`}
            >
              {pokeman.name}
          </Link>
        </ListItem>
      ))}</div>
    </div>
)
}

const ListItem = styled.div`
{
  align-items: center;
  justify-content: center;
}
`