import React from "react";
import "./Card.css";



export default function Card(props) {

  return (
    <>
      <div className="CardContainer" >
        <img
          src={"https://raw.githubusercontent.com/safak/youtube23/3d-portfolio/public/img/moon.png"}
          alt=".."
          className="CardImg"
          onClick={()=>window.location=`/pg`}
        />
       
        <div className="CardDis">
          <div className="title" onClick={()=>window.location=`/pg`}>
            <h1 className="mb-0">{props.name}</h1>
            
          </div>
          <div className="details">
            <span>{props.req} </span>
          </div>
          <div className="amenities">
           Minimum team size
          </div>
        
              
        </div>

        <div className="CardPrice">
          <div className="price-section">
            <div>
              <span style={{ color: "lightgray", fontSize: "15px" }}>
                Winning pool Price
              </span>
              <br></br>
              <span
                style={{
                  fontFamily: "Arial",
                  fontWeight: "bolder",
                  fontSize: "30px",
                }}
              >
                $100
              </span>
            </div>
            <div>
            <i className="fa-regular fa-bookmark"></i></div>
          </div>
          
        </div>
      </div>
    </>
  );
}
