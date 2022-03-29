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
    padding: "4vw",
    textAlign: "center",
    };

    const incrementCount = (): void => {
        setText((prevState) => prevState + 1);
    };

    const decrementCount = (): void => {
        setText((prevState) => prevState - 1);
    };

    const buttonBack = (
        <div style={{ bottom: "38px", left: "-38px", position: "fixed" }}>
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
        <div style={{ bottom: "38px", right: "38px", position: "fixed" }}>
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
 
    // eslint-disable-next-line unicorn/consistent-function-scoping
     const buttonEndClicked = (): void => {
        // eslint-disable-next-line no-restricted-globals
       window.close();
    }
    const buttonEnd = (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <div style={{  bottom: "38px", right: "38px", position: "fixed" }}>
                <FancyButton
                    onClick={buttonEndClicked}
                    version="green"
                    className="nextbutton"
                    active={showtext === maxSlides}
                >
                    Beenden
                </FancyButton>
            </div>
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
