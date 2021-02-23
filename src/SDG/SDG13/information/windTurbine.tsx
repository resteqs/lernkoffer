import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class windTurbine extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">WIND TURBINE</h1>
                <div>
                    <p className="sdg13playinformation">
                        <p>
                            A new&nbsp;<span className="red">way of energy extraction</span>. It is a rather often
                            discussed theme of whether building wind wheels is ecologically worthwhile or not. Most
                            debates end with a&nbsp;<span className="red">positive&nbsp;</span>result for&nbsp;these
                            wheels because they
                            <span className="red">&nbsp;work with wind</span>, which is&nbsp;
                            <span className="red">endlessly as well as in the nights available</span>. In contrast, a
                            big problem with solar energy is that the sunlight is only available for a limited time,
                            more specifically during the day. Also, the&nbsp;<span className="red">space needed</span>
                            &nbsp;to build them is rather&nbsp;<span className="red">small</span>.
                        </p>
                        <p>
                            The&nbsp;
                            <span className="red">only emissions</span>&nbsp;produced by wind wheels emerge from
                            the&nbsp;fabrication&nbsp;of the parts. But as always there is also a not quite sunny side
                            to this topic. One main reason why people dislike windmills is that they are big and&nbsp;
                            <span className="red">throw a huge shadow</span>&nbsp;above the surrounding areas. That is
                            why most countries set&nbsp;<span className="red">regulations&nbsp;</span>for a&nbsp;
                            <span className="red">minimum distance</span>&nbsp;of such wind parks from cities and towns.
                            The most significant problem is that they&nbsp;<span className="red">hardly</span> produce
                            the amount as a nuclear power plant&nbsp;could do.&nbsp;
                        </p>
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

export default windTurbine;
