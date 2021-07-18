import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class shark extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">shark</h1>
                <p className="playinformation">
                    Did you know that only five people get killed by sharks each year? But the problem is that many
                    Asian fisherman hunt sharks to cut off the flappers and throw the slowly dying, yet still alive
                    shark in the water again.
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

export default shark;
