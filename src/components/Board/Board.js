import React from "react"
import "./board.css"
export default function Board(props){
    // Only used to display background board and numbers on boad.

    //to change board val to display player location
    // React.useEffect(function(){
    //     let playerIndex=boardMap.get(player);
    //     setBoardArr(function(prevState){
    //         let newState=[...prevState];
    //         newState[playerIndex].disp="⦿"
    //         if(prevState[playerIndex].isLadder===true){
    //             //playerIndex=prevState[playerIndex].sendTo;
    //             newState[playerIndex].disp=""
    //             setPlayer(prevState[playerIndex].sendTo);
    //         }
    //         if(player>0){
    //             newState[boardMap.get(player-1)].disp=""; 
    //         }  
    //         return newState;
    //     })
    // },[player])

    let board=[]
    for(let i=0;i<props.boardArr.length;i++){
            board.push(<div key={i} className="square" id="board-square">
                <p className="num-display">{props.boardArr[i].number}</p>
                </div>)
    }


    return(
        <div className="grid-container board">
                 {board}
        </div>
    )
}