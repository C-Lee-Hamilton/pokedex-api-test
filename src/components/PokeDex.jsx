import { useState } from 'react';
import styled from 'styled-components';
import circle from '../components/bluecircle.png';

export const PokeDex = (props) => {
    const [visible, setVisible] = useState(false);

    const toggle = () => {
      setVisible(!visible);
     }

    return (
      <>
        <h1 >Pokédex</h1>
        <PokeDexContainer>
          <div className="attempter">
            <img className="camera" src={circle}/>
            <img className={visible ? 'camera3' : 'camera2'} src={circle}/>
            <img className={visible ? 'camera4' : 'camera2'} src={circle}/>
            <img className="camera2" src={circle}/>
          </div>
          <div className={visible ? 'screenon' : 'screen'}>
          {visible && props.children}
          </div>
          <div className="open">
            <label className={`switch${visible ? ' switchOn' : ''}`}>
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
  }`