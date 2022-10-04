import React from "react"

export default function Board(){
    
    const row=25;
    const n=5;
    const start=(n*(n-1));
    //const [boardArr,setBoardArr]=React.useState(()=>createBoard())
    const [boardArr,setBoardArr]=React.useState(()=>createBoard())
    const [player,setPlayer]=React.useState(0);
    
    function createBoard(){
        let boardArr=[]
        for(let i=n-1;i>=0;i--){                        //Create array having values for 5x5 board 
            if((i&1)===0){                              //    20, 21, 22, 23, 24, 
               for(let j=(n*i);j<(n*i)+5;j++){          //    19, 18, 17, 16, 15,  
                boardArr.push(j);                       //    10, 11, 12, 13, 14      
               }                                        //    9,  8,  7,  6,  5,           
            }else{                                      //    0,  1,  2,  3,  4,
              for(let j=(n*(i+1)-1);j>=(n*i);j--){        
                boardArr.push(j);
               }
            }
          }

        return boardArr;
    }
    //to change board val to display player location
    React.useEffect(function(){
        let playerIndex=boardArr.indexOf(player);
        setBoardArr(function(prevState){
            let newState=[...prevState];
            newState[playerIndex]="sam"
            newState[playerIndex-1]=player-1;
            return newState;
        })
    },[player])

    //To simulate player movement    
    function click(){
        setPlayer((prevState)=>prevState+1)
    }

    let board=[]
    for(let i=0;i<row;i++){
            board.push(<div className="square"><p>{boardArr[i]}</p></div>)
    }


    return(
        <div className="grid-container">
                 {board}
               <button onClick={click}>click</button>
        </div>
    )
}