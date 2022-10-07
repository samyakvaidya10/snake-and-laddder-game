import React from "react";
import "./player.css"
export default function Player(props){

    // Displays player location on top of board.

    let player=[]
    for(let i=0;i<props.playerArr.length;i++){
        player.push(<div key={i} className="square" id="player-square" >
                <h2 className="playerText">{props.playerArr[i] &&"⦿"}</h2>
                </div>)
    }

    return(
        <div className="grid-container player">
            {player}
        </div>
    )
} 