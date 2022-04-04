// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG16.png";
import Netz from "../Spiel/Netz.png"

export const SDG16_Spiel: TextProps = {
    sdgNumber: 16,
    sdgTitle: "Netz “Frieden und Gerechtigkeit” spinnen",
    sdg: "SDG16",
    logo: Logo,
    header: {
        1: "Einleitung",
        2: "Spieleanleitung",
        3: "Spieleanleitung",
        4: "Spieleanleitung",
        5: "Schluss",
        6: "Schluss",
    },

    text: {
        1: (
            <div>
                <li>
                    {" "}
                    Eine Zielsetzung des 16. Nachhaltigkeitsziels ist: „Dafür sorgen, dass die Entscheidungsfindung auf
                    allen Ebenen bedarfsorientiert, inklusiv, partizipatorisch und repräsentativ ist“.
                </li>
                <li>
                    {" "}
                    Das heißt, folgende Dinge sind wichtig: Es wird sich daran orientiert, wofür die Entscheidung
                    benötigt wird, alle Menschen ohne Ausnahme werden gleichbehandelt, jede:r kann und soll sich
                    beteiligen und die unterschiedlichen Interessengruppen werden berücksichtigt.
                </li>
                <li>
                    {" "}
                    Bei dem nächsten Spiel geht es ebenfalls darum, dass ihr gemeinsam eine Lösung findet. Dabei sollt
                    ihr eure Entscheidungen wie oben beschrieben treffen. Denn jede:r hat einen Beitrag und es braucht
                    alle, um wortwörtlich am „Ball“ zu bleiben…
                </li>
            </div>
        ),
        2: (
            <div>
                {" "}
                Als erstes braucht ihr ein Wollknäuel (nicht verknotet) und viele Mitspieler:innen, je mehr, desto
                anspruchsvoller, aber auch spaßiger, wird es. Stellt euch in einem Kreis auf und eine Person nimmt die
                Wolle in die Hand (in diesem Beispiel Person A). Er/Sie muss nun den Anfangsfaden gut festhalten und das
                Wollknäuel an eine andere Person werfen (zu Person B). Diese fängt es und hält den Faden auch fest. Nun
                spannt er sich zwischen ihnen. Dann wird die Wolle wieder weitergeworfen (hier in der alphabetischen
                Reihenfolge). Jedes Mal, wenn ihr das Wollknäuel fangt, überlegt euch etwas, das ihr mit Frieden und
                Gerechtigkeit verbindet. Das geht so lange bis jede:r einmal die Wolle gefangen hat und es ein ganzes
                Netz gibt. Eure Aufgabe ist es jetzt, dieses Netz zu entwirren
            </div>
        ),
        3: (
            <div>
                <ul>
                    <li>
                        {" "}
                        Beispiel (die Reihenfolge ist nur ein Beispiel, ihr könnt euch ganz durcheinander den Ball
                        zuwerfen):{" "}
                    </li>
                    <li> <img style= {{ marginLeft: "750px", height: "350px" }} src={Netz} alt="" /></li>
                    <li> Wenn ihr einen Tipp braucht, wie ihr das Netz entwirren könnt, klickt auf weiter:</li>
                </ul>
            </div>
        ),
        4: (
            <div>
                Jede:r hält seinen/ihren Teil des Fadens weiterhin in der Hand. Der einzige Weg daher das Netz zu
                entwirren, das Wollknäuel so zu werfen, dass es sich wieder auflöst. Es ist hilfreich, wenn jede:r sich
                merkt, von wem er/sie das Wollknäuel bekommen hat und an wem es weitergeworfen wurde. Somit könnt ihr,
                sobald ihr fertig seid, anfangen, in der richtigen Reihenfolge rückwärts die Wolle zurückzuwerfen, bis
                sie wieder bei der Anfangsperson ist.
            </div>
        ),
        5: (
            <div>
                Nicht nur bei Spielen ist es wichtig, dass man gemeinsam Entscheidungen treffen kann. In jedem
                Unternehmen gibt es Probleme, die zusammen gelöst oder Entscheidungen, die von allen getroffen werden
                müssen. Dabei sollten alle gerecht behandelt werden. Es ist entscheidend, dass jeder Aspekt für alle
                Beteiligten klar ist. Diese können dann ihre eigene Meinung bilden. Das Problem seit Langem ist aber,
                dass genau bei diesem letzten Schritt oft andere Faktoren wie Geld wichtiger sind als die eigentliche
                Problematik.
            </div>
        ),
        6: (
            <div>
                {" "}
                Deshalb ist auch ein Ziel des 16. Nachhaltigkeitsziels Bestechung und Korruption (= Bereitschaft zur
                Bestechung anderer oder dazu selbst bestochen zu werden) zu vermindern. Achtet grundsätzlich darauf,
                dass Unternehmen und auch Politiker:innen ihre Entscheidungen, besonders was das Thema Nachhaltigkeit
                angeht, mit den Kriterien vom Anfang bilden und diese anschließend wirklich umsetzen.
            </div>
        ),
    },
};
