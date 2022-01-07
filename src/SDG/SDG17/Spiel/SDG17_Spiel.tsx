// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG17.png";

export const SDG17_Spiel: TextProps = {
    sdgNumber: 17,
    sdgTitle: "Balanciert den Ball",
    sdg: "SDG17",
    logo: Logo,
    header: {
        1: " Einstieg: ",
        2: "Anleitung",
        3: "Anleitung",
        4: "Auflösung",
        5: "Auflösung",
        6: "Abschluss"
    },

    text: {
        1: (
            <div>
                <ul>
                    <li>
                        {" "}
                        Habt ihr schon einmal eine Gruppenarbeit gemacht? – Wenn ja, war das einfach, immer alle Wünsche
                        zusammen zu bringen, um ein gutes Ergebnis zu bekommen?
                    </li>
                    <li style={{ marginTop: "30px" }}>
                        {" "}
                        Gruppen und Gemeinschaften sind manchmal ein wenig schwierig, aber sie haben einen großen
                        Vorteil: man kann sich gegenseitig helfen. Und je mehr Leute zusammenhelfen, desto einfacher
                        wird es für jeden einzelnen, denn dann können sich alle gegenseitig helfen.{" "}
                    </li>
                </ul>
            </div>
        ),
        2: (
            <div>
                <li>
                    {" "}
                    Ich möchte mit euch ein Spiel spielen, das zeigt, welche Kraft eine Gemeinschaft hat, wenn alle
                    zusammenhelfen.
                </li>
                <li style={{ marginTop: "30px" }}>
                    {" "}
                    Ihr braucht dazu ein großes Tuch (z.B. ein Bettlaken oder eine große Decke) und einen Ball.
                </li>
                <li style={{ marginTop: "30px" }}>
                    {" "}
                    Am Anfang halten zwei von euch das Tuch fest und versuchen den Ball darauf zu behalten, während ein
                    dritter/eine dritte unter dem Tuch steht/sitzt und versucht den Ball vom Tuch zu schubsen.
                </li>
            </div>
        ),
        3: (
            <div>
                <li>
                    {" "}
                    Wenn ihr das ausprobiert habt, dann lasst noch einmal ein oder zwei Leute mehr mithelfen, den Ball
                    auf dem Tuch auszubalancieren.{" "}
                </li>
                <li>
                    {" "}
                    Das macht ihr so lang, bis alle von euch das Tuch festhalten. Die Person, die unter dem Tuch sitzt,
                    kann natürlich auch zwischendurch gewechselt werden, damit jeder einmal beide Rollen gespielt hat.
                </li>
                <li> Wenn ihr damit fertig seid, lest weiter.</li>
            </div>
        ),
        4: (
            <div>
                <ul>
                    <li>
                        {" "}
                        Ist euch etwas aufgefallen? – Umso mehr Leute das Tuch festgehalten haben, desto einfacher war
                        es, den Ball auf dem Tuch zu behalten, auch wenn eine Person unter dem Tuch saß und versucht
                        hat, den Ball aus seinem Gleichgeweicht zu bringen, oder?
                    </li>
                    <li>
                        {" "}
                        Das ist die Besonderheit an einer Gemeinschaft und der Grund dafür, dass sie so wichtig ist. Es
                        ist selten, dass alle der gleichen Meinung sind, wenn viele Menschen zusammenkommen. Aber in der
                        Gruppe wird es einfacher Probleme zu lösen.
                    </li>
                </ul>
            </div>
        ),
        5: (
            <div>
                <ul>
                    <li>
                        {" "}
                        Das ist hier natürlich extrem vereinfacht, weil nur eine Person gegen das Ziel der anderen
                        gearbeitet hat, aber es wird trotzdem deutlich, dass es leichter wird ein Ziel zu erreichen,
                        wenn mehr Leute dazu beitragen.
                    </li>
                    <li>
                        {" "}
                        Trotzdem habt ihr vielleicht auch gemerkt, dass es jedes Mal, wenn neue Leute dazugekommen sind,
                        erst schwierig war, diese in die Bewegungen der Gruppe mit einzubinden, oder? – Aber das ist
                        ganz normal und wie ihr gesehen habt, funktioniert es nach einiger Zeit auch mit den Neuen
                        genauso gut wie vorher und wieder ein bisschen später, wird es sogar einfach als zuvor.
                    </li>
                </ul>
            </div>
        ),
        6: (
            <div>
                {" "}
                Als letztes möchte ich euch bitten, dass ihr euch überlegt, wie Gemeinschaften dazu beitragen können,
                die 17 SDGs zu erfüllen (was diese Gemeinschaften machen könnten, um zu helfen).
            </div>
        ),
    },
};
