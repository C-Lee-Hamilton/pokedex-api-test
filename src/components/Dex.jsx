import { useState } from 'react';
import styled from 'styled-components';
import circle from '../components/bluecircle.png';

export const PokeDex = (props) => {
    const [visible, setVisible] = useState(false);
    const[light,setLight]=useState("switch")

    const toggle = () => {
      setVisible(!visible);
      light==="switch" ? setLight("switch2") : setLight("switch");
     }

    return (
      <>
        <h1 >Pokédex</h1>
        <PokeDexContainer>
          <div className="attempter">
            <img className="camera" src={circle}/>
            <img className={visible ? 'camera3' : 'camera2'} src={circle}/>
            <img className={visible ? 'camera4' : 'camera2'} src={circle}/>
            <img className={visible ? 'camera5' : 'camera2'} src={circle}/>
            
          </div>
          <div className={visible ? 'screenon' : 'screen'}>
          {visible && props.children}
          </div>
          <div className="open">
            <label className={light} >
              <input onClick={toggle}  type="checkbox"/>
              <span className="slider round"></span>
            </label>
          </div>
        </PokeDexContainer>
      </>
    )
}

const PokeDexContainer = styled.div`
  {
    width: 100%;
    margin: 35px 0px 35px 450px;
    border: solid rgb(178,44,44) 2px;
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
    box-shadow: inset 6px 0 12px rgb(132,31,31), inset -6px 0 12px rgb(132,31,31);
    

    
  }`