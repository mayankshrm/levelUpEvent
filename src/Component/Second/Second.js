import React from "react";
import "./Second.css"

const Second=()=>{
    return(
        <>
        <div  style={{display:"flex",justifyContent:"center"}}>
            <div style={{fontSize:"3rem",margin:"2rem"}}>WHAT WE DO?</div>

        </div>
        <div className="container1">
                <div className="contain">
            <div className="left2">
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <h2 style={{display:"flex",justifyContent:"center"}}>LAN TOURNAMENTS</h2>
                <h4 style={{lineHeight:"1.5rem"}}>We emphasize on equal importance to every associated brand. Be it big or small, endemic or non-endemic, we are always on our toes to...
We emphasize on equal importance to every associated brand. Be it big or small, endemic or non-endemic, we are always on our toes to get your name out there.</h4>
            </div>
            <br></br>
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <h2 style={{display:"flex",justifyContent:"center"}} >EVENT ORGANIZER</h2>
                <h4 style={{lineHeight:"1.5rem"}}>We emphasize on equal importance to every associated brand. Be it big or small, endemic or non-endemic, we are always on our toes to...
We emphasize on equal importance to every associated brand. Be it big or small, endemic or non-endemic, we are always on our toes to get your name out there.</h4>
            </div>
             </div>
            <div className="right2">
                <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
               <h2 style={{display:"flex",justifyContent:"center"}}>
               SPONSORSHIPS & BRAND INTEGRATIONS
               </h2> 
               <h4 style={{textAlign:"center",lineHeight:"1.5rem"}}>We emphasize on equal importance to every associated brand. Be it big or small, endemic or non-endemic, we are always on our toes to...
We emphasize on equal importance to every associated brand. Be it big or small, endemic or non-endemic, we are always on our toes to get your name out there.</h4>
</div>
<br></br>
                
                <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <h2 style={{display:"flex",justifyContent:"center"}}>
                    CONTENT PRODUCTION
                    </h2>
                    <h4 style={{textAlign:"center",lineHeight:"1.5rem"}}>
                    Content creation remains one of the core aspects of our business. We have got everything, from premium esports shows for national television to broadcasting international tournaments to non-esports shoulder content for multiple platforms.
                    </h4>
                </div>
            </div>
            </div>

        </div>
        </>
    )
}



export default Second;