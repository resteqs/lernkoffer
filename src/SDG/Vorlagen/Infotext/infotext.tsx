// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

import * as React from "react";
import renderer from "react-dom";
import "../../../styles/colour_sdgs.css";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-06.png";

export const Infotext = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(1);
    const sdg = "sdg06";
    const text = {
        1: `Text1`,
        2: `Text2`,
        3: `Text3`,
        4: `Text4`,
    };
    const header = {
        1: "Warum?",
        2: "Was ist das Problem?",
        3: "Wie ist dieses Thema mit uns verbunden?",
        4: "Was können wir tun?",
    };

    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }
    let buttonBack;
    let buttonNext;
    // eslint-disable-next-line prefer-const
    buttonBack =
        showtext >= 2 ? (
            <button className="backbutton" type="button" onClick={decrementCount}>
                Zurück
            </button>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
    // eslint-disable-next-line prefer-const
    buttonNext =
        showtext <= 3 ? (
            <button className="nextbutton" type="button" onClick={incrementCount}>
                Weiter
            </button>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    return (
        <div>
            <div className={`colour_${sdg}`}>
                <div className="header">
                    Hochwertige Bildung <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div className="infotextbox">
                <p>
                    <b>{header[showtext]}</b>
                </p>{" "}
                <br />
                <p> {text[showtext]} </p>
            </div>
            {buttonBack}
            {buttonNext}
        </div>
    );
};
renderer.render(<Infotext />, document.getElementById("root"));
