// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { Quiz3OProps } from "../../../Interfaces/SDG";

import Logo from "../../../SDGLogos/Goal-SDG03.png";
import Bild03 from "../Gute Bsp/Bild03.png";

export const SDG03_GutesBeispiel: Quiz3OProps = {
    sdgNumber: 3,
    sdgTitle: "Ärzte ohne Grenzen",
    sdg: "SDG03",
    logo: Logo,
    tile: {
        1: "",
        2: "Allgemeine Informationen",
        3: "Leitinen",
        4: "Aufgabengebiete",
        5: "Fragen",
        6: "Fragen",
        7: "Frage 3",
        8: "Schluss",
    },
    text: {
        1: (
            <div style={{ textAlign: "left", fontSize: "50px" }}>
                <p>
                    {" "}
                    Das ist das Logo der Hilfsorganisation „Ärzte ohne Grenzen“ beziehungsweise auf Französisch
                    „Médecins Sans Frontières“. Es folgen nun mehrere Informationen über diese humanitäre (auf die
                    Verminderung menschlicher Not ausgerichtete) medizinische Organisation und was sie macht. Lest euch
                    alles gut durch, denn am Ende erwarten euch ein paar Fragen!{" "}
                </p>
                <p>
                    {" "}
                    <img style={{ marginLeft: "45vh" }} src={Bild03} alt="" />
                </p>
            </div>
        ),
        2: (
            <div>
                <p style={{ marginTop: "30px" }}>
                    {" "}
                    <b>Gründung: </b> im Jahr 1971 in Paris von zwei unabhängigen Ärztegruppen und Journalisten (=
                    Berichterstatter:innen)
                </p>
                <p style={{ marginTop: "30px" }}>
                    {" "}
                    <b>Ziel: </b> Hochwertige und lohnende Grundheitsversorgung
                </p>
                <p style={{ marginTop: "30px" }}>
                    {" "}
                    <b>Einsatzländer: </b> ungefähr 70 Länder, in denen Erwachsene und Kinder Schwierigkeiten haben zu
                    überleben
                </p>
            </div>
        ),
        3: (
            <div style={{ textAlign: "left", fontSize: "49px" }}>
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
                            - Behandlungen orientieren sich vorrangig am Patienten, das heißt, dieser hat mehrere
                            Auswahlmöglichkeiten und wird bei den Entscheidungen miteinbezogen{" "}
                        </li>
                        <li> - möglichst schnell Hilfe für möglichst viele Menschen sicherstellen </li>
                    </ul>
                </p>
            </div>
        ),
        4: (
            <div style={{ textAlign: "left", fontSize: "50px" }}>
                <p>
                    <ul>
                        <li> - Bekämpfung und Behandlung von Krankheiten</li>
                        <li> - Impfen</li>
                        <li> - Ernährungszentren für Mangelernährte</li>
                        <li> - Mutter-Kind-Versorgung</li>
                        <li> - psychologische (seelische) Hilfe</li>
                        <li> - Fortbildung von Mitarbeitern vor Ort</li>
                        <li> - Schmerzlinderung bei schwerkranken Menschen </li>
                        <li>
                            {" "}
                            - Verteilung von Hilfsgütern und Nahrungsmitteln (nur wenn andere Hilfsorganisationen nichts
                            anbieten){" "}
                        </li>
                    </ul>
                </p>
            </div>
        ),
        8: (
            <div>
                {" "}
                Nachdem ihr nun einiges über die Hilfsorganisation „Ärzte ohne Grenzen“ erfahren habt, ist euch bestimmt
                klar geworden, dass diese sich sehr für die Gesundheit und das Wohlergehen von Menschen einsetzt. Das
                ist auch das Ziel des 3. Nachhaltigkeitsziels. Die gute Nachricht ist, dass es weltweit viele solche
                Hilfsorganisationen gibt und auch andere Einrichtungen, die uns helfen wollen, gesund zu bleiben. Wenn
                du kannst, informiere dich doch einmal, ob es in deiner Umgebung so etwas gibt, und vielleicht könnt ihr
                bei ihnen sogar mithelfen.{" "}
            </div>
        ),
    },
    question: {
        5: "Wo wurde „Ärzte ohne Grenzen“ gegründet?",
        6: "Welche Aktivitäten stehen bei der Organisation im Mittelpunkt?",
        7: "Welche Aufgabengebiete gibt es?",
    },
    buttonLeftContent: {
        5: <div style={{ fontSize: "100px" }}>Berlin</div>,
        6: <div style={{ fontSize: "90px" }}> Geld verdienen</div>,
        7: <div style={{ fontSize: "45px" }}> Impfen, Schmerzlinderung, Krankheiten behandeln </div>,
    },
    buttonMiddleContent: {
        5: <div style={{ fontSize: "100px" }}> Oslo </div>,
        6: <div style={{ fontSize: "100px" }}> Leben retten</div>,
        7: <div style={{ fontSize: "50px" }}> Bauen, Pflanzen, Kochen</div>,
    },
    buttonRightContent: {
        5: <div style={{ fontSize: "100px" }}> Paris </div>,
        6: <div style={{ fontSize: "100px" }}> Spaß haben </div>,
        7: <div style={{ fontSize: "50px" }}> Putzen, Aufräumen, Waschen</div>,
    },
    answerNumbersLeft: { 5: "Falsch", 6: "Falsch", 7: "Richtig" },
    answerNumbersMiddle: { 5: "Falsch", 6: "Richtig", 7: "Falsch" },
    answerNumbersRight: { 5: "Richtig", 6: "Falsch", 7: "Falsch" },
    explanation: {
        5: "Ärzte ohne Grenzen wurde im Jahr 1971 in Paris von zwei unabhängigen Ärztegruppen und Journalisten gegründet.",
        6: "Bei der Organisation steht das Retten von Leben im Vordergrund.",
        7: "Die Aufgabengebiete der Organisation sind es zu impfen, Schmerzen zu lindern und Krankheiten zu behandeln.",
    },
    isQuizActive: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: true,
        6: true,
        7: true,
        8: false,
    },
};
