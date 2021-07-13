import React from "react";
import { Link } from "react-router-dom";

export const dextrose = ():JSX.Element =>{
    return(
        <div>
            <h1 className = "header">Dextrose</h1>
            <p>223232</p>
            <Link to = "/dictionary">
                <button className = "buttonNext" type = "button">Back</button>
            </Link>  
        </div>
    );

}