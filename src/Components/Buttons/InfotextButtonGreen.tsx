// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-param-reassign */

import * as React from "react";
import  infotextbutton from "../../styles/Infotextbutton.module.css";
import renderer from "react-dom";



interface Props{
    showtext: number, 
    text:string, 
    setText:React.Dispatch<React.SetStateAction<number>>
    
}
export const InfotextButtonGreen: React.FC<Props> = ({ showtext, text, setText }:Props ):JSX.Element => {
    
    function incrementCount(): void {
        setText(showtext += 1);
    }

    return(
        <button className={infotextbutton.pushable} type="button" onClick={incrementCount}>
            <span className={infotextbutton.shadow} />
            <span className={infotextbutton.edgegreen} />
            <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                <p className={infotextbutton.buttontext}>{text}</p>
            </span>
        </button>
    );
}