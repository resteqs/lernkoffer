import React from "react";
import { Link } from "react-router-dom";

export const methane = ():JSX.Element => {
    return(
        <div>
            <h1 className = "header">Methane</h1>
            <Link to = "/dictionary">
                <button className = "buttonNext" type = "button">Back</button>
            </Link>  
        </div>
    );
}