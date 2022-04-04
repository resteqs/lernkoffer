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

export const SDG17_Quiz_8: Quiz3Mixed = {
    sdgNumber: 17,
    sdgTitle: "Leiterspiel - Fragen zu Ziel 8",
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
        1: "Wenn folgende Dinge erfüllt sind, ist die Arbeit menschenwürdig…",
        3: "Sollte für die gleiche Menge an Arbeit von unterschiedlichen Menschen gleich viel bezahlt werden?",
        5: "Wie viele Menschen hatten weltweit 2019 keine Arbeit?",
        7: "Ein Mindestlohn sichert dich vor Armut.",
    },
    buttonLeftContent: {
        1: <p style={{ fontSize: "50px" }}>Geregelte Arbeitszeiten, fairer Lohn, Arbeiterschutz </p>,
        3: <p style={{ fontSize: "150px" }}>Ja</p>,
        5: <p style={{ fontSize: "69px" }}>Ungefähr 120 Millionen </p>,
        7: <p style={{ fontSize: "150px" }}>Wahr</p>,
    },
    buttonMiddleContent: {
        1: <p style={{ fontSize: "50px" }}>Gutes Mittagessen, bequeme Stühle, viele Urlaubstage </p>,
        3: <p style={{ fontSize: "69px" }}> </p>,
        5: <p style={{ fontSize: "69px" }}>Ungefähr 190 Millionen</p>,
        7: <p style={{ fontSize: "69px" }}>XXX</p>,
    },
    buttonRightContent: {
        1: <p style={{ fontSize: "50px" }}>Unbezahlte Überstunden, schwere körperliche Arbeit, unfairer Lohn </p>,
        3: <p style={{ fontSize: "150px" }}>Nein</p>,
        5: <p style={{ fontSize: "69px" }}>Ungefähr 230 Millionen </p>,
        7: <p style={{ fontSize: "150px" }}>Falsch</p>,
    },
    answerNumbersLeft: {
        1: "Richtig",
        3: "Richtig",
        5: "Falsch",
        7: "Falsch",
    },
    answerNumbersMiddle: {
        1: "Falsch",
        3: "XXX",
        5: "Richtig",
        7: "XXX",
    },
    answerNumbersRight: {
        1: "Falsch",
        3: "Falsch",
        5: "Falsch",
        7: "Richtig",
    },
    explanation: {
        1: "Diese Dinge sollten bei jedem Beruf vorhanden sein, damit alle Menschen z.B. vor Ausbeutung und gesundheitlichen Schäden geschützt sind. Deshalb ist auch von den Vereinigten Staaten bei den Menschenrechten aufgenommen worden, dass jede:r ein Recht auf „gerechte und befriedigende Arbeitsbedingungen“ hat.",
        3: "Das ist auch die fünfte Zielsetzung des 08. Nachhaltigkeitszieles: „Bis 2030 produktive Vollbeschäftigung und menschenwürdige Arbeit für alle Frauen und Männer, einschließlich junger Menschen und Menschen mit Behinderungen, sowie gleiches Entgelt für gleichwertige Arbeit erreichen.“",
        5: "In diesem Jahr waren 187 Millionen Menschen auf der Welt arbeitslos. Eine Zielsetzung von diesem Nachhaltigkeitsziel ist es auch, dass alle Menschen eine Arbeit bzw. die Möglichkeit dazu haben werden. Das ist wichtig, damit sie Geld bekommen und sich Dinge wie Essen und einen Wohnplatz leisten können.",
        7: "In Russland ist der Mindestlohn sehr niedrig mit nur 0,97 Euro pro Stunde. Das reicht nicht, um die gesamten Lebenskosten abzudecken, für z.B. Miete, Lebensmittel und Kleidung. Deshalb sichert der Mindestlohn dich beispielsweise dort nicht vor Armut. Grundsätzlich ist es aber empfehlenswert, eine gesetzliche Regelung zu haben, die bestimmt, wie viel man mindestens pro Stunde bezahlt bekommen muss.",
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
        3: false,
        5: true,
        7: false,
    },
    /* eslint-enable unicorn/filename-case */
    /* eslint-enable react/react-in-jsx-scope */
    /* eslint-enable react/no-unescaped-entities */
    /* eslint-enable @typescript-eslint/object-curly-spacing */
    /* eslint-enable import/extensions */
};
