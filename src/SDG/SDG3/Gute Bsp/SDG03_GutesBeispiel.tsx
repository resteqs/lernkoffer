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
import Logo from "../../../SDGLogos/Goal-SDG03.png";
import "../sdg3.css";

export const SDG03_GutesBeispiel = (): JSX.Element => {
    const [showtext, setText] = React.useState(1);
    const sdg = "SDG03";
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalOpened, setModalOpened] = React.useState(0);
    const [modalOne, setModalOne] = React.useState(0);
    const [modalTwo, setModalTwo] = React.useState(0);
    const [modalThree, setModalThree] = React.useState(0);
    const [modalFour, setModalFour] = React.useState(0);
    const [modalFive, setModalFive] = React.useState(0);
    const [modalSix, setModalSix] = React.useState(0);
    const maxslide = 4;

    const text = {
        1: (
            <div>
                <p>
                    {" "}
                    Das ist das Logo der Hilfsorganisation „Ärzte ohne Grenzen“ beziehungsweise auf Französisch
                    „Médecins Sans Frontières“. Es folgen nun mehrere Informationen über diese humanitäre (auf die
                    Verminderung menschlicher Not ausgerichtete) medizinische Organisation und was sie macht. Lest euch
                    alles gut durch, denn am Ende erwarten euch ein paar Fragen!{" "}
                </p>
                <p>
                    {" "}
                    Gründung: im Jahr 1971 in Paris von zwei unabhängigen Ärztegruppen und Journalisten (=
                    Berichterstatter:innen)
                </p>
                <p> Ziel: Hochwertige und lohnende Grundheitsversorgung</p>
                <p>
                    {" "}
                    Einsatzländer: ungefähr 70 Länder, in denen Erwachsene und Kinder Schwierigkeiten haben zu überleben
                </p>
                <p>
                    {" "}
                    leitlinien
                    <ul>
                        <li>
                            {" "}
                            - aktiv werden, wenn ein staatliches Gesundheitssystem seiner Bevölkerung nicht helfen kann
                            oder will (z.B. durch Krieg oder Naturkatastrophen)
                        </li>
                        <li>
                            {" "}
                            - Betroffenen helfen ohne Diskriminierung und ohne auf ihre Herkunft, ihre religiöse oder
                            politische Überzeugung zu achten
                        </li>
                        <li>
                            {" "}
                            - lebensrettende Aktivitäten im Mittelpunkt, medizinische Behandlung ist wichtiger als die
                            Prävention (Vorbeugung) von Krankheiten{" "}
                        </li>
                        <li>
                            {" "}
                            - Behandlungen orientieren sich vorrangig am Patienten, das heißt dieser hat mehrere
                            Auswahlmöglichkeiten und wird bei den Entscheidungen miteinbezogen{" "}
                        </li>
                        <li> - möglichst schnell Hilfe für möglichst viele Menschen sicherstellen </li>
                    </ul>
                </p>
            </div>
        ),
        2: (
            <div>
                <p>
                    <ul>
                        <li> - Bekämpfung und Behandlung von Krankheiten</li>
                        <li> - Impfen</li>
                        <li> - Ernährungszentren für Mangelernährte</li>
                        <li> - Mutter-Kind-Versorgung</li>
                        <li> - psychologische (seelische) Hilfe</li>
                        <li> - Fortbildung von Mitarbeitern vor Or</li>
                        <li> - Schmerzlinderung bei schwerkranken Menschen </li>
                        <li>
                            {" "}
                            - Verteilung von Hilfsgütern und Nahrungsmittel (nur wenn andere Hilfsorganisationen nichts
                            anbieten){" "}
                        </li>
                    </ul>
                </p>
            </div>
        ),
        3: (
            <div>
                <p> Wo wurde Ärtze ohne Grenzen gegründet</p>
                <button
                    type="button"
                    style={{
                        background: "#15b408",
                        borderStyle: "none",
                        marginTop: "100px",
                        marginLeft: "500px",
                        borderRadius: "30px 30px 30px 30px",
                        padding: "20px",
                    }}
                    onClick={() => {
                        setIsOpen(true);
                        openModal1();
                    }}
                >
                    <p style={{ fontSize: "60px" }}> Berlin </p>
                </button>
                <button
                    type="button"
                    style={{
                        background: "#15b408",
                        borderStyle: "none",
                        marginTop: "100px",
                        marginLeft: "700px",
                        borderRadius: "30px 30px 30px 30px",
                        padding: "20px",
                    }}
                    onClick={() => {
                        setIsOpen(true);
                        openModal2();
                    }}
                >
                    <p style={{ fontSize: "60px" }}> Oslo </p>
                </button>
                <button
                    type="button"
                    style={{
                        background: "#15b408",
                        borderStyle: "none",
                        marginTop: "100px",
                        marginLeft: "900px",
                        borderRadius: "30px 30px 30px 30px",
                        padding: "20px",
                    }}
                    onClick={() => {
                        setIsOpen(true);
                        openModal3();
                    }}
                >
                    <p style={{ fontSize: "60px" }}> Paris </p>
                </button>
            </div>
        ),
        4: (
            <div>
                <p> Welche Aktivitäten stehen bei der Organisation im Mittelpunkt? </p>
                <button
                    type="button"
                    style={{
                        background: "#15b408",
                        borderStyle: "none",
                        marginTop: "100px",
                        marginLeft: "500px",
                        borderRadius: "30px 30px 30px 30px",
                        padding: "20px",
                    }}
                    onClick={() => {
                        setIsOpen(true);
                        openModal4();
                    }}
                >
                    <p style={{ fontSize: "60px" }}> zum Geld verdienen </p>
                </button>
                <button
                    type="button"
                    style={{
                        background: "#15b408",
                        borderStyle: "none",
                        marginTop: "100px",
                        marginLeft: "700px",
                        borderRadius: "30px 30px 30px 30px",
                        padding: "20px",
                    }}
                    onClick={() => {
                        setIsOpen(true);
                        openModal5();
                    }}
                >
                    <p style={{ fontSize: "60px" }}> zum Leben retten </p>
                </button>
                <button
                    type="button"
                    style={{
                        background: "#15b408",
                        borderStyle: "none",
                        marginTop: "100px",
                        marginLeft: "900px",
                        borderRadius: "30px 30px 30px 30px",
                        padding: "20px",
                    }}
                    onClick={() => {
                        setIsOpen(true);
                        openModal6();
                    }}
                >
                    <p style={{ fontSize: "60px" }}> zum Spaß haben </p>
                </button>
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
                <p>Aufgabengebiete</p>
            </div>
        ),
        3: (
            <div>
                <p>Fragen</p>
            </div>
        ),
        4: (
            <div>
                <p>Fragen</p>
            </div>
        ),
        5: (
            <div>
                <p>Fragen</p>
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
    const Berlin = {
        1: (
            <div>
                <p> Falsch </p>
            </div>
        ),
    };
    const Oslo = {
        1: (
            <div>
                <p> Richtig </p>
            </div>
        ),
    };
    const Paris = {
        1: (
            <div>
                <p> Falsch </p>
            </div>
        ),
    };
    const Geld = {
        1: (
            <div>
                <p> Falsch </p>
            </div>
        ),
    };
    const Leben = {
        1: (
            <div>
                <p> Richtig </p>
            </div>
        ),
    };
    const Spaß = {
        1: (
            <div>
                <p> Falsch </p>
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

    function openModal2(): void {
        setModalOpened(2);
        if (modalTwo === 2) {
            setModalTwo(2);
        } else {
            setModalTwo(modalTwo + 2);
        }
    }
    function openModal3(): void {
        setModalOpened(3);
        if (modalTwo === 2) {
            setModalThree(3);
        } else {
            setModalThree(modalThree + 3);
        }
    }
    function openModal4(): void {
        setModalOpened(4);
        if (modalFour === 3) {
            setModalFour(4);
        } else {
            setModalFour(modalFour + 4);
        }
    }
    function openModal5(): void {
        setModalOpened(5);
        if (modalFive === 3) {
            setModalFive(5);
        } else {
            setModalFour(modalFive + 5);
        }
    }
    function openModal6(): void {
        setModalOpened(6);
        if (modalSix === 3) {
            setModalSix(4);
        } else {
            setModalFour(modalSix + 6);
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
        showtext >= 4 ? (
            <div className="backbutton" style={{ marginTop: "50px" }}>
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
            <div className="nextbutton" style={{ marginTop: "50px" }}>
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
            <div className="nextbutton" style={{ marginTop: "50px" }}>
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
    const modalContent = {
        1: (
            <div>
                <div className="content-header">
                    {LösungÜberschrift[modalOne]}
                    {LösungÜberschrift[modalTwo]}
                    {LösungÜberschrift[modalThree]}
                    {LösungÜberschrift[modalFour]}
                    {LösungÜberschrift[modalFive]}
                    {LösungÜberschrift[modalSix]}
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
                {Berlin[modalOne]}
                {Oslo[modalTwo]}
                {Paris[modalThree]}
                {Geld[modalFour]}
                {Leben[modalFive]}
                {Spaß[modalFive]}
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
                    Ärzte ohne Grenzen
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
renderer.render(<SDG03_GutesBeispiel />, document.getElementById("root"));
