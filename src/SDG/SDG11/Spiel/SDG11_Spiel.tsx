// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG11.png";
import "../sdg11.css";

export const SDG11_Spiel: TextProps = {
    sdgNumber: 11,
    sdgTitle: "Ökologischer Fußabdruck",
    sdg: "SDG11",
    logo: Logo,
    header: {
        1: " Einleitung ",
        2: " Einleitung ",
        3: " Frage 1 ",
        4: " Frage 2 ",
        5: " Frage 3 ",
        6: " Frage 4 ",
        7: "Auswertung",
        8: "Auswertung",
        9: "Auswertung",
    },

    text: {
        1: (
            "Der ökologische Fußabdruck zeigt auf, wie umweltbewusst ein Mensch lebt. Im Folgenden werden verschiedene Entscheidungen, die du triffst, nach ihrer Umweltverträglichkeit bewertet."
        ),
        2: (
            <ul>
                <li>
                    {" "}
                    Du wirst verschiedene Fragen gestellt bekommen. Wenn du die Fragen und die Antwortmöglichkeiten gelesen hast, nimm dir kurz Zeit und überlege, welche der
                    Antworten am besten auf dich zutrifft. Dahinter siehst du in Klammern immer eine Zahl. Das sind
                    die Punkte, die du sammelst. Diese Punkte zählst du während des Spiels zusammen.{" "}
                </li>
                <li>
                    {" "}
                    Am Ende des Spiels wirst du eine Bewertung sehen, die von der Anzahl deiner Punkte abhängt.
                </li>
            </ul>
        ),
        3: (
            <div>
                <p>
                    {" "}
                    Wenn du eine lange Strecke zurücklegen musst, welches der folgenden Verkehrsmittel würdest du eher
                    nutzen?
                </p>
                <ul className="flex-container ">
                    <li className="flex-item"> Flugzeug (2) </li>
                    <li className="flex-item"> Fahrrad (0) </li>
                    <li className="flex-item"> Bus (1) </li>
                </ul>
            </div>
        ),
        4: (
            <div>
                <p>
                    {" "}
                    Wenn du einkaufen gehst, achtest du darauf, saisonale (nur Sachen, die zu der aktuellen Zeit
                    wachsen) und regionale (Dinge, die in deiner Nähe wachsen) Dinge zu kaufen?
                </p>
                <ul className="flex-container ">
                    <li className="flex-item"> Nur manchmal (1) </li>
                    <li className="flex-item"> Nein, nie (2) </li>
                    <li className="flex-item"> Ja, immer (0) </li>
                </ul>
            </div>
        ),
        5: (
            <div>
                <p> Was machst du mit Kleidung und Spielzeug, welche du nicht mehr benötigst? </p>
                <ul className="flex-container ">
                    <li className="flex-item"> Spenden (0) </li>
                    <li className="flex-item"> Wegwerfen (2) </li>
                    <li className="flex-item"> In etwas Neues verwandeln (0) </li>
                </ul>
            </div>
        ),
        6: (
            <div>
                <p> Wie oft isst du Fleisch in der Woche?</p>
                <ul className="flex-container ">
                    <li className="flex-item"> Nie bis ein Mal (0) </li>
                    <li className="flex-item"> Zwei- bis dreimal (1) </li>
                    <li className="flex-item"> Viermal oder öfter (2) </li>
                </ul>
            </div>
        ),
        7: (
            <div >
                <p>
                    {" "}
                    Nachdem du jetzt alle Fragen bearbeitet hast, sehen wir uns einmal an, wie umweltfreundlich du
                    lebst:
                </p>
                <ul>
                    <li>
                        {" "}
                        <b>1. 0-2 Punkte: </b>
                    </li>
                    <li>
                        {" "}
                        Sehr gut, du lebst sehr umweltbewusst. Du achtest auf sehr viele wichtige Aspekte und solltest
                        das auch weiterhin tun.
                    </li>
                </ul>
            </div>
        ),

        8: (
            <div >
                <ul>
                    <li>
                        {" "}
                        <b>2. 3-5 Punkte: </b>
                    </li>
                    <li>
                        {" "}
                        Allgemein achtest du schon oft auf die Umwelt. Allerdings gibt es noch einige Sachen, an denen
                        du arbeiten solltest. Wenn du das machst, hilfst du dabei, die Umwelt ein wenig mehr zu
                        schützen.{" "}
                    </li>
                </ul>
            </div>
        ),
        9: (
            <div >
                <ul>
                    <li>
                        {" "}
                        <b> 3. 6-8 Punkte:</b>{" "}
                    </li>
                    <li>
                        {" "}
                        Du solltest auf jeden Fall an deinen Gewohnheiten arbeiten und versuchen, mehr auf die Umwelt zu
                        achten. Dazu kannst du an vielen verschiedenen Dingen arbeiten, einige wenige Beispiele sind dir
                        dazu schon in den Fragen gegeben.
                    </li>
                </ul>
            </div>
        ),
    },
};
