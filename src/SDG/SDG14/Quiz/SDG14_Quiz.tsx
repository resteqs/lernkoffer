// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG14.png";
import Bild14 from "./Media/Bild14.png";

export const SDG14_Quiz: TextProps = {
    sdgNumber: 14,
    sdgTitle: "Schildkrötenspiel",
    sdg: "SDG14",
    logo: Logo,
    header: {
        1: " Einleitung",
        2: " Spielanleitung",
        3: " Spielanleitung",
        4: " Spielanleitung",
    },

    text: {
        1: (
            <div>
                Im Meer schwimmt ganz schön viel Müll rum! Ungefähr 86 Millionen Tonnen an Plastik sind durch Faulheit,
                Geldgier und Unachtsamkeit der Menschen statt in Müllverbrennungsanlagen oder Ähnlichem im Meer oder in
                Flüssen, die zum Meer führen, gelandet. Das sieht nicht nur schlimm aus und hört sich so an, sondern
                kann die Tiere, die im Meer leben, schwer krank machen oder sogar töten: Die Tiere halten das Plastik
                oft für Nahrung und fressen es und werden wegen der Inhaltsstoffe zum Teil schwer krank!
            </div>
        ),
        2: (
            <div>
                <ul>
                    <li>
                        {" "}
                        In diesem Spiel zeige ich euch, wie schwer es für eine Schildkröte ist, sich durch das Meer zu
                        bewegen, ohne aus Versehen auf Plastik zu stoßen.
                    </li>
                    <li style={{ marginTop: "3.667vh" }}>
                        Für dieses Spiel benötigt ihr lediglich dieses Spielfeld, den Würfel und die Spielfiguren, die
                        ihr alle im Koffer findet. Legt nun die Figuren auf das Starfeld.
                    </li>
                    <li>
                        {" "}
                        <img style={{ marginLeft: "30vw", maxWidth: "40%" }} src={Bild14} alt="" />{" "}
                    </li>
                </ul>
            </div>
        ),
        3: (
            <div>
                <ul>
                    <li>
                        So viele Augen ihr gewürfelt habt, so viele Felder dürft ihr vorrücken. Wer als erster im Ziel
                        ist, hat gewonnen.
                    </li>
                    <li style={{ marginTop: "3.667vh" }}>
                        Ihr seid eine Schildkröte und wollt dringend nach Hause, sagt dabei aber zu einem kleinen Snack
                        (den Fischen) nicht nein. Nur leider ist nicht jedes Essen gutes Essen: Manches Essen ist in
                        Wahrheit Plastik. Das weiß die Schildkröte aber nicht und frisst es trotzdem:
                    </li>
                    <li style={{ marginTop: "3.667vh" }}>
                        {" "}
                        Wenn sie einen Fisch frisst, hat sie plötzlich wieder viel mehr Kraft und kann schneller
                        schwimmen. Der Spieler darf 2 Felder nach vorne rücken!
                    </li>
                    <li style={{ marginTop: "3.667vh" }}>
                        {" "}
                        Wenn sie das erste Mal Plastik frisst, wird sie sehr schwach. Der Spieler muss ein Feld
                        zurückgehen!
                    </li>
                </ul>
            </div>
        ),
        4: (
            <div>
                <ul>
                    <li style={{ marginTop: "3.667vh" }}>
                        {" "}
                        Wenn sie das zweite Mal Plastik frisst, wird sie richtig krank und kann sich zunächst nicht mehr
                        rühren. Der Spieler muss eine Runde aussetzen.
                    </li>
                    <li style={{ marginTop: "3.667vh" }}>
                        {" "}
                        Wenn sie das dritte Mal Plastik frisst, wird sie so krank und hat so große Schmerzen, dass sie
                        die Orientierung verliert. Der Spieler muss wieder zum Anfang zurück (die Anzahl, wie oft man
                        Plastik isst, wird dadurch nicht zurückgesetzt).{" "}
                    </li>
                    <li style={{ marginTop: "3.667vh" }}>
                        {" "}
                        Wenn sie das vierte Mal Plastik frisst, wird sie so schwer krank, dass sie sich überhaupt nicht
                        mehr bewegen kann. Der Spieler scheidet dadurch aus!
                    </li>
                </ul>
            </div>
        ),
        5: (
            <div>
                <ul>
                    <li>
                        <b> Fazit:</b>
                    </li>
                    <li style={{ marginTop: "1vh" }}>
                        {" "}
                        Auch wenn ihr gewonnen haben solltet, habt ihr bestimmt alle mitbekommen, dass es für die
                        Meerestiere nicht einfach ist, in einem derart verschmutzten Meer nicht aus Versehen schädliches
                        Plastik statt leckerer Nahrung zu essen! Die Verschmutzung der Meere ist für Tiere und Umwelt
                        gefährlich. Es ist eine große Aufgabe der Menschheit, das Meer nicht noch weiter zu
                        verschmutzen. Dies geschieht nicht nur durch Plastik, sondern auch beispielsweise durch Öle und
                        Ähnliches, die ins Meer gelangen und noch viele andere Sachen. Doch auch diese sind auf ihre
                        Weise sehr schädlich und sollten nicht ins Meer gelangen!
                    </li>
                </ul>
            </div>
        ),
    },
};
