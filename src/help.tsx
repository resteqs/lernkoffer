import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class help extends React.Component{

    render(): JSX.Element{
        return(
           <div>
                <h1 className = "header">Helpful links</h1>
                <div>
                    <Link to ="/sdg13">
                        <div className = "centre">
                            SDG13
                        </div>
                    </Link>
                    <Link to ="/tutorial/page1">
                        <div className = "centre">
                            SDG13
                        </div>
                    </Link>
                </div>
           </div>
        );
    }
}

export default help