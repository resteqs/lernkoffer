// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */
import { Quiz3OProps } from "../Interfaces/SDG";
import Logo from  "../SDGLogos/Goal-SDG01.png";

export const SDGX_Quiz:Quiz3OProps = {
    sdgNumber: 1,
    sdgTitle: "Keine Armut",
    sdg: "SDG01",
    logo: Logo,
    tile: {
        2: "Ich bin"
    },
    text: { 2: <div>2</div> },
    question: { 1: "Wie heißt der große Bär von AFrika?" },
    buttonLeftContent: { 1: <div>Ja</div> },
    buttonMiddleContent: { 1: <div>KA</div>  },
    buttonRightContent: { 1: <div>Ne</div> },
    answerNumbersLeft: { 1: "Falsch :(" },
    answerNumbersMiddle: { 1: "Flasch" },
    answerNumbersRight: { 1: "Richtig :)" },
    explanation: { 1: "ich bin dumm :(" },
    isQuizActive: {
        1: true,
        2: false,
    },
}
