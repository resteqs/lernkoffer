import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class siameseFightingFish extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">siamese fighting fish</h1>
                <p className="playinformation">
                    Oh no, what is this little guy doing here? Fishes like this one should not live in the sea, their
                    home is in the aquarium back home.
                </p>

                <Link to="/SDG14/Spiel2">
                    <button className="buttonBack" type="button">
                        Back
                    </button>
                </Link>
            </div>
        );
    }
}

export default siameseFightingFish;
