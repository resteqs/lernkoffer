import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class cow extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">COW</h1>
                <div>
                    <p className="playinformation">
                        Did you know that cows<span className="red">&nbsp;burp and fart methane</span>? This gas is for
                        our climate&nbsp;
                        <span className="red">
                            much worse than CO<sub>2</sub>
                        </span>
                        &nbsp;and in numbers that means over 100-kilogram methane equals the CO<sub>2</sub>
                        &nbsp;emission of 18.000 driven kilometers by car. Furthermore, cows&nbsp;
                        <span className="red">eat soy</span>&nbsp;which&nbsp;<span className="red">causes&nbsp;</span>
                        the&nbsp;<span className="red">deforestation of the rain forest</span>&nbsp;as the soy needs to
                        grow somewhere. With the downsizing of this area, we lose one of the largest CO<sub>2</sub>
                        &nbsp;storage on earth! However, an often-made argument is that the share of&nbsp;
                        <span className="red">methane caused by livestock farming</span>&nbsp;only amounts to&nbsp;
                        <span className="red">2%</span>&nbsp;of the entire&nbsp;
                        <span className="red">greenhouse effect</span>.&nbsp;
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

export default cow;
