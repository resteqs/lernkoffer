import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class help extends React.Component{

    render(): JSX.Element{
        return(
           <div>
                <h1 className = "header">Helpful links</h1>
                <div>
                    <Link to ="/sdg12">
                        <div className = "centre">
                            SDG12
                        </div>
                    </Link>
                    <Link to ="/sdg13">
                        <div className = "centre">
                            SDG13
                        </div>
                    </Link>
                    <Link to ="/tutorial13/page1">
                        <div className = "centre">
                            SDG 13direct to play
                        </div>
                    </Link>
                    <Link to ="/sdg14/tutorial/page1">
                        <div className = "centre">
                            SDG14
                        </div>
                    </Link>
                </div>
           </div>
        );
    }
}

export default help