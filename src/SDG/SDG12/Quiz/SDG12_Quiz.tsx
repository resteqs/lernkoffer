/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable unicorn/filename-case */ 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from "../../../SDGLogos/Goal-SDG12.png";
import { QuizProps } from "../../../Interfaces/SDG";


export const SDG12_Quiz:QuizProps = {
    sdgNumber: 12,
    sdgTitle: "Nachhaltig Produzieren und Konsumieren",
    sdg: "SDG12",
    logo: Logo,
    tile: { 
        1: "Einleitung",
        2: "Einleitung",
        3: "Einleitung",
        10: "Schlusswort",
    },
    text: { 1: <p>Es gibt fast überall auf unserer Erde sogenannte „natürliche Ressourcen“ (Ressource = Rohstoff). Sie entstehen in der Natur und sind noch unbearbeitet (also „roh“). Wir bauen diese Rohstoffe ab und bearbeiten sie, damit etwas Neues entsteht, das wir nutzen können. Man unterteilt die natürlichen Ressourcen in solche, die unbegrenzt vorhanden sind (wie Sonne oder Luft) und in andere, die aufgebraucht werden können (wie Metalle oder Kies). </p>,
            2: <p>Manche dieser Materialien, beispielsweise Kohle und Erdöl, bilden sich so langsam über Millionen von Jahren hinweg aus Pflanzen, dass die Menschen nicht auf Nachschub warten können. Also geht man von einer bestimmten Menge aus, die zur jetzigen Zeit vorhanden ist. Auch Metalle, zum Beispiel Lithium (das leichteste Metall auf der Erde), können nicht nachwachsen und infolge aufgebraucht werden.</p>,
            3: <p>Das Problem bei solchen nicht erneuerbaren Rohstoffen ist, dass wir mittlerweile sehr viel davon abbauen und das der Umwelt schadet. In Zukunft wird es immer weniger von ihnen geben, bis sie ganz aufgebraucht sind (bei Erdöl soll das in 25 bis 50 Jahren geschehen). Deshalb ist es wichtig, dass wir mehr Dinge wiederverwenden (= „recyceln“) und weniger neue Produkte herstellen. Außerdem wird nach erneuerbaren Alternativen gesucht, die nachhaltig und umweltfreundlich sind.</p>,
            10: <p>Jetzt weißt du hoffentlich mehr über die nicht erneuerbaren Rohstoffe, wie viele es noch gibt und wie diese benutzt werden können</p>
            },
    question: { 4: "Zu welchem dieser Rohstoffe passt diese Aussage: Mit diesem Material werden z.B. Akkus hergestellt, die für Elektroautos, Handys, Laptops und weitere technische Geräte gebraucht werden. ",
                5: "Zu welchem dieser Rohstoffe passt diese Aussage: Im Jahr 2020 gab es davon ungefähr 244 Milliarden Tonnen.", 
                6: "Zu welchem dieser Rohstoffe passt diese Aussage: Man konnte im Jahr 2020 noch circa 754 Milliarden Tonnen von diesem Material finden. ",
                7: "Zu welchem dieser Rohstoffe passt diese Aussage: Dieser Rohstoff wird für Motoren benutzt, kann in Diesel und Benzin umgewandelt werden und man braucht es für die Herstellung von Plastik, Medikamenten, Farben und vielem mehr.",
                8: "Zu welchem dieser Rohstoffe passt diese Aussage: Von diesem Rohstoff existierten im Jahr 2020 rund 86 Millionen Tonnen. ",
                9: "Zu welchem dieser Rohstoffe passt diese Aussage: Man kann damit heizen und Strom erzeugen.",
            },
    buttonLeftContent: {4: <div style= {{ fontSize: "150px" }}>Kohle</div>,
                        5: <div style= {{ fontSize: "150px" }}>Erdöl</div>,
                        6: <div style= {{ fontSize: "150px" }}>Kohle</div>,
                        7: <div style= {{ fontSize: "150px" }}>Kohle</div>,
                        8: <div style= {{ fontSize: "150px" }}>Lithium</div>,
                        9: <div style= {{ fontSize: "150px" }}>Kohle</div>,
                        },
    buttonRightContent:{4: <div style= {{ fontSize: "150px" }}>Lithium</div>,
                        5: <div style= {{ fontSize: "150px" }}>Kohle</div>,
                        6: <div style= {{ fontSize: "150px" }}>Lithium</div>,
                        7: <div style= {{ fontSize: "150px" }}>Erdöl</div>,
                        8: <div style= {{ fontSize: "150px" }}>Erdöl</div>,
                        9: <div style= {{ fontSize: "150px" }}>Lithium</div>,
                        },
    answerNumbersLeft: {4: "Falsch",
                        5: "Richtig",
                        6: "Richtig",
                        7: "Falsch",
                        8: "Richtig",
                        9: "Richtig",
                        },
    answerNumbersRight:{4: "Richtig",
                        5: "Falsch",
                        6: "Falsch",
                        7: "Richtig",
                        8: "Falsch",
                        9: "Falsch",
                        },
    explanation:{       4: "Mit Lithium werden z.B. Akkus hergestellt, die für Elektroautos, Handys, Laptops und weitere technische Geräte gebraucht werden.",
                        5: "Im Jahr 2020 gab ungefähr 244 Milliarden Tonnen an Erdöl.",
                        6: "Man konnte im Jahr 2020 noch circa 754 Milliarden Tonnen an Kohle finden.",
                        7: "Erdöl wird für Motoren benutzt, kann in Diesel und Benzin umgewandelt werden und man braucht es für die Herstellung von Plastik, Medikamenten, Farben und vielem mehr.",
                        8: "Von Lithium existierten im Jahr 2020 rund 86 Millionen Tonnen.",
                        9: "Man kann mit Kohle heizen und Strom erzeugen.",
                },
    // modalContent: <div>Quiz SDG 12</div>,
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
        10: false,
    }
        /* eslint-enable unicorn/filename-case */ 
        /* eslint-enable react/react-in-jsx-scope */
        /* eslint-enable react/no-unescaped-entities */
        /* eslint-enable @typescript-eslint/object-curly-spacing */
}