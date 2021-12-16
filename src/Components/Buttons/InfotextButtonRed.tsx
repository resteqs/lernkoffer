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
export const InfotextButtonRed: React.FC<Props> = ({ showtext, text, setText }:Props ):JSX.Element => {
     
    function decrementCount(): void {
        setText(showtext -= 1);
    }

    return(
        <button className= {infotextbutton.pushable} type = "button" onClick={decrementCount} >
        <span className={infotextbutton.shadow} />
        <span className={infotextbutton.edge} />
        <span className={infotextbutton.front}> 
           <p className={infotextbutton.buttontext}>{ text}</p> 
        </span>
        </button>
    );
}