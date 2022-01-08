// eslint-disable-next-line unicorn/filename-case
import * as React from "react"
import { Link } from "react-router-dom";
import Logo from "../../../../SDGLogos/Goal-SDG17.png";
import { Quiz3Mixed } from "../../../../Interfaces/SDG";
import { InfotextButton } from "../../../../Components/Buttons/InfotextButton";

export const SDG17_Quiz_17: Quiz3Mixed = {
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
        1: "Welche der folgenden Aussagen stimmt?",    
        3: "Für eine internationale Partnerschaft, um die Nachhaltigkeitsziele zu erreichen, reicht es, dass in den jeweiligen Ländern…",
        5: "Ein großer Punkt im 17. Nachhaltigkeitsziel ist es auch, die sogenannten Entwicklungsländer zu stärken. Was sind diese denn überhaupt?",
    },
    buttonLeftContent: {
        1: <p style={{ fontSize:"2.2vw" }}>„Für eine internationale Partnerschaft ist es nötig, dass alle zusammenarbeiten.“ </p>,
        3: <p style={{ fontSize:"2.5vw" }}>„die Regierung aktiv wird“</p>,
        5: <p style={{ fontSize:"2vw" }}>Die Länder mit der besten Entwicklung  </p>,
    },
    buttonMiddleContent: {
        1: <p style={{ fontSize:"2.2vw" }}>„Für eine internationale Partnerschaft reicht, dass sich ein Land engagiert und der Rest nur zuschaut“ </p>,
        3: <p style={{ fontSize:"2.5vw" }}>„dass die Bevölkerung aktiv wird“ </p>,
        5: <p style={{ fontSize:"2vw" }}>Die Länder, die sich noch am weitesten Entwickeln müsse, damit Menschen dort angenehm leben können </p>,
    },
    buttonRightContent: {
        1: <p style={{ fontSize:"2.2vw" }}>„Für eine internationale Partnerschaft ist es nur nötig, dass man sich ab und zu mal trifft, aber sonst nichts macht“ </p>,
        3: <p style={{ fontSize:"2.5vw" }}>„Regierung und Bevölkerung beide aktiv werden“</p>,
        5: <p style={{ fontSize:"2vw" }}>Die Länder, die sich gerade stark entwickeln. </p>,
    },
    answerNumbersLeft: {
        1: "Richtig",
        3: "Falsch",
        5: "Falsch",
    },
    answerNumbersMiddle: {
        1: "Falsch",
        3: "Falsch",
        5: "Richtig",
    },
    answerNumbersRight: {
        1: "Falsch",
        3: "Richtig",
        5: "Falsch",
    },
    explanation: {
        1: "„International“ heißt, dass etwas mehrere Länder betrifft. Besonders bei den Nachhaltigkeitszielen ist es so, dass viele unterschiedliche Meinungen der Staaten aufeinandertreffen, die versuchen ihre eigene Nation und deren Interesse zu vertreten. Dabei arbeiten alle an einem gemeinsamen Ziel: Sie wollen diese Ziele umsetzen, Nachhaltigkeit fördern und die Umwelt schützen. Deshalb braucht es eine Zusammenarbeit und die Bereitschaft, Kompromisse zu schließen. ",
        3: "Beide würden allein nicht so viel erreichen, wie sie es zusammen schaffen können.",
        5: "In diesen Ländern sind die Menschen oft sehr arm, sind häufiger krank, etc.",
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
    },
};
