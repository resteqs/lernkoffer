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
import LeereFlügel from "./Leere Flügel.jpg";
import FlügelSDG02 from "./Schmetterling SD02.png";
import "../Spiel/sdg02.css";

export const SDG02_FreieArbeit = (): JSX.Element => {
    const [showtext, setText] = React.useState(1);
    const sdg = "SDG02";
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalOpened, setModalOpened] = React.useState(0);
    const [modalOne, setModalOne] = React.useState(0);
    const [modalTwo, setModalTwo] = React.useState(0);
    const maxslide = 3;

    const text = {
        1: (
            <div>
                <p>
                    {" "}
                    Das Nachhaltigkeitsziel Nummer 2 heißt „Kein Hunger“. Deshalb möchte ich euch eine interessante und
                    hoffentlich auch lustige Aufgabe geben, bei der ihr zeigen könnt, welche Lebensmittel euch wichtig
                    und gesund erscheinen.
                </p>
            </div>
        ),
        2: (
            <div style={{ textAlign: "left", fontSize: "30px" }}>
                <p>
                    <ul>
                        <li>
                            Im Folgenden sollt ihr euch einmal überlegen, was ihr für sehr wichtige Nahrungsmittel
                            haltet und diese in Schmetterlingsflügel malen.
                        </li>
                        <li>
                            {" "}
                            Dafür benötigt jede:r ein Blatt Papier und einen Stift. Gerne könnt ihr die Schmetterlinge
                            auch bunt ausmalen oder sogar Sachen aufkleben. Aber das ist ganz euch überlassen.
                        </li>
                        <li>
                            {" "}
                            Wenn ihr nicht wisst, wie ihr die Flügel eines Schmetterlings zeichnen könnt, dann klickt
                            einfach auf den Button, auf dem „Vorlage“ steht und seht euch einen Vorschlag an, danach
                            könnt ihr wieder zurück zur Anleitung kommen.
                        </li>
                        <li> Sobald ihr die Form der Flügel habt, könnt ihr beginnen, kreativ zu sein.</li>
                    </ul>
                </p>

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
                        openModal1();
                    }}
                >
                    <p style={{ fontSize: "60px" }}> Vorlage </p>
                </button>
            </div>
        ),
        3: (
            <div style={{ textAlign: "left", fontSize: "30px" }}>
                <p>
                    {" "}
                    Seid ihr alle fertig? Dann könntet ihr euch zusammen in einen Kreis setzen und jede:r stellt
                    seine/ihre Flügel kurz vor (Was habe ich gemalt? Warum denke ich, dass dieses Nahrungsmittel wichtig
                    ist?....).{" "}
                </p>
                <p> Am Ende könntet ihr all die verschiedenen Bilder auch aufhängen und die Vielfalt bewundern. </p>
                <p>
                    Zusatz: Es gibt offiziell zu jedem einzelnen SDG (Nachhaltigkeitsziel) jeweils ein Paar Flügel.
                    Diese könnt ihr euch ansehen, wenn ihr auf den Button „Bild“ tippt.
                </p>

                <button
                    className="Button"
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
                    <p style={{ fontSize: "60px" }}> Bild </p>
                </button>
            </div>
        ),
    };

    const VorlageÜberschrift = {
        1: (
            <div>
                <p> Vorlage </p>
            </div>
        ),
    };

    const BeispielSDG02Überschrift = {
        1: (
            <div>
                <p> offizielles Flügelpaar SDG02 </p>
            </div>
        ),
    };

    const Sdg02_Schmetterlingsflügel = {
        1: (
            <div>
                <p>
                    <img className=" SchmetterlingSDG02" src={FlügelSDG02} alt="" />
                </p>
            </div>
        ),
    };
    const Vorlage = {
        1: (
            <div>
                <p>
                    <img className="LeereFlügel" src={LeereFlügel} alt="" />
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
                <p>Erklärung</p>
            </div>
        ),
        3: (
            <div>
                <p> Ende </p>
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
        if (modalTwo === 7) {
            setModalTwo(1);
        } else {
            setModalTwo(modalTwo + 1);
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
                    {VorlageÜberschrift[modalOne]}
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
                {Vorlage[modalOne]}
            </div>
        ),
        2: (
            <div>
                <div className="content-header">
                    {BeispielSDG02Überschrift[modalTwo]}
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
                {Sdg02_Schmetterlingsflügel[modalTwo]}
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
                    Schmetterlingsflügel
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div className="infotextbox">
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
