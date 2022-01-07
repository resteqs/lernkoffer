// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG17.png";
import "../sdg17.css";
import Hand from "../Freie Arbeit/Media/Hand.png";

export const SDG17_FreieArbeit: TextProps = {
    sdgNumber: 17,
    sdgTitle: " Handabdruck ",
    sdg: "SDG17",
    logo: Logo,
    header: {
        1: " Einleitung ",
        2: " Einleitung ",
        3: " Handabdruck",
        4: " Handabdruck",
        5: " Handabdruck",
        6: " Handabdruck",
        7: "Handabdruck ",
        8: "Schluss ",
    },

    text: {
        1: (
            <div>
                {" "}
                Die 17 Nachhaltigkeitsziele gehen die ganze Bevölkerung an, also die Regierungen, aber auch die
                Bür-ger:innen und die Unternehmen. Es ist wichtig, dass diese zusammenarbeiten und gemeinsam die
                Voraussetzungen für Nachhaltigkeit auf allen Ebenen schaffen. Das fordert das 17. Nachhaltigkeits-ziel:
                eine globale Partnerschaft aller Beteiligten. Ein zentrales Leitprinzip für Partnerschaften weltweit ist
                „niemanden zurückzulassen“ (engl.: “leave no one behind“, LNOB). Es beschreibt die gemein-schaftliche
                Verantwortung, alle Menschen auf dem Weg zu nachhaltiger Entwicklung mitzunehmen.
            </div>
        ),
        2: (
            <div>
                {" "}
                Auch ihr könnt helfen, die Nachhaltigkeitsziele zu erreichen und jeder einzelne Beitrag ist wichtig. Die
                folgende Aufgabe soll euch dabei helfen, herauszufinden, was für euch wichtig ist und wie ihr für mehr
                Nachhaltigkeit sorgen könnt.
            </div>
        ),
        3: (
            <div>
                {" "}
                Als erstes braucht jede:r ein Blatt Papier und Stifte. Nun legt eine Hand aufs Papier, spreizt eure
                Fin-ger auseinander, nehmt mit der anderen Hand einen Stift und zeichnet einmal außen herum. Das sollte
                am Ende etwa so aussehen (die Zahlen müsst ihr in eurer Zeichnung nicht übernehmen):
                <ul>
                    {" "}
                    <li>
                        {" "}
                        <img style={{ marginLeft: "650px", marginTop: "100px", height: "500px" }} src={Hand} alt="" />
                    </li>
                </ul>
            </div>
        ),
        4: (
            <div>
                {" "}
                Jedem Finger wird nun eine Frage zugeordnet. Schreibt eure persönliche Antwort jeweils in den passenden
                Finger rein.
                <ul>
                    <li style={{ fontStyle: "italic", marginTop: "20px" }}>
                        {" "}
                        Daumen (1): Welche Nachhaltigkeitsziele sind dir besonders wichtig? Notiere die Nummern.
                    </li>
                </ul>
                <ul className="ul" style={{ marginTop: "30px" }}>
                    <li className="li"> 1: Keine Armut </li>
                    <li className="li"> 2: kein Hunger </li>
                    <li className="li"> 3: Geundheit und Wohlergehen </li>
                    <li className="li"> 4: Hochwertige Bildung </li>
                    <li className="li"> 5: Geschlechtergleichheit </li>
                    <li className="li"> 6: Sauberes Wasser und Sanitäreinrichtungen</li>
                    <li className="li"> 7: Bezahlbare und Saubere Energie</li>
                </ul>
            </div>
        ),
        5: (
            <div>
                <ul className="ul">
                    <li className="li"> 8: Menschenwürdige Arbeit und Wirtschafts-wachstum </li>
                    <li className="li"> 9: Industrie, Innovation und Infrastruktur </li>
                    <li className="li"> 10: weniger Ungleichheiten </li>
                    <li className="li"> 11: Nachhaltige Städte und Gemeinden </li>
                    <li className="li"> 12: Nachhaltige/r Konsum und Produktion </li>
                    <li className="li"> 13: Maßnahmen zum Klimaschutz</li>
                    <li className="li"> 14: Leben unter Wasser </li>
                    <li className="li"> 15: Leben an Land </li>
                    <li className="li"> 16: Frieden, Gerechtigkeit und starke Institutionen</li>
                    <li className="li"> 17: Partnerschaften zur Erreichung der Ziele </li>
                </ul>
            </div>
        ),
        6: (
            <div>
                <ul>
                    <li style={{ fontStyle: "italic" }}> Zeigefinger (2): </li>
                    <li>
                        {" "}
                        Mit wem möchtest du Partnerschaften eingehen, um deine Ziele zu erreichen? (z.B.
                        Mitschüler:innen, Lehrkräfte, Hilfsorganisationen)
                    </li>
                </ul>
                <ul style={{ marginTop: "120px" }}>
                    <li style={{ fontStyle: "italic" }}> Mittelfinger (3) </li>
                    <li> Was sind deine Ziele? Was möchtest du erreichen?</li>
                </ul>
            </div>
        ),
        7: (
            <div>
                <ul style={{ marginTop: "30px" }}>
                    <li style={{ fontStyle: "italic" }}> Ringfinger (4): </li>
                    <li> Welche Richtlinien, Überzeugung, Werte willst du dabei umsetzen?</li>
                </ul>
                <ul style={{ marginTop: "120px" }}>
                    <li style={{ fontStyle: "italic" }}> Kleiner Finger (5): </li>
                    <li> Wie kannst du jeden Tag mithilfe kleiner Beiträge nachhaltiger leben?</li>
                </ul>
            </div>
        ),
        8: (
            <div>
                {" "}
                Wenn ihr fertig seid, kann jede:r seinen/ihren Handabdruck vorstellen und alle überlegen gemein-sam, wie
                man die Ideen am besten umsetzen kann. Diese könnt ihr auch auf einem Plakat sammeln. Am Ende kann
                jede:r in die Mitte der Hand seinen/ihren Namen schreiben und den Handabdruck auf-hängen.
            </div>
        ),
    },
};
