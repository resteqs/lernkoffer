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
        2:
            (
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
        6:                 <div style={{ margin: "auto", display: "block", width: "40%" }}>
        <Link to="/SDG17/QuizÜbersicht">
            <InfotextButton version="green">Zur Überischt</InfotextButton>
        </Link>
    </div>,

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
        5: "XXX",
        7: "XXX",
    },
    buttonLeftContent: {
        1: <p>Ja</p>,
        3: <p  style={{ fontSize: "60px" }}>Wasser</p>,
        5: <p>XXX</p>,
        7: <p>XXX</p>,
    },
    buttonMiddleContent: {
        3: <p>Schockolade</p>,
        5: <p>XXX</p>,
        7: <p>XXX</p>,
    },
    buttonRightContent: {
        1: <p>Nein</p>,
        3: <p>Gemütliche Matraze</p>,
        5: <p>XXX</p>,
        7: <p>XXX</p>,
    },
    answerNumbersLeft: {
        1: "Richtig",
        3: "XXX",
        5: "XXX",
        7: "XXX",
    },
    answerNumbersMiddle: {
        3: "XXX",
        5: "XXX",
        7: "XXX",
    },
    answerNumbersRight: {
        1: "Falsch",
        3: "XXX",
        5: "XXX",
        7: "XXX",
    },
    explanation: {
        1: "1996 lebten 35,2% weltweit mit einem Einkommen von unter 1,90 US-Dollar pro Tag, 2012 nur noch 14,9%",
        3: "XXX",
        5: "XXX",
        7: "XXX",
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
