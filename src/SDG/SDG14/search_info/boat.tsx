import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class boat extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">boat</h1>
                <p className="playinformation">
                    <p>
                        Cruise ships produce a lot of sulfur dioxide and nitrogen dioxide which are water pollutants and
                        hazardous materials.
                    </p>
                    <p>
                        The main reason for the production of these harmful gases is the fuel most ships use, that is
                        called fuel oil and is not allowed to be used in most countries, because its burning puts out
                        enormous amounts of dangerous gases.
                    </p>
                    <p>
                        Yet many scientists search for a better way of running such big engines and have already found a
                        solution. It is the liquid gas because it doesn’t set free so much noxious substances.
                    </p>
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

export default boat;
