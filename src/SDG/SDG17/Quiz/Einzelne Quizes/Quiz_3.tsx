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

export const SDG17_Quiz_3: Quiz3Mixed = {
    sdgNumber: 17,
    sdgTitle: "Leiterspiel - Fragen zu Ziel 3",
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
        1: "Was davon kann dich krank machen?",
        3: "Es gibt viele Dinge, die gut für deine geistige Gesundheit sind. Welche Aussage stimmt?",
        5: "Was solltest du von folgenden Dingen jeden Tag machen, damit du gesund bleibst?",
        7: "Eines der folgenden drei Dinge schadet deiner Lunge. Welches ist es?",
    },
    buttonLeftContent: {
        1: <p style={{ fontSize: "60px" }}>Verschmutztes Wasser</p>,
        3: <p style={{ fontSize: "50px" }}>Es ist gut, wenn du viel im Bett liegst. </p>,
        5: <p style={{ fontSize: "60px" }}>Kartoffeln essen </p>,
        7: <p style={{ fontSize: "80px" }}>Rauchen </p>,
    },
    buttonMiddleContent: {
        1: <p style={{ fontSize: "70px" }}>viel Gemüse </p>,
        3: <p style={{ fontSize: "60px" }}>Es ist gut, wenn du viel allein bist. </p>,
        5: <p style={{ fontSize: "70px" }}>Hände waschen </p>,
        7: <p style={{ fontSize: "70px" }}>Heißen Tee trinken </p>,
    },
    buttonRightContent: {
        1: <p style={{ fontSize: "60px" }}>eine Hand voll Süßigkeiten</p>,
        3: <p style={{ fontSize: "50px" }}>Es ist gut, wenn du mit jemandem über deine Probleme redest. </p>,
        5: <p style={{ fontSize: "55px" }}>Drei Stunden Sport machen </p>,
        7: <p style={{ fontSize: "80px" }}>Husten </p>,
    },
    answerNumbersLeft: {
        1: "Richtig",
        3: "Falsch",
        5: "Falsch",
        7: "Richtig",
    },
    answerNumbersMiddle: {
        1: "Falsch",
        3: "Falsch",
        5: "Richtig",
        7: "Falsch",
    },
    answerNumbersRight: {
        1: "Falsch",
        3: "Richtig",
        5: "Falsch",
        7: "Falsch",
    },
    explanation: {
        1: "Wenn Wasser z.B. durch Müll verschmutzt wird, gelangen Krankheitserreger in dieses und machen die Menschen, die das Wasser trinken, krank.",
        3: "Wenn du mit niemandem über deine Probleme redest, kann dich das sehr belasten. Außerdem können dir oft andere Personen dabei helfen, eine Lösung zu finden oder dir einfach nur zuhören.",
        5: "Dadurch tötest du Krankheitserreger und hältst deine Hände sauber",
        7: "In einer Zigarette sind viele Schadstoffe, wie z.B. Teer, die sich in der Lunge ablagern und diese krank machen",
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
