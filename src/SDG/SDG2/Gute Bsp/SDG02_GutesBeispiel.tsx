/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prefer-const */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import Modal from "react-modal";
import renderer from "react-dom";
import { Link } from "react-router-dom";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import "../../../styles/colour_sdgs.css";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG02.png";
import "../Spiel/sdg02.css";

export const SDG02_GutesBeispiel = (): JSX.Element => {
    const [showtext, setText] = React.useState(1);
    const sdg = "SDG02";
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalOpened, setModalOpened] = React.useState(0);
    const [modalOne, setModalOne] = React.useState(0);
    const maxslide = 2;

    const text = {
        1: (
            <div style={{ textAlign: "left", fontSize: "1.6vw" }}>
                <p>
                    {" "}
                    <ul>
                        <li>
                            {" "}
                            Getreide, Speicherwurzeln, Linsen, Bohnen, Früchte, Fisch, Fleisch, Milch und Eier gelten
                            als weltweite Grundnahrungsmittel. Das bedeutet also, dass sie als unbedingt notwendig für
                            Menschen angesehen werden, da in ihnen wichtige Stoffe wie Vitamine, Kohlenhydrate, Fette
                            oder Eiweiße enthalten sind. Welche Nahrungsmittel tatsächlich in verschiedenen Regionen
                            gegessen werden, ist stark von der Kultur und den klimatischen Bedingungen (ist es warm oder
                            kalt?; gibt es viel oder wenig Wasser?) abhängig.
                        </li>
                        <li>
                            {" "}
                            Aber nicht jeder Mensch hat die Möglichkeit, so viel zu essen, dass er/sie gesund leben
                            kann. Aus diesem Grund gibt es viele Organisationen und Vereine, die gegen Hunger vorgehen.
                            Ein Beispiel ist die Welthungerhilfe.
                        </li>
                        <li>
                            {" "}
                            Im Folgenden möchte ich dir ein paar Textausschnitte zeigen und du sollst entscheiden,
                            welche Teile zusammengehören. Dabei gehört immer ein Text auf der linken Seite zu einem auf
                            der rechten Seite. Lies dir die Textanfänge auf der linken Seite durch und überlege dann,
                            welcher Text auf der rechten Seite dazu gehört.
                        </li>
                    </ul>
                </p>
            </div>
        ),
        2: (
            <div>
                <p style={{ float: "left", width: "40%", textAlign: "left", fontSize: "1.25vw" }}>
                    <ul>
                        <li>
                            1. Das Ziel: Weltweit soll jeder Mensch eine sichere Ernährung haben und diese sollte
                            nachhaltig gestaltet werden. Daher sollen auch die Bildung, der Zugang zu sauberem Wasser
                            und eine umweltfreundliche Energieversorgung garantiert werden. Das alles soll bis zum Jahr
                            2030 erreicht werden.
                        </li>
                        <li>
                            {" "}
                            2. Die Arbeit: Die Organisation setzt sich für ein selbstbestimmtes Leben in Würde und
                            Gerechtigkeit für jeden Menschen unter dem Motto „Zero Hunger wherever we work by 2030“
                            (Kein Hunger, wo immer wir arbeiten, bis zum Jahr 2030) ein.
                        </li>
                        <li>
                            {" "}
                            3. Die Themen: Hunger kann man nicht dadurch beenden, Leute nur mit Essen zu versorgen. Egal
                            aus welchen Gründen ein Mensch zu wenig zu essen hat, muss ihm/ihr aber geholfen werden. Das
                            kann auf sehr vielen verschiedenen Wegen passieren. Einige wichtige Dinge dabei sind, Wissen
                            über gesunde Ernährung und nachhaltige Landwirtschaft zu vermitteln.
                        </li>
                    </ul>
                </p>

                <p style={{ float: "right", width: "40%", textAlign: "left", fontSize: "1.25vw" }}>
                    <ul>
                        <li>
                            {" "}
                            a.) Insgesamt wird diese Arbeit in 35 Ländern weltweit durch hunderte Projekte umgesetzt.
                        </li>
                        <li>
                            {" "}
                            b.) Zusätzlich werden Gründungen von Unternehmen und Gruppen unterstützt, damit Menschen
                            sich zusammen für ihre Rechte einfacher starkmachen können.{" "}
                        </li>
                        <li>
                            {" "}
                            c.) Wichtig hierbei ist, dass die Verbesserungen nicht nur kurzfristig sein sollen, sondern
                            so lange wie möglich, im Idealfall für immer, anhalten sollen. Um diese Ziele erreichen
                            zu können, arbeitet die Welthungerhilfe mit verschiedenen Partnern zusammen.
                        </li>
                    </ul>
                </p>

                <button
                    type="button"
                    style={{
                        background: "#15b408",
                        borderStyle: "none",
                        position: "fixed",
                        bottom: "5vw",
                        borderRadius: "1.5vw 1.5vw 1.5vw 1.5vw",
                        padding: "1vw",
                    }}
                    onClick={() => {
                        setIsOpen(true);
                        openModal1();
                    }}
                >
                    <p style={{ fontSize: "3vw" }}> Lösung </p>
                </button>
            </div>
        ),
    };

    const LösungÜberschrift = {
        1: (
            <div>
                <p> Lösung </p>
            </div>
        ),
    };

    const Lösung = {
        1: (
            <div>
                <p>
                    <ul>
                        <li> 1. zu c.) </li>
                        <li> 2. zu a.) </li>
                        <li> 3. zu b.) </li>
                    </ul>
                </p>
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
                <p> </p>
            </div>
        ),
        3: (
            <div>
                <p> </p>
            </div>
        ),
    };

    function openModal1(): void {
        setModalOpened(1);
        if (modalOne === 2) {
            setModalOne(1);
        } else {
            setModalOne(modalOne + 1);
        }
    }

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
            <div className="backbutton" style={{ marginBottom: "10vh" }}>
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
        showtext < maxslide ? (
            <div className="nextbutton" style={{ marginBottom: "10vh" }}>
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
        showtext === maxslide ? (
            <div className="nextbutton" style={{ marginBottom: "5vh" }}>
                <Link to="/Vorlagen/Endscreen">
                    {" "}
                    <button className={infotextbutton.pushable} type="button">
                        <span className={infotextbutton.shadow} />
                        <span className={infotextbutton.edgegreen} />
                        <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                            <p className={infotextbutton.buttontext}>Beenden </p>
                        </span>
                    </button>
                </Link>{" "}
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
                    {LösungÜberschrift[modalOne]}
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
                {Lösung[modalOne]}
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
            <p style={{ fontSize: "2.5vw" }}>{modalContent[modalOpened]}</p>
        </Modal>
    );

    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Welthungerhilfe
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div className="infotextbox02info">
                <p className="headertext">
                    <b>{header[showtext]}</b>
                </p>{" "}
                <br />
                <p className="bodytext"> {text[showtext]} </p>
            </div>
            {buttonBack}
            {buttonNext}
            {buttonEnd}
            {modal}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG02_GutesBeispiel />, document.getElementById("root"));
