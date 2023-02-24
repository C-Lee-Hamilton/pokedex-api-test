import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { pokeApi } from "../utils/consts";
import circle from '../components/bluecircle.png';
import logo from '../components/pokeball.ico';

const data = [
  {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/1/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    "name": "ivysaur",
    "url": "https://pokeapi.co/api/v2/pokemon/2/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
 },
  {
    "name": "venusaur",
    "url": "https://pokeapi.co/api/v2/pokemon/3/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    "name": "charmander",
    "url": "https://pokeapi.co/api/v2/pokemon/4/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    "name": "charmeleon",
    "url": "https://pokeapi.co/api/v2/pokemon/5/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  },
  {
    "name": "charizard",
    "url": "https://pokeapi.co/api/v2/pokemon/6/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  },
  {
    "name": "squirtle",
    "url": "https://pokeapi.co/api/v2/pokemon/7/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  {
    "name": "wartortle",
    "url": "https://pokeapi.co/api/v2/pokemon/8/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
  },
  {
    "name": "blastoise",
    "url": "https://pokeapi.co/api/v2/pokemon/9/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
  },
  {
    "name": "caterpie",
    "url": "https://pokeapi.co/api/v2/pokemon/10/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
  },
  {
    "name": "metapod",
    "url": "https://pokeapi.co/api/v2/pokemon/11/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
  },
  {
    "name": "butterfree",
    "url": "https://pokeapi.co/api/v2/pokemon/12/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
  },
  {
    "name": "weedle",
    "url": "https://pokeapi.co/api/v2/pokemon/13/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
  },
  {
    "name": "kakuna",
    "url": "https://pokeapi.co/api/v2/pokemon/14/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
  },
  {
    "name": "beedrill",
    "url": "https://pokeapi.co/api/v2/pokemon/15/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
  },
  {
    "name": "pidgey",
    "url": "https://pokeapi.co/api/v2/pokemon/16/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
  },
  {
    "name": "pidgeotto",
    "url": "https://pokeapi.co/api/v2/pokemon/17/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
  },
  {
    "name": "pidgeot",
    "url": "https://pokeapi.co/api/v2/pokemon/18/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
  },
  {
    "name": "rattata",
    "url": "https://pokeapi.co/api/v2/pokemon/19/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
  },
  {
    "name": "raticate",
    "url": "https://pokeapi.co/api/v2/pokemon/20/",
    "sprite":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
  }
]

export const List = () => {
  const [pokemon, setPokemon] = useState([]);
  const [Pic,setPic]=useState(logo);
  const [toggle,setToggle]=useState(false);
  const [power,setPower]=useState("camera2");
  const [power2,setPower2]=useState("camera2");
  const [screen,setScreen]=useState("screen");
  const [light,setLight]=useState("switch");
  const [vis,setVis]=useState(true);

 

    useEffect(() => {
    const fetchPoke = async () => {
      // fetch(`${pokeApi}/pokemon`)
      //   .then(r => r.json())
      //   .then( data => {
      //     console.log(data.results);
      //     setPokemon(data.results);
      //   })
   
      setPokemon(data);
      console.log(pokemon);
    };
    fetchPoke();
  }, [])
 const showe=()=>{toggle===true ? setToggle(false):setToggle(true);
                 power==="camera2" ? setPower("camera3"):setPower("camera2");
                 power2==="camera2" ? setPower2("camera4"):setPower2("camera2");
                 screen==="screen" ? setScreen("screenon"):setScreen("screen");
                 light==="switch" ? setLight("switch2"):setLight("switch");
                 vis===true ? setVis(false):setVis(true);
                }

  return (
    <Container>
     
      <ListBox><div className="attempter">
      <img className="camera" src={circle}/>
      <img className={power} src={circle}/>
      <img className={power2} src={circle}/>
      <img className="camera2" src={circle}/>
      </div>
        <ListHeader>
       
       
        </ListHeader>
        
          <div className={screen}>
          
          
          {(toggle &&
              
                <div className="dextext">
                
                <img className="preview" src={Pic}/> 
          { pokemon.length && pokemon.map((pokeman, index) => (
            <Pokeman key={index}><Link 
              onMouseOver={() => setPic("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index+1) + ".png")}
              onMouseLeave={() => setPic(logo)} 
              style={{color:"black"}}to={`/pokemon/${index+1}`}>{pokeman.name}</Link></Pokeman>
          ))}
          
          </div>
          )}
          </div>
          
        
        <div className="open">

     
     <br/>
     <label className={light}>
          <input onClick={showe}  type="checkbox"/>
          <span className="slider round"></span>
        </label>

        </div>
      {/* <img src={Pic} />
      <br/>
      {Pokemon.name}
      <br/>
      <button onClick={newPoke}>new</button>
     
      </ListBox>
      <Link to={`/pokemon/${Pokemon.id}`}>Pokemon</Link> */}
     
     
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

const ListHeader = styled.div`
  { text-align:center;
    align-items: center;
    border-bottom: double rgb(148, 39, 39) 4px;
    font-size:120%;
    color:yellow;

    
  }
`
const Pokeman = styled.div`
{
  align-items: center;
  justify-content: center;
}
`