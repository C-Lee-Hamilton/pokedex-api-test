import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { pokeApi } from "../utils/consts";
import circle from '../components/bluecircle.png';
import logo from '../components/pokeball.ico';



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
      fetch(`${pokeApi}/pokemon?limit=151`)
        .then(r => r.json())
        .then( data => {
          
          setPokemon(data.results);
        })
   
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
        
        
          <div className={screen}>
          
          
          {(toggle &&
              
                <div >
                
                <img className="preview" src={Pic}/> 

                     <div className="scroll">
          { pokemon.length && pokemon.map((pokeman, index) => (
            <Pokeman key={index}><Link 
              onMouseOver={() => setPic("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index+1) + ".png")}
              onMouseLeave={() => setPic(logo)} 
              style={{color:"black", textDecoration:"none"}}to={`/pokemon/${index+1}`}>{pokeman.name}</Link></Pokeman>
          ))}
                     </div>
          
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