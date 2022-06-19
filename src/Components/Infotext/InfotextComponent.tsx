// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/media-has-caption */
import * as React from "react";
import { Link } from "react-router-dom";
import "../../styles/colour_sdgs.css";
import "../../styles/App.css";
import "../../styles/infotext.css";
import "../../styles/component.css";
import { useEffect } from "react";
import { FancyButton } from "../Buttons/FancyButton";
import { InfotextProps } from "../../Interfaces/SDG";

interface Props {
    sdg: InfotextProps;
}

export const InfotextComponent = (props: Props): JSX.Element => {
    const [showtext, setText] = React.useState(1);
    const [isQuote, setQuote] = React.useState(false);

    useEffect(() => {
        setQuote(!props.sdg.header[showtext] && !!props.sdg.text[showtext]);
    }, [showtext]);

    const maxSlides = Object.keys(props.sdg.text).length;

    const incrementCount = (): void => {
        setText((prevState) => prevState + 1);               
    };

    const decrementCount = (): void => {
        setText((prevState) => prevState - 1);
    };

    const buttonBack = (
        <FancyButton onClick={decrementCount} version="red" className="backbutton" active={showtext > 1}>
            Zurück
        </FancyButton>
    );
    const buttonNext = (
        <FancyButton onClick={incrementCount} version="green" className="nextbutton" active={showtext < maxSlides}>
            Weiter
        </FancyButton>
    );
     // eslint-disable-next-line unicorn/consistent-function-scoping
     const buttonEndClicked = (): void => {
        // eslint-disable-next-line no-restricted-globals
       window.close();
    }
    const buttonEnd = (
        <Link to="/Vorlagen/Endscreen">
            <FancyButton
                onClick={buttonEndClicked}
                version="green"
                className="nextbutton"
                active={showtext === maxSlides}
            >
                Beenden
            </FancyButton>
        </Link>
    );

    return (
        <>
            <div className={`colour_${props.sdg.sdg}_header`}>
                <div className="header">
                    {props.sdg.name} <img className="sdglogo" alt="logo" src={props.sdg.logo} />
                </div>
            </div>
            <div className="infotextbox">
                {!isQuote && (
                    <>
                        <p className="headertextInfotext">
                            <b>{props.sdg.header[showtext]}</b>
                        </p>
                        <br />
                        <p className="bodytextInfotext">
                            {props.sdg.text[showtext]}
                        </p>
                    </>
                )}
                {isQuote && (
                    <p className="bodytextInfotext" style={{ padding:"30px", alignContent:"center" }}>
                        <b>{props.sdg.text[showtext]}</b>
                    </p>
                )}
            </div>
            {buttonBack}
            {buttonNext}
            {buttonEnd}

            <img className="EG" alt="" src={props.sdg.eg} style = {{ display:"block", marginLeft:"auto", marginRight:"auto" }} />
        </>        
        
    );
};
