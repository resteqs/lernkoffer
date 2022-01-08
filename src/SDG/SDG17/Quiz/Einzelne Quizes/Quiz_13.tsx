// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */

import * as React from "react"
import { Link } from "react-router-dom";
import Logo from "../../../../SDGLogos/Goal-SDG17.png";
import { Quiz3Mixed } from "../../../../Interfaces/SDG";
import { InfotextButton } from "../../../../Components/Buttons/InfotextButton";
import TreibhauseffektGrafik from "./Media/TreibhauseffektGrafik.png"

export const SDG17_Quiz_13: Quiz3Mixed = {
    sdgNumber: 17,
    sdgTitle: "Leiterspiel",
    sdg: "SDG17",
    logo: Logo,
    tile: {
        1: "Erste Frage",
        2: "",
        3: "Zweite Frage",
        4: "",
        5: "",
        6: "Dritte Frage",
        7: "",
        8: "Vierte Frage",
        9: "",
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
            <img style={{ margin: "auto", display:"block" ,width: "40vw" }} src={TreibhauseffektGrafik} alt="" />
        ),
        5: (
            <div style={{ margin: "auto", display: "block", width: "40%" }}>
                <Link to="/SDG17/QuizÜbersicht">
                    <InfotextButton version="green">Zur Übersicht</InfotextButton>
                </Link>
            </div>
        ),
        7: (
            <div style={{ margin: "auto", display: "block", width: "40%" }}>
                <Link to="/SDG17/QuizÜbersicht">
                    <InfotextButton version="green">Zur Übersicht</InfotextButton>
                </Link>
            </div>
        ),
    },

    question: {
        1: "Was ist schädlichsten für das Klima?",
        3: "Was ist der sogenannte „Treibhaus-Effekt“? (Ein „Treibhaus“ ist eine Art Gewächshaus)",
        6: "Was ist der beste Weg, um das Klima zu schützen?",
    },
    buttonLeftContent: {
        1: <p style={{ fontSize:"4.5vw" }}>Eine Zugfahrt </p>,
        3: <p style={{ fontSize:"1.5vw" }}>Es existieren immer mehr Treibhäuser auf der Welt </p>,
        6: <p style={{ fontSize:"3vw" }}>Indem man nur noch einmal im Jahr in den Urlaub </p>,
    },
    buttonMiddleContent: {
        1: <p style={{ fontSize:"4.5vw" }}>Eine Flugreise </p>,
        3: <p style={{ fontSize:"1.5vw" }}>Einige in der Atmosphäre (das ist eine Art Gashülle, die die Erde umgibt) vorhande-ne Gase wirken ähnlich wie das Glas eines Treibhauses: Sie lassen Sonnenlicht und dadurch auch Wärme herein, verhindern aber dass diese wieder zurückstrahlen ins Weltall.</p>,
        6: <p style={{ fontSize:"3vw" }}>Indem man nur noch mit dem Fahrrad oder mit Bus und Bahn fährt</p>,
    },
    buttonRightContent: {
        1: <p style={{ fontSize:"4.5vw"  }}>Eine Autofahrt </p>,
        3: <p style={{ fontSize:"1.5vw" }}>Dass ein Mensch wie in einem Treibhaus mit Wasser und Sonne versorgt wird und sich um nichts mehr kümmern muss. </p>,
        6: <p style={{ fontSize:"3vw" }}>Indem man nur mit dem Auto fährt, wenn es sein muss </p>,
    },
    answerNumbersLeft: {
        1: "Falsch",
        3: "Falsch",
        6: "Falsch",
    },
    answerNumbersMiddle: {
        1: "Richtig",
        3: "Richtig",
        6: "Richtig",
    },
    answerNumbersRight: {
        1: "Falsch",
        3: "Falsch",
        6: "Falsch",
    },
    explanation: {
        1: "Flugzeuge verbrauchen viel Treibstoff, um fliegen zu können. Dies ist sehr schädlich für die Umwelt!",
        3: "Das Problem ist, dass durch zu viele „Treibhaus-Gase“ es nun zu heiß auf der Erde wird. Denn dadurch, dass die Atmosphäre durch mehr Treibhausgase immer dichter wird, wird immer mehr Wärme auf die Erde zurückgestrahlt. Also müssen wir versu-chen, die Treibhaus-Gase in der Atmosphäre nicht mehr weiter ansteigen zu lassen.",
        6: "Ein Fahrrad braucht gar keinen Treibstoff und Bus und Bahn können viele Leute gel-ichzeitig transportieren. Beide sind sehr umweltschonend.",
    },
    isQuizActive: {
        1: true,
        2: false,
        3: true,
        4: false,
        5: false,
        6: true,
        7: false,
    },
    isThreeAnswerActive: {
        1: true,
        3: true,
        6: true,
    },
};
