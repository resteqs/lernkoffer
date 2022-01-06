/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable unicorn/filename-case */ 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from "../../../SDGLogos/Goal-SDG06.png";
import { QuizProps } from "../../../Interfaces/SDG";

export const SDG06_Quiz:QuizProps = {
    sdgNumber: 6,
    sdgTitle: "Sauberes Wasser und Sanitäreinrichtungen",
    sdg: "SDG06",
    logo: Logo,
    tile: { 
        1: "Einleitung",
        2: "Erste Frage",
        3: "Zweite Frage",
        4: "Dritte Frage",
        5: "Vierte Frage",
    },
    text: { 1: <p>Wasser ist wichtig für den Körper und damit bleiben wir gesund. Wie viel sollten wir also mindestens pro Tag trinken? Als Tipp: ein Wasserglas enthält ungefähr 200 ml (sprich: „Milliliter“) und je älter man wird, desto mehr Wasser sollte man trinken, da man wächst. Falls ihr noch nicht so gut rechnen könnt, könnt ihr euch entweder bei diesen großen Zahlen 2 Nullen jeweils wegdenken (also z.B.: ein Wasserglas hat die Größe 2, mit 10 Jahren braucht man eine Wassermenge mit der Größe 10 und dann teilt ihr 10 durch 2) oder ihr schätzt einfach.</p>,
            6: <p>Manchmal musst du aber noch mehr trinken, z.B. wenn du krank bist oder es sehr heiß ist. Außerdem ist es wichtig regelmäßig zu trinken, wenn du Sport machst oder schwer körperlich arbeitest und dich anstrengst. Wenn man zu wenig trinkt, kann es dazu führen, dass man schnell müde wird, Kopfweh bekommt und sich schlechter konzentrieren kann.</p>,
    },
    question: {
        2: "Bis zu einem Alter von 4 Jahren braucht man 800 ml Wasser pro Tag.  Wie viele Wassergläser sind das?",
        3: "In einem Alter von 10 Jahren braucht man 1000 ml Wasser pro Tag.  Wie viele Wassergläser sind das?",
        4: "Mit 13 Jahren braucht man 1200 ml Wasser pro Tag.  Wie viele Wassergläser sind das?",
        5: "Als Erwachsene:r braucht man mind. 1600 ml pro Tag. Wie viele Wassergläser sind das?",
    },
    buttonLeftContent: {2: <p>4</p>,
                        3: <p>4</p>,
                        4: <p>6</p>,
                        5: <p>8</p>,
                        },
    buttonRightContent:{2: <p>3</p>,
                        3: <p>5</p>,
                        4: <p>5</p>,
                        5: <p>9</p>,},
    answerNumbersLeft:{ 2: "Richtig",
                        3: "Falsch",
                        4: "Richtig",
                        5: "Richtig",
                        },
    answerNumbersRight:{2: "Falsch",
                        3: "Richtig",
                        4: "Falsch",
                        5: "Falsch",
                        },
    explanation:{
                        2: "800 ml entsprechen 4 Wassergläsern",
                        3: "1000 ml entsprechen 5 Wassergläsern",
                        4: "1200 ml entsprechen 6 Wassergläsern",
                        5: "1600 ml entsprechen 8 Wassergläsern",
    },
    // modalContent: <div>Quiz SDG 10</div>,
    isQuizActive: {
        1: false,
        2: true,
        3: true,
        4: true,
        5: true,
        6: false,
    }
        /* eslint-enable unicorn/filename-case */ 
        /* eslint-enable react/react-in-jsx-scope */
        /* eslint-enable react/no-unescaped-entities */
        /* eslint-enable @typescript-eslint/object-curly-spacing */
}