import React from "react";
import "./NavBar.css";

const Navbar = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div>
            <div>
              <div  style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{display:"flex",flexDirection:"row"}}>
                  <div style={{margin:"10px",fontSize:"1.3rem"}}>Home </div>
                  <div style={{margin:"10px",fontSize:"1.3rem"}}>Explore...</div>
                </div>
                
                <div style={{margin:"10px"}} >
                <i class="fa-solid fa-magnifying-glass fa-xl" ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
