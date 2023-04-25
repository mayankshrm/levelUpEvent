import React from "react";
import FirstPage from "../FirstPage/FirstPage";
import Second from "../Second/Second";

import "./MainPage.css"
import Third from "../ThirdPage/Third";
import Footer from "../Footer/down_part";



const Mainpage=()=>{
    return(
        <>
        <div className="containerMain">
           
           <FirstPage/>
           <Second/>
           <Third/>
         <Footer/>
        </div>
        </>
    )
}



export default Mainpage;