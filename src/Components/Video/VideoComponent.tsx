// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/media-has-caption */

import * as React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { VideoProps } from "../../Interfaces/SDG";
import { FancyButton } from "../Buttons/FancyButton";

interface Props {
    sdg: VideoProps;
}
export const VideoComponent = (props: Props): JSX.Element => {
    const [showtext, setText] = React.useState(1);

    const videoStyle: React.CSSProperties = {
        width: "100%",
        margin: "auto",
        display: "block",
        marginTop: "10vh",
    };

    const incrementCount = (): void => {
        setText((prevState) => prevState + 1);
    };

    const buttonEnd = (
        <Link to="/Vorlagen/Endscreen">
            <div style={{ marginBottom: "21vh", right: "5vw" }}>
                <FancyButton onClick={incrementCount} version="green" className="nextbutton" active={showtext === 1}>
                    Beenden
                </FancyButton>
            </div>
        </Link>
    );
    const source = (
        !props.sdg.isCCBY === true ? (                
            <p style={{ textAlign:"center", fontSize:"larger" }}>CC BY 4.0 licensed by: <a  href= "https://creativecommons.org/licenses/by/4.0/legalcode.de"> https://creativecommons.org/licenses/by/4.0/legalcode.de </a> </p>
        ):(
            <p style={{ textAlign:"center", fontSize:"larger" }}>CC BY-NC-ND 4.0 DE licensed by: <a  href= "https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de"> https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de</a> </p>
        )
    )

    return (
        <>
            <div className={`colour_${props.sdg.sdg}_header`}>
                <div className="header">
                    {props.sdg.sdgTitle} <img className="sdglogo" alt="logo" src={props.sdg.logo} />
                </div>
            </div>
            <div>
                <ReactPlayer style={videoStyle} controls url={props.sdg.source}  />
                <p style={{ textAlign:"center", fontSize:"larger", marginTop: "20px" }}>Quelle: {props.sdg.quelle} </p>
                {source}
            </div>
            
            {buttonEnd}
        </>
    );
};
