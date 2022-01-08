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

export const SDG17_Quiz_4: Quiz3Mixed = {
    sdgNumber: 17,
    sdgTitle: "Leiterspiel - Fragen zu Ziel 4",
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
        6:                 <div style={{ margin: "auto", display: "block", width: "40%" }}>
        <Link to="/SDG17/QuizÜbersicht">
            <InfotextButton version="green">Zur Übersicht</InfotextButton>
        </Link>
    </div>,

        8: (
            <div style={{ margin: "auto", display: "block", width: "40%" }}>
            <Link to="/SDG17/QuizÜbersicht">
                <InfotextButton version="green">Zur Übersicht</InfotextButton>
            </Link>
        </div>
        ),
    },
    question: {
        1: "Welche Personengruppe ist benachteiligt beim Thema Bildung?",
        3: "Welche Fähigkeiten sollte jede:r erlernen können, damit man später eine Arbeit finden kann?",
        5: "XXX",
        7: "XXX",
    },
    buttonLeftContent: {
        1: <p style={{ fontSize: "90px" }}>Jungs</p>,
        3: <p style={{ fontSize: "50px" }}>Skateboard fahren, Fußball spielen, Ballett tanzen </p>,
        5: <p style={{ fontSize: "70px" }}>XXX</p>,
        7: <p style={{ fontSize: "70px" }}>XXX</p>,
    },
    buttonMiddleContent: {
        1: <p style={{ fontSize: "90px" }}>Mädchen</p>,
        3: <p style={{ fontSize: "60px" }}>Malen, Singen, Seilspringen </p>,
        5: <p style={{ fontSize: "70px" }}>XXX</p>,
        7: <p style={{ fontSize: "70px" }}>XXX</p>,
    },
    buttonRightContent: {
        1: <p style={{ fontSize: "90px" }}>Reiche Kinder</p>,
        3: <p style={{ fontSize: "60px" }}>Lesen, Schreiben, Rechnen </p>,
        5: <p style={{ fontSize: "70px" }}>XXX</p>,
        7: <p style={{ fontSize: "70px" }}>XXX</p>,
    },
    answerNumbersLeft: {
        1: "Falsch",
        3: "Falsch",
        5: "XXX",
        7: "XXX",
    },
    answerNumbersMiddle: {
        1: "Richtig",
        3: "Falsch",
        5: "XXX",
        7: "XXX",
    },
    answerNumbersRight: {
        1: "Falsch",
        3: "Richtig",
        5: "XXX",
        7: "XXX",
    },
    explanation: {
        1: "Weltweit können im Alter von 15 bis 24 Jahren rund 44 Millionen Jungen und fast 58 Millionen Mädchen weder lesen noch schreiben",
        3: "Diese drei Fähigkeiten sind ausschlaggebend dafür später eine Arbeit zu finden, da sie in vielen Bereichen gebraucht werden",
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
