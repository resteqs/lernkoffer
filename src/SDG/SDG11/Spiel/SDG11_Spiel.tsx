// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import renderer from "react-dom";
import { Link } from "react-router-dom";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import "../../../styles/colour_sdgs.css";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG11.png";
import "../sdg11.css"

export const SDG11_Spiel = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(1);
    const sdg = "SDG11";
    const maxslide = 9;

    const text = {
        1: (
            <div style={{ textAlign: "left", fontSize: "40px" }}>
                <p>
                    {" "}
                    Der ökologische Fußabdruck eines Menschen zeigt, wie umweltfreundlich jemand lebt. Hierbei werden verschiedene Entscheidungen, die du triffst, bewertet.
                    {" "}
                </p>
            </div>
        ),
        2: (
            <div style={{ textAlign: "left", fontSize: "40px" }}>
                <ul>
                   <li> 
                    {" "}
                    Im Folgenden wirst du immer eine Frage bekommen und drei verschiedene Antwortmöglichkeiten. Wenn du die Frage und die Antworten gelesen hast, nimm dir kurz Zeit und überlege, welche der Antworten am besten auf dich zutrifft. Dahinter siehst du in Klammern immer eine Zahl. Das sind die Punkte, die du sammelst. Diese Punkte zählst du während dem Spielen zusammen.
                    {" "}
                    </li> 
                    <li> Am Ende des Spiels wirst du eine Bewertung sehen, die von der Anzahl deiner Punkte abhängt.</li>
                </ul>
            </div>
        ),
        3: (
            <div> 
                <p> Wenn du eine lange Strecke zurücklegen musst, welches der folgenden Verkehrsmittel würdest du eher nutzen?</p>
                <ul className= "flex-container ">
                    <li className="flex-item"> Flugzeug (2) </li>
                    <li className="flex-item"> Fahrrad (0) </li>
                    <li className="flex-item"> Bus (1) </li>
                </ul>
                
            </div>
        ), 
        4: (
            <div>
                <p> Wenn du einkaufen gehst, achtest du darauf, saisonale (nur Sachen, die zu der aktuellen Zeit wachsen) und regionale (Dinge, die in deiner Nähe wachsen) Dinge zu kaufen?</p>
                <ul className= "flex-container ">
                    <li className="flex-item"> Nur manchmal (1) </li>
                    <li className="flex-item"> Nein, nie (2) </li>
                    <li className="flex-item"> Ja, immer (0) </li>
                </ul>
            </div>
        ),
        5: (
            <div>
                <p> Was machst du mit Kleidung und Spielzeuge, die du nicht mehr benötigst? </p>
                <ul className= "flex-container ">
                    <li className="flex-item"> Spenden (0) </li>
                    <li className="flex-item"> Wegwerfen (2) </li>
                    <li className="flex-item"> In etwas Neues verwandeln (0) </li>
                </ul>
            </div>
        ),
        6: (
            <div>
                <p> Wie oft isst du Fleisch iin der Woche</p>
                <ul className= "flex-container ">
                    <li className="flex-item"> Kein bis ein Mal (0) </li>
                    <li className="flex-item"> Zwei bis drei mal (1) </li>
                    <li className="flex-item"> Vier oder öfter (2) </li>
                </ul>
            </div>
        ),
        7: (
            <div style={{ textAlign: "left", fontSize: "40px" }}>
                <p> Nachdem du jetzt alle Fragen bearbeitet hast, sehen wir uns einmal an, wie umweltfreundlich du lebst:</p>
                <ul> 
                    <li> <b>1. 0-2 Punkte: </b></li> 
                    <li> Sehr gut, du lebst sehr umweltbewusst. Du achtest auf sehr viele wichtige Aspekte und solltest das auch weiterhin tun.</li>
                </ul>
            </div>
        ),

        8: (
            <div style={{ textAlign: "left", fontSize: "40px" }}>
                <ul>
                <li> <b>2. 3-5 Punkte: </b></li>
                <li> Allgemein achtest du schon oft auf die Umwelt. Allerdings gibt es noch einige Sachen, an denen du arbeiten solltest. Wenn du das machst, hilfst du dabei, die Umwelt ein wenig mehr zu schützen. </li>
                </ul>
            </div>
        ), 
        9: (
          <div style={{ textAlign: "left", fontSize: "40px" }}>
              <ul>
              <li> <b> 3. 6-8 Punkte:</b> </li>
              <li> Du solltest auf jeden Fall an deinen Gewohnheiten arbeiten und versuchen, mehr auf die Umwelt zu achten. Dazu kannst du an vielen verschiedenen Dingen arbeiten, einige wenige Beispiele sind dir dazu schon in den Fragen gegeben.</li>
              </ul>
          </div>  
        ), 
    };
    const header = {
        1: (
            <div>
                <p> Einleitung </p>
            </div>
        ),
        2: (
            <div>
                <p> Einleitung </p>
            </div>
        ),
        3: (
            <div>
                <p> Frage 1 </p>
            </div>
        ),
        4: (
            <div>
                <p> Frage 2 </p>
            </div>
        ),
        5: (
            <div>
                <p> Frage 3 </p>
            </div>
        ),
        6: (
            <div>
                <p> Frage 4 </p>
            </div>
        ),
        7: (
            <div>
                <p> Auswertung  </p>
            </div>
        ),
        8: (
            <div>
                <p> Auswertung  </p>
            </div>
        ),
        9: (
            <div>
                <p> Auswertung  </p>
            </div>
        ),
       
    };
    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }
    let buttonBack;
    let buttonNext;
    let buttonEnd;

    // eslint-disable-next-line prefer-const
    buttonBack =
        showtext >= 2 ? (
            <div className="backbutton">
                {" "}
                <button className={infotextbutton.pushable} type="button" onClick={decrementCount}>
                    <span className={infotextbutton.shadow} />
                    <span className={infotextbutton.edge} />
                    <span className={infotextbutton.front}>
                        <p className={infotextbutton.buttontext}>Zurück</p>
                    </span>
                </button>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
    // eslint-disable-next-line prefer-const
    buttonNext =
        showtext < maxslide ? (
            <div className="nextbutton">
                {" "}
                <button className={infotextbutton.pushable} type="button" onClick={incrementCount}>
                    <span className={infotextbutton.shadow} />
                    <span className={infotextbutton.edgegreen} />
                    <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                        <p className={infotextbutton.buttontext}>Weiter</p>
                    </span>
                </button>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
    // eslint-disable-next-line prefer-const
    buttonEnd =
        showtext === maxslide ? (
            <div className="nextbutton">
                <Link to="/Vorlagen/Endscreen">
                    {" "}
                    <button className={infotextbutton.pushable} type="button">
                        <span className={infotextbutton.shadow} />
                        <span className={infotextbutton.edgegreen} />
                        <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                            <p className={infotextbutton.buttontext}>Weiter </p>
                        </span>
                    </button>
                </Link>{" "}
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    // eslint-disable-next-line prefer-const
    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Ökologischer Fußabdruck
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div className="textbox">
                <p className="headertext">
                    <b>{header[showtext]}</b>
                </p>{" "}
                <br />
                <p className="bodytext"> {text[showtext]} </p>
            </div>
            {buttonBack}
            {buttonNext}
            {buttonEnd}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG11_Spiel />, document.getElementById("root"));
