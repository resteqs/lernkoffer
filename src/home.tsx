import * as React from "react";
import { Link } from "react-router-dom";

export const Home  = ():JSX.Element => {
    return(
        <div className = "standard-background" >
            <div className = "header">
                This is our Home page
                Need help
                Go to:    
            </div> 
            <div className = "header">
            <Link  to = "/Help" >Help</Link>
            </div>
            <button type="button">Hallo</button>
        </div>
    );
};
