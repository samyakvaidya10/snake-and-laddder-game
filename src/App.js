import React from "react"
import logo from './logo.svg';
import './App.css';
import Board from './components/Board/Board';
import Player from "./components/Player/Player";
import Dice from "./components/Dice/Dice";

function App() {
  const row=25;
  const n=5;
  const [boardMap,setBoardMap]=React.useState(()=>createBoardMap())      
  const [boardArr,setBoardArr]=React.useState(()=>createBoard())
  const [playerArr,setPlayer]=React.useState(()=>createPlayer());

  function createBoard(){
    console.log("in boa")
    let boardArr1=[]
    for(let i=0;i<n*n;i++){ 
        let obj={number:boardMap.get(i),disp:"",isLadder:false,sendTo:null}                       
        boardArr1.push(obj);
    }

    boardArr1[23].isLadder=true;                //Hard coded ladder
    boardArr1[23].disp="||";                    
    boardArr1[13].disp="||";
    boardArr1[18].disp="||";
    boardArr1[23].sendTo=13;
    return boardArr1;
  }

  function createBoardMap(){
    const myMap=new Map();
    let c=0;
    for(let i=n-1;i>=0;i--){                        //Map array index with board value for 5x5 board 
        if((i&1)===0){                                  //    20, 21, 22, 23, 24, 
            for(let j=(n*i);j<(n*i)+5;j++){             //    19, 18, 17, 16, 15,  
                myMap.set(c,j);                         //    10, 11, 12, 13, 14  
                c++;                                    //    9,  8,  7,  6,  5,  
            }                                           //    0,  1,  2,  3,  4,         
        }else{                                      
            for(let j=(n*(i+1)-1);j>=(n*i);j--){        
                myMap.set(c,j);
                c++;                            
            }
        }
    }
    return myMap;
  }
  
  function createPlayer(){
    let player=[]
    for(let i=0;i<n*n;i++){                     
      player.push(false);
    }
    player[0]=true;
    return player;
  }

  return (
    <div className="App" >
      <div className="brd" >
        <Board boardArr={boardArr}/>
        <Player playerArr={playerArr} boardArr={boardArr}  />
      </div>
     
    </div>
  );
}

export default App;
