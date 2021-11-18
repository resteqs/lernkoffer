/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/filename-case */
/* eslint-disable no-eval */

import * as React from "react";
import renderer from "react-dom";
import infotextbutton from "../../../styles/Infotextbutton.module.css" ;
import "../../../styles/colour_sdgs.css";
import { Link } from 'react-router-dom';
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG06.png";
import EG from "../../../EG/eg.png";
import LineTo from 'react-lineto';
import "../Spiel/sdg4.css";

export const SDG04_GB = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(1);
    const sdg = "SDG06";
   



    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Hochwertige Bildung <img className="sdglogo" alt="logo" src={Logo} />
                </div>
                
            </div>
            <p className= "GB_Text" style={{ float: 'left' , marginRight: "50px" }}>Malala Yousafzai wurde am</p> <p className= "GB_Text" style={{ textAlign: 'right' , marginLeft:"-550px" }}>in der Öffentlichkeit Ganzkörper-schleier (Burkas) tragen müssen.</p><br/>
            <p className= "GB_Text" style={{ float: 'left' , marginRight: "50px" }}>2007 übernahm eine Gruppe radikaler Islamisten,</p> <p className= "GB_Text" style={{ textAlign: 'right' }}>zur Schule gehen und in Malalas Hei-matregion keine Musik mehr hören.</p><br/>
            <p className= "GB_Text" style={{ float: 'left' , marginRight: "50px" }}>Die Taliban wollen einen Gottesstaat errichten, in dem z.B. Frauen</p> <p className= "GB_Text" style={{ textAlign: 'right' }}>12. Juli 1997 in Pakistan geboren</p><br/>
            <p className= "GB_Text" style={{ float: 'left' , marginRight: "50px" }}>Außerdem dürfen sie nicht arbeiten, ab 8 Jahren nicht mehr</p> <p className= "GB_Text" style={{ textAlign: 'right' }}>die sogenannten „Taliban“, die Herrschaft über Malalas Heimat.</p><br/>
            <p className= "GB_Text" style={{ float: 'left' , marginRight: "50px" }}>Darüber berichtete die Webseite</p> <p className= "GB_Text" style={{ textAlign: 'right' }}>des TV-Senders BBC.</p><br/>
            <p className= "GB_Text" style={{ float: 'left' , marginRight: "50px" }}>Nachdem Malalas Vater sie als Autorin für den Blog „Gul Makai“(Kornblume) vorschlug,</p> <p className= "GB_Text" style={{ textAlign: 'right' }}>Interviews über Bildung und Frauen, da sie als eine der wenigen öffentlich sprach.</p><br/>
            <p className= "GB_Text" style={{ float: 'left' , marginRight: "50px" }}>In ihrer Heimat gab es Selbstmordattentate, Angst und Trauer und</p> <p className= "GB_Text" style={{ textAlign: 'right' }}>den pakistanischen Friedenspreis.</p><br/>
            <p className= "GB_Text" style={{ float: 'left' , marginRight: "50px" }}>Sie wurde weltberühmt, trat in Fernsehshows auf und gab</p> <p className= "GB_Text" style={{ textAlign: 'right' }}>beschrieb Malala für 10 Wochen in kurzen Notizen die Unterdrückung durch die Taliban.</p><br/>
            <p className= "GB_Text" style={{ float: 'left' , marginRight: "50px" }}>Dafür erhielt sie Ende Dezember 2011</p> <p className= "GB_Text" style={{ textAlign: 'right' }}>die Mädchen, zu denen auch Malala gehörte, durften nicht in die Schule.</p><br/>
            <p className= "GB_Text" style={{ float: 'left' , marginRight: "50px" }}>Die Bemühungen Malalas passten jedoch den Taliban nicht,</p> <p className= "GB_Text" style={{ textAlign: 'right' }}>deshalb schossen sie das Mädchen im Oktober 2012 in einem Bus an.</p><br/>
            <p className= "GB_Text" style={{ float: 'left' , marginRight: "50px" }}>Sie wurde schwer verletzt, aber konnte</p> <p className= "GB_Text" style={{ textAlign: 'right' }}>erlaubte ihr an ihrem 16. Geburtstag (Juli 2013) eine Rede zu halten.</p><br/>
            <p className= "GB_Text" style={{ float: 'left' , marginRight: "50px" }}>Seit März 2013 geht sie in</p> <p className= "GB_Text" style={{ textAlign: 'right' }}>zur UN-Friedensbotschafterin, jeweils als jüngste Frau weltweit.</p><br/>
            <p className= "GB_Text" style={{ float: 'left' , marginRight: "50px" }}>Sie gewann den internationalen Kinder-Friedenspreis und die UN</p> <p className= "GB_Text" style={{ textAlign: 'right' }}>nach längerer Behandlung wieder ge-sund werden.</p><br/>
            <p className= "GB_Text" style={{ float: 'left' , marginRight: "50px" }}>2014 bekam Malala den Friedens-nobelpreis und 2017 wurde sie</p> <p className= "GB_Text" style={{ textAlign: 'right' }}>Großbritannien wieder zur Schule.</p><br/>
            <p className= "GB_Text" style={{ float: 'left' , marginRight: "50px" }}>Der 12. Juli, an dem Malala ihreRede vor der UN hielt, wurde zum „Malala-Tag“</p> <p className= "GB_Text" style={{ textAlign: 'right' }}>der jedes Jahr an das Recht aller Kin-der, besonders von Mädchen, auf Bil-dung erinnern soll.</p><br/>
        </div>
    );
};
renderer.render(<SDG04_GB />, document.getElementById("root"));
