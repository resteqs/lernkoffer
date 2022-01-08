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

export const SDG17_Quiz_7: Quiz3Mixed = {
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
        3: <p>Produziert ein Pkw (normales Auto) oder ein Flugzeug mehr Treibhausgase?</p>,
        4: (
            <p>
                Ein Flugzeug produziert mehr davon. Studien zeigen, dass die erzeugt Menge hier ungefähr bei 230 Gramm
                pro Person pro Kilometer (g/Pkm) liegt, während dieser Wert bei Pkws nur bei 147 liegt.
            </p>
        ),
        5: (
            <p>
                Produziert eine Eisenbahn (Fernverkehr) oder eine Straßen-/Stadt-/ und U-Bahn mehr flüchtige
                Kohlenwasserstoffe (Gase die sehr instabil sind)?
            </p>
        ),
        6: <p>Keines der beiden Transportmittel produziert diese Gase.</p>,
        7: <p>Produziert ein Pkw oder ein Linienbus mehr Kohlenstoffdioxid?</p>,
        8: (
            <p>
                Das Auto ist hier richtig. Dieses produziert ungefähr 1,00 g/Pkm während dieser Wert bei Linienbusen bei
                etwa 0,06 g/Pkm liegt.
            </p>
        ),
        9: (
            <div>
                <p>Ein paar Ideen, die ich toll finde:</p>
                <p>- bildet Fahrgemeinschaften, wenn ihr alle das gleiche oder ein ähnliches Ziel habt</p>
                <p>- nutze öffentliche Verkehrsmittel wann immer es möglich ist</p>
                <p>
                    - und wie so oft: versuche lokal oder saisonal zu kaufen, um Transportwege von Waren so kurz wie
                    möglich zu halten
                </p>
            </div>
        ),
        10: (
            <div>
                <p>
                    - außerdem versuche das Fliegen in einem Flugzeug zu vermeiden und reise eher mit einem Zug, auch
                    wenn das länger dauert
                </p>
                <p>
                    - wenn du die Möglichkeit hast, in einem Elektroauto oder sogar einem Wasserstoff betriebenen Auto
                    zu fahren, tu das oder hilf diese Technologien zu verbreiten, indem du mit anderen darüber redest
                    oder vielleicht kannst du sogar einmal dazu beitragen, dass diese Technologien für alle Menschen
                    zugänglich sind
                </p>
            </div>
        ),
    },
    question: {},
    buttonLeftContent: {},
    buttonMiddleContent: {},
    buttonRightContent: {},
    answerNumbersLeft: {},
    answerNumbersMiddle: {},
    answerNumbersRight: {},
    explanation: {},
    // modalContent: <div>Quiz SDG 01</div>,
    isQuizActive: {
        1: true,
        2: false,
        3: true,
        4: false,
        5: true,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
    },
    isThreeAnswerActive: {},

    /* eslint-enable unicorn/filename-case */
    /* eslint-enable react/react-in-jsx-scope */
    /* eslint-enable react/no-unescaped-entities */
    /* eslint-enable @typescript-eslint/object-curly-spacing */
    /* eslint-enable import/extensions */
};
