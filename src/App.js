import Header from './components/Header';
import Board from './components/Board';
import React, { useState, useEffect } from 'react';

import './App.css';

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0)

  const getScore = (state)=>{
    if(state){
      setScore(score + 1)   
     }else{
      setScore(0)
     }
    }

  useEffect(()=>{
    if(score > highScore){
      setHighScore(highScore + 1)
    }
  }, [score])

  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
      <Board updateScore={getScore} />
    </div>
  );
}

export default App;
