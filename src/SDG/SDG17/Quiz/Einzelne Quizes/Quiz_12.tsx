// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../SDGLogos/Goal-SDG17.png";
import { Quiz3Mixed } from "../../../../Interfaces/SDG";
import { InfotextButton } from "../../../../Components/Buttons/InfotextButton";

export const SDG17_Quiz_12: Quiz3Mixed = {
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
    },
    question: {
        1: "Wie kann man ein Produkt nachhaltig produzieren?",
        3: "Welches der folgenden Produkte wurde am nachhaltigsten produziert?",
        5: "Wo kann man am nachhaltigsten einkaufen?",
    },
    buttonLeftContent: {
        1: <p style={{ fontSize: "2vw" }}>Es zum Beispiel durch Chemie länger haltbar machen</p>,
        3: (
            <p style={{ fontSize: "1.75vw" }}>
                Eine Hose, die erst in einer Fabrik genäht wird, dann mit Chemikalien behandelt wird (diese werden nicht
                gut entsorgt) und dann für den Verkauf in ein anderes Land geflogen wird
            </p>
        ),
        5: <p style={{  fontSize: "2.7vw" }}>Im Hofladen</p>,
    },
    buttonMiddleContent: {
        1: (
            <p style={{ fontSize: "2vw" }}>
                Bei der Produktion darauf zu achten so Rohstoffe sparend und umweltschonend wie möglich zu produziere
            </p>
        ),
        3: (
            <p style={{ fontSize: "1.75vw" }}>
                Eine Schokolade, für die der Kakao in beispielsweise Südamerika abgebaut wurde und dann beispielsweise
                in die Schweiz geflogen wird und dort zur Schokolade verarbeitet wird
            </p>
        ),
        5:<p style={{  fontSize: "2.7vw" }}>Im Supermarkt</p>,
    },
    buttonRightContent: {
        1: (
            <p style={{ fontSize: "2vw" }}>
                Vor der Produktion auf eventuelle Fehler prüfen, damit nicht doppelt produziert werden muss
            </p>
        ),
        3: <p style={{ fontSize: "1.75vw"  }}>Regionales Obst / Gemüse</p>,
        5: <p style={{ fontSize: "2.7vw" }}>Im Internet auf der Seite eines Versandhandels für BioProdukte</p>,
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
        1: "So wird darauf geachtet, dass durch die Produktion die Natur so wenig wie möglich zu Schaden kommt",
        3: "Es musste nicht um die Welt geflogen werden.",
        5: "Hier gibt es die kürzesten Transportwege",
    },
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
        7: true,
    },
};
