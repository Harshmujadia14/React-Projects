import React from "react";

const Square=({value,onClick})=>{
    const Style= value? `squeares ${value}`: `squeares`
    return(
<div className={Style} onClick={onClick}>
            {value}
        </div>
    )
}
export default Square;