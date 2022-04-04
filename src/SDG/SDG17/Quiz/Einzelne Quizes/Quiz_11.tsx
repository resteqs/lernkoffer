// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
import * as React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../SDGLogos/Goal-SDG17.png";
import { Quiz3Mixed } from "../../../../Interfaces/SDG";
import { InfotextButton } from "../../../../Components/Buttons/InfotextButton";

export const SDG17_Quiz_11: Quiz3Mixed = {
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
        1: "Was solltest du am besten benutzen, wenn du zum Bäcker fährst?",
        3: "Wie kannst du Bienen und Insekten helfen?",
        5: "Jedes Haus sollte folgende Dinge haben …",
        7: "In einem Bus sollten alle Menschen die Möglichkeit haben mitzufahren. Was hilft dabei?",
    },
    buttonLeftContent: {
        1: <p style = {{ fontSize: "5.5vw" }}>Auto</p>,
        3: <p style = {{ fontSize: "3vw" }}>Weniger mähen, einheimische Stauden anpflanzen</p>,
        5: <p style = {{ fontSize: "3vw" }}>Fließendes Wasser und Strom</p>,
        7: <p style = {{ fontSize: "2vw" }}> Eine ausfahrbare Rampe, damit Rollstuhlfahrer:innen in den Bus kommen können</p>,
    },
    buttonMiddleContent: {
        1: <p style = {{ fontSize: "5.5vw" }}>Fahrrad</p>,
        3: <p style = {{ fontSize: "3vw" }}>Musik laut anmachen</p>,
        5: <p style = {{ fontSize: "3vw" }}>Klimaanlage und Sauna</p>,
        7: <p style = {{ fontSize: "2vw" }}>Ein Kühlschrank, sodass jede:r etwas zu trinken haben kann</p>,
    },
    buttonRightContent: {
        1: <p style = {{ fontSize: "5.5vw" }}>Bus</p>,
        3: <p style = {{ fontSize: "3vw" }}>Steingarten anlegen</p>,
        5: <p style = {{ fontSize: "3vw" }}>Spülmaschine und Bügeleisen</p>,
        7: <p style = {{ fontSize: "2vw" }}>Mehrere Vierer-Sitzplätze, damit Freundesgruppen zusammensitzen können</p>,
    },
    answerNumbersLeft: {
        1: "Falsch",
        3: "Richtig",
        5: "Richtig",
        7: "Richtig",
    },
    answerNumbersMiddle: {
        1: "Richtig",
        3: "Falsch",
        5: "Falsch",
        7: "Falsch",
    },
    answerNumbersRight: {
        1: "Falsch",
        3: "Falsch",
        5: "Falsch",
        7: "Falsch",
    },
    explanation: {
        1: "Das Fahrrad stößt keine Schadstoffe für die Umwelt aus und au-ßerdem hat es viele andere Vorteile. Es ist z. B. leise, vergleichsweise günstig und gut für die Gesundheit. Wenn du nicht Fahrrad fahren kannst, weil beispielsweise die Strecke zu lang ist, solltest du zuerst versuchen, öffentliche Verkehrsmittel, wie Bus und Bahn zu benutzen, bevor du das Auto nimmst.",
        3: "Weniger mähen lässt den Pflanzen Zeit zu wachsen und Blüten und Blätter zu entwickeln. Diese dienen dann als Nahrung für z.B. Raupen und Schmetterlingen. Bei gezüchteten Pflanzen gibt es heutzutage nicht mehr genug Nektar für die Bienen und anderen Insekten, deshalb ist es besser, einheimische Stauden zu pflanzen. Diese haben auch den Vorteil, dass sie meist für mehrere Jahre hintereinander blühen.",
        5: "Fließendes Wasser ist unentbehrlich in ei-nem Haus für die Körperhygiene, aber auch z. B. zum Kochen und Waschen. Durch Strom bekommt man Licht und kann heizen.",
        7: "Dadurch bekommen auch Rollstuhlfahrer:innen die Möglichkeit mit dem Bus zu fahren und selbstständig ein- und auszusteigen",
    },
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
    
};
