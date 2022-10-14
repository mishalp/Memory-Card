import React from 'react'

function Board() {

    let cards = ['captain','ironman','thor','spiderman','hulk','drstrange','blackpanther','starlord',]

  return (
    <div className="board">
        {cards.map(card=>{
            return (
                <div className="card">
                    <img src={process.env.PUBLIC_URL+"/images/"+card+".jpg"} alt="" />
                </div>
            )
        })}
    </div>
  )
}

export default Board