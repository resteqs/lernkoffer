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

export const SDG17_Quiz_5: Quiz3Mixed = {
    sdgNumber: 17,
    sdgTitle: "Leiterspiel - Fragen zu Ziel 5",
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
        1: "In welchem Jahr wurde die ersten Frauenwahlrechte in Europa eingeführt?",
        3: "In wie vielen Ländern führt zurzeit (Stand 2020) eine Frau die Regierung an",
        5: "Was wurde Mädchen und Frauen in Afghanistan von 1996-2001 verboten?",
        7: "Bulgarien ist das Land in der EU mit dem größten Frauenanteil in der IT (InformationsTechnologie). Wie viel Prozent aller IT-Angestellten sind Frauen?",
    },
    buttonLeftContent: {
        1: <p style={{ fontSize: "130px" }}>1902 </p>,
        3: <p style={{ fontSize: "80px" }}>5 von 193</p>,
        5: <p style={{ fontSize: "69px" }}>Aufräumen, putzen, waschen </p>,
        7: <p style={{ fontSize: "150px" }}>30 %</p>,
    },
    buttonMiddleContent: {
        1: <p style={{ fontSize: "130px" }}>1906</p>,
        3: <p style={{ fontSize: "80px" }}>10 von 193</p>,
        5: (
            <p style={{ fontSize: "50px" }}>
                Arbeiten/zur Schule gehen, allein das Haus verlassen, keine Kopfbedeckung tragen{" "}
            </p>
        ),
        7: <p style={{ fontSize: "150px" }}>50 %</p>,
    },
    buttonRightContent: {
        1: <p style={{ fontSize: "130px" }}>1910</p>,
        3: <p style={{ fontSize: "80px" }}>15 von 193</p>,
        5: <p style={{ fontSize: "55px" }}>Heiraten, Kinder kriegen, Ehemann versorgen </p>,
        7: <p style={{ fontSize: "150px" }}>70 %</p>,
    },
    answerNumbersLeft: {
        1: "Falsch",
        3: "Falsch",
        5: "Falsch",
        7: "Richtig",
    },
    answerNumbersMiddle: {
        1: "Richtig",
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
        1: "In diesem Jahr wurde zum ersten Mal in Finnland festgelegt, dass Frauen ein Wahlrecht haben. Ab diesem Zeitpunkt zählten ihre Stimmen bei Wahlen und sie konnten sich auch selbst zur Wahl aufstellen. Anschließend führten nacheinander andere Staaten das Frauenwahlrecht ebenfalls ein. Außerhalb Europas waren die USA und z. B. Neuseeland noch früher an der Reihe als Finnland, jedoch dauerte es bis 2011, bis weltweit alle Länder diese Rechte gesetzlich festgelegt hatten. Manchmal können Frauen aber bis heute nicht wählen gehen, da ihnen z. B. mit Gewalt gedroht wird, wenn sie es machen wollen. ",
        3: "2020 regierte in 15 von 193 Ländern eine Frau, z.B. in Neuseeland Jacina Ardern, in Dänemark Mette Frederiksen, in Norwegen Erna Solberg.",
        5: "Während der Herrschaft der Taliban (islamistische Terrorgruppe) in Afghanistan waren diese Dinge verboten. Frauen und Mädchen mussten ihr Gesicht verhüllen und wenn sie das Haus verlassen wollten, brauchten sie einen Mann, der mit ihnen verwandt war, als Begleitung.",
        7: "Nur 30% sind Frauen und das in dem Land mit dem größten Frauenanteil in der EU. Das zeigt, dass Frauen immer noch durch Vorurteile benachteiligt werden. Außerdem verdienen sie meist weniger als ihre männlichen Kollegen und haben schlechtere Aufstiegschancen. Das ist nicht nur IT so, sondern insgesamt in allen MINT-Berufen (Mathematik, Informatik, Naturwissenschaften, Technik). ",
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
