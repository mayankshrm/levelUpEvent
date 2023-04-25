import React from "react";
import "./Third.css"
  


const data=[
    "PLAY",
    "GAME",
    "EAT",
    "REPEAT"
]
const Third=()=>{
    return(
        <>
        <div className="section3">
        <div className="container3">

            <div className="left3">
                <div className="list">
                {data.map((item)=>(

                    <div className="listitem" text={item}>{item}</div>
                ))}
                </div>
            </div>
            <div className="right3">
                <img src="https://media.tenor.com/P0aFjMgj9PwAAAAC/nodding-omen.gif" alt=""></img>
            </div>
        </div>
        
        </div>
        </>
    )
}



export default Third;