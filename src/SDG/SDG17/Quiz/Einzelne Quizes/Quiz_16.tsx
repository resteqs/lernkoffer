// eslint-disable-next-line unicorn/filename-case
import * as React from "react"
import { Link } from "react-router-dom";
import Logo from "../../../../SDGLogos/Goal-SDG17.png";
import { Quiz3Mixed } from "../../../../Interfaces/SDG";
import { InfotextButton } from "../../../../Components/Buttons/InfotextButton";

export const SDG17_Quiz_16: Quiz3Mixed = {
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
        1: "In welcher der folgenden Situationen verstoßen die Eltern gegen die Kinderrechte?",    
        3: "Wenn zwei Personen sich streiten, wie kannst du den beiden Personen am besten helfen?",
        5: "In welcher der folgenden Situationen wurde ungerecht gehandelt?",
    },
    buttonLeftContent: {
        1: <p style={{ fontSize:"2.2vw" }}>Die Eltern lesen, ohne zu fragen im Tagebuch des Kindes</p>,
        3: <p style={{ fontSize:"2.5vw" }}>Sie fragen, was für ein Problem sie haben und dann eine gemeinsame Lösung finden  </p>,
        5: <p style={{ fontSize:"2vw" }}>Dein Freund hat in einem Test nur einen Punkt schlechter abgeschnitten und eine schlechtere Note bekommen  </p>,
    },
    buttonMiddleContent: {
        1: <p style={{ fontSize:"2.2vw" }}>Das Kind darf keine Süßigkeiten essen, weil seine Eltern finden, dass sich das Kind sehr gesund ernähren muss</p>,
        3: <p style={{ fontSize:"2.5vw" }}>Die Person, von der du glaubst, dass sie eher Recht hat, unterstützen </p>,
        5: <p style={{ fontSize:"2vw" }}>Jemand behauptet du hättest etwas Schlimmes gemacht und du wirst dafür bestraft, obwohl du nichts gemacht hast  </p>,
    },
    buttonRightContent: {
        1: <p style={{ fontSize:"2.2vw" }}>Die Eltern sagen dem Kind, dass es zur Grundschule gehen muss  </p>,
        3: <p style={{ fontSize:"2.5vw" }}>Beiden Personen sagen, sie sollen sich nicht so anstellen </p>,
        5: <p style={{ fontSize:"2vw" }}>Bei einem Kunstwettbewerb belegst du nur den zweiten Platz, obwohl du findest, dass deine Einreichung viel schöner ist“ </p>,
    },
    answerNumbersLeft: {
        1: "Richtig",
        3: "Richtig",
        5: "Falsch",
    },
    answerNumbersMiddle: {
        1: "Falsch",
        3: "Falsch",
        5: "Richtig",
    },
    answerNumbersRight: {
        1: "Falsch",
        3: "Falsch",
        5: "Falsch",
    },
    explanation: {
        1: "Das Kind hat ein Recht auf Privatsphäre (auch gegenüber den Eltern)",
        3: "So kann man den Konflikt im besten Fall ganz oder für längere Zeit lösen und keiner ist unzufrieden. So wird der Friede zwischen beiden Personen (zumindest zeitweise) wiederhergestellt.",
        5: "Du warst unschuldig. Also war die Strafe nicht gerecht.",
    },
    isQuizActive: {
        1: true,
        2: false,
        3: true,
        4: false,
        5: true,
        6: false,
    },
    isThreeAnswerActive: {
        1: true,
        3: true,
        5: true,
    },
};
