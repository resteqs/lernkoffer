// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

import * as React from "react";
import renderer from "react-dom";
import infotextbutton from "../../../styles/Infotextbutton.module.css" ;
import "../../../styles/colour_sdgs.css";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG06.png";

export const Infotext = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(1);
    const sdg = "SDG06";
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
            <div className="backbutton"> <button className= {infotextbutton.pushable} type = "button" onClick={decrementCount} >
            <span className={infotextbutton.shadow} />
            <span className={infotextbutton.edge} />
            <span className={infotextbutton.front}>
               <p className={infotextbutton.buttontext}>Zurück</p> 
            </span>
            </button></div>
           
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
    // eslint-disable-next-line prefer-const
    buttonNext =
        showtext <= 3 ? (
            <div className="nextbutton"> <button className= {infotextbutton.pushable} type = "button" onClick={incrementCount}>
            <span className={infotextbutton.shadow} />
            <span className={infotextbutton.edgegreen} />
            <span className={infotextbutton.front} style = { { backgroundColor: "green" } } >
                <p className={infotextbutton.buttontext}>Weiter</p> 
            </span>
            </button></div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    return (
        <div>
            <div className={`colour_${sdg}_header`}>
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
