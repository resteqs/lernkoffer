// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable eslint-comments/no-duplicate-disable */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-const */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
import * as React from "react";

import Logo from "../../../SDGLogos/Goal-SDG02.png";
import { Link } from "react-router-dom";
import { InfotextButtonGreen } from "../../../Components/Buttons/InfotextButtonGreen";
import croissant from "./media/frenchdisguistingthing.png";
import bread from "./media/germanbreadsprakeldwithstones.png";
import choko from "./media/chokolalalalalalalalalallalalall.png";
import cake from "./media/inLydiasKüche.png";
import apple from "./media/poneyfood.png";
import potato from "./media/yellowthing.png";
import pyramide from "./media/IlluminatiDreieck.png";
import Modal from "react-modal";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import { CSSProperties } from "@material-ui/styles";

interface States {
    shouldShowModal: boolean;
    onlyCloseWithButton: boolean;
}

// eslint-disable-next-line react/prefer-stateless-function
export const SDG02_Quiz = (): JSX.Element => {
    const sdg = "SDG02";
    let [showtext, setText] = React.useState(1);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let [itemSelected, setSelectedItem] = React.useState(0);
    let [rightAnswers, setRightAnswer] = React.useState(0);
    const maxSlides = 8;

    const maxWith: CSSProperties = {
        maxWidth: "500px",
        maxHeight: "500px",
        marginTop: "45px",
    };
    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }
    function select1(): void {
        setSelectedItem(1);
    }
    function select2(): void {
        setSelectedItem(2);
    }

    const leftpicture = {
        2: <img src={apple} alt="apple" style={maxWith} />,
        3: <img src={bread} alt="bread" style={maxWith} />,
        4: <img src={potato} alt="potato" style={maxWith} />,
    };

    const rightpicture = {
        2: <img src={choko} alt="choko" style={maxWith} />,
        3: <img src={croissant} alt="croissabwaghio" style={maxWith} />,
        4: <img src={cake} alt="cake" style={maxWith} />,
    };

    const Question = {
        2: (
            <div>
                <p>Apfel und Schokolade </p>
            </div>
        ),
        3: (
            <div>
                <p>Vollkornbrot und Croissant </p>
            </div>
        ),
        4: (
            <div>
                <p>Kartoffel und Kuchen </p>
            </div>
        ),
    };

    const text = {
        1: (
            <div>
                <p className="einleitungText">
                    Hast du dir schon einmal Gedanken darüber gemacht, was du isst? Wenn nicht, dann kannst du jetzt
                    etwas sehr Wichtiges lernen. Wenn du schon einmal darüber nachgedacht hast, dann kannst du
                    vielleicht denen, die das noch nie getan haben, ein bisschen helfen.{" "}
                </p>
                <p className="einleitungText">
                    {" "}
                    Du wirst immer zwei Sachen gezeigt bekommen und sollst entscheiden, was davon gesünder ist und warum
                    (ihr könnt natürlich auch gerne in der Gruppe überlegen). Wenn du dich entschieden hast, dann tippe
                    den Gegenstand an und du wirst sehen, ob du richtig liegst.{" "}
                </p>
            </div>
        ),
        5: (
            <div>
                <p className="einleitungText">
                    Du hast nun schon ein paar Sachen gesehen, die gesünder als andere sind. Aber warum gibt es gesunde
                    und ungesunde Sachen? Das ist nicht ganz einfach zu erklären, aber du schaffst es bestimmt trotzdem,
                    das zu verstehen!
                </p>
                <p className="einleitungText">
                    {" "}
                    Unser Körper braucht bestimmte Stoffe (Sachen, die im Essen sind), um gesund zu bleiben. Ganz
                    wichtig sind zum Beispiel „Vitamine“, die dem Körper helfen, dich vor Krankheiten zu schützen.
                    Außerdem brauchst du auch so genannte „Kohlenhydrate“. Das sind Stoffe, die dir Energie liefern,
                    damit du herumlaufen und andere Dinge tun kannst, bei denen sich deine Muskeln anstrengen müssen. Es
                    gibt noch viele weitere Stoffe, ohne die dein Körper nicht auskommt, wie „Ballaststoffe“, „Fette“
                    und viele mehr.{" "}
                </p>
            </div>
        ),
        6: (
            <div>
                <p className="einleitungText">
                    Das wichtige bei der Ernährung ist aber, dass du dich „ausgewogen“ ernährst, also von allen
                    wichtigen Sachen etwas isst.{" "}
                </p>
                <p className="einleitungText">
                    {" "}
                    Wenn man zu wenig von wichtigen Stoffen über das Essen aufnimmt, dann spricht man von einer
                    „Mangelernährung“. Die Folgen davon sind meist sehr schlimm, denn es führt dazu, dass man öfter
                    krank wird, weil der Körper sich nicht mehr gegen Krankheiten wehren kann. Man ist auch nicht mehr
                    so leistungsfähig wie sonst, das bedeutet, dass man sich nicht mehr konzentrieren kann und auch
                    keine Kraft hat, um zum Beispiel zu spielen.{" "}
                </p>
            </div>
        ),
        7: (
            <div>
                <p className="einleitungText">
                    {" "}
                    Wenn man zu wenig von wichtigen Stoffen über das Essen aufnimmt, dann spricht man von einer
                    „Mangelernährung“. Die Folgen davon sind meist sehr schlimm, denn es führt dazu, dass man öfter
                    krank wird, weil der Körper sich nicht mehr gegen Krankheiten wehren kann. Man ist auch nicht mehr
                    so leistungsfähig wie sonst, das bedeutet, dass man sich nicht mehr konzentrieren kann und auch
                    keine Kraft hat, um zum Beispiel zu spielen.{" "}
                </p>
                <p className="einleitungText">
                    {" "}
                    Wenn du dich genauer mit diesem Thema beschäftigen möchtest, dann könnte dir die
                    „Ernährungspyramide“ helfen. Das ist eine Zeichnung, die zeigt, welche Lebensmittel (Dinge zum
                    Essen) sehr viel oder eher weniger gegessen werden sollen.
                </p>
            </div>
        ),
        8: (
            <div>
                <img src={pyramide} alt="Essenspyramide" />
            </div>
        ),
    };

    const Explanation = {
        2: <p>Lösung: Apfel ist richtig </p>,
        3: <p>Lösung: Apfel ist richtig </p>,
        4: <p>Lösung: Vollkornbrot ist richtig </p>,
    };

    const answerNumbers1 = {
        2: "Richtig",
        3: "Richtig",
        4: "Richtig",
        5: "Richtig",
    };

    const answerNumbers2 = {
        2: "Falsch",
        3: "Falsch",
        4: "Falsch",
        5: "Falsch",
    };

    let answerCW =
        itemSelected === 0 ? (
            <p>Falsch</p>
        ) : (itemSelected === 1 ? (
            <p>{answerNumbers1[showtext]}</p>
        ) : (
            <p>{answerNumbers2[showtext]}</p>
        ));
    let answer = (
        <p style={{ fontSize: "40px" }}>
            {" "}
            <b>Antwort:</b>
            {Explanation[showtext]}{" "}
        </p>
    );

    let modal = (
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
                {answerCW}
                <button
                    type="button"
                    className="personCheckOkButton"
                    onClick={() => {
                        setIsOpen(false);
                        incrementCount();
                        setSelectedItem(0);
                    }}
                >
                    <b>Okay</b>
                </button>
            </div>
            {answer}
        </Modal>
    );

    let button1 =
        showtext >= 2 && showtext <= 4 ? (
            <button
                type="button"
                style={{
                    marginLeft: "150px",
                    marginTop: "60px",
                    background: "none",
                    borderColor: "blue",
                    borderWidth: "11px",
                    borderRadius: "15px",
                }}
                className={itemSelected === 1 ? "selectedPerson" : ""}
                onClick={() => select1()}
            >
                <div
                    style={{
                        width: "500px",
                        height: "500px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <p style={{ fontSize: "190px" }}>
                        <div>{leftpicture[showtext]}</div>
                    </p>{" "}
                </div>{" "}
            </button>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    // source of the thumb: https://pixabay.com/de/vectors/abneigung-hand-daumen-nieder-nein-157252/
    let button2 =
        showtext >= 2 && showtext <= 4 ? (
            <button
                type="button"
                style={{
                    marginRight: "150px",
                    marginTop: "60px",
                    float: "right",
                    background: "none",
                    borderColor: "blue",
                    borderWidth: "11px",
                    borderRadius: "15px",
                }}
                className={itemSelected === 2 ? "selectedPerson" : ""}
                onClick={() => select2()}
            >
                <div
                    style={{
                        width: "500px",
                        height: "500px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <p style={{ fontSize: "190px" }}>
                        <div>{rightpicture[showtext]}</div>
                    </p>{" "}
                </div>
            </button>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
    let question =
        showtext !== 1 || showtext >= 4 ? (
            <div style={{ textAlign: "center" }}>
                <p style={{ marginTop: "60px", marginLeft: "50px", fontSize: "50px" }} className="underlinedHeader">
                    {Question[showtext]}
                </p>
            </div>
        ) : (
            <div />
        );

    let buttonBack =
        showtext <= 2 ? (
            <div style={{ marginTop: "1px" }} className="backButtonDiv">
                {" "}
                <button type="button" onClick={decrementCount} className="backButton">
                    &#129044;
                </button>
            </div>
        ) : (
            <div> </div>
        );

    let buttonNext =
        (showtext >= 5 && showtext <= maxSlides) || showtext === 1 ? (
            <div style={{ marginTop: "10px" }} className="nextbutton">
                {" "}
                <div style={{ position: "absolute", top: "950px", left: "1700px" }}>
                    <InfotextButtonGreen showtext={showtext} text="Weiter" setText={setText} />
                </div>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    let buttonEnd =
        showtext === maxSlides ? (
            <div style={{ marginTop: "10px" }} className="nextbutton">
                {" "}
                <Link to="/Vorlagen/Endscreen">
                    {" "}
                    <div style={{ position: "absolute", top: "950px", left: "1700px" }}>
                        <InfotextButtonGreen showtext={showtext} text="Weiter" setText={setText} />
                    </div>
                </Link>{" "}
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    let buttonCheck =
        showtext >= 2 && showtext <= 4 ? (
            <div style={{ marginTop: "10px" }} className="personCheckAnswerButton">
                {" "}
                <div style={{ position: "absolute", top: "950px" }}>
                    <button className={infotextbutton.pushable} type="button" onClick={() => setIsOpen(true)}>
                        <span className={infotextbutton.shadow} />
                        <span className={infotextbutton.edgegreen} />
                        <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                            <p className={infotextbutton.buttontext}>Überprüfe</p>
                        </span>
                    </button>
                </div>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    let questionNumber =
        showtext >= 10 || showtext !== 1 ? <p className="questionNumber">Frage: {showtext}/7</p> : <div> </div>;
    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Hochwertige Bildung
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <p className="bodytext"> {text[showtext]}</p>

            {question}
            {button1}
            {button2}
            {buttonCheck}
            {modal}
            {buttonNext}
            {buttonBack}
            {buttonEnd}
            {questionNumber}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
