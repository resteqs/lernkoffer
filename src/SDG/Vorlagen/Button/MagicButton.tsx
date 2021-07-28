
import * as React from "react";
import "../../../styles/button.css";

export const MagicButton = ():JSX.Element => {
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