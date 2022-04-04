// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG14.png";

export const SDG14_FreieArbeit: TextProps = {
    sdgNumber: 14,
    sdgTitle: "Gesunder Ozean",
    sdg: "SDG14",
    logo: Logo,
    header: {
        1: " Einleitung",
        2: " Aufgabe",
        3: " Aufgabe",
        4: " Aufgabe",
    },

    text: {
        1: (
            <div>
                <ul>
                    <li>
                        {" "}
                        Viele bunte Fische, ein paar Krebse und Krabben, Korallen und große Haie. – Und keine einzige
                        Plastiktüte in Sicht.
                    </li>
                    <li style={{ marginTop: "6.667vh" }}>
                        {" "}
                        Das wäre ein super Anblick der Weltmeere. Leider ist es nicht so.
                    </li>
                    <li>
                        {" "}
                        Aber stell dir einmal vor, es ist ein wunderschöner Nachmittag im Sommer und du bist am Strand.
                        Du gehst tauchen und siehst eine prächtige Unterwasserlandschaft.
                    </li>
                </ul>
            </div>
        ),
        2: (
            <div>
                <ul>
                    <li>
                        {" "}
                        Nimm dir ein Blatt Papier und jedes Material, das du nutzen möchtest. Zum Beispiel kannst du
                        verschiedene Buntstifte, Watte, Knöpfe oder zusätzliches buntes Papier, was immer dir einfällt
                        und zur Verfügung steht, verwenden.
                    </li>
                    <li style={{ marginTop: "6.667vh" }}>
                        {" "}
                        Stelle dir nun wieder die Unterwasserlandschaft vor, die du vorhin bereits gesehen hast.
                        Überlege dir noch einige Details (wie bunt sind die Fische? Wie viele Fische schwimmen herum?
                        Wie sehen die Pflanzen(Korallen) aus, die du sehen kannst?...).{" "}
                    </li>
                </ul>
            </div>
        ),
        3: (
            <div>
                <ul>
                    <li>
                        {" "}
                        Wenn du ein klares Bild davon hast, beginne zu malen, schneiden, falten, kleben und lasse dabei
                        deiner Fantasie freien Lauf.
                    </li>
                    <li style={{ marginTop: "6.667vh" }}>
                        {" "}
                        Wenn du fertig bist, stelle der Gruppe dein Bild vor und erkläre den anderen, was deinen Ozean
                        so nachhaltig und „gesund“ macht.
                    </li>
                </ul>
            </div>
        ),
    },
};
