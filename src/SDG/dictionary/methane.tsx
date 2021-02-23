import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class methane extends React.Component{
    render(): JSX.Element{
        return(
            <div>
                <h1 className = "header">Methane</h1>
                <Link to = "/dictionary">
                    <button className = "buttonNext" type = "button">Back</button>
                </Link>  
            </div>
        );
    }
}

export default methane