// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */
import { Quiz3Mixed } from "../Interfaces/SDG";
import Logo from "../SDGLogos/Goal-SDG01.png";

export const SDGX_Quiz: Quiz3Mixed = {
    sdgNumber: 1,
    sdgTitle: "Keine Armut",
    sdg: "SDG01",
    logo: Logo,
    tile: {
        3: "Ich bin",
    },
    text: { 3: <div>2</div> },
    question: {
        1: "Wie heißt der große Bär von AFrika?",
        2: "A oder B?",
    },
    buttonLeftContent: { 1: <div>Ja</div>, 2: <div>Nein</div> },
    buttonMiddleContent: { 1: <div>KA</div> },
    buttonRightContent: {
        1: <div>Ne</div>,
        2: <div>3</div>,
    },
    answerNumbersLeft: {
        1: "Falsch :(",
        2: "Falsch",
    },
    answerNumbersMiddle: {
        1: "Flasch",
    },
    answerNumbersRight: {
        1: "Richtig :)",
        2: "Richtig :)",
    },
    explanation: {
        1: "ich bin :(",
        2: "ah verdammt",
    },
    isQuizActive: {
        1: true,
        2: true,
        3: false,
    },
    isThreeAnswerActive: {
        1: true,
        2: false,
    },
};
