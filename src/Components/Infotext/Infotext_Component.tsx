// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */

import * as React from "react";
import { Link } from "react-router-dom";
import "../../styles/colour_sdgs.css";
import "../../styles/App.css";
import "../../styles/infotext.css";
import ReactAudioPlayer from "react-audio-player";
import { InfotextButtonGreen } from "../Buttons/InfotextButtonGreen";
import { InfotextButtonRed } from "../Buttons/InfotextButtonRed";
import { NameOfSDG } from "../NameOfSDG";

export interface content {
    id: number;
    text: JSX.Element;
}
interface Props {
    logo: string;
    sdg: string;
    sdgNumber: number;
    showtext: number;
    setText: React.Dispatch<React.SetStateAction<number>>;
    text: content;
    header: content;
    maxSlides: number;
    audioFile: string;
    eg: string;
}
export const Infotext_Component: React.FC<Props> = (props: Props): JSX.Element => {
    const buttonBack =
        props.showtext >= 2 ? (
            <div className="backbutton">
                {" "}
                <InfotextButtonRed showtext={props.showtext} text="Zurück" setText={props.setText} />
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    const buttonNext =
        props.showtext < props.maxSlides ? (
            <div className="nextbutton">
                {" "}
                <InfotextButtonGreen showtext={props.showtext} text="Weiter" setText={props.setText} />
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    const buttonEnd =
        props.showtext === props.maxSlides ? (
            <div className="nextbutton">
                <div style={{ marginTop: "10px" }} className="nextbutton">
                    {" "}
                    <Link to="/Vorlagen/Endscreen">
                        {" "}
                        <InfotextButtonGreen showtext={props.showtext} text=" Weiter" setText={props.setText} />
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
            <div className={`colour_${props.sdg}_header`}>
                <div className="header">
                    <img className="sdglogo" alt="logo" src={props.logo} />
                    <NameOfSDG sdgNumber={props.sdgNumber} />
                </div>
            </div>
            <div className="infotextbox">
                <p className="headertext">
                    <b>{props.header}</b>
                </p>{" "}
                <br />
                <p className="bodytext"> {props.text} </p>
            </div>
            {buttonBack}
            {buttonNext}
            {buttonEnd}
            <ReactAudioPlayer
                src={props.audioFile}
                controls
                style={{ position: "absolute", top: "1100px", left: "80px" }}
            />{" "}
            <img className="EG " alt="" src={props.eg} />
        </div>
    );
};
