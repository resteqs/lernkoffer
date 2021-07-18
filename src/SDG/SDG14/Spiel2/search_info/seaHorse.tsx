import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class seaHorse extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">sea horse</h1>
                <p className="playinformation">
                    It&apos;s not sharks. It&apos;s not barracuda. It&apos;s not bluefin tuna. No, one of the deadliest
                    creatures in the sea is not a species we even think of as a predator at all. It is the seahorse. But
                    even though they are really dangerous these little animals are a threatened species because of the
                    fact that people angle them in order to make them a lucky charm and their living space, the corals,
                    shrinks more and more.
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

export default seaHorse;
