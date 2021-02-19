import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class page3 extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">Tutorial</h1>
                <div> 
                    <p className = "sdg13playinformation">Can you guess which element produces what amount of gases? Click on them and find out.</p>
                    <Link to = "/play">
                        <button className = "buttonNext" type = "button">NEXT</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default page3;
