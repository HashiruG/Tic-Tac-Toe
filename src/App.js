import { useEffect, useState } from "react";
import Cell from "./components/Cell";
function App() {

  const[cells, setCells] = useState(["","","","","","","","",""])

  const[turn, setTurn] = useState("circle")

  
  const[circleWins, setCircleWins] = useState(false)
  const[crossWins, setCrossWins]= useState(false)

  function checkScore() {
    const winingCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
  
    winingCombinations.forEach((arr) => {
      if (circleWins || crossWins) {
        
        return;
      }
  
      let isCircleWin = arr.every(element => cells[element] === "circle");
      if (isCircleWin) {
        setCircleWins(true);
      }
  
      let isCrossWin = arr.every(element => cells[element] === "cross");
      if (isCrossWin) {
        setCrossWins(true) 
      }
    });
  
    if (circleWins) {
      setTurn("circle")
    } else if (crossWins) {
      setTurn("cross")
    }
  }
  

  useEffect(()=>{
    console.log(cells);
    checkScore()
  }, )

  return (
    <div className="app">
      <div className="board">
        {cells.map((cell, index) => {
          return <Cell key={index} id={index}turn={turn} setTurn={setTurn} cells={cells} circleWins={circleWins} crossWins={crossWins}/>
        })}
      </div>
      {circleWins || crossWins == true ? <p>{turn} wins</p>: <p>Its {turn}'s go</p>}
      
      
    </div>
  );
}

export default App;
