import React from "react";
import Image from "next/image";



function IconSkills (props){
    return(
        <div className="cont-icon">
            <img src={props.img}></img>
            <h1>{props.title}</h1>
        </div>
        
    )
}


export default IconSkills ;