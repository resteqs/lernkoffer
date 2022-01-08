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

export const SDG17_Quiz_1: Quiz3Mixed = {
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
                    <InfotextButton version="green">Zur Überischt</InfotextButton>
                </Link>
            </div>
        ),
        4: (
            <div style={{ margin: "auto", display: "block", width: "40%" }}>
                <Link to="/SDG17/QuizÜbersicht">
                    <InfotextButton version="green">Zur Überischt</InfotextButton>
                </Link>
            </div>
        ),
        6: (
            <div style={{ margin: "auto", display: "block", width: "40%" }}>
                <Link to="/SDG17/QuizÜbersicht">
                    <InfotextButton version="green">Zur Überischt</InfotextButton>
                </Link>
            </div>
        ),

        8: (
            <div style={{ margin: "auto", display: "block", width: "40%" }}>
                <Link to="/SDG17/QuizÜbersicht">
                    <InfotextButton version="green">Zur Überischt</InfotextButton>
                </Link>
            </div>
        ),
    },
    question: {
        1: "Leben jetzt weniger Menschen in Armut als vor 25 Jahren?",
        3: "Menschen sind arm, wenn ihre Grundbedürfnisse nicht erfüllt werden. Was hältst du von den nächsten drei Antworten als lebenswichtig? (Nur eine Antwort ist richtig)",
        5: "Kannst du die Antwort finden, die Armut verursacht?",
        7: "Was ist wichtig, wenn Armut bekämpft werden soll?",
    },
    buttonLeftContent: {
        1: <p>Ja</p>,
        3: <p style={{ fontSize: "100px" }}>Wasser</p>,
        5: <p style={{ fontSize: "100px" }}>Umzug </p>,
        7: <p style={{ fontSize: "60px" }}>Den armen Menschen ganz viel Geld geben </p>,
    },
    buttonMiddleContent: {
        3: <p style={{ fontSize: "80px" }}>Schocko-lade</p>,
        5: <p style={{ fontSize: "80px" }}>Schlechte Bildung </p>,
        7: <p style={{ fontSize: "60px" }}>Gar nichts, weil sie selbst daran schuld sind</p>,
    },
    buttonRightContent: {
        1: <p>Nein</p>,
        3: <p style={{ fontSize: "75px" }}>Gemütliche Matraze</p>,
        5: <p style={{ fontSize: "60px" }}>Einkauf eines Geburtstags-geschenks </p>,
        7: <p style={{ fontSize: "54px" }}>ihnen Unterstützung geben, damit sie sich selbst helfen können </p>,
    },
    answerNumbersLeft: {
        1: "Richtig",
        3: "Richtig",
        5: "Falsch",
        7: "Falsch",
    },
    answerNumbersMiddle: {
        3: "Falsch",
        5: "Richtig",
        7: "Falsch",
    },
    answerNumbersRight: {
        1: "Falsch",
        3: "Falsch",
        5: "Falsch",
        7: "Richtig",
    },
    explanation: {
        1: "1996 lebten 35,2% weltweit mit einem Einkommen von unter 1,90 US-Dollar pro Tag, 2012 nur noch 14,9%",
        3: "Ein Mensch kann ohne Wasser nicht sehr lange überleben (je nach Umständen, im Durchschnitt bei einem jungen, gesunden Menschen ungefähr drei bis vier Tage)",
        5: "Menschen mit einem niedrigen Schulabschluss finden nicht so einfach eine Arbeit und das Risiko arbeitslos zu werden ist höher. Meistens verdienen sie auch weniger als andere mit einer höheren Ausbildung.",
        7: "Menschen, die in Armut leben, sollen nicht eingeschränkt werden und sind auch oft bereit für ein besseres Leben zu arbeiten. Leider fehlen ihnen dazu nur oft die Mittel.",
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
        1: false,
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
