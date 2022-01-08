// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
import * as React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../SDGLogos/Goal-SDG17.png";
import { Quiz3Mixed } from "../../../../Interfaces/SDG";
import { InfotextButton } from "../../../../Components/Buttons/InfotextButton";

export const SDG17_Quiz_10: Quiz3Mixed = {
    sdgNumber: 17,
    sdgTitle: "Leiterspiel - Fragen zu Ziel 10",
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
        1: "Welche der folgenden Aussagen kann eine wirtschaftliche (bezüglich deines Besitzes, deines Geldes und deiner Arbeit) Ungleichheit zur Folge haben?",
        2: "",
        3: "Was kann man als „Ungleichheit“ bezeichnen?",
        4: "",
        5: "Was ist sinnvoll zu machen, wenn du siehst, dass eine Person diskriminiert wird (also benach-teiligt oder heruntergemacht wird)?",
        6: "",
        7: "Was kann dir zum Nachteil werden?",
        8: "",
    },
    buttonLeftContent: {
        1: <p style={{ fontSize: "45px" }}>„Das Land, in dem ich lebe, ist nicht mein Heimatsland</p>,
        3: <p style={{ fontSize: "50px" }}>„Mein:e Lehrer:in ist nicht so nett wie die der anderen Klasse“</p>,
        5: (
            <p style={{ fontSize: "40px" }}>
                Gleiches mit Gleichem zu vergelten (das heißt dass du dem „Täter“ das gleiche an-tust, was er der
                anderen Person angetan hat)
            </p>
        ),
        7: <p style={{ fontSize: "45px" }}>Eine körperliche Behinderung</p>,
    },
    buttonMiddleContent: {
        1: <p style={{ fontSize: "45px" }}>„ich trage oft bunte Kleidung“</p>,
        3: (
            <p style={{ fontSize: "50px" }}>
                „Ich habe weniger Geld als fast alle die ich kenne, obwohl ich gebe aber auch mehr Geld aus“
            </p>
        ),
        5: (
            <p style={{ fontSize: "40px" }}>
                Auch wenn du helfen möchtest, gibt es leider nicht viel was du tun kannst. Deswegen gehst du weiter und
                tust als würdest du nichts bemerken.
            </p>
        ),
        7: <p style={{ fontSize: "45px" }}>Dass es dein Lieblingsessen doch nicht zum Abendessen gibt</p>,
    },
    buttonRightContent: {
        1: (
            <p style={{ fontSize: "45px", wordBreak: "break-word" }}>
                „Ich habe einen außergewöhnlichen Musikgeschmack“
            </p>
        ),
        3: (
            <p style={{ fontSize: "50px" }}>
                „Ich werde in ein Restaurant nicht wie alle anderen reingelassen, weil ich dunkle Hautfarbe habe“
            </p>
        ),
        5: (
            <p style={{ fontSize: "40px" }}>
                Versuchen, allen beteiligten Personen klarzumachen, dass das was da geschehen ist, nicht in Ordnung ist
            </p>
        ),
        7: (
            <p style={{ fontSize: "45px" }}>
                Dass dein Lieblingskuscheltier gerade in der Wäsche ist, du hast aber noch ein paar andere die du auch
                mags
            </p>
        ),
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
        5: "Falsch",
        7: "Falsch",
    },
    answerNumbersRight: {
        1: "Falsch",
        3: "Richtig",
        5: "Richtig",
        7: "Falsch",
    },
    explanation: {
        1: "Leider kann es sein, dass Menschen verurteilt werden, wenn sie im Ausland geboren wurden. Das kann dazu führen, dass sie keine Arbeit finden und Geldprobleme bekommen.",
        3: "Hier wurde eine Person ungleich zu anderen behandelt.",
        5: "Das ist das Beste was du tun kannst: Es kann zum Bei-spiel sein, dass die Person, die die andere Person diskriminiert, merkt, dass sie zu weit gegangen ist und aufhört. Auf jeden Fall aber fühlt sich die diskriminierte Person be-stärkt. Falls das nicht reicht, kannst du übrigens versuchen, noch mehr Leute dazu zu holen, die dann mit dir gemeinsam versuchen können, die Situation möglichst fried-voll zu lösen.",
        7: "Es gibt viele Bereiche der Gesellschaft, die noch nicht behindertengerecht sind. Zum Beispiel kommen Rollstuhlfahrer:innen in manche Häuser nur schwer oder gar nicht herein.",
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
