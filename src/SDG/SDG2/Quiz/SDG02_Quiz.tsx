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

interface States {
    shouldShowModal: boolean;
    onlyCloseWithButton: boolean;
}

// eslint-disable-next-line react/prefer-stateless-function
export const SDG02_Quiz = (): JSX.Element => {
    const sdg = "SDG02";
    let [showtext, setText] = React.useState(1);
    let [itemSelected, setSelectedItem] = React.useState(0);
    let [rightAnswers, setRightAnswer] = React.useState(0);
    const maxSlides = 12;

    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }
    function select1(): void {
        incrementCount();
    }
    function select2(): void {
        incrementCount();
    }

    const leftpicture = {
        3: <img src={apple} alt="apple" />,
        4: <img src={bread} alt="bread" />, 
        5: <img src={potato} alt="potato" /> 
    }

    const rightpicture = {
        3: <img src={choko} alt="choko" />,
        4: <img src={croissant} alt="croissabwaghio" />, 
        5: <img src={cake} alt="cake" /> 
    }

    const Question = {
        3: (
            <div>
                <p>Apfel und Schokolade </p>
            </div>
        ),
        4: (
            <div>
                <p>Vollkornbrot und Croissant </p>
            </div>
        ),
        5: (
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
        2: (
            <div>
                <p className="einleitungText">
                    Damit du herausfinden kannst wie hochwertig deine Bildung ist, spielen wir jetzt ein Spiel.
                </p>
                <p className="einleitungText">
                    {" "}
                    Bei jeder Frage kannst du mit „trifft zu“ oder mit „trifft nicht zu“ antworten. Wenn du die Frage
                    mit „trifft zu“ beantwortet hast, merke 1 Punkt. Wenn du deine Antwort „trifft nicht zu“ war, merke
                    dir 0 Punkte. Zähle am Schluss alle Punkte zusammen und vergleiche mit der Lösung.
                </p>
            </div>
        ),
        6: (
            <div>
                <p className="einleitungText">
                    Du hast nun schon ein paar Sachen gesehen, die gesünder als andere sind. Aber warum gibt es gesunde
                    und ungesunde Sachen? Das ist nicht ganz einfach zu erklären, aber du schaffst es bestimmt trotzdem,
                    das zu verstehen!
                </p>
            </div>
        ),
        7: (
            <div>
                <p className="einleitungText">
                    Unser Körper braucht bestimmte Stoffe (Sachen, die im Essen sind), um gesund zu bleiben. Ganz
                    wichtig sind zum Beispiel „Vitamine“, die dem Körper helfen, dich vor Krankheiten zu schützen.
                    Außerdem brauchst du auch so genannte „Kohlenhydrate“. Das sind Stoffe, die dir Energie liefern,
                    damit du herumlaufen und andere Dinge tun kannst, bei denen sich deine Muskeln anstrengen müssen. Es
                    gibt noch viele weitere Stoffe, ohne die dein Körper nicht auskommt, wie „Ballaststoffe“, „Fette“
                    und viele mehr.
                </p>
            </div>
        ),
        8: (
            <div>
                <p className="einleitungText">
                    Wenn man zu wenig von wichtigen Stoffen über das Essen aufnimmt, dann spricht man von einer
                    „Mangelernährung“. Die Folgen davon sind meist sehr schlimm, denn es führt dazu, dass man öfter
                    krank wird, weil der Körper sich nicht mehr gegen Krankheiten wehren kann. Man ist auch nicht mehr
                    so leistungsfähig wie sonst, das bedeutet, dass man sich nicht mehr konzentrieren kann und auch
                    keine Kraft hat, um zum Beispiel zu spielen.
                </p>
            </div>
        ),
        9: (
            <div>
                <p className="einleitungText">
                    Wenn du dich genauer mit diesem Thema beschäftigen möchtest, dann könnte dir die
                    „Ernährungspyramide“ helfen. Das ist eine Zeichnung, die zeigt, welche Lebensmittel (Dinge zum
                    Essen) sehr viel oder eher weniger gegessen werden sollen.
                </p>
            </div>
        ),
    };

    let question;
    let button1;
    let button2;

    // source of the thumb: https://pixabay.com/de/vectors/hand-m%c3%b6gen-daumen-hoch-157251/
    button1 =
        showtext >= 2 && showtext <= 8 ? (
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
    button2 =
        showtext >= 2 && showtext <= 8 ? (
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
    question =
        showtext !== 10 ? (
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
        (showtext >= 9 && showtext <= 9) || showtext === 1 ? (
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
        showtext === 9 ? (
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

    let Ergebnis =
        showtext === 9 ? (
            rightAnswers === 0 || rightAnswers === 2 ? (
                <div>
                    <p className="einleitungText">
                        Du solltest mit deinen Eltern über deine Schule reden, da jedes Kind ein Recht auf eine
                        hochwertige Bildung hat. Diese können dann mit den Verantwortlichen in der Schule darüber reden,
                        dass bei euch in der Schule Fortbildungen der Lehrer oder neue Unterrichtsmaterialien nötig
                        sind.
                    </p>
                </div>
            ) : // eslint-disable-next-line unicorn/no-nested-ternary
            rightAnswers === 3 || rightAnswers === 4 || rightAnswers === 5 ? (
                <div>
                    <p className="einleitungText">
                        Du verfügst bereits über eine grundlegende Schulausbildung. Dennoch sollte jedes Kind dieselbe
                        sehr gute Bildung bekommen um Chancengleichheit zu garantieren und um Wirtschaftswachstum auch
                        in ärmeren Ländern zu garantieren. Du kannst auch selbst helfen indem du Proteste für bessere
                        Bildung organisierst oder daran teilnimmst.
                    </p>
                </div>
            ) : // eslint-disable-next-line unicorn/no-nested-ternary
            rightAnswers === 6 || rightAnswers === 7 ? (
                <div>
                    Du bekommst eine gute oder sogar sehr gute Bildung, die dir preisgünstig oder kostenlos zur
                    Verfügung steht und alle weiteren wichtigen Kriterien erfüllt. Jetzt kannst du dich auf deine
                    Ausbildung konzentrieren und vielleicht Kindern helfen die keine so gute Schulbildung bekommen.
                </div>
            ) : (
                <div> </div>
            )
        ) : (
            <div> </div>
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
            {Ergebnis}
            {buttonNext}
            {buttonBack}
            {buttonEnd}
            {questionNumber}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
