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

export const SDG17_Quiz_6: Quiz3Mixed = {
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
        1: "In welchem Land kannst du Wasser aus der Leitung trinken?",
        3: "Was sind Sanitäreinrichtungen?",
        5: "Wie kann man Wasser reinigen?",
        7: "Wie viel Liter Wasser sollte ein 10-jähriges Kind pro Tag trinken?",
    },
    buttonLeftContent: {
        1: <p style={{ fontSize: "80px" }}>Finnland</p>,
        3: <p style={{ fontSize: "69px" }}>Tisch und Stuhl </p>,
        5: <p style={{ fontSize: "66px" }}>viel schütteln </p>,
        7: <p style={{ fontSize: "160px" }}>1</p>,
    },
    buttonMiddleContent: {
        1: <p style={{ fontSize: "80px" }}>Indien</p>,
        3: <p style={{ fontSize: "60px" }}>Waschbecken, Klo, Badewanne</p>,
        5: <p style={{ fontSize: "69px" }}>mit etwas anderem mischen </p>,
        7: <p style={{ fontSize: "160px" }}>2</p>,
    },
    buttonRightContent: {
        1: <p style={{ fontSize: "75px" }}>Argentinien</p>,
        3: <p style={{ fontSize: "69px" }}>Fernseher, Handy, Computer </p>,
        5: <p style={{ fontSize: "69px" }}>kochen lassen </p>,
        7: <p style={{ fontSize: "160px" }}>3</p>,
    },
    answerNumbersLeft: {
        1: "Richtig",
        3: "Falsch",
        5: "Falsch",
        7: "Richtig",
    },
    answerNumbersMiddle: {
        1: "Falsch",
        3: "Richtig",
        5: "Falsch",
        7: "Falsch",
    },
    answerNumbersRight: {
        1: "Falsch",
        3: "Falsch",
        5: "Richtig",
        7: "Falsch",
    },
    explanation: {
        1: "In Finnland kannst du direkt aus dem Wasserhahn trinken. Grundsätzlich solltest du dich immer darüber informieren, bevor du ins Ausland reist, ob es empfohlen wird oder nicht. Ansonsten kannst du abgefülltes Wasser im Supermarkt kaufen. ",
        3: "Sanitäreinrichtungen dienen der Körperpflege und der Hygiene.",
        5: "Durch mind. 15-minütiges, sprudelndes Kochen werden die Krankheitserreger abgetötet. Anschließend wartet man bis sich die Feststoffe, falls vorhanden, abgesetzt haben. Zuletzt wird das Wasser durch ein sauberes Wasser gesiebt.",
        7: "Im Alter von 10 Jahren sollte man pro Tag ungefähr 1 Liter Wasser trinken",
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
