// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

import * as React from "react";
import renderer from "react-dom";
import infotextbutton from "../../../styles/Infotextbutton.module.css" ;
import "../../../styles/colour_sdgs.css";
import { Link } from 'react-router-dom';
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG06.png";
import EG from "../../../EG/eg.png";

export const Infotext = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(1);
    const sdg = "SDG06";
    const text = {
        1: `A secure job and, above all, fair salary for everyone are enormously important for the structure of a society. 
        Many aspects such as food security, peace and education depend heavily on it. But a steady job also provides the foundation for a life in which you can meet all your basic needs, such as feeding yourself and having a roof over your head. 
        In addition, children living in poverty are more likely to experience poor education or even no education at all.`,
        2: `A secure job and, above all, fair salary for everyone are enormously important for the structure of a society. 
        Many aspects such as food security, peace and education depend heavily on it. But a steady job also provides the foundation for a life in which you can meet all your basic needs, such as feeding yourself and having a roof over your head. 
        In addition, children living in poverty are more likely to experience poor education or even no education at all.`,
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
    let buttonEnd;
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
        // eslint-disable-next-line prefer-const
    buttonEnd =
        showtext === 4 ? (
            <div className="nextbutton"><Link to= "/Vorlagen/Endscreen"> <button className= {infotextbutton.pushable} type = "button">
            <span className={infotextbutton.shadow} />
            <span className={infotextbutton.edgegreen} />
            <span className={infotextbutton.front} style = { { backgroundColor: "green" } } >
                <p className={infotextbutton.buttontext}>Weiter </p> 
            </span>
            </button></Link> </div>
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
                <p className="headertext">
                    <b>{header[showtext]}</b>
                </p>{" "}
                <br />
                <p className="bodytext"> {text[showtext]} </p>
            </div>
            {buttonBack}
            {buttonNext}
            {buttonEnd}
        </div>
    );
};
renderer.render(<Infotext />, document.getElementById("root"));
