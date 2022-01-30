/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable unicorn/filename-case */ 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from "../../../SDGLogos/Goal-SDG13.png";
import { QuizProps } from "../../../Interfaces/SDG";

export const SDG13_Quiz:QuizProps = {
    sdgNumber: 13,
    sdgTitle: "Maßnahmen zum Klimaschutz",
    sdg: "SDG13",
    logo: Logo,
    tile: { 
        1: "Einleitung",
        2: "Einleitung",
        3: "Erste Frage",
        4: "Antwort",
        5: "Zweite Frage",
        6: "Antwort",
        7: "Dritte Frage",
        8: "Antwort",
        9: "Ideen",
        10: "Ideen",
    },
    text: { 1: <p>Wie du bereits weißt, beschäftigen wir uns aktuell mit dem Klimawandel und was wir selbst tun können, um diesen langsamer zu machen, ihn zu stoppen oder sogar rückgängig zu machen.
            Ein wichtiges Thema hierbei ist der Transport von Dingen und Leuten. Jeder und alles muss zu verschiedenen Orten gelangen und das passiert auf unterschiedliche Arten.
            Im Folgenden darfst du dich entscheiden, welches der genannten Transportmittel mehr Emissionen (Gase, die von vielen Dingen produziert werden, z.B. bei Autos, während der Motor läuft) produziert. Es stehen immer zwei Transportmittel zur Auswahl. 
            </p>,
            2: <p>Damit das mehr Spaß macht, spielen wir ein Spiel. Dafür müsst ihr euch drei Ecken oder Orte aussuchen, die ihr nutzen wollt. Diejenigen, die denken, dass Objekt Nummer eins mehr des gefragten Gases produziert, gehen zu Ecke/Ort eins. Diejenigen, die denken, dass Objekt Nummer zwei mehr des gefragten Gases produziert, gehen zu Ecke/Ort zwei und die, die denken, dass beide gleich viel des Gases produzieren, gehen zu Ecke/Ort drei. Nachdem sich alle in eine Ecke/an einen Ort gestellt haben, lest die Lösungen. Vielleicht können auch diejenigen, die sich richtig positioniert haben, den anderen ihre Gedanken erklären und begründen, warum sie sich in genau diese Ecke gestellt haben.</p>,
            3: <p>Produziert ein Pkw (normales Auto) oder ein Flugzeug mehr Treibhausgase?</p>,
            4: <p>Ein Flugzeug produziert mehr davon. Studien zeigen, dass die erzeugt Menge hier ungefähr bei 230 Gramm pro Person pro Kilometer (g/Pkm) liegt, während dieser Wert bei Pkws nur bei 147 liegt.</p>,
            5: <p>Produziert eine Eisenbahn (Fernverkehr) oder eine Straßen-/Stadt-/ und U-Bahn mehr flüchtige Kohlenwasserstoffe (Gase, die sehr instabil sind)?</p>,
            6: <p>Keines der beiden Transportmittel produziert diese Gase.</p>,
            7: <p>Produziert ein Pkw oder ein Linienbus mehr Kohlenstoffdioxid?</p>,
            8: <p>Das Auto ist hier richtig. Dieses produziert ungefähr 1,00 g/Pkm während dieser Wert bei Linienbussen bei etwa 0,06 g/Pkm liegt.</p>,
            9: <div><p>Ein paar Ideen, die ich toll finde:</p>
            <p>-	bildet Fahrgemeinschaften, wenn ihr alle das gleiche oder ein ähnliches Ziel habt</p>
            <p>-	nutze öffentliche Verkehrsmittel, wann immer es möglich ist</p>
            <p>-	und wie so oft: versuche lokal oder saisonal zu kaufen, um Transportwege von Waren so kurz wie möglich zu halten</p>
            </div>,
            10: <div><p>-	außerdem versuche das Fliegen in einem Flugzeug zu vermeiden und reise eher mit einem Zug, auch wenn das länger dauert</p>
            <p>-	wenn du die Möglichkeit hast, in einem Elektroauto oder sogar einem Wasserstoff betriebenen Auto zu fahren, tu das oder hilf diese Technologien zu verbreiten, indem du mit anderen darüber redest oder vielleicht kannst du sogar einmal dazu beitragen, dass diese Technologien für alle Menschen zugänglich sind</p></div>
            },
    question: {},
    buttonLeftContent: {},
    buttonRightContent:{},
    answerNumbersLeft: {},
    answerNumbersRight:{},
    explanation:{},
    // modalContent: <div>Quiz SDG 01</div>,
    isQuizActive: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
    }
        /* eslint-enable unicorn/filename-case */ 
        /* eslint-enable react/react-in-jsx-scope */
        /* eslint-enable react/no-unescaped-entities */
        /* eslint-enable @typescript-eslint/object-curly-spacing */
}