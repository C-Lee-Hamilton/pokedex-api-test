import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokeApi } from "../utils/consts"


export const PokemonPage = () => {
  const [ pokemon, setPokemon ] = useState();
  const [ pokeinfo, setPokeinfo]=useState();
  const [dex,setDex]=useState("");
  const [pokewe,setPokewe]=useState(" ");
  const [height,setHeight]=useState();
  const [baby,setBaby]=useState();
  const [name,setName]=useState();
  const[poketype1,setPoketype1]=useState();
  const[poketype2,setPoketype2]=useState();
  const[pic,setPic]=useState();
  const[shiny,setShiny]=useState();
  const[pictoggle1,setPictoggle1]=useState(true);
  const[pictoggle2,setPictoggle2]=useState(false);
  
  
  const { pokemonId } = useParams();
  console.log('Pokemon ID: ', pokemonId);
  const shine=()=>{pictoggle1===false ? setPictoggle1(true):setPictoggle1(false);
  pictoggle2===true ? setPictoggle2(false):setPictoggle2(true);}

  useEffect(() => {
    const fetchPoke = async () => {
       fetch(`${pokeApi}/pokemon/${pokemonId}`)
      
         .then(r => r.json())
         .then( data => {
         
            setName(data.name);
            setPic(data.sprites.front_default);
            setShiny(data.sprites.front_shiny);
           setPokemon(data);
            setPokewe(data.weight/10);
            setHeight(data.height/10);
            setPoketype1(data.types[0].type.name);
            setPoketype2("/" + data.types[1].type.name);
            console.log(data);
            console.log(data.types[0].type.name);
            console.log(data.types[1].type.name);
          })
      };
      fetchPoke();
    }, [])
    

    useEffect(() => {
      const catchPoke = async () => {
         fetch(`${pokeApi}/pokemon-species/${pokemonId}`)
        
           .then(r => r.json())
           .then( data => {
              
              setPokeinfo(data);
              console.log(data.flavor_text_entries[1]);
              console.log(data);
              console.log(data.flavor_text_entries[1].flavor_text);
            setDex(data.flavor_text_entries[1].flavor_text);
            setBaby("Evolves from: " + data.evolves_from_species.name);
            
            })
        };
        catchPoke();
      }, [])



  return(
    <div>
<h1>Pokedex Page</h1>

      {name}
      <p>Type: {poketype1}{poketype2} </p>
      {/* {pokemon?.types?.map((type, index) => (<div key={index}>{type.type.name}</div>))} */}
      <p>{dex}</p>
      <p>Weight:{pokewe} kgs</p>
      <p>Height: {height} meters</p>
      <p>{baby}</p>
      {pictoggle1 && (
     <div>
      <img src={pic} />
</div>
      )}
      {pictoggle2 && (
<div>    
      <img src={shiny}/>
    </div>
      )}
      <button onClick={shine}>Shiny</button>
      

    </div>
  )
}