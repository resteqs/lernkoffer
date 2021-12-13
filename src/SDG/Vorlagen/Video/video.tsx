import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Logo from "../../../SDGLogos/Goal-SDG06.png";
import { InfotextButton } from "../../../Components/Buttons/InfotextButton";

export const Video = (): JSX.Element => {
    const sdg = "SDG06";

    const buttonNext = (
        <div style={{ marginTop: "10px" }} className="nextbutton">
            <Link to="/Vorlagen/Endscreen">
                <div style={{ position: "absolute", top: "950px", left: "1700px" }}>
                    <InfotextButton version="green">Fertig</InfotextButton>
                </div>
            </Link>
        </div>
    );

    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Video
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "120px" }}>
                <ReactPlayer url="https://youtu.be/LLvO6geKh_k" width="1366px" height="720px" />
            </div>
            {buttonNext}
        </div>
    );
};
