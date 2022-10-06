import React from "react"

export default function Board(){
    
    const row=25;
    const n=5;

    
    const [boardMap,setBoardMap]=React.useState(()=>createBoardMap())      
    const [boardArr,setBoardArr]=React.useState(()=>createBoard())
    const [player,setPlayer]=React.useState(0);
    
    
    function createBoard(){
        console.log("in boa")
        let boardArr1=[]
        for(let i=0;i<n*n;i++){ 
            let obj={number:boardMap.get(i),disp:"",isLadder:false,sendTo:null}                       
            boardArr1.push(obj);
        }
        console.log(boardArr1)
        boardArr1[23].isLadder=true;                //Hard coded ladder
        boardArr1[23].disp="||";                    
        boardArr1[13].disp="||";
        boardArr1[18].disp="||";
        boardArr1[23].sendTo=13;
        return boardArr1;
    }
    //console.log(boardArr)
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
            newState[playerIndex].disp="⦿"
            if(prevState[playerIndex].isLadder===true){
                //playerIndex=prevState[playerIndex].sendTo;
                newState[playerIndex].disp=""
                setPlayer(prevState[playerIndex].sendTo);
            }
            if(player>0){
                newState[boardMap.get(player-1)].disp=""; 
            }  
            return newState;
        })
    },[player])

    //To simulate player movement    
    function click(){
        setPlayer((prevState)=>prevState+1)
    }

    let board=[]
    for(let i=0;i<row;i++){
            board.push(<div key={i} className="square">
                <p className="num-display">{boardArr[i].number}</p>
                <h2 className="player">{boardArr[i].disp}</h2>
                </div>)
    }


    return(
        <div className="grid-container">
                 {board}
               <button onClick={click}>click</button>
        </div>
    )
}