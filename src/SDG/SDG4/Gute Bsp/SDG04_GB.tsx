/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/filename-case */
/* eslint-disable no-eval */

import * as React from "react";
import renderer from "react-dom";
import infotextbutton from "../../../styles/Infotextbutton.module.css" ;
import "../../../styles/colour_sdgs.css";
import { Link } from 'react-router-dom';
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG04.png";
import EG from "../../../EG/eg.png";
import LineTo from 'react-lineto';
import "../Spiel/sdg4.css";

export const SDG04_GB = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(1);
    const sdg = "SDG04";
   



    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Hochwertige Bildung <img className="sdglogo" alt="logo" src={Logo} />
                </div>
                
            </div>
            <div className="textBoxes"><p >TExt</p></div> 
            <div className="textBoxes"><p >TExt</p></div>
        </div>
    );
};
renderer.render(<SDG04_GB />, document.getElementById("root"));
