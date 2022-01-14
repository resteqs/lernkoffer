import { CSSProperties } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import { TextProps } from "../../Interfaces/SDG";
import { FancyButton } from "../Buttons/FancyButton";

interface Props {
    sdg: TextProps;
}

export const TextComponent = (props: Props): JSX.Element => {
    const [showtext, setText] = React.useState(1);
    const maxSlides = Object.keys(props.sdg.text).length;

    const textBox:CSSProperties = {
    fontSize: "x-large",
    padding: "50px",
    textAlign: "center",
    };

    const incrementCount = (): void => {
        setText((prevState) => prevState + 1);
    };

    const decrementCount = (): void => {
        setText((prevState) => prevState - 1);
    };

    const buttonBack = (
        <div style={{ top: "950px", left: "-50px",position: "fixed" }}>
            <FancyButton
                onClick={decrementCount}
                version="red"
                className="backbutton"
                active={showtext>1}
            >
                Zurück
            </FancyButton>
        </div>
    );
    const buttonNext = (
        <div style={{ top: "950px", right: "60px", position: "fixed" }}>
            <FancyButton
                onClick={incrementCount}
                version="green"
                className="nextbutton"
                active={showtext < maxSlides}
            >
                Weiter
            </FancyButton>
        </div>
    );

    const buttonEnd = (
        <Link to="/Vorlagen/Endscreen">
            <div style={{ top: "950px", right: "60px", position: "fixed" }}>
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
        <>
            <div className={`colour_${props.sdg.sdg}_header`}>
                <div className="header">
                    {props.sdg.sdgTitle} <img className="sdglogo" alt="logo" src={props.sdg.logo} />
                </div>
            </div>
            <div style = {textBox}>
                <p className="headertext">
                    <b>{props.sdg.header[showtext]}</b>
                </p>{" "}
                <br />
                <p className="texttext">
                    <p>{props.sdg.text[showtext]}</p>
                </p>{" "}
            </div>
            {buttonBack}
            {buttonNext}
            {buttonEnd}
            
        </>

    );
};
