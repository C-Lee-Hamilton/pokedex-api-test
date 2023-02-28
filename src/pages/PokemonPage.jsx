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
  const [baby,setBaby]=useState();
  const [name,setName]=useState();
  const[poketype1,setPoketype1]=useState();
  const[poketype2,setPoketype2]=useState();
  const[pic,setPic]=useState();
  const[shiny,setShiny]=useState();
  const[toggle1,setToggle1]=useState(true);
  const[toggle2,setToggle2]=useState(false);
  const[number,setNumber]=useState();
  const[weak,setWeak]=useState();
  const [power,setPower]=useState("camera3");
  const [power2,setPower2]=useState("camera4");
  const { pokemonId } = useParams();
  const [light,setLight]=useState("switch2");
  const [toggle,setToggle]=useState(true);
  const [screen,setScreen]=useState("screen");


  const pokepic=()=>{
    toggle1 === true ? setToggle1(false):setToggle1(true);
    toggle2 === true ? setToggle2(false):setToggle2(true);
  }

  const showe=()=>{
    power==="camera2" ? setPower("camera3"):setPower("camera2");
    power2==="camera2" ? setPower2("camera4"):setPower2("camera2");
    light==="switch" ? setLight("switch2"):setLight("switch");
    toggle===true ? setToggle(false):setToggle(true);
    screen==="screen" ? setScreen("screenon"):setScreen("screen");
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
            setBaby("Evolves from: " + data.evolves_from_species.name);
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
    
<Container>
  <br></br>
<h1>Pokedex Page</h1>
<ListBox>
      <div className="attempter">
      <img className="camera" src={circle}/>
      <img className={power} src={circle}/>
      <img className={power2} src={circle}/>
      <img className="camera2" src={circle}/>
      </div>
       
      <div className={screen}>
      {(toggle &&
      <>

        <div className="top">{name} #{number}</div>
        <br></br>

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
      <p>{dex}</p>
      Weaknesses: {weak?.damage_relations?.double_damage_from?.map((double_damage_from,index)=>(<div key={index}>{double_damage_from.name}</div>))}
      Strengths: {weak?.damage_relations?.double_damage_to?.map((double_damage_to,index)=>(<div key={index}>{double_damage_to.name}</div>))}
      <p>Weight:{pokewe} kgs</p>
      <p>Height: {height} meters</p>
      <p>{baby}</p>
    
</div>
      
<button className="shine" onClick={pokepic}>Shiny</button>
        <Link className="home" to={`..`}>Home</Link>   
      </>)}
</div>
  
<div className="open">
    <br/>
    <label className={light}>
      <input onClick={showe}  type="checkbox"/>
      <span  className="slider2 round"></span>
    </label>

</div>
    
  </ListBox>
  </Container>

  )
}












const Container = styled.div`
 {
   width: 100%;
  
}
`
const ListBox = styled.div`
 {
   margin: 35px 0px 35px 450px;
   border: solid rgb(148, 39, 39) 5px;
   background-color:rgb(205, 58, 58);
   text-align:right;
   font-size:110%;
   border-radius: 15px;
   padding: 5px;
   justify-content: center;
   flex-direction: column;
   width: 400px;
   height: 590px;
   display: block;
   margin-left: auto;
   margin-right: auto;
   

 }
`


const Pokeman = styled.div`
{
 align-items: center;
 justify-content: center;
}
`