/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable eslint-comments/disable-enable-pair */
// eslint-disable-next-line eslint-comments/no-duplicate-disable
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */
/* eslint-disable unicorn/filename-case */

import * as React from "react";
import { Link } from "react-router-dom";
import "../../styles/colour_sdgs.css";
import "../../styles/App.css";
import "../../styles/infotext.css";
import "../../styles/component.css"
import ReactAudioPlayer from "react-audio-player";
import { InfotextButtonGreen } from "../Buttons/InfotextButtonGreen";
import { InfotextButtonRed } from "../Buttons/InfotextButtonRed";
import { NameOfSDG } from "../NameOfSDG";

interface header {
    id:number;
    text:string
}

interface Props {
    logo: string;
    sdg: string;
    sdgNumber: number,
    showtext: number,
    setText:React.Dispatch<React.SetStateAction<number>>,
    // text;
    header:header[];
    maxSlides: number;
    audioFile: string;
    eg: string;
    
}
export const Infotext_Component: React.FC<Props> = ({
    logo,
    sdg,
    sdgNumber,
    showtext,
    setText,
    // text,
    header,
    maxSlides,
    audioFile,
    eg,
}: Props): JSX.Element => {
    // eslint-disable-next-line no-param-reassign
    [showtext, setText] = React.useState(showtext);

    const buttonBack =
        showtext >= 2 ? (
            <div className="backbutton">
                {" "}
                <InfotextButtonRed showtext={showtext} text="Zurück" setText={setText} />
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    const buttonNext =
        showtext < maxSlides ? (
            <div className="nextbutton">
                {" "}
                <InfotextButtonGreen showtext={showtext} text="Weiter" setText={setText} />
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    const buttonEnd =
        showtext === maxSlides ? (
            <div className="nextbutton">
                <div style={{ marginTop: "10px" }} className="nextbutton">
                    {" "}
                    <Link to="/Vorlagen/Endscreen">
                        {" "}
                        <InfotextButtonGreen showtext={showtext} text=" Weiter" setText={setText} />
                    </Link>{" "}
                </div>
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
                    <NameOfSDG sdgNumber={sdgNumber} />
                    <div className= "logoUp">
                        {" "}
                        <img className="sdglogo" alt="logo" src={logo} />
                    </div>
                </div>
            </div>
            <div className="infotextbox">
                <p className="headertext">
                    <b>{header[showtext]}</b>
                </p>{" "}
                <br />
                <p className="bodytext"> {} </p>
            </div>
            {buttonBack}
            {buttonNext}
            {buttonEnd}
            <ReactAudioPlayer
                src={audioFile}
                controls
                style={{ position: "absolute", top: "1100px", left: "80px" }}
            />{" "}
            <img className="EG " alt="" src={eg} />
        </div>
    );
};