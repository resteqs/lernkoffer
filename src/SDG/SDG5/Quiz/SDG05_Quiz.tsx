
// eslint-disable-next-line unicorn/filename-case
import * as React from "react"
import Logo from "../../../SDGLogos/Goal-SDG05.png";
import { QuizProps } from "../../../Interfaces/SDG";
import thumbup from "../Quiz/thumbs/like.png";
import thumbdown from "../Quiz/thumbs/dislike.png";

export const SDG05_Quiz: QuizProps = {
    sdgNumber: 5,
    sdgTitle: "Was gehört sich?",
    sdg: "SDG05",
    logo: Logo,
    tile: {
        1: "Einleitung",
        2: "Einleitung",
        3: "Einleitung",
        11: "Schluss",
        12: "Schluss",
    },
    text: {
        1: (
            <div>
                {" "}
                Dass Mann und Frau nicht immer gleich behandelt werden, wisst ihr vielleicht bereits! Nun will ich mal
                schauen, ob ihr auch erkennen könnt, wann Männer oder Frauen tatsächlich wegen ihres Geschlechts
                ungerecht behandelt werden.
            </div>
        ),
        2: (
            <div>
                {" "}
                Dazu habe ich ein Quiz für euch vorbereitet!
                <ul style={{ marginTop: "30px" }}>
                    <li>
                        Ich habe hier verschiedene Aussagen und ihr sollt darüber nachdenken, ob sich das so gehört oder
                        nicht. Entscheidet danach, ob Frauen und Männer in den Beispielen gleich behandelt werden oder
                        nicht! Wer findet, dass sich das so gehört, drückt auf den Daumen nach oben, wenn nicht dann auf den nach
                        unten.{" "}
                    </li>
                </ul>{" "}
            </div>
        ),
        3: (
            <div>
                {" "}
                Danach möchte ich euch erklären, warum das so ist. Diese Erklärungen könnt ihr anschließend mit euren
                eigenen Überlegungen vergleichen und vielleicht auch darüber diskutieren.{" "}
            </div>
        ),
        11: (
            <div>
                {" "}
                Falls ihr euch fragt, wie ich auf das komme, was ich euch gerade gesagt habe: Ich beziehe mich auf den
                in der „Allgemeinen Erklärung der Menschenrechte“ der UNO festgehaltenen Grundsatz, „Alle Menschen sind
                frei und gleich an Würde und Rechten geboren“. Dadurch wird gesagt, dass unabhängig von Geschlecht,
                Herkunft, Religion und vielen weiteren Sachen jeder Mensch die gleichen Rechte hat. Bei manchen von den
                Beispielen, die ich euch gerade genannt habe, wurden Menschenrechte verletzt. Manchmal habe ich euch
                auch einfach ein Zitat aus der „Allgemeinen Erklärung der Menschenrechte&quot; dazugegeben!{" "}
            </div>
        ),
        12: (
            <div>
                {" "}
                Ich hoffe, ihr erkennt durch diese Beispiele jetzt besser, wo Frauen und Männer ungleich behandelt
                werden!{" "}
            </div>
        ),
    },

    question: {
        4: "„In einer Beziehung soll nur der Mann Geld verdienen! Die Aufgabe der Frau ist es, den Haushalt zu führen und auf die Kinder aufzupassen, falls es welche gibt!“",
        5: " In Firmen und Geschäften dürfen sowohl Männer als auch Frauen die Chefs sein!“",
        6: " „Jede Frau soll (genauso wie jeder Mann) aus freien Stücken heiraten können“",
        7: " „Auch Männer dürfen Berufe wie Krankenpfleger, Sekretär oder Friseur ausüben“",
        8: " „In einer Beziehung darf der Mann wegen seines Geschlechts über die Frau bestimmen“",
        9: " „Jeder soll für dieselbe Arbeit auch genau gleich viel Geld bekommen!“",
        10: " „Wenn beispielsweise ein verheirateter Mann stirbt, sollen nur männliche Verwandte wie der Sohn erben, nicht die Ehefrau!“",
    },
    buttonLeftContent: {
        4: (
            <p>
                {" "}
                <img style={{ height: "300px" }} src={thumbup} alt="" />{" "}
            </p>
        ),
        5: (
            <p>
                {" "}
                <img style={{ height: "300px" }} src={thumbup} alt="" />{" "}
            </p>
        ),
        6: (
            <p>
                {" "}
                <img style={{ height: "300px" }} src={thumbup} alt="" />{" "}
            </p>
        ),
        7: (
            <p>
                {" "}
                <img style={{ height: "300px" }} src={thumbup} alt="" />{" "}
            </p>
        ),
        8: (
            <div>
                {" "}
                <img style={{ height: "300px" }} src={thumbup} alt="" />{" "}
            </div>
        ),
        9: (
            <div>
                {" "}
                <img style={{ height: "300px" }} src={thumbup} alt="" />
            </div>
        ),
        10: (
            <div>
                {" "}
                <img style={{ height: "300px" }} src={thumbup} alt="" />
            </div>
        ),
    },
    buttonRightContent: {
        4: (
            <p>
                {" "}
                <img style={{ height: "300px" }} src={thumbdown} alt="" />{" "}
            </p>
        ),
        5: (
            <p>
                {" "}
                <img style={{ height: "300px" }} src={thumbdown} alt="" />{" "}
            </p>
        ),
        6: (
            <p>
                {" "}
                <img style={{ height: "300px" }} src={thumbdown} alt="" />{" "}
            </p>
        ),
        7: (
            <p>
                {" "}
                <img style={{ height: "300px" }} src={thumbdown} alt="" />{" "}
            </p>
        ),
        8: (
            <div>
                <img style={{ height: "300px" }} src={thumbdown} alt="" />{" "}
            </div>
        ),
        9: (
            <div>
                <img style={{ height: "300px" }} src={thumbdown} alt="" />{" "}
            </div>
        ),
        10: (
            <div>
                <img style={{ height: "300px" }} src={thumbdown} alt="" />{" "}
            </div>
        ),
    },
    answerNumbersLeft: {
        4: "Falsch",
        5: "Richtig",
        6: "Richtig",
        7: "Richtig",
        8: "Falsch",
        9: "Richtig",
        10: "Falsch",
    },
    answerNumbersRight: {
        4: "Richtig",
        5: "Falsch",
        6: "Falsch",
        7: "Falsch",
        8: "Richtig",
        9: "Falsch",
        10: "Richtig",
    },
    explanation: {
        4: "Da jeder Mensch, unabhängig des Geschlechts, gleichbehandelt werden und die gleichen Möglichkeiten haben soll, gehört es sich, dass in einer Beziehung die Partner gemeinsam entscheiden, wer welche Aufgaben übernimmt, ob die Aufgaben so strikt vergeben werden müssen und ob sie aufgeteilt werden können. Das sollte nur geschehen, wenn beide Partner einverstanden sind. Dadurch sind dann beide Partner im Idealfall zufriedener mit ihren Aufgaben, was natürlich auch die Stimmung im Haus und in der Beziehung generell besser macht!",
        5: "Wer Chef wird, sollte nur danach entschieden werden, ob jemand für diesen Job geeignet ist und die notwendigen Fähigkeiten dazu besitzt. Dementsprechend sollte nicht danach ausgewählt werden, welches Geschlecht die Person hat, sondern nur auf das Können geachtet werden. Wenn dadurch gleich viele Männer und Frauen Chefs würden, könnten die Frauen und Männer sich dann auch selbst besser darum kümmern, dass sie gerechter behandelt werden. ",
        6: "Jeder Mensch, egal ob Mann oder Frau, hat das Recht, sein Leben so zu gestalten, wie er das möchte. Dazu gehören unter anderem, wen und ob man heiraten möchte, beziehungsweise mit wem man zusammen sein möchte. Das wird auch in der „Allgemeinen Erklärung der Menschenrechte“ gesagt. Ein weiterer Vorteil von einer freien Wahl des Partners ist, dass die Beziehung wahrscheinlich glücklicher ist und länger hält!",
        7: "Die Berufswahl ist unabhängig vom Geschlecht, und jeder darf sich für jeden Beruf bewerben, wenn er das möchte. Denn es ist für die Jobwahl egal, welches Geschlecht man hat, solange man den Job ausüben will, sollte man auch versuchen, ihn auszuüben!",
        8: "In der „Allgemeinen Erklärung der Menschenrechte“ wird gesagt, dass jeder Mensch die gleichen Rechte hat, deswegen sollten auch innerhalb einer Beziehung beide Partner die gleichen Rechte haben! So könnte es verhindert werden, dass der Mann die Frau zu irgendetwas Schlimmem zwingt (zum Beispiel Gewalt gegen Frauen). ",
        9: "Dies steht fast genauso in der „Allgemeinen Erklärung der Menschenrechte“: „Jeder, ohne Unterschied, hat das Recht auf gleichen Lohn für gleiche Arbeit.“",
        10: "Hier wird gesagt, dass nur männliche Verwandte erben dürfen. Das heißt, dass der Mann, wenn die Frau sterben würde, erben würde. Also hat der Mann dieses Recht. Da aber in der Ehe beide Partner die gleichen Rechte haben, dürfen auch beide vom jeweils anderen etwas erben.",
    },
    isQuizActive: {
        1: false,
        2: false,
        3: false,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
        10: true,
        11: false,
        12: false,
    },
};
