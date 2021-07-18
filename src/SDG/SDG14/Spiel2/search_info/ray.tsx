import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class ray extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">ray</h1>
                <p className="playinformation">
                    We must do something. Rays are mostly only by-catch yet in traditional Chinese medicine they play an
                    important role.
                </p>

                <Link to="/SDG14/play">
                    <button className="buttonBack" type="button">
                        Back
                    </button>
                </Link>
            </div>
        );
    }
}

export default ray;
