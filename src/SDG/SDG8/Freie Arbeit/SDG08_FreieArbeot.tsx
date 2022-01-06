// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG08.png";

export const SDG08_FreieArbeit: TextProps = {
    sdgNumber: 8,
    sdgTitle: "Traumberuf",
    sdg: "SDG08",
    logo: Logo,
    header: {
        1: " Einleitung ",
        2: " Aufgabe ",
        3: " Aufgabe ",
        
    },

    text: {
        1: (
            <div>
                Die meisten Menschen auf der Welt müssen arbeiten, damit sie Geld verdienen, um leben zu können. Kannst
                du dir vorstellen, wie es ist zu arbeiten? Oder gibt es Dinge, die du nicht machen wollen würdest?
            </div>
        ),
        2: (
            <div>
                Viele verschiedene Dinge spielen eine wichtige Rolle, wenn es darum geht, festzulegen, ob ein Beruf
                menschenwürdig ist oder nicht. Vermutlich kennst du einige auch schon, wenn nicht, sind hier einige
                Beispiele: die Arbeitsbedingungen (muss man schwer arbeiten oder ist der Beruf eher mit Arbeit
                verbunden, die körperlich weniger anstrengend ist), die Bezahlung (ist das Gehalt gerecht) und
                vielleicht spielt auch das Ansehen in der Gesellschaft für einige Menschen eine wichtige Rolle. In den
                nächsten Minuten soll sich jede:r Einzelne einmal überlegen, was sein/ihr Traumberuf wäre.
            </div>
        ),
        3: (
            <div>
                Setzt euch anschließend in einem Kreis zusammen und wer möchte, erzählt von seinem/ihrem Traumberuf.
                Dabei müsst ihr bitte auf einige Sachen achten: niemand muss etwas erzählen und wenn jemand etwas mit
                der Gruppe teilt, wird der-/diejenige nicht ausgelacht. Fragen stellen ist natürlich in Ordnung, aber
                nur solang diese auch wirklich ernst gemeint sind. Im Rahmen des Nachhaltigkeitsziels 08 könnt ihr euch
                außerdem noch überlegen, wie menschenwürdig eure Traumberufe sind und warum das so ist.
            </div>
        ),
    },
};
