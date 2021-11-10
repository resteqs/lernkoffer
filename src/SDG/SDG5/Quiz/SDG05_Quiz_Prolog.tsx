// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-unused-expressions */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import renderer from "react-dom";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import { Link } from "react-router-dom";
import Logo from "../../../SDGLogos/Goal-SDG05.png";

import { CSSProperties } from "react";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";

export const SDG05_Quiz_Prolog = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(1);
    const sdg = "SDG05";

    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }

    const text = {
        1: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Einleitung:{" "}
                </p>
                <p className="einleitungText">
                    Dass Mann und Frau nicht immer gleich behandelt werden, wisst ihr vielleicht bereits! Nun will ich
                    mal schauen, ob ihr auch erkennen könnt, wann Männer oder Frauen tatsächlich wegen ihres Geschlechts
                    ungerecht behandelt werden.{" "}
                </p>
            </div>
        ),

        2: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Einleitung:{" "}
                </p>
                <p className="einleitungText">Dazu habe ich ein Quiz für euch vorbereitet! </p>
            </div>
        ),

        3: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Einleitung:{" "}
                </p>
                <p className="einleitungText">
                    Ich habe hier verschiedene Aussagen und ihr sollt darüber nachdenken, ob sich das so gehört oder
                    nicht. Entscheidet danach, ob Frauen und Männer in den Beispielen gleich behandelt werden oder
                    nicht! Wer findet, dass sich das so gehört, hebt den Daumen nach oben, wenn nicht dann nach unten.{" "}
                </p>
            </div>
        ),

        4: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Einleitung:{" "}
                </p>
                <p className="einleitungText">
                    Danach möchte ich euch erklären, warum das so ist. Diese Erklärungen könnt ihr anschließend mit
                    euren eigenen Überlegungen vergleichen und vielleicht auch darüber diskutieren{" "}
                </p>
            </div>
        ),
    };

    let buttonBack;
    let buttonNext;
    let buttonEnd;

    // eslint-disable-next-line prefer-const
    buttonBack =
        showtext >= 2 ? (
            <div style={{ marginTop: "1px" }} className="backButtonDiv">
                {" "}
                <button type="button" onClick={decrementCount} className="backButton">
                    &#129044;
                </button>
            </div>
        ) : (
            <div> </div>
        );
        
    // eslint-disable-next-line prefer-const
    buttonNext =
        showtext <= 3 ? (
            <div style={{ marginTop: "10px" }} className="nextbutton">
                {" "}
                <div style={{ position: "absolute", top: "750px", left: "1700px" }}>
                    <button className={infotextbutton.pushable} type="button" onClick={incrementCount}>
                        <span className={infotextbutton.shadow} />
                        <span className={infotextbutton.edgegreen} />
                        <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                            <p className={infotextbutton.buttontext}>Weiter</p>
                        </span>
                    </button>
                </div>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
    // eslint-disable-next-line prefer-const
    buttonEnd =
        showtext === 4 ? (
            <div className="nextbutton">
                <Link to="/SDG05/Quiz">
                    {" "}
                    <button className={infotextbutton.pushable} type="button">
                        <span className={infotextbutton.shadow} />
                        <span className={infotextbutton.edgegreen} />
                        <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                            <p className={infotextbutton.buttontext}>Weiter </p>
                        </span>
                    </button>
                </Link>{" "}
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Geschlechter­gleichstellung
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div className="spacer">
                <p className="bodytext"> {text[showtext]}</p>
            </div>
            {buttonBack}
            {buttonNext}
            {buttonEnd}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG05_Quiz_Prolog />, document.getElementById("root"));
