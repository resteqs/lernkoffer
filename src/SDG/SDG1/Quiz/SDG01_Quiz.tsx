/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable unicorn/filename-case */ 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from "../../../SDGLogos/Goal-SDG01.png";
import { QuizProps } from "../../../Interfaces/SDG";
import Frage1_1 from "../Quiz/Images/Frage1_1.png"
import Frage1_2 from "../Quiz/Images/Frage1_2.png"
import Frage2_1 from "../Quiz/Images/Frage2_1.png"
import Frage2_2 from "../Quiz/Images/Frage2_2.png"

export const SDG01_Quiz:QuizProps = {
    sdgNumber: 1,
    sdgTitle: "Keine Armut",
    sdg: "SDG01",
    logo: Logo,
    tile: { 
        1: "Einleitung",
        4: "Erklärung",
    },
    text: { 1: <p>„Mit Geld kann man alles haben“. Dieser Satz kommt nicht von ungefähr: Mit viel Geld kann man sich viele für das Leben nötige Güter oder auch einfach Dinge zum Spaß kaufen. Doch was, wenn man eben nicht so viel Geld hat? Auf was sollte man verzichten? Dir werden gleich mehrere Bilder gezeigt, und du sollst versuchen zu erschließen, auf was man eher verzichten beziehungsweise was man mit wenig Geld lieber kaufen sollte.</p>,
            4: <p>Doch warum ist das so? Armut bedeutet unter anderem, dass man zu wenig Geld hat, um sich mit allen wichtigen Dingen zu versorgen. Dazu zählt Nahrung, Kleidung, eine Unterkunft. Doch auch die Gemeinschaft mit anderen Menschen ist wichtig. Deswegen sollte man sich erst einmal all diese Dinge besorgen, welche die oben genannten Bedingungen erfüllen, bevor man sich etwas anderes kauft.</p>,
            },
    question: { 2: "Was würdest du eher kaufen?",
                3: "Was würdest du eher kaufen?",
            },
    buttonLeftContent: {2: <div><img style= {{ height: "350px"}} src={Frage1_1} alt= ""/> </div>,
                        3: <div><img style= {{ height: "350px"}} src={Frage2_2} alt= ""/> </div>,
                        },
    buttonRightContent:{2: <div><img style= {{ height: "350px"}} src={Frage1_2} alt= ""/> </div>,
                        3: <div><img style= {{ height: "350px"}} src={Frage2_1} alt= ""/> </div>,
                        },
    answerNumbersLeft: {2: "Falsch",
                        3: "Richtig",
                        },
    answerNumbersRight:{2: "Richtig",
                        3: "Falsch",
                        },
    explanation:{       2: "Der Apfel ist das Geld eher Wert. In vielen Regionen der Welt herrsch noch Lebensmittelknappheit, und wenn man dann noch finanziell instabil ist, sollte man auf jeden Fall Kosmetik ist nicht ein lebenswichtiger Bestandteil, man kann also auf ihn verzichten, wenn man Geldprobleme hat. ",
                        3: "Die Bücher vertreiben zwar toll Langeweile, doch wenn man knapp bei Kasse ist, sollte man lieber zu der Kleidung greifen. Diese schützen dich vor Regen, Schmutz, Verletzungen, Sonnenbränden und halten dich im Winter warm. Nicht genügend intakte Kleidung zu haben, ist ein großes Problem bei armen Menschen. Sie müssen sich mit zerrissenen Hosen und löchrigen Hemden durch Kälte und Regen kämpfen.",
                },
    // modalContent: <div>Quiz SDG 01</div>,
    isQuizActive: {
        1: false,
        2: true,
        3: true,
        4: false,
    }
        /* eslint-enable unicorn/filename-case */ 
        /* eslint-enable react/react-in-jsx-scope */
        /* eslint-enable react/no-unescaped-entities */
        /* eslint-enable @typescript-eslint/object-curly-spacing */
}