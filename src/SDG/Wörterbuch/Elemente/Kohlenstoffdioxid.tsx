import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
export const Kohlenstoffdioxid =():JSX.Element => {
    return(
        <div>
            <h1 className = "header">Carbon Dioxide</h1>
            <Link to = "/Wörterbuch">
                <button className = "buttonNext" type = "button">Back</button>
            </Link>  
        </div>
    );
}