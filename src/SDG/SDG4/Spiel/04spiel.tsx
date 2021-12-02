// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-const */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable eslint-comments/disable-enable-pair */
// eslint-disable-next-line eslint-comments/no-duplicate-disable
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line unicorn/filename-case

import * as React from "react";
import renderer from "react-dom";
import { BrowserRouter, Link } from "react-router-dom";
import Modal from "react-modal";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import "../../../styles/colour_sdgs.css";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG04.png";
import Spielfeld from "./Media/spielfeld.png";
import Cards from "./Media/cards.png";
import Lips from "./Media/lips.png";
import Pen from "./Media/pen.png";
import Stickman from "./Media/stickman.png";
import "./sdg4.css";

export const SDG04_Spiel = (): JSX.Element => {
    const [showtext, setText] = React.useState(6);
    const sdg = "SDG04";
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalOpened, setModalOpened] = React.useState(0);
    const [modalOne, setModalOne] = React.useState(0);
    const [modalTwo, setModalTwo] = React.useState(0);
    const [modalThree, setModalThree] = React.useState(0);

    const Erklären = {
        1: "Kindergarten/Vorschule",
        2: "Schulhaus",
        3: "Lesen",
        4: "Rechnen",
        5: "Üben",
        6: "Weltweit",
        7: "Nachhaltigkeit",
    };

    const ErklärenText = {
        1: " -> Kleinkinder sollten die Möglichkeit haben, sich zu entwickeln, damit sie auf die Grundschule vorbereitet sind",
        2: " -> alle sollten einen ruhigen, sicheren Platz zum Lernen haben",
        3: " -> wie Rechnen und Schreiben sollte jeder Mensch die Möglichkeit haben, das zu lernen",
        4: " -> wie Lesen und Schreiben sollte jeder Mensch die Möglichkeit haben, das zu lernen",
        5: " -> in der Schule sollte man die Möglichkeit haben, gelerntes auch zu üben",
        6: " -> Bildung sollte für alle in allen Ländern verfügbar sein",
        7: " -> je-der soll über Nachhal-tigkeit und ein nach-haltiges Leben lernen können",
    };

    const Zeichnen = {
        1: "Stift",
        2: "Klasse",
        3: "Tisch",
        4: "Freunde",
        5: "Hausaufgaben",
        6: "Kostenlos",
        7: "Fragen",
    };

    const ZeichnenText = {
        1: "-> alle Schüler:innen brauchen zum Schreiben und Rechnen Stifte",
        2: "-> wenn Lehrer:innen nicht so viele Kinder auf einmal unterrichten müssen, können sie meist besser allen helfen",
        3: "-> es ist immer gut, wenn man eine stabile Unterlage zum Schreiben hat",
        4: "-> in der Schule kannst du viele Freunde finden und gemeinsam lernen macht auch viel Spaß",
        5: "-> diese dienen dazu, gelernte Sachen aus der Schule daheim zu wiederholen und zu üben",
        6: "-> Bildung sollte für alle nichts kosten!",
        7: "-> jedes Mal, wenn man etwas neu lernt, hat man Fragen und diese sollten auch beant-wortet werden kön-nen",
    };

    const Phantomime = {
        1: "Schreiben",
        2: "Bauen",
        3: "Lehrer:in",
        4: "Heft",
        5: "Arbeit",
        6: "Sport/Bewegung",
        7: "Pause",
    };

    const PhantomimeText = {
        1: "-> wie Lesen und Rechnen sollte jeder Mensch die Möglichkeit haben, das zu lernen",
        2: "-> es ist wichtig, dass weitere Bil-dungseinrichtungen gebaut werden bzw. die bestehenden verbessert werden",
        3: "-> Leh-rer:innen sollten gut ausgebildet sein und überall ausreichend vorhanden sein",
        4: "-> alle Schüler:innen brauchen Hefte, um wichtige Dinge aufzuschrei-ben",
        5: "-> alle sollten die Möglichkeit haben, die Fähigkeiten zu erlernen, die es braucht, um eine Arbeit zu finden",
        6: "-> Sport ist gesund und in Lernpausen sollte man sich bewegen, dann fällt einem das Lernen danach auch wieder leichte",
        7: "-> beim Lernen sollte man immer mal wieder Pausen ma-chen, damit sich das Gehirn erholen kann; z.B. draußen spielen",
    };

    function openModal1(): void {
        setModalOpened(1);
        if(modalOne === 7){
            setModalOne(1);
        }else{setModalOne(modalOne +1);}
        
    }
    function openModal2(): void {
        setModalOpened(2);
        if(modalTwo === 7){
            setModalTwo(1);
        }
        else{setModalTwo(modalTwo +1);}
    }
    function openModal3(): void {
        setModalOpened(3);
        if(modalThree === 7){
            setModalThree(1);
        }else{

        setModalThree(modalThree +1);
    }
    }
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
                    Steht ihr auf einem dieser drei Bilder, <img src={Lips} alt="" className="BildSDG4" />{" "}
                    <img src={Pen} alt="" className="BildSDG4" /> <img src={Stickman} alt="" className="BildSDG4" />
                    müsst ihr folgendes machen:
                </p>
            </div>
        ),
        4: (
            <div>
                <p className="SpielregelnSDG04" style={{ textAlign: "left" }}>
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
                    <img src={Lips} alt="" className="BildSDG4" /> → beschreibt nur mit Worten; ihr dürft dabei das
                    abgedruckte Wort nicht benutzen
                </p>
                <p className="SpielregelnSDG04">
                    {" "}
                    <img src={Pen} alt="" className="BildSDG4" /> → beschreibt nur mithilfe von Zeichnungen; ihr dürft
                    nicht reden oder Worte aufschreiben
                </p>
                <p className="SpielregelnSDG04">
                    {" "}
                    <img src={Stickman} alt="" className="BildSDG4" /> → beschreibt nur mit euren Händen (das wird auch
                    „Pantomime“ genannt); ihr dürft nicht Reden, Worte aufschreiben oder sonst etwas zeichnen
                </p>
            </div>
        ),
        6: (
            <div>
                <img className="Spielfeld04" src={Spielfeld} alt="" />

               <button
                    type="button"
                    style={{
                        background: "none",
                        borderStyle: "none",
                        marginTop: "150px",
                    }}
                    onClick={() => {
                        setIsOpen(true);
                        openModal1();
                    }}
                >
                    <img className="Cards" style={{ right: "200px" }} src={Cards} alt="" />
                </button>
                <button
                    type="button"
                    style={{
                        background: "none",
                        borderStyle: "none",
                        marginTop: "150px",
                    }}
                    onClick={() => {
                        setIsOpen(true);
                        openModal2();
                    }}
                >
                    <img className="Cards" style={{ right: "400px" }} src={Cards} alt="" />
                </button>

                <button
                    type="button"
                    style={{
                        background: "none",
                        borderStyle: "none",
                        marginTop: "150px",
                    }}
                    onClick={() => {
                        setIsOpen(true);
                        openModal3();
                    }}
                >
                    <img className="Cards" style={{ right: "600px" }} src={Cards} alt="" />
                </button>

                <p className="cardDescription" style={{ left: "1200px" }}>Phantomime</p>
                <p className="cardDescription" style={{ left: "1420px" }}>Zeichnen</p>
                <p className="cardDescription" style={{ left: "1620px" }}>Erklären</p>
                
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
        showtext <= 5 ? (
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
   
    buttonEnd =
        showtext === 6? (
            <div className="nextbutton">
                <BrowserRouter><Link to="/Vorlagen/Endscreen">
                    {" "}
                    <button className={infotextbutton.pushable} type="button">
                        <span className={infotextbutton.shadow} />
                        <span className={infotextbutton.edgegreen} />
                        <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                            <p className={infotextbutton.buttontext}>Weiter </p>
                        </span>
                    </button>
                </Link>{" "} </BrowserRouter>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
  

    const modalContent = {
        1: (
            <div>
                <div className="content-header">
                    {Erklären[modalOne]}
                    <button
                        type="button"
                        className="personCheckOkButton"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <b>Zurück</b>
                    </button>
                </div>{" "}
                {ErklärenText[modalOne]}
            </div>
        ),
        2: (
            <div>
                <div className="content-header">
                    {Zeichnen[modalTwo]}
                    <button
                        type="button"
                        className="personCheckOkButton"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <b>Zurück</b>
                    </button>
                </div>{" "}
                {ZeichnenText[modalTwo]}
            </div>
        ),
        3: (
            <div>
                <div className="content-header">
                    {Phantomime[modalThree]}
                    <button
                        type="button"
                        className="personCheckOkButton"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <b>Zurück</b>
                    </button>
                </div>{" "}
                {PhantomimeText[modalThree]}
            </div>
        ),
    };

    modal = (
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
            <p style={{ fontSize: "50px" }}>{modalContent[modalOpened]}</p>
        </Modal>
    );

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
            {buttonEnd}
            {buttonNext}
            
            {modal}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG04_Spiel />, document.getElementById("root"));
