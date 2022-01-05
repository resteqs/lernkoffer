// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */
// @ts-ignore
import { QuizProps } from "../Interfaces/SDG";
import Logo from  "../SDGLogos/Goal-SDG05.png";

export const SDG05_Einstieg:QuizProps = {
    sdgNumber: 5,
    sdgTitle: "Geschlechtergleichheit",
    sdg: "SDG05",
    logo: Logo,
    tile: { 
        2: "Ich bin" },
    text: { 2: "der Depp" },
    question: { 1: "Wie heißt der große Bär von Deutschland?" },
    buttonLeftContent: { 1: <div>Peter</div> },
    buttonRightContent: { 1: <div>Elisa</div> },
    answerNumbersLeft: { 1: "Falsch :(" },
    answerNumbersRight: { 1: "Richtig :)" },
    explanation: { 1: "ich bin dumm :(" },
    // modalContent: <div>Petersdom</div>,
    isQuizActive: {
        1: true,
        2: false,
    }
}