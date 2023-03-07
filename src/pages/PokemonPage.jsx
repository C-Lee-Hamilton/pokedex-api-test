import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pokeApi } from "../utils/consts";
import circle from '../components/bluecircle.png';
import styled from 'styled-components';
import logo from '../components/pokeball.ico';
import { Link } from 'react-router-dom';

export const PokemonPage = () => {
  const [ pokemon, setPokemon ] = useState();
  const [ pokeinfo, setPokeinfo]=useState();
  const [dex,setDex]=useState("");
  const [pokewe,setPokewe]=useState(" ");
  const [height,setHeight]=useState();
  const [name,setName]=useState();
  const[poketype1,setPoketype1]=useState();
  const[poketype2,setPoketype2]=useState();
  const[pic,setPic]=useState();
  const[shiny,setShiny]=useState();
  const[toggle1,setToggle1]=useState(true);
  const[toggle2,setToggle2]=useState(false);
  const[number,setNumber]=useState();
  const[weak,setWeak]=useState();
  const[next,setNext]=useState();
  const { pokemonId } = useParams();
 
  const pokepic=()=>{
    toggle1 === true ? setToggle1(false):setToggle1(true);
    toggle2 === true ? setToggle2(false):setToggle2(true);
  }

  useEffect(() => {
    const fetchPoke = async () => {
       fetch(`${pokeApi}/pokemon/${pokemonId}`)
      
         .then(r => r.json())
         .then( data => {
            setNumber(data.id);
            setName(data.name);
            setPic(data.sprites.front_default);
            setShiny(data.sprites.front_shiny);
            setPokemon(data.results);
            setPokewe(data.weight/10);
            setHeight(data.height/10);
            setPoketype1(data.types[0].type.name);
            setPoketype2("/" + data.types[1].type.name);
            setNext(data.id+1)
            console.log(data.id)
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
            setDex(data.flavor_text_entries[1].flavor_text);
           
           })
        };
        catchPoke();
      }, [])

      useEffect(() => {
        const hatchPoke = async () => {
           fetch(`${pokeApi}/type/${pokemonId}`)
          
             .then(r => r.json())
             .then( data => {
                setWeak(data);
             })
          };
          hatchPoke();
        }, [])

      useEffect(() => {
          const patchPoke = async () => {
             fetch(`${pokeApi}/evolution-chain/${pokemonId}`)
            
               .then(r => r.json())
               .then( data => {
              })
            };
            patchPoke();
          }, [])



  return(
    <div>
      
      <div className="top">{name} #{number}</div>
       

        { toggle1 && (
            <div>
              <img className="preview" src={pic} />
            </div>
          )}
        { toggle2 && ( 
            <div>
         <img className="preview" src={shiny} />
            </div>
        )}

<div className="scroll3">
    
      <p>Type: {poketype1}{poketype2} </p>
      <p>Weight:{pokewe}  kgs   </p>
      <p>Height: {height} meters</p>
      <p>Weaknesses: {weak?.damage_relations?.double_damage_from?.map((double_damage_from,index)=>(<div key={index}>{double_damage_from.name}</div>))}</p>
      <p>Strengths: {weak?.damage_relations?.double_damage_to?.map((double_damage_to,index)=>(<div key={index}>{double_damage_to.name}</div>))}</p>
    
     
    
</div>

      


<button className="shine" onClick={pokepic}>Shiny</button>
<p className="info">{dex}</p>
        <Link className="home" to={`..`}>Home</Link>  
        {/* <Link className="home" to={`${next}`}>Next</Link>   */}
        
         
   
      
</div>



  )
}
















