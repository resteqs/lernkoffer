import * as React from "react";
import "../../../styles/colour_sdgs.css";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG06.png";
import { InfotextButton } from "../../../Components/Buttons/InfotextButton";
import content from "./sdg06.json";

export const SDG06_Infotext = (): JSX.Element => {
    const [showtext, setText] = React.useState(1);
    const sdg = "SDG06";

    const incrementCount = (): void => {
        setText(showtext + 1);
    };

    const decrementCount = (): void => {
        setText(showtext - 1);
    };
    return (
        <>
            <div className={`colour_${sdg}`}>
                <div className="header">
                    Hochwertige Bildung <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div className="infotextbox">
                <p>
                    <b>{content.header[showtext]}</b>
                </p>{" "}
                <br />
                <p> {content.text[showtext]} </p>
            </div>

            <InfotextButton onClick={decrementCount} version="green">
                Zurück
            </InfotextButton>
            <InfotextButton onClick={incrementCount} version="green">
                Weiter
            </InfotextButton>
        </>
    );
};
