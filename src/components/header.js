import React from "react";


const Header = (props)=>{
    return(
        <div className="header">
            <div className="score">
                <p>Score:0</p>
            </div>
            <div>
            <img src={process.env.PUBLIC_URL+"/images/avangers.jpg"} alt="image" />
            <p>Memory Game</p>
            </div>
            <div className="score">
                <p>HighScore:0</p>
            </div>
        </div>
    )
}

export default Header;