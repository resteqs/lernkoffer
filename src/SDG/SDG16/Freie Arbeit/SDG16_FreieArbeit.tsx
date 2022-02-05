// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG16.png";
import "../sdg16.css";

export const SDG16_FreieArbeit: TextProps = {
    sdgNumber: 16,
    sdgTitle: " Regeln für Konfliktlösung ",
    sdg: "SDG16",
    logo: Logo,
    header: {
        1: " Einleitung ",
        2: " Aufgabe 1: ",
        3: "Aufgabe 1:",
        4: "Aufgabe 1: :",
        5: "Aufgabe 1: ",
        6: "Aufgabe 1: ",
        7: "Aufgabe 2: ",
        8: "Schluss",
    },

    text: {
        1: (
            <div>
                {" "}
                Konflikte, also Auseinandersetzungen zwischen zwei Personen, die unterschiedliche Meinungen haben,
                passieren allen Menschen des Öfteren im Leben. Auch was die Themen Umweltschutz und Nachhaltigkeit
                angeht, gibt es viele verschiedene Interessen und Vorstellungen, was man am besten unternehmen sollte.
                Deshalb ist es wichtig, Möglichkeiten zu kennen, wie man Konflikte lösen kann.
            </div>
        ),
        2: (
            <div>
                {" "}
                Überlegt euch gemeinsam, welche Regeln man bei Auseinandersetzungen einhalten sollte. Dabei könnt ihr
                auch darüber nachdenken, was grundsätzlich in einer Situation, in der man einen Streit beenden und eine
                Lösung finden will, wichtig wäre. Das könnte z. B. sein, dass Ort und Zeit für alle Teilnehmende passen.
                Wenn ihr fertig seid, könnt ihr diese sammeln und dann weiter klicken.
            </div>
        ),
        3: (
            <div>
                <ul>
                    <li style={{ fontStyle: "italic" }}>
                        {" "}
                        Folgende Dinge habe ich mir als Voraussetzungen bzw. Rahmenbedingungen überlegt:{" "}
                    </li>
                </ul>
                <ul className="ul" style={{ fontSize: "45px" }}>
                    <li className="li"> - ein Gespräch ist immer ein guter Anfang</li>
                    <li className="li"> - alle Beteiligten sollten zum Reden bereit sein</li>
                    <li className="li"> - aufschieben hilft nicht</li>
                    <li className="li"> - ein ruhiger Ort, an dem sich beide wohlfühlen ist hilfreich </li>
                    <li className="li"> - alle sollten genügend Zeit haben und nicht in Eile sein</li>
                    <li className="li">
                        {" "}
                        - manchmal hilft eine weitere Person, die neutral, sachlich und nicht auf einer bestimmten Seite
                        ist, um zu vermitteln
                    </li>
                </ul>
            </div>
        ),

        4: (
            <div>
                <ul>
                    {" "}
                    <li style={{ fontStyle: "italic" }}> Das wären meine Tipps</li>
                </ul>
                <ul className="ul" style={{ fontSize: "45px" }}>
                    <li className="li"> - Interesse daran haben, eine Lösung zu finden </li>
                    <li className="li"> - sich gegenseitig ausreden lassen (also keine:n unterbrechen) </li>
                    <li className="li"> - eigene Meinung erklären </li>
                    <li className="li"> - zuhören und versuchen die andere(n) Person(en) zu verstehen </li>
                    <li className="li"> - Gemeinsamkeiten finden </li>
                    <li className="li">
                        {" "}
                        - fair (= gerecht, anständig) bleiben, niemanden persönlich beleidigen oder angreifen{" "}
                    </li>
                </ul>
            </div>
        ),

        5: (
            <div style={{ fontSize: "45px" }}>
                <ul className="ul">
                    <li className="li">
                        {" "}
                        - Kompromisse eingehen, also Zugeständnisse machen und einen Mittelweg finden{" "}
                    </li>
                    <li className="li"> - wenn möglich, Ursache herausfinden und beheben </li>
                    <li className="li"> - Lösung(en) vorschlagen</li>
                    <li className="li"> - nächste Schritte klären</li>
                    <li className="li"> - Änderungen vornehmen, die einen weiteren Konflikt verhindern</li>
                </ul>
            </div>
        ),
        6: (
            <div>
                {" "}
                Schreibt nun die Sachen, die ihr wichtig findet, auf ein großes Blatt Papier. Das können eure eigenen
                Ideen sein und/oder die Vorschläge von mir. Am Ende könnt ihr diese in eurem Klassenzimmer aufhängen und
                auch für Auseinandersetzungen innerhalb der Klasse verwenden.
            </div>
        ),
        7: (
            <div style={{ fontSize: "45px" }}>
                {" "}
                Nun kann jede:r einmal selbst darüber nachdenken, wann es bei ihm/ihr Konflikte gab. Wenn ihr wollt,
                könnt ihr eure Erfahrung aufschreiben: was dabei passiert ist, wie ihr euch gefühlt habt, was ihr damals
                darüber gedacht habt und was ihr jetzt darüber denkt. Das ist ein „Innerer Monolog“ („Monolog“ = ein
                laut geführtes Selbstgespräch einer Figur auf der Bühne), das heißt eine Art Selbstgespräch, welches die
                Gedanken und Gefühle einer Person zeigt. Vielleicht fällt euch dabei auf, dass ihr bereits gewisse
                Regeln für Konfliktlösung benutzt habt oder ihr merkt, dass es gut gewesen wäre, wenn ihr manch andere
                schon damals gekannt hättet. Dann könnt ihr euch diese merken und möglicherweise helfen sie euch bei
                eurem nächsten Konflikt.
            </div>
        ),
        8: (
            <div>
                Wichtig ist auch zu erkennen, dass jeder Fehler macht, und keiner geht mit allen Konflikten immer gut
                um. Leider gibt es auch nicht zu jedem Streit eine Lösung. Trotzdem sollten wir versuchen, so etwas zu
                lösen und wenn alle die Regeln und Tipps anwenden, werden bestimmt Möglichkeiten zur Verbesserung der
                Situation gefunden.
            </div>
        ),
    },
};
