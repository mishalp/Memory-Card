import Header from './components/Header';
import Board from './components/Board';
import React, { useState, useEffect } from 'react';

import './App.css';

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [trigger, setTrigger] = useState(true);

  const getScore = (state)=>{
    if(state){
      setScore(score + 1)   
     }else{
      setScore(0)
     }
    }

    const triggerToggle = ()=>{
      setTrigger(!trigger)
    }

  useEffect(()=>{
    if(score > highScore){
      setHighScore(highScore + 1)
    }
  }, [score])

  return (
    <div className="App">
      <Popup trigger={trigger} close={triggerToggle} />
      <Header score={score} highScore={highScore} />
      <Board updateScore={getScore} />
    </div>
  );
}

const Popup = (props)=>{
  return (
    <div>
      {props.trigger? (
            <div className="popup">
            <div className="popup-inner">
              <img src={process.env.PUBLIC_URL+"/images/avangers.jpg"} alt="" />
              <h5>Memory Game</h5>
              <p>Get points by clicking on an image but don't click on any more than once!</p>
              <button onClick={props.close} >OK</button>
            </div>
          </div>
      ):""
    }
    </div>
  )
}

export default App;
