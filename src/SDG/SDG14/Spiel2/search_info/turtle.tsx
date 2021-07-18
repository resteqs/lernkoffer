import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class turtle extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">turtle</h1>
                <p className="playinformation">
                    Turtles are rarely fished, yet they often get in the fisherman’s net what causes enormous shrinking
                    numbers. Another reason for their extinction is the pollution of the oceans.
                </p>

                <Link to="/sdg14/play">
                    <button className="buttonBack" type="button">
                        Back
                    </button>
                </Link>
            </div>
        );
    }
}

export default turtle;
