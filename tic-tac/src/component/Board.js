import React from "react";
import Square from "./Square";

const Board=({Squares,onClick})=>{
    
    return(
        <div className="board">
            {Squares.map((Square,i)=>{
                <Square />
            })}

        </div>
    )
}

