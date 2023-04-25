import React from "react";
import "./First.css"
import Navbar from "../navbar/NavBar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const FirstPage=()=>{
    return(
        <>
        <div className="container2">
           <Navbar/>
        <div className="contain">
            <div className="left">
                <div className="title" style={{fontSize:"2.5rem"}}>Think.Make.Compete</div>
                
                <button style={{backgroundColor:"#E75480",fontSize:"1.5rem",border:"1px solod black",borderRadius:"1rem",padding:"6px",margin:"6px"}} onClick={()=>window.location="/explore"}>Explore</button>
            </div>
            <div className="right">
          

                 <img src="https://raw.githubusercontent.com/safak/youtube23/3d-portfolio/public/img/moon.png" alt="moon pic" className="img1"></img> 
            </div>
        </div>
        </div>
        </>
    )
}



export default FirstPage;