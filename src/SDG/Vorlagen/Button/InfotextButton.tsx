
import * as React from "react";
import "../../../styles/Infotextbutton.css";

export const Infotextbutton = ():JSX.Element => {
    return(
        <button className="pushable" type = "button">
        <span className="shadow" />
        <span className="edge" />
        <span className="front">
            Push me
        </span>
        </button>



    );
}