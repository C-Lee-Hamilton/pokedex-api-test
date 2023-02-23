import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { pokeApi } from "../utils/consts"

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
  const [Pic,setPic]=useState();
  // let j=Math.floor(Math.random() * 21);
  // let newRandomPoke=data[j].name;
  // let randomPic=data[j].sprite;

  // const newPoke=()=>{
  //   setPic(randomPic);
  //   setPokemon({...data[j], id: j});
  //   console.log(j);
  //   console.log(newRandomPoke);
  // };
  

    useEffect(() => {
    const fetchPoke = async () => {
      // fetch(`${pokeApi}/pokemon`)
      //   .then(r => r.json())
      //   .then( data => {
      //     console.log(data.results);
      //     setPokemon(data.results);
      //   })
      //THIS WILL LET YOU GET A RANDOM POKEDEX DESCRIPTION ENTRY
      // let b=Math.floor(Math.random() * 21);
      // let url = "https://pokeapi.co/api/v2/pokemon/" + b.toString();
      // let res = await fetch(url);
      // let pokemin = await res.json();
      // res = await fetch(pokemin["species"]["url"]);
      // let pokeminDesc = await res.json();
      // pokeminDesc = pokeminDesc["flavor_text_entries"][b]["flavor_text"];
      // setPokemon(pokeminDesc);
  
  //  newPoke();

      setPokemon(data);
      console.log(pokemon);
    };
    fetchPoke();
  }, [])


  return (
    <Container>
     
      <ListBox>
        
        <ListHeader>
          Random POKéMANs
        </ListHeader>
        { pokemon.length && pokemon.map((pokeman, index) => (
            <Pokeman key={index}><Link to={`/pokemon/${index+1}`}>{pokeman.name}</Link></Pokeman>
          ))}
  
     
      
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
    border: solid rgb(32, 115, 197) 5px;
    border-radius: 5px;
    padding: 3px;
    justify-content: center;
    flex-direction: column;
    width: 468px;
    display: block;
    margin-left: auto;
    margin-right: auto
  }
`

const ListHeader = styled.div`
  { text-align:center;
    align-items: center;
    border-bottom: solid rgb(205, 58, 58) 3px;
    font-size:110%;
    
  }
`
const Pokeman = styled.div`
{
  align-items: center;
  justify-content: center;
}
`