import React from "react";
import logoreact from "../assets/logoreact.png"
import "../styles/logo.css"
const Logo=()=>{
    return(
        <div className="cont-log">
            <img src={logoreact} alt={logoreact} />
            <h3 className="titre">
                React World
            </h3>
        </div>
    )
}
export default Logo