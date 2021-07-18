import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class clownfish extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">clownfish</h1>
                <p className="playinformation">
                    A pleasant surprise, Nemo and his friends live a great life in the ocean. Even though the high
                    demand for clownfish after the success of &quot; Finding Nemo &quot; is a real problem. This in turn
                    resulted in overfishing clownfishes especially in reef areas. The chemical that was used to do this
                    also damaged the coral reefs which normally are a home for these fishes.
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

export default clownfish;
