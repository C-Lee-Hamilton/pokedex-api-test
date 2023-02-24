import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokeApi } from "../utils/consts"


export const PokemonPage = () => {
  const [ pokemon, setPokemon ] = useState();
  const [ pokeinfo, setPokeinfo]=useState();
  const { pokemonId } = useParams();
  console.log('Pokemon ID: ', pokemonId);

  useEffect(() => {
    const fetchPoke = async () => {
       fetch(`${pokeApi}/pokemon/${pokemonId}`)
      
         .then(r => r.json())
         .then( data => {
            console.log(data);
           setPokemon(data);
        })
      };
      fetchPoke();
    }, [])

    useEffect(() => {
      const catchPoke = async () => {
         fetch(`${pokeApi}/pokemon-species/${pokemonId}`)
        
           .then(r => r.json())
           .then( data => {
              console.log(data);
              setPokeinfo(data);
          })
        };
        catchPoke();
      }, [])

  return(
    <div>
      Lets display a pokemon!
      {pokemon?.name}
      
      {pokemon?.types?.map((type, index) => (<div key={index}>{type.type.name}</div>))}

   

      <img src={pokemon?.sprites.front_default} />
      

    </div>
  )
}