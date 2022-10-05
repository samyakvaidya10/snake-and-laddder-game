import React from "react"

export default function Board(){
    
    const row=25;
    const n=5;

    
    const [boardMap,setBoardMap]=React.useState(()=>createBoardMap())
    const [boardArr,setBoardArr]=React.useState(()=>createBoard())
    const [player,setPlayer]=React.useState(0);
    
    
    function createBoard(){
        let boardArr=[]
        for(let i=0;i>n*n;i++){                        
            boardArr.push("");
        }
        return boardArr;
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

    //to change board val to display player location
    React.useEffect(function(){
        let playerIndex=boardMap.get(player);
        setBoardArr(function(prevState){
            let newState=[...prevState];
            newState[playerIndex]="⦿"
            newState[boardMap.get(player-1)]="";
            return newState;
        })
    },[player])

    //To simulate player movement    
    function click(){
        setPlayer((prevState)=>prevState+1)
    }

    let board=[]
    for(let i=0;i<row;i++){
            board.push(<div key={i} className="square"><h1>{boardArr[i]}</h1></div>)
    }


    return(
        <div className="grid-container">
                 {board}
               <button onClick={click}>click</button>
        </div>
    )
}