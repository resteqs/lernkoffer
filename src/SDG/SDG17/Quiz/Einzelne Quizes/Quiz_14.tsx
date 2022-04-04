
// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../SDGLogos/Goal-SDG17.png";
import { Quiz3Mixed } from "../../../../Interfaces/SDG";
import { InfotextButton } from "../../../../Components/Buttons/InfotextButton";

export const SDG17_Quiz_14: Quiz3Mixed = {
    sdgNumber: 17,
    sdgTitle: "Leiterspiel",
    sdg: "SDG17",
    logo: Logo,
    tile: {
        1: "Erste Frage",
        2: "",
        3: "Zweite Frage",
        4: "",
        5: "Dritte Frage",
        6: "",
        7: "Vierte Frage",
        8: "",
    },
    text: {
        2: (
            <div style={{ margin: "auto", display: "block", width: "40%" }}>
                <Link to="/SDG17/QuizÜbersicht">
                    <InfotextButton version="green">Zur Übersicht</InfotextButton>
                </Link>
            </div>
        ),
        4: (
            <div style={{ margin: "auto", display: "block", width: "40%" }}>
                <Link to="/SDG17/QuizÜbersicht">
                    <InfotextButton version="green">Zur Übersicht</InfotextButton>
                </Link>
            </div>
        ),
        6: (
            <div style={{ margin: "auto", display: "block", width: "40%" }}>
                <Link to="/SDG17/QuizÜbersicht">
                    <InfotextButton version="green">Zur Übersicht</InfotextButton>
                </Link>
            </div>
        ),

        8: (
            <div style={{ margin: "auto", display: "block", width: "40%" }}>
                <Link to="/SDG17/QuizÜbersicht">
                    <InfotextButton version="green">Zur Übersicht</InfotextButton>
                </Link>
            </div>
        ),
    },
    question: {
        1: "Wie viel Wasser bedeckt die Erde?",
        3: "Was ist Überfischung?",
        5: "Was zersetzt sich im Meer am langsamsten?",
    },
    buttonLeftContent: {
        1: <p style={{ fontSize:"5vw" }}>ungefähr 55% </p>,
        3: <p style={{ fontSize:"2.7vw" }}>Wenn man zu viel Fisch gegessen hat </p>,
        5: <p style={{ fontSize:"3vw" }}>Angelschnur </p>,
    },
    buttonMiddleContent: {
        1: <p style={{ fontSize:"5vw" }}>ungefähr 71% </p>,
        3: <p style={{ fontSize:"2.7vw" }}>Wenn zu viele Fische in einem Teich schwimmen </p>,
        5: <p style={{ fontSize:"3vw" }}>Getränkedose </p>,
    },
    buttonRightContent: {
        1: <p style={{ fontSize:"5vw" }}>ungefähr 87%</p>,
        3: <p style={{ fontSize:"2.7vw" }}>Wenn mehr Fische gefangen werden, als nachwachsen können</p>,
        5: <p style={{ fontSize:"3vw" }}>Plastiktüte </p>,
    },
    answerNumbersLeft: {
        1: "Falsch",
        3: "Falsch",
        5: "Richtig",
    },
    answerNumbersMiddle: {
        1: "Richtig",
        3: "Falsch",
        5: "Falsch",
    },
    answerNumbersRight: {
        1: "Falsch",
        3: "Richtig",
        5: "Falsch",
    },
    explanation: {
        1: "Über zwei Drittel der Erdoberfläche sind von Wasser bedeckt. Deshalb ist es wichtig, dass wir diesen Lebensraum schützen und nicht weiter verschmutzen.",
        3: "So sind irgendwann nicht mehr genug Fische da und dann fehlt die Nahrung für viele Meereslebewesen. Außerdem sind so verschiedene Fischarten in Gefahr auszusterben.",
        5: "Es kann bis zu 600 Jahre dauern bis sich eine Angelschnur komplett zersetzt",
    },
    // modalContent: <div>Quiz SDG 01</div>,
    isQuizActive: {
        1: true,
        2: false,
        3: true,
        4: false,
        5: true,
        6: false,
    },
    isThreeAnswerActive: {
        1: true,
        3: true,
        5: true,

    },
};
