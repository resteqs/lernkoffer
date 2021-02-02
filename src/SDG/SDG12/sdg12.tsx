import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class sdg12 extends React.Component{

    render(): JSX.Element{
        return(
           <div>
                <h1 className = "header">SDG 12</h1>
                <div>
                    <Link to = "/sdg13">
                        <button className = "b12" type ="button"> </button>
                    </Link>   
                </div>
           </div>
        );
    }
}

export default sdg12