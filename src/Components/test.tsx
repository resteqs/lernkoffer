// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */
import { QuizProps } from "../Interfaces/Sdg";
import Logo from  "../SDGLogos/Goal-SDG01.png";


export const SDGX_Quiz:QuizProps = {
    sdgNumber: 1,
    sdgTitle: "Keine Armut",
    sdg: "SDG01",
    logo: Logo,
    tile: { 
        1: "1. Frage", 
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