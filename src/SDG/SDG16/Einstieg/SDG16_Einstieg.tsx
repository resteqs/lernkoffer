// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG16.png";

export const SDG16_Einstieg: TextProps = {
    sdgNumber: 16,
    sdgTitle: "Frieden, Gerechtigkeit und Starke Institutionen",
    sdg: "SDG16",
    logo: Logo,
    header: {
        1: "Einstieg: die unterschiedlichen Formen von Gewalt",
        2: "Körperliche oder physische Gewalt",
        3: "Häusliche Gewalt",
        4: "Psychische oder seelische Gewalt",
    },

    text: {
        1: (
            <div>
                Im 16. Nachhaltigkeitsziel sollen unter anderem alle Formen von Gewalt beendet werden. Aber kennt ihr
                die unterschiedlichen Formen eigentlich schon?
            </div>
        ),
        2: (
            <div>
                Von <b>körperlicher oder physischer Gewalt</b> habt ihr bestimmt schon einmal gehört, diese meint zum
                Beispiel, wenn jemand geschlagen oder angeschossen wird. Insgesamt wird jede Art von Verletzung am
                Körper eingeschlossen, aber durch extreme körperliche Gewalt kann es auch zum Tod kommen. Deshalb haben
                wir in den meisten Ländern Gerichte, die Menschen bestrafen, wenn sie Gewalt ausüben. Diese nennen das
                dann „Misshandlung“, „Körperverletzung“ oder auch im schlimmsten Fall „Mord“ bzw. „Totschlag“. Die
                Polizei soll dafür sorgen, dass Menschen, die aktuell Gewalt erfahren, geholfen wird und sie beschützt
                werden.
            </div>
        ),
        3: (
            <div>
                Wenn Gewalt innerhalb eines Hauses oder einer Wohnung geschieht, durch jemanden, der dort auch wohnt,
                dann spricht man von <b>häuslicher Gewalt</b>. In einer Familie wäre das zum Beispiel, wenn der Vater
                die Mutter schlägt, was man dann auch als „Gewalt gegen Frauen“ bezeichnet. Jedoch könnte es auch
                andersherum sein und oft leiden die Kinder ebenfalls darunter.
            </div>
        ),
        4: (
            <div>
                Aber Gewalt heißt nicht nur, dass jemand am Körper verletzt wird, es gibt auch die sogenannte{" "}
                <b>psychischer oder seelische Gewalt</b>. Dabei werden die Gefühle einer Person verletzt, z. B. durch
                Beschimpfungen, wenn man jemanden verhöhnt, entmutigt oder Angst macht. Oft passiert das durch Mobbing,
                also wenn eine oder mehrere Menschen jemandem das Leben schwer machen. Das kann durch psychische, aber
                auch körperliche Gewalt geschehen.
            </div>
        ),
    },
};
