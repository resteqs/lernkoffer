import React from "react";
import infotextbutton from "../../styles/Infotextbutton.module.css";

interface Props {
    text: string;
    onClick: () => void;
    disabled?: boolean;
}

export const InfotextButtonRed = (props: Props): JSX.Element => {
    return (
        <button className={infotextbutton.pushable} type="button" onClick={props.onClick} disabled={props.disabled}>
            <span className={infotextbutton.shadow} />
            <span className={infotextbutton.edge} />
            <span className={infotextbutton.front}>
                <p className={infotextbutton.buttontext}>{props.text}</p>
            </span>
        </button>
    );
};
