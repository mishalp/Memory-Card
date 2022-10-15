import React, { useState, useEffect } from 'react'


    let temp = ['captain','ironman','thor','spiderman','hulk','drstrange','blackpanther','starlord'];
    let clicked = [], isCliked = false;

function Board(props) {

    const [cards, setCards] = useState(temp)

    const shuffle = (array) =>{
        let currentIndex = array.length,  randomIndex;
  
        while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    setCards([...array])
  
    return array;
  }

  const gameController = (e)=>{
    console.log(cards[e.target.dataset.index]);
    if(clicked[0] == null){
        clicked.push(cards[e.target.dataset.index])
        props.updateScore(true)
        shuffle(temp)
        return
    }

    clicked.forEach(click=>{
        if(click === cards[e.target.dataset.index]){
            isCliked = true
        }
    })

    if(isCliked){
        console.log('loss');
        clicked = [];
        isCliked = false;
        shuffle(temp)
        props.updateScore(false)
        return
    }

    clicked.push(cards[e.target.dataset.index])
    props.updateScore(true)
    shuffle(temp)
    return
  }

  return (
    <div className="board">
        {cards.map((card, index)=>{
            return (
                <div className="card" key={index}>
                    <img onClick={gameController} src={process.env.PUBLIC_URL+"/images/"+card+".jpg"} data-index={index} alt="" />
                </div>
            )
        })}
    </div>
  )
}

export default Board