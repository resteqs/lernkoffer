// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-const */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

// eslint-disable-next-line unicorn/filename-case

import * as React from "react";
import renderer from "react-dom";
import Modal from "react-modal";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import "../../../styles/colour_sdgs.css";
import { Link } from "react-router-dom";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG04.png";
import Spielfeld from "./Media/spielfeld.png";
import Cards from "./Media/cards.png";
import Lips from "./Media/lips.png";
import Pen from "./Media/pen.png";
import Stickman from "./Media/stickman.png";
import "./sdg4.css";

import Question from "./question_mark.png";

export const SDG04_Spiel = (): JSX.Element => {
   
    const [showtext, setText] = React.useState(1);
    const sdg = "SDG04";
    const [modalIsOpen, setIsOpen] = React.useState(false);
    


    const text = {
        1: (
            <div>
                <p className="EinleitungSDG04">
                    Sicherheit, Lesen, Universität und Weltweit – das sind alles Begriffe, die mit hochwertiger Bildung
                    zu tun haben. Aber wisst ihr was das ist und könnt ihr diese Begriffe auch beschreiben? Genau darum
                    geht es in diesem Spiel. Ihr werdet verschiedene Begriffe beschreiben, die wichtig bei hochwertiger
                    Bildung sind. Unter jedem Begriff steht eine Erklärung dazu, warum dieses Wort mit diesem Thema in
                    Verbindung steht. Wenn ihr fertig gespielt habt, könnt ihr überlegen, welche Ausdrücke neu für euch
                    waren und welche ihr schon kanntet. Außerdem könnt ihr euch informie-ren, ob diese Dinge bereits für
                    euch in eurer Schule bzw. in eurer Region verfügbar sind.
                </p>
            </div>
        ),
        2: (
            <div>
                <p className="SpielregelnSDG04">
                    Jeder Spieler/jede Spielerin nimmt sich eine Spielfigur und stellt sie auf den Bildschirm auf das
                    „Start“-Feld. Holt euch als nächstes einen Würfel und würfelt einmal reihum. Die Person mit der
                    höchsten Augenzahl fängt an. Wenn ihr dran seid, würfelt und geht so viele Bilder vorwärts, wie der
                    Würfel anzeigt.
                </p>
            </div>
        ),
        3: (
            <div>
                <p className="SpielregelnSDG04">
                    {" "}
                    Steht ihr auf einem dieser drei Bilder, <img src={Lips} alt="" className="BildSDG4" /> <img src={Pen} alt="" className="BildSDG4"/>{" "}
                    <img src={Stickman} alt="" className="BildSDG4" />
                    müsst ihr folgendes machen:
                </p>
            </div>
        ),
        4: (
            <div>
                <p className="SpielregelnSDG04" style={{ textAlign:"left" }}> 
                    <ol>
                        <li>- Klickt auf das Kartensymbol neben dem Spielfeld</li>
                        <li>- Beschreibt das nun abgebildete Wort innerhalb 3 Minute</li>
                        <li>
                            - Wie ihr es beschreiben sollt, hängt von dem Bild ab, auf dem ihr aktuell steht; aber dazu
                            gleich noch mehr
                        </li>
                        <li>
                            - Ist die Zeit abgelaufen, klickt auf das Spielfeld-Symbol und ihr gelangt wieder zum
                            Spielfeld
                        </li>
                        <li>- Haben eure Mitspieler:innen das Wort erraten, rückt drei Bilder vor</li>
                        <li>- Wenn dies nicht der Fall ist, bleibt einfach auf dem aktuellen Bild stehen</li>
                        <li>- Dann beginnt wieder alles von vorne</li>
                        <li>
                            - ABER: nun müsst ihr, nachdem ihr das Kartensymbol angeklickt habt, auf „Mischen“ klicken,
                            damit ein anderes Wort als das letzte Mal erscheint
                        </li>
                    </ol>
                </p>
            </div>
        ),
        5: (
            <div>
                <p className="SpielregelnSDG04">Nun zu unterschieden Arten, wie ihr das Bild beschreibt:</p>
                <p className="SpielregelnSDG04">
                    {" "}
                    <img src={Lips} alt=""  className="BildSDG4"/> → beschreibt nur mit Worten; ihr dürft dabei das abgedruckte Wort nicht
                    benutzen
                </p>
                <p className="SpielregelnSDG04">
                    {" "}
                    <img src={Pen} alt=""  className="BildSDG4" /> → beschreibt nur mithilfe von Zeichnungen; ihr dürft nicht reden oder Worte
                    aufschreiben
                </p>
                <p className="SpielregelnSDG04">
                    {" "}
                    <img src={Stickman} alt=""  className="BildSDG4" /> → beschreibt nur mit euren Händen (das wird auch „Pantomime“ genannt);
                    ihr dürft nicht Reden, Worte aufschreiben oder sonst etwas zeichnen
                </p>
            </div>
        ),
        6: (
            <div>
                 <img className = "Spielfeld04" src= {Spielfeld} alt="" />
                 <img className = "Card1" src= {Cards} alt=""/> 
                 
                 <img className = "Card2" src= {Cards} alt=""/> 
                 <img className = "Card3" src= {Cards} alt=""/> 
            </div>
        ),
    };
    const header = {
        1: (
            <div>
                <p>Einleitung</p>
            </div>
        ),
        2: (
            <div>
                <p>Spielregeln</p>
            </div>
        ),
        3: (
            <div>
                <p>Spielregeln</p>
            </div>
        ),
        4: (
            <div>
                <p>Spielregeln</p>
            </div>
        ),
        5: (
            <div>
                <p>Spielregeln</p>
            </div>
        ),
        6: (
            <div>
                <p> Spiel</p>
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
    let modal;

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

      
        buttonNext =
        showtext <= 9 ? (
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

        
       
     modal=
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        overlayClassName={{
            base: "overlay-base",
            afterOpen: "overlay-after",
            beforeClose: "overlay-before",
        }}
        className={{
            base: "content-base",
            afterOpen: "content-after",
            beforeClose: "content-before",
        }}
        closeTimeoutMS={50}
    >
        <div className="content-header">
            {}
            <button
                type="button"
                className="personCheckOkButton"
                onClick={() => {
                    setIsOpen(false);
                    incrementCount();
                    
                }}
            >
                <b>Okay</b>
            </button>
        </div>
        {}
    </Modal>



return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                     Activity
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div className="infotextbox04">
                <p className="headertext">
                    <b>{header[showtext]}</b>
                </p>{" "}
                <br />
                <p className="headertext">
                    <p>{text[showtext]}</p>
                </p>{" "}
            </div>
            {buttonBack}
            {buttonNext}
            {buttonEnd}
            {modal}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG04_Spiel />, document.getElementById("root"));
