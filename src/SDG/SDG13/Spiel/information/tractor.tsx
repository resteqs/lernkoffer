import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class tractor extends React.Component {
    render(): JSX.Element {
        return (
            <div>
                <h1 className="header">TRACTOR</h1>
                <div>
                    <p className="playinformation">
                        <p>
                            Agriculture &ndash; an important part of every country&apos;s economy. Nevertheless, here
                            are emissions produced in a quite high amount, which could be&nbsp;
                            <span className="red">reduced by the usage of new technologies</span>. Nowadays
                            farming&nbsp;is in charge of&nbsp;about&nbsp;<span className="red">17 to 32 percent</span>
                            &nbsp;of the worldwide greenhouse gases. These numbers are composed of the direct emission
                            produced by activities such as&nbsp;<span className="red">cattle breeding</span>
                            &nbsp;or&nbsp;
                            <span className="red">bringing out fertilizer</span>.
                        </p>
                        <p>
                            But there are also things you might not think of right away as&nbsp;
                            <span className="red">forest clearance</span>&nbsp;for more space or the engines ran
                            by&nbsp;<span className="red">fossil fuels</span>. Yet there are already pretty good ideas
                            on how to change this issue. For example, farmers could try to&nbsp;
                            <span className="red">avoid resting fields</span>, reduce and optimate the usage of
                            fertilizer or try to&nbsp;<span className="red">lower meat production</span>. And there are
                            so many more we cannot list here...&nbsp;
                        </p>
                    </p>
                </div>
                <Link to="/SDG13/play">
                    <button className="buttonBack" type="button">
                        Back
                    </button>
                </Link>
            </div>
        );
    }
}

export default tractor;
