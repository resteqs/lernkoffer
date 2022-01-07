// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { Quiz3OProps } from "../../../Interfaces/SDG";

import Logo from  "../../../SDGLogos/Goal-SDG03.png";

export const SDG03_GutesBeispiel:Quiz3OProps = {
    sdgNumber: 3,
    sdgTitle: "Ärzte ohne Grenzen",
    sdg: "SDG03",
    logo: Logo,
    tile: {
        1: "Allgemeine Informationen", 
        2: "Leitinen", 
        3: "Aufgabengebiete", 
        4:  "Fragen", 
        5: "Fragen", 
        6: "Schluss"

    },
    text: { 
   
        1: (
            <div style={{ textAlign: "left", fontSize: "30px" }}>
                <p>
                    {" "}
                    Das ist das Logo der Hilfsorganisation „Ärzte ohne Grenzen“ beziehungsweise auf Französisch
                    „Médecins Sans Frontières“. Es folgen nun mehrere Informationen über diese humanitäre (auf die
                    Verminderung menschlicher Not ausgerichtete) medizinische Organisation und was sie macht. Lest euch
                    alles gut durch, denn am Ende erwarten euch ein paar Fragen!{" "}
                </p>
                <p>
                    {" "}
                    Gründung: im Jahr 1971 in Paris von zwei unabhängigen Ärztegruppen und Journalisten (=
                    Berichterstatter:innen)
                </p>
                <p> Ziel: Hochwertige und lohnende Grundheitsversorgung</p>
                <p>
                    {" "}
                    Einsatzländer: ungefähr 70 Länder, in denen Erwachsene und Kinder Schwierigkeiten haben zu überleben
                </p>
            </div>
        ),
        2: ( 
            <div style={{ textAlign: "left", fontSize: "30px" }}>
                <p>
                   
                    <ul>
                        <li>
                            {" "}
                            - aktiv werden, wenn ein staatliches Gesundheitssystem seiner Bevölkerung nicht helfen kann
                            oder will (z.B. durch Krieg oder Naturkatastrophen)
                        </li>
                        <li>
                            {" "}
                            - Betroffenen helfen ohne Diskriminierung und ohne auf ihre Herkunft, ihre religiöse oder
                            politische Überzeugung zu achten
                        </li>
                        <li>
                            {" "}
                            - lebensrettende Aktivitäten im Mittelpunkt, medizinische Behandlung ist wichtiger als die
                            Prävention (Vorbeugung) von Krankheiten{" "}
                        </li>
                        <li>
                            {" "}
                            - Behandlungen orientieren sich vorrangig am Patienten, das heißt dieser hat mehrere
                            Auswahlmöglichkeiten und wird bei den Entscheidungen miteinbezogen{" "}
                        </li>
                        <li> - möglichst schnell Hilfe für möglichst viele Menschen sicherstellen </li>
                    </ul>
                </p>
            </div>
        ),
        3: (
            <div style = {{ textAlign: "left", fontSize: "30px" }}>
                <p>
                    <ul>
                        <li> - Bekämpfung und Behandlung von Krankheiten</li>
                        <li> - Impfen</li>
                        <li> - Ernährungszentren für Mangelernährte</li>
                        <li> - Mutter-Kind-Versorgung</li>
                        <li> - psychologische (seelische) Hilfe</li>
                        <li> - Fortbildung von Mitarbeitern vor Or</li>
                        <li> - Schmerzlinderung bei schwerkranken Menschen </li>
                        <li>
                            {" "}
                            - Verteilung von Hilfsgütern und Nahrungsmittel (nur wenn andere Hilfsorganisationen nichts
                            anbieten){" "}
                        </li>
                    </ul>
                </p>
            </div>
        ),
        6: <div> Nachdem ihr nun einiges über die Hilfsorganisation „Ärzte ohne Grenzen“ erfahren habt, ist euch bestimmt klar geworden, dass diese sich sehr für die Gesundheit und das Wohlergehen von Menschen einsetzt. Das ist auch das Ziel des 3. Nachhaltigkeitsziels. Die gute Nachricht ist, dass es weltweit viele solche Hilfsorganisationen gibt und auch andere Einrichtungen, die uns helfen wollen, gesund zu bleiben. Wenn du kannst, informiere dich doch einmal, ob es in deiner Umgebung so etwas gibt, und vielleicht könnt ihr bei ihnen sogar mithelfen. </div>, 
    }, 
        question: { 4: "Wo wurde „Ärzte ohne Grenzen“ gegründet?",
                    5: "Welche Aktivitäten stehen bei der Organisation im Mittelpunkt?",
        },
        buttonLeftContent: { 4: <div>Berlin</div>,  
                             5: <div> Geld verdienen</div>, 
        
        },
        buttonMiddleContent: { 4: <div> Oslo </div>,
                               5: <div> Leben retten</div>, 
    
        },
        buttonRightContent: { 4: <div> Paris </div> ,                
                              5: <div> Spaß haben </div>
        
        },
        answerNumbersLeft: { 4: "Falsch",  
                             5: "Falsch"
    },
        answerNumbersMiddle: { 4: "Falsch",
                               5: "Richtig",   
    },
        answerNumbersRight: { 4: "Richtig",  
                              5: "Falsch", 
    },
        explanation: { 4: "Ärtzte Ohne Grenzen wurde im Jahr 1971 in Paris von zwei unabhängigen Ärztegruppen und Journalisten gegründet",  
                       5: "Bei der Organisation steht das Leben retten im Vordergrund" 
    },
        isQuizActive: {
            1: false,
            2: false,
            3: false,
            4: true,
            5: true, 
            6: false, 
        },
}; 