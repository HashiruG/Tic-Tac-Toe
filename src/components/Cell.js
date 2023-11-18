function Cell({turn, setTurn, id, cells, circleWins, crossWins}){

    function changeCells(turn){
        return cells[id] = turn
    }

    function handleClick(e){
        if((!circleWins) && (!crossWins)){
            const taken = e.target.firstElementChild.classList.contains("circle") 
            || e.target.firstElementChild.classList.contains("cross")
    
            if(!taken){
                if(turn === "circle"){
                    
                    changeCells(turn)
                    console.log(cells);
                    e.target.firstElementChild.classList.add("circle")
                    setTurn("cross")
                }else{
                    
                    changeCells(turn)
                    console.log(cells);
                    e.target.firstElementChild.classList.add("cross")
                    setTurn("circle")
                }
                return
            }
        }
      
        
       

    }
    return(
        <div className="square" id={id} onClick={handleClick}>
            <div></div>
        </div>
    )
}

export default Cell