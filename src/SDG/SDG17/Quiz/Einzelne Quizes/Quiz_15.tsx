// eslint-disable-next-line unicorn/filename-case
import * as React from "react"
import { Link } from "react-router-dom";
import Logo from "../../../../SDGLogos/Goal-SDG17.png";
import { Quiz3Mixed } from "../../../../Interfaces/SDG";
import { InfotextButton } from "../../../../Components/Buttons/InfotextButton";

export const SDG17_Quiz_15: Quiz3Mixed = {
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
        1: "Wie viel Wald ist in den letzten Dreißig Jahren von der Erde verschwunden?",
        3: "Welches Tier ist die größte Gefahr für die meisten Tiere?",
        5: "Wie viele Tierarten sind weltweit vom Aussterben bedroht (das heißt, dass es nur noch wenige von ihnen gibt, es weiterhin weniger werden und deshalb es bald gar keine Tiere dieser Art mehr geben könnte)?",
    },
    buttonLeftContent: {
        1: <p style={{ fontSize:"3vw" }}>Wald mit einer Fläche von etwa 100 Fußballfeldern</p>,
        3: <p style={{ fontSize:"3vw" }}>Große Raubtiere wie Bären, Wölfe oder Wildkatzen </p>,
        5: <p style={{ fontSize:"3vw" }}>Rund jede zwanzigste Tierart </p>,
    },
    buttonMiddleContent: {
        1: <p style={{ fontSize:"3vw" }}>Wald mit einer Fläche von etwa 200 Fußballfeldern</p>,
        3: <p style={{ fontSize:"3vw" }}>Menschen </p>,
        5: <p style={{ fontSize:"3vw" }}>Rund jede zehnte Tierart </p>,
    },
    buttonRightContent: {
        1: <p style={{ fontSize:"3vw" }}>Wald mit einer Fläche von etwa 250 Fußballfeldern </p>,
        3: <p style={{ fontSize:"3vw" }}>Große Raubvögel wie unter anderem Adler </p>,
        5: <p style={{ fontSize:"3vw" }}>Rund jede achte Tierart </p>,
    },
    answerNumbersLeft: {
        1: "Falsch",
        3: "Falsch",
        5: "Falsch",
    },
    answerNumbersMiddle: {
        1: "Falsch",
        3: "Richtig",
        5: "Falsch",
    },
    answerNumbersRight: {
        1: "Richtig",
        3: "Falsch",
        5: "Richtig",
    },
    explanation: {
        1: "Das kann an verschiedenen Dingen liegen: Sowohl das Fällen von Bäumen für Holz als auch Waldbrände und andere Naturkatastrophen dürften eine große Rolle gespielt haben.",
        3: "Menschen zerstören den Lebensraum der Tiere, vermüllen ihn und jagen die Tiere teilweise aufgrund von wertvollen Körperteilen. ",
        5: "Jede achte Wirbeltierart war 2020 von insgesamt über 72 000 Arten vom Aussterben bedroht. Durch den Klimawandel, Umweltverschmutzung und der Zerstörung von Lebensräumen sterben immer mehr Tierarten aus, besonders betroffen sind Amphibien (z.B. Frösche) und Säugetiere (z.B. Feldhasen).",
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
