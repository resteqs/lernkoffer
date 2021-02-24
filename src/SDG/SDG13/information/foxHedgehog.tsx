import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class foxHedgehog extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">FOX AND HEDGEHOG</h1>
                <div>
                    <p className="playinformation">
                        Lovely little animals, you could think, how should they be connected to the greenhouse effect
                        and climate change? Well, animals are somehow&nbsp;
                        <span className="red">natural producers of certain gases</span>&nbsp;like methane or carbon
                        dioxide (CO<sub>2</sub>).&nbsp;<span className="red">Most gases</span>&nbsp;produced by brutes
                        come from industrial&nbsp;<span className="red">livestock farming</span>&nbsp;and especially
                        from ruminants because they burp and fart out methane, which results from their digestion.&nbsp;
                    </p>
                </div>
                <Link to="/sdg13/play">
                    <button className="buttonBack" type="button">
                        Back
                    </button>
                </Link>
            </div>
        );
    }
}

export default foxHedgehog;
