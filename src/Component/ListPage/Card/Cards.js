
import Card from "./Card";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

function Cards(){
   
    const[pgdata,setPgData]=useState([]);

    useEffect(()=>{
        apiData();
        },[])
        
    const apiData =()=>{
        axios.get(`http://localhost:4000/newuser`).then(res=>{
      setPgData(res.data);
      console.log(pgdata);
      }).catch(error=>{
        console.log(error);
      })
    }
        
    return(
        <>{
            pgdata.map((pgdata)=>{
                return <Card
              location={pgdata.location}
              name={pgdata.eventname}
              req={pgdata.requirements}
            />
            })
        }
            
           
        </>
    )
}

export default Cards;