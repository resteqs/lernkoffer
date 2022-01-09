/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { QuizProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG02.png";
import croissant from "./media/frenchdisguistingthing.png";
import bread from "./media/germanbreadsprakeldwithstones.png";
import choko from "./media/chokolalalalalalalalalallalalall.png";
import cake from "./media/inLydiasKüche.png";
import apple from "./media/poneyfood.png";
import potato from "./media/yellowthing.png";
import pyramide from "./media/IlluminatiDreieck.png";

export const SDG02_Quiz: QuizProps = {
    sdgNumber: 2,
    sdgTitle: "Ernährungsquiz",
    sdg: "SDG02",
    logo: Logo,
    tile: {
        1: "Einleitung",
        5: "Schlussfolgerung",
        6: "Schlussfolgerung",
        7: "Schlussfolgerung",
        8: "Schlussfolgerung",
    },
    text: {
        1: (
            <div>
                <p>
                    Hast du dir schon einmal Gedanken darüber gemacht, was du isst? Wenn nicht, dann kannst du jetzt
                    etwas sehr Wichtiges lernen. Wenn du schon einmal darüber nachgedacht hast, dann kannst du
                    vielleicht denen, die das noch nie getan haben, ein bisschen helfen.
                </p>
                Du wirst immer zwei Sachen gezeigt bekommen und sollst entscheiden, was davon gesünder ist und warum
                (ihr könnt natürlich auch gerne in der Gruppe überlegen). Wenn du dich entschieden hast, dann tippe den
                Gegenstand an und du wirst sehen, ob du richtig liegst.
            </div>
        ),
        5: (
            <div>
                Du hast nun schon ein paar Sachen gesehen, die gesünder als andere sind. Aber warum gibt es gesunde und
                ungesunde Sachen? Das ist nicht ganz einfach zu erklären, aber du schaffst es bestimmt trotzdem, das zu
                verstehen!
            </div>
        ),
        6: (
            <div>
                Unser Körper braucht bestimmte Stoffe (Sachen, die im Essen sind), um gesund zu bleiben. Ganz wichtig
                sind zum Beispiel „Vitamine“, die dem Körper helfen, dich vor Krankheiten zu schützen. Außerdem brauchst
                du auch so genannte „Kohlenhydrate“. Das sind Stoffe, die dir Energie liefern, damit du herumlaufen und
                andere Dinge tun kannst, bei denen sich deine Muskeln anstrengen müssen. Es gibt noch viele weitere
                Stoffe, ohne die dein Körper nicht auskommt, wie „Ballaststoffe“, „Fette“ und viele mehr.
            </div>
        ),
        7: (
            <div>
                Das wichtige bei der Ernährung ist aber, dass du dich „ausgewogen“ ernährst, also von allen wichtigen
                Sachen etwas isst. Wenn man zu wenig von wichtigen Stoffen über das Essen aufnimmt, dann spricht man von
                einer „Mangelernährung“. Die Folgen davon sind meist sehr schlimm, denn es führt dazu, dass man öfter
                krank wird, weil der Körper sich nicht mehr gegen Krankheiten wehren kann. Man ist auch nicht mehr so
                leistungsfähig wie sonst, das bedeutet, dass man sich nicht mehr konzentrieren kann und auch keine Kraft
                hat, um zum Beispiel zu spielen. 
            </div>
        ),
        8: (
            <div>
                <p>
                    Wenn du dich genauer mit diesem Thema beschäftigen möchtest, dann könnte dir die
                    „Ernährungspyramide“ helfen. Das ist eine Zeichnung, die zeigt, welche Lebensmittel (Dinge zum
                    Essen) sehr viel oder eher weniger gegessen werden sollen.
                </p>
                <img style={{ height: "50vh", margin: "auto", display: "block" }} src={pyramide} alt="" />
            </div>
        ),
    },

    question: {
        2: "Was davon ist gesünder?",
        3: "Was davon ist gesünder?",
        4: "Was davon ist gesünder?",
    },
    buttonLeftContent: {
        2: (
            <p>
                {" "}
                <img style={{ maxWidth: "20vw", maxHeight: "35vh" }} src={apple} alt="" />{" "}
            </p>
        ),
        3: (
            <p>
                {" "}
                <img style={{ maxWidth: "20vw", maxHeight: "35vh" }} src={croissant} alt="" />{" "}
            </p>
        ),
        4: (
            <p>
                {" "}
                <img style={{ maxWidth: "20vw", maxHeight: "35vh" }} src={potato} alt="" />{" "}
            </p>
        ),
    },
    buttonRightContent: {
        2: (
            <p>
                {" "}
                <img style={{ maxWidth: "20vw", maxHeight: "35vh" }} src={choko} alt="" />{" "}
            </p>
        ),
        3: (
            <p>
                {" "}
                <img style={{ maxWidth: "20vw", maxHeight: "35vh" }} src={bread} alt="" />{" "}
            </p>
        ),
        4: (
            <p>
                {" "}
                <img style={{ maxWidth: "20vw", maxHeight: "35vh" }} src={cake} alt="" />{" "}
            </p>
        ),
    },
    answerNumbersLeft: {
        2: "Richtig",
        3: "Falsch",
        4: "Richtig",
    },
    answerNumbersRight: {
        2: "Falsch",
        3: "Richtig",
        4: "Falsch",
    },
    explanation: {
        2: "Ein Apfel ist gesünder",
        3: "Ein Vollkornbrot ist gesünder",
        4: "Eine Kartoffel ist gesünder",
    },
    // modalContent: <div>Quiz SDG 02</div>,
    isQuizActive: {
        1: false,
        2: true,
        3: true,
        4: true,
        5: false,
        6: false,
        7: false,
        8: false,
    },
    /* eslint-enable unicorn/filename-case */
    /* eslint-enable react/react-in-jsx-scope */
    /* eslint-enable react/no-unescaped-entities */
    /* eslint-enable @typescript-eslint/object-curly-spacing */
};
