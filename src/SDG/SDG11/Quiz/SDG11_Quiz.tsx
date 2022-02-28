// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-pascal-case */
// eslint-disable-next-line unicorn/filename-case
import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { FancyButton } from "../../../Components/Buttons/FancyButton";
import EG from "../../../EG/EG2.png"
import Logo from "../../../SDGLogos/Goal-SDG11.png";
import { SDG11_Quiz_Game } from "./SDG11_Quiz_Game";


export const SDG11_Quiz = ():JSX.Element => {
    const [showtext, setText] = React.useState(1);
    const sdgTitle = "Energiespar-Rally";
    const sdg = "SDG11";

    const textBox: CSSProperties = {
        padding: "4vw",
        textAlign: "center",
    };

    const incrementCount = (): void => {
        setText((prevState) => prevState + 1);
    };

    const decrementCount = (): void => {
        setText((prevState) => prevState - 1);
    };

    const header: Record<number, string> = {
        1: "Einleitung",
        2: "Aufgabe:",
    };

    const text: Record<number, string| JSX.Element> = {
        1: <div>
            <p>Hi, ich bin&apos;s wieder, euer EG!</p>
            <img style = {{ display: "block", margin: 0, width: "30vw" }} src={EG} alt="EG" />
        </div>,
        2: "Ihr habt bereits gelernt, dass es wichtig ist, auf euren Energieverbrauch zu achten. Oft können schon kleine Aktionen etwas bewirken. Deshalb nehme ich euch jetzt mit durch mein Haus, um euch zu zeigen, wie auch ihr zuhause umweltbewusst und energiesparend leben könnt. "
    };

    const maxSlides = Object.keys(text).length+1;

    const buttonBack = (
        <div style={{ bottom: "38px", left: "-38px", position: "fixed" }}>
            <FancyButton onClick={decrementCount} version="red" className="backbutton" active={showtext > 1}>
                Zurück
            </FancyButton>
        </div>
    );

    const buttonNext = (
        <div style={{ bottom: "38px", right: "38px", position: "fixed" }}>
            <FancyButton onClick={incrementCount} version="green" className="nextbutton" active={showtext < maxSlides}>
                Weiter
            </FancyButton>
        </div>
    );

    const buttonEnd = (
        <Link to="/Vorlagen/Endscreen">
            <div style={{ bottom: "38px", right: "38px", position: "fixed" }}>
                <FancyButton
                    onClick={incrementCount}
                    version="green"
                    className="nextbutton"
                    active={showtext === maxSlides}
                >
                    Beenden
                </FancyButton>
            </div>
        </Link>
    );

    return (
        <div style={{ overflowX:"hidden" }}>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    {sdgTitle} <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            {showtext !== 3 ? 
                <div style={textBox}>
                <p className="headertext">
                    <b>{header[showtext]}</b>
                </p>{" "}
                <br />
                <p className="texttext">
                    <p>{text[showtext]}</p>
                </p>{" "}
            </div>: <div> </div>}
            {showtext === 3 ? <SDG11_Quiz_Game/> : <> </>}
            {buttonBack}
            {buttonNext}
            {buttonEnd}
            
        </div>
    );
};