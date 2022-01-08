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

export const SDG17_Quiz_2: Quiz3Mixed = {
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
        1: "Wahr oder falsch: Du solltest pro Tag fünf Portionen (ungefähr eine Hand voll) Obst und Gemüse essen",
        3: "Wenn du Hunger hast, isst du am besten…",
        5: "Welche Aussage stimmt?",
        7: "Wo solltest du am besten Essen kaufen?",
    },
    buttonLeftContent: {
        1: <p style={{ fontSize: "120px" }}>Wahr</p>,
        3: <p style={{ fontSize: "130px" }}>Brot</p>,
        5: (
            <p style={{ fontSize: "45px" }}>
                Es gibt viel zu wenig Essen auf der Welt, deshalb müssen Menschen in einigen Ländern hungern.{" "}
            </p>
        ),
        7: <p style={{ fontSize: "90px" }}>Super-markt </p>,
    },
    buttonMiddleContent: {
        3: <p style={{ fontSize: "130px" }}>Obst </p>,
        5: (
            <p style={{ fontSize: "50px" }}>
                Menschen leiden unter Hunger, weil sie so wählerisch bei ihrer Nahrung sind.{" "}
            </p>
        ),
        7: <p style={{ fontSize: "70px" }}>FastFood Restaurant </p>,
    },
    buttonRightContent: {
        1: <p style={{ fontSize: "120px" }}>Falsch</p>,
        3: <p style={{ fontSize: "130px" }}>Kekse </p>,
        5: (
            <p style={{ fontSize: "47px" }}>
                Es gibt genug Essen auf der Welt, aber viele Arme können sich davon nichts bzw. nicht genug leisten
            </p>
        ),
        7: <p style={{ fontSize: "90px" }}>Bauern-laden </p>,
    },
    answerNumbersLeft: {
        1: "Richtig",
        3: "Richtig",
        5: "Falsch",
        7: "Falsch",
    },
    answerNumbersMiddle: {
        3: "Falsch",
        5: "Falsch",
        7: "Falsch",
    },
    answerNumbersRight: {
        1: "Falsch",
        3: "Falsch",
        5: "Richtig",
        7: "Richtig",
    },
    explanation: {
        1: "Am besten sind es drei Portionen Gemüse und 2 Portionen Obst",
        3: "Brot ist macht lang satt, da es ein Vollkornprodukt ist. Außerdem ist es gesund.",
        5: "Menschen mit wenig Geld haben meistens nicht die gleichen Möglichkeiten, Essen zu kaufen, wie reiche Menschen. Deshalb mussten ungefähr 750 bis 810 Millionen Menschen hungern im Jahr 2020. Außerdem werden viele Nahrungsmittel weggeschmissen oder für etwas anderes verwendet.",
        7: "In einem Bauernladen gibt es Lebensmittel aus der Umgebung, sodass es keine langen Transportwege gibt. Das schont die Umwelt. Noch dazu werden so Landwirte aus dei-ner Region unterstützt.",
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
