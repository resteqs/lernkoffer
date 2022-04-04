/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from "../../../../SDGLogos/Goal-SDG17.png";
import { Quiz3Mixed } from "../../../../Interfaces/SDG";
import { InfotextButton } from "../../../../Components/Buttons/InfotextButton";
import { Link } from "react-router-dom";

export const SDG17_Quiz_7: Quiz3Mixed = {
    sdgNumber: 17,
    sdgTitle: "Leiterspiel - Fragen zu Ziel 7",
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
        1: "Wie viele Haushalte kann ein Wasserkraftwerk mit Strom versorgen?",
        3: "Was sollte man machen, um Energie zu sparen?",
        5: "Aus welcher Quelle wird weltweit am meisten Energie erzeugt?",
        7: "Woraus kann mittlerweile nachhaltig Strom erzeugen?",
    },
    buttonLeftContent: {
        1: <p style={{ fontSize: "69px" }}>Ungefähr 2000 </p>,
        3: <p style={{ fontSize: "55px" }}>Licht ausschalten bei Verlassen des Raumes </p>,
        5: <p style={{ fontSize: "69px" }}>Kohle/Torf </p>,
        7: <p style={{ fontSize: "69px" }}>Bücher </p>,
    },
    buttonMiddleContent: {
        1: <p style={{ fontSize: "69px" }}>Ungefähr 4000 </p>,
        3: <p style={{ fontSize: "79px" }}>Vorhänge zumachen </p>,
        5: <p style={{ fontSize: "69px" }}>Wasser </p>,
        7: <p style={{ fontSize: "69px" }}>Fußwege </p>,
    },
    buttonRightContent: {
        1: <p style={{ fontSize: "69px" }}>Ungefähr 6000</p>,
        3: <p style={{ fontSize: "69px" }}>Gemüse nicht waschen </p>,
        5: <p style={{ fontSize: "69px" }}>Erdöl </p>,
        7: <p style={{ fontSize: "69px" }}>Handcreme </p>,
    },
    answerNumbersLeft: {
        1: "Falsch",
        3: "Richtig",
        5: "Falsch",
        7: "FaLSCH",
    },
    answerNumbersMiddle: {
        1: "Richtig",
        3: "Falsch",
        5: "Falsch",
        7: "RICHTIG",
    },
    answerNumbersRight: {
        1: "Falsch",
        3: "Falsch",
        5: "Richtig",
        7: "fALSCH",
    },
    explanation: {
        1: "Ein Wasserkraftwerk, das die Strömung eines Flusses zur Energiegewinnung nutzt, wird auch Laufwasserkraftwerk oder Flusskraftwerk genannt. Wenn das Wasser durch die Turbinen (= Maschine, angetrieben durch Wasser, Wind, Dampf oder Gas; hier ähnlich wie Schiffschrauben) fließt, beginnen diese sich zu bewegen und betreiben anschließend den Generator, der den Strom erzeugt. So bekommen rund 4000 Haushalte Strom zum Heizen, Kochen, etc.",
        3: "Indem man beim Verlassen des Raumes das Licht ausmacht wird Strom gespart und die Energie wird nicht unnötig verbraucht; durch LED-Lampen oder Energiesparlampen kann man Strom sparen, wenn das Licht an ist",
        5: "31% der gesamten Energie 2019 wurde aus Erdöl erzeugt. Das Problem ist, dass dieser Energieträger nicht erneuerbar ist. Außerdem passieren regelmäßig Ölkatastrophen, bei denen große Mengen an Öl die Umwelt verschmutzen und Tiere (z.B. Meerestiere und Vögel) sehr krank machen.",
        7: "Im Juni 2017 wurde der erste stromerzeugende Fußweg in London eröffnet. Mit jedem Schritt erzeugt man Energie: je nachdem wie man sich bewegt (Springen, Gehen, Laufen, etc.), ist es unterschiedlich viel.",
    },
    // modalContent: <div>Quiz SDG 01</div>,
    isQuizActive: {
        1: true,
        2: false,
        3: true,
        4: false,
        5: true,
        6: false,
        7: true,
        8: false,
    },
    isThreeAnswerActive: {
        1: true,
        3: true,
        5: true,
        7: true,
    },
    /* eslint-enable unicorn/filename-case */
    /* eslint-enable react/react-in-jsx-scope */
    /* eslint-enable react/no-unescaped-entities */
    /* eslint-enable @typescript-eslint/object-curly-spacing */
    /* eslint-enable import/extensions */
};
