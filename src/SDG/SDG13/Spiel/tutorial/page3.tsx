import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class page3 extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">Tutorial</h1>
                <div> 
                    <p className = "playinformation">Can you guess which element produces what amount of gases? Click on them and find out.</p>
                    <Link to = "/SDG13/Spiel1">
                        <button className = "buttonNext" type = "button">NEXT</button>
                    </Link>

                    <Link to = "/SDG13/page2">
                        <button className = "buttonBack" type = "button">BACK</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default page3;
