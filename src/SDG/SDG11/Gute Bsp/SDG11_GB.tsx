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
import Logo from "../../../SDGLogos/Goal-SDG11.png";
import Bild1 from "./unknown.png";
import Bild2 from "./unknown1.jpg";
import Bild3 from "./unknown2.png";
import Bild4 from "./unknown3.jpg";
import Bild5 from "./unknown4.jpg";
import Bild6 from "./unknows5.jpg";
import Bild7 from "./unknown6.jpg";

import Question from "./question_mark.png";

export const SDG11_GB = (): JSX.Element => {
    const [showtext, setText] = React.useState(1);
    const sdg = "SDG11";
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const text = {
        1: (
            <div>
                <p className="EinleitungSDG04" style={{ fontSize: "40px", textAlign: "left" }}>
                    Zuerst solltest du all das benötigte Material vorbereiten. Das wäre:
                    <ul>
                        <li> - Eine Dose (am besten machst du diese vorher grob sauber</li>
                        <li> - Ein Draht</li>
                        <li>
                            {" "}
                            - Und natürlich die Füllung: Bambus (wenn du das nicht findest, dann nimm einfach andere
                            hohle Äste oder lass diese weg), zusammengerolltes Papier, Holzwolle, Stroh, dünne Äste,
                            Tannenzapfen oder andere Sachen, die deiner Meinung nach gut wären (Tipp: nimm
                            unterschiedliche Materialien, damit verschiedene Tiere dein Hotel nutzen können)
                        </li>
                        <li> - Ein Nagel und ein Hammer</li>
                        <li>
                            {" "}
                            - Optional: Farbe oder Wolle, um es bunter zu machen; Fäden und Perlen oder Knöpfe (zum
                            Beispiel, wenn du es wie ein Tier gestalten möchtest, <p>das Beine hat</p>{" "}
                        </li>
                    </ul>
                </p>
                <button
                    type="button"
                    style={{
                        background: "none",
                        borderColor: "blue",
                        borderWidth: "11px",
                        borderRadius: "15px",
                        marginTop: "150px",
                    }}
                    onClick={() => openBild1()}
                >
                    <img style={{ maxWidth: "100px", maxHeight: "100px" }} src={Bild1} alt="Wirtschaftsinformatiker" />
                </button>
            </div>
        ),
        2: (
            <div>
                <p className="SpielregelnSDG04" style={{ fontSize: "45px" }}>
                    {" "}
                    <br />
                    Nimm die Dose und bemale sie mit der Farbe, oder wickle die Wolle herum. Wenn du es einfach halten
                    möchtest, oder nichts dergleichen zur Hand hast, dann überspringe diesen Schritt einfach.
                </p>
                <button
                    type="button"
                    style={{
                        background: "none",
                        borderColor: "blue",
                        borderWidth: "11px",
                        borderRadius: "15px",
                        marginTop: "150px",
                    }}
                    onClick={() => openBild2()}
                >
                    <img style={{ maxWidth: "100px", maxHeight: "100px" }} src={Bild2} alt="Wirtschaftsinformatiker" />
                </button>
            </div>
        ),
        3: (
            <div>
                <p className="SpielregelnSDG04" style={{ fontSize: "45px" }}>
                    {" "}
                    <br />
                    Am besten lässt du dir hier von einem Erwachsenen helfen: Nimm den Hammer und den Nagel und mache
                    damit ein Loch in den Boden der Dose (Wenn du ein Tier mit Beinen gestalten möchtest, dann mach noch
                    ein paar Löcher in die Dose, durch die du Fäden fädelst und an die Enden Knöpfe oder Perlen
                    knotest).
                </p>
                <button
                    type="button"
                    style={{
                        background: "none",
                        borderColor: "blue",
                        borderWidth: "11px",
                        borderRadius: "15px",
                        marginTop: "350px",
                    }}
                    onClick={() => openBild6()}
                >
                    <img style={{ maxWidth: "100px", maxHeight: "100px" }} src={Bild6} alt="Wirtschaftsinformatiker" />
                </button>
            </div>
        ),
        4: (
            <div>
                <p className="SpielregelnSDG04" style={{ fontSize: "45px" }}>
                    {" "}
                    <br />
                    Nimm nun den Draht und fädle ihn durch das offene Ende der Dose und das Loch, was du gerade mit dem
                    Nagel gemacht hast. Wenn du damit fertig bist, knote die Enden über der Dose zusammen. Benutze hier
                    ein wenig mehr Draht, weil das dann die Schlaufe wird, an der das Hotel aufgehängt werden soll.
                </p>
                <button
                    type="button"
                    style={{
                        background: "none",
                        borderColor: "blue",
                        borderWidth: "11px",
                        borderRadius: "15px",
                        marginTop: "350px",
                    }}
                    onClick={() => openBild3()}
                >
                    <img style={{ maxWidth: "100px", maxHeight: "100px" }} src={Bild3} alt="Wirtschaftsinformatiker" />
                </button>
                <button
                    type="button"
                    style={{
                        background: "none",
                        borderColor: "blue",
                        borderWidth: "11px",
                        borderRadius: "15px",
                        marginTop: "350px",
                    }}
                    onClick={() => openBild7()}
                >
                    <img style={{ maxWidth: "100px", maxHeight: "100px" }} src={Bild7} alt="Wirtschaftsinformatiker" />
                </button>
            </div>
        ),
        5: (
            <div>
                <p className="SpielregelnSDG04" style={{ fontSize: "45px" }}>
                    {" "}
                    <br />
                    Nimm nun das Füllmaterial und fülle damit die Dose. Achte dabei darauf, dass du genug benutzt, sonst
                    wird es zu locker und alles fällt wieder heraus, wenn der Wind ein bisschen geht.
                </p>
                <button
                    type="button"
                    style={{
                        background: "none",
                        borderColor: "blue",
                        borderWidth: "11px",
                        borderRadius: "15px",
                        marginTop: "350px",
                    }}
                    onClick={() => openBild4()}
                >
                    <img style={{ maxWidth: "100px", maxHeight: "100px" }} src={Bild4} alt="Wirtschaftsinformatiker" />
                </button>
                <button
                    type="button"
                    style={{
                        background: "none",
                        borderColor: "blue",
                        borderWidth: "11px",
                        borderRadius: "15px",
                        marginTop: "350px",
                    }}
                    onClick={() => openBild5()}
                >
                    <img style={{ maxWidth: "100px", maxHeight: "100px" }} src={Bild5} alt="Wirtschaftsinformatiker" />
                </button>
            </div>
        ),
        6: (
            <div>
                <p className="SpielregelnSDG04" style={{ fontSize: "45px" }}>
                    {" "}
                    <br />
                    Nachdem dein Insektenhotel jetzt fertig ist, nimm es und suche dir einen guten Platz in der Natur
                    (Tipp: ein guter Platz ist immer in einem Baum).
                </p>
            </div>
        ),

        61: (
            <div>
                <div>
                    <img
                        style={{ maxWidth: "600px", maxHeight: "700px", marginTop: "-70px" }}
                        src={Bild1}
                        alt="vorlage"
                    />
                </div>
                <div>
                    <button
                        type="button"
                        style={{
                            background: "none",
                            borderColor: "blue",
                            borderWidth: "11px",
                            borderRadius: "15px",
                            marginTop: "150px",
                            fontSize: "30px",
                        }}
                        onClick={() => closeBild1()}
                    >
                        Zurück
                    </button>
                </div>
            </div>
        ),
        62: (
            <div>
                <div>
                    <img
                        style={{ maxWidth: "600px", maxHeight: "700px", marginTop: "-70px" }}
                        src={Bild2}
                        alt="vorlage"
                    />
                </div>
                <div>
                    <button
                        type="button"
                        style={{
                            background: "none",
                            borderColor: "blue",
                            borderWidth: "11px",
                            borderRadius: "15px",
                            marginTop: "150px",
                            fontSize: "30px",
                        }}
                        onClick={() => closeBild2()}
                    >
                        Zurück
                    </button>
                </div>
            </div>
        ),
        63: (
            <div>
                <div>
                    <img
                        style={{ maxWidth: "600px", maxHeight: "700px", marginTop: "-70px" }}
                        src={Bild3}
                        alt="vorlage"
                    />
                </div>
                <div>
                    <button
                        type="button"
                        style={{
                            background: "none",
                            borderColor: "blue",
                            borderWidth: "11px",
                            borderRadius: "15px",
                            marginTop: "150px",
                            fontSize: "30px",
                        }}
                        onClick={() => closeBild3()}
                    >
                        Zurück
                    </button>
                </div>
            </div>
        ),

        64: (
            <div>
                <div>
                    <img
                        style={{ maxWidth: "600px", maxHeight: "700px", marginTop: "-70px" }}
                        src={Bild4}
                        alt="vorlage"
                    />
                </div>
                <div>
                    <button
                        type="button"
                        style={{
                            background: "none",
                            borderColor: "blue",
                            borderWidth: "11px",
                            borderRadius: "15px",
                            marginTop: "150px",
                            fontSize: "30px",
                        }}
                        onClick={() => closeBild4()}
                    >
                        Zurück
                    </button>
                </div>
            </div>
        ),
        65: (
            <div>
                <div>
                    <img
                        style={{ maxWidth: "600px", maxHeight: "700px", marginTop: "-70px" }}
                        src={Bild5}
                        alt="vorlage"
                    />
                </div>
                <div>
                    <button
                        type="button"
                        style={{
                            background: "none",
                            borderColor: "blue",
                            borderWidth: "11px",
                            borderRadius: "15px",
                            marginTop: "150px",
                            fontSize: "30px",
                        }}
                        onClick={() => closeBild5()}
                    >
                        Zurück
                    </button>
                </div>
            </div>
        ),
        66: (
            <div>
                <div>
                    <img
                        style={{ maxWidth: "600px", maxHeight: "700px", marginTop: "-70px" }}
                        src={Bild6}
                        alt="vorlage"
                    />
                </div>
                <div>
                    <button
                        type="button"
                        style={{
                            background: "none",
                            borderColor: "blue",
                            borderWidth: "11px",
                            borderRadius: "15px",
                            marginTop: "150px",
                            fontSize: "30px",
                        }}
                        onClick={() => closeBild6()}
                    >
                        Zurück
                    </button>
                </div>
            </div>
        ),
        67: (
            <div>
                <div>
                    <img
                        style={{ maxWidth: "600px", maxHeight: "700px", marginTop: "-70px" }}
                        src={Bild7}
                        alt="vorlage"
                    />
                </div>
                <div>
                    <button
                        type="button"
                        style={{
                            background: "none",
                            borderColor: "blue",
                            borderWidth: "11px",
                            borderRadius: "15px",
                            marginTop: "150px",
                            fontSize: "30px",
                        }}
                        onClick={() => closeBild7()}
                    >
                        Zurück
                    </button>
                </div>
            </div>
        ),
    };
    const header = {
        1: (
            <div>
                <p>Schritt 1</p>
            </div>
        ),
        2: (
            <div>
                <p>Schritt 2</p>
            </div>
        ),
        3: (
            <div>
                <p>Schritt 3</p>
            </div>
        ),
        4: (
            <div>
                <p>Schritt 4</p>
            </div>
        ),
        5: (
            <div>
                <p>Schritt 5</p>
            </div>
        ),
        6: (
            <div>
                <p>Schritt 6</p>
            </div>
        ),
    };
    let a;
    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }
    function openBild1(): void {
        setText(61);
    }
    function openBild2(): void {
        setText(62);
    }
    function openBild3(): void {
        setText(63);
    }
    function openBild4(): void {
        setText(64);
    }
    function openBild5(): void {
        setText(65);
    }
    function openBild6(): void {
        setText(66);
    }
    function openBild7(): void {
        setText(67);
    }
    function closeBild1(): void {
        setText(1);
    }
    function closeBild2(): void {
        setText(2);
    }
    function closeBild3(): void {
        setText(4);
    }
    function closeBild4(): void {
        setText(5);
    }
    function closeBild5(): void {
        setText(5);
    }
    function closeBild6(): void {
        setText(3);
    }
    function closeBild7(): void {
        setText(4);
    }
    let buttonBack;
    let buttonNext;
    let modal;

    buttonBack =
        showtext >= 2 && showtext !== 69 ? (
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
        showtext <= 4 && showtext !== 69 ? (
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
    let buttonEnd =
        showtext === 5 ? (
            <div className="nextbutton">
                {" "}
                <Link to="/Vorlagen/Endscreen">
                    {" "}
                    <button className={infotextbutton.pushable} type="button" onClick={incrementCount}>
                        <span className={infotextbutton.shadow} />
                        <span className={infotextbutton.edgegreen} />
                        <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                            <p className={infotextbutton.buttontext}>Weiter</p>
                        </span>
                    </button>
                </Link>{" "}
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
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
            closeTimeoutMS={500}
        >
            <div className="content-header">
                <p>Title</p>{" "}
                <button type="button" className="personCheckOkButton" onClick={() => setIsOpen(false)}>
                    <b>Okay</b>
                </button>
            </div>
        </Modal>
    );

    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Nachhaltige Städte und Gemeinden
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>

            <div className="infotextbox">
                <p className="headertext">
                    <b>{header[showtext]}</b>
                </p>{" "}
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
