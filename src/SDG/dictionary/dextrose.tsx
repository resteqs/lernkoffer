import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class dextrose extends React.Component{
    render(): JSX.Element{
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
}

export default dextrose