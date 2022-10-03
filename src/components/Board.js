import React from "react"

export default function Board(){
    
    const row=9;
    const r=3;
    //const [boardArr,setBoardArr]=React.useState(()=>createBoard())
    const [boardArr,setBoardArr]=React.useState(()=>createBoard())
    const [player,setPlayer]=React.useState(()=>(r*(r-1)));
    function createBoard(){
        let boardArr=[]
        for(let i=0;i<row;i++){
            boardArr.push(i);
        }
        return boardArr;
    }
    React.useEffect(function(){
        setBoardArr(function(prevState){
            let newState=[...prevState];
            newState[player]="sam"
            newState[player-1]=player-1;
            return newState;
        })
    },[player])
    function click(){
        setPlayer((prevState)=>prevState+1)
    }
    let board=[]
    for(let i=0;i<row;i++){
            board.push(<div className="square"><p>{boardArr[i]}</p></div>)
    }

    function playerMove(){

    }
    return(
        <div className="grid-container">
                 {board}
               <button onClick={click}>click</button>
        </div>
    )
}