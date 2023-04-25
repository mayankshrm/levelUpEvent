import React from "react";
import Cards from "../Card/Cards";

import "./Page.css";




const Page = () => {

  
  return (
    <>
    <div className="container4">
    <h1 style={{display:"flex",justifyContent:"center"}}>UPCOMING EVENTS</h1>
      <div className="Container1">
        <div className="Container2">
          <div className="card">
            <Cards />
            
          </div>
          <div
            className="Map"
            style={{ position: "sticky", height: "98vh" ,marginBottom:"10px"}}
          >
            <img src="https://www.pngmart.com/files/22/Fortnite-Kratos-PNG-Pic.png" alt=""></img>
          </div>
        </div>
      </div>
    </div>
     
      
    </>
  );
};

export default Page;
