import React from "react";
import cssStyle from "../../styles/Infotextbutton.module.css";

interface Props {
    onClick?: () => void;
    disabled?: boolean;
    version: "green" | "red";
}

export const InfotextButton = (props: React.PropsWithChildren<Props>): JSX.Element => {
    const style = props.version === "green" ? { backgroundColor: "green" } : {};

    return (
        <button className={cssStyle.pushable} type="button" onClick={props.onClick} disabled={props.disabled}>
            <span className={cssStyle.shadow} />
            <span className={props.version === "green" ? cssStyle.edgegreen : cssStyle.edge} />
            <span className={cssStyle.front} style={style}>
                <p className={cssStyle.buttontext}>{props.children}</p>
            </span>
        </button>
    );
};
