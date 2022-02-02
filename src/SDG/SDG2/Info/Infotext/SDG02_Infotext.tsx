// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import Logo from "../../../../SDGLogos/Goal-SDG02.png";
import EG from "../../../../EG/EG2.png";
import { InfotextProps } from "../../../../Interfaces/SDG";

import SDG2_1 from "./audio/SDG2_1.mp3";
import SDG2_2 from "./audio/SDG2_2.mp3";
import SDG2_3 from "./audio/SDG2_3.mp3";
import SDG2_4 from "./audio/SDG2_4.mp3";
import SDG2_5 from "./audio/SDG2_5.mp3";
import SDG2_6 from "./audio/SDG2_6.mp3";
import SDG2_7 from "./audio/SDG2_7.mp3";
import SDG2_8 from "./audio/SDG2_8.mp3";

export const SDG02_Infotext: InfotextProps = {
    number: 2,
    name: "Kein Hunger",
    sdg: "SDG02",
    text: {
        1: "„den Hunger beenden, Ernährungssicherheit und eine bessere Ernährung erreichen und eine nachhaltige Landwirtschaft fördern“",
        2: "Wenn Menschen extrem hungern und unterernährt sind, kann es keine nachhaltige Entwicklung geben. Da sie so wenig Essen haben, werden sie geschwächt und können schneller krank werden. Infolgedessen können sie nicht mehr so viel arbeiten und verdienen weniger Geld. Ohne dieses können sie kein Essen mehr kaufen. Das heißt, dass durch den Hunger und die Unterernährung eine Falle entsteht, aus welcher sie sich nicht so einfach befreien können.",
        3: (
            <div>
                <p className="Infotext02">
                    Es gibt Menschen, die sich nicht regelmäßig gesund und ausgewogen beziehungsweise abwechslungsreich
                    ernähren können. Das liegt dann daran, dass manche Dinge, wie Geld oder Nahrung, nicht ausreichend
                    vorhanden sind.
                </p>
            </div>
        ),
        4: (
            <div>
                <p className="Infotext02">
                    Ein Ernährungssystem (Anbauen &#10140; Verarbeiten &#10140; Verpacken &#10140; Transportieren
                    &#10140; Verteilen &#10140; Handeln &#10140; Einkaufen &#10140; Zubereiten &#10140; Verzehren von
                    Essen) kann von Konflikten, Klimakrisen, Heuschrecken-Plagen und Pandemien bedroht werden.
                </p>
            </div>
        ),
        5: (
            <div>
                <p className="Infotext02">
                    Wenn die Bürger:innen unsicher werden, produzieren sie weniger Nahrung, was dazu führt, dass es
                    weniger Essen gibt und die Preise dafür steigen. Deshalb ist es wichtig, dass der Agrarsektor (=
                    Landwirtschaft) mit Geld unterstützt wird. Dadurch können Hunger und Armut verringert werden, die
                    Ernährung wird besser gesichert, es entstehen mehr Arbeitsplätze und die Anfälligkeit für
                    Katastrophen oder andere Bedrohungen sinkt.
                </p>
            </div>
        ),
        6: (
            <div>
                <p className="Infotext02">
                    Eine Welt ohne Hunger kann unser Arbeitsleben, unsere Gesundheit, Bildung, Gleichberechtigung und
                    gesellschaftliche Entwicklung verbessern. Sie ist sehr wichtig, um eine bessere Zukunft für alle zu
                    schaffen. Darüber hinaus sind wir mit Hunger nicht in der Lage, die anderen Nachhaltigkeitsziele zu
                    erreichen, da er dazu führt, dass wir uns nicht mehr so gut weiterentwickeln können.{" "}
                </p>
            </div>
        ),
        7: (
            <div>
                <p className="Infotext02">
                    Um (gute) Ernährung sicherzustellen, müssen wir uns mit mehreren Themen befassen: z. B. mit dem Schutz
                    der Gesellschaft, um sichere und nahrhafte Lebensmittel besonders für Kinder zu gewährleisten. Ein
                    anderes Beispiel ist die Veränderung der Ernährungssysteme, damit die Welt nachhaltiger und
                    inklusiver (= möglichst alle miteinbeziehend) wird. Du kannst helfen, indem du bei Landwirten oder Märkten
                    aus deiner Gegend einkaufst und dich für nachhaltige Lebensmittel entscheidest.
                </p>
            </div>
        ),
        8: (
            <div>
                <p className="Infotext02">
                    Außerdem ist es wichtig, eine gute Ernährung für alle zu unterstützen und Lebensmittelverschwendung
                    zu bekämpfen. Auch Unternehmen und deine Regierung sollten Entscheidungen und Veränderungen treffen,
                    die dieses Nachhaltigkeitsziel unterstützen. Bei diesen, sowie in deiner Gemeinde zählt deine Stimme
                    als zukünftige:r Wähler:in und Verbraucher:in von Nahrung.
                </p>
            </div>
        ),
    },

    header: {
        2: "Warum",
        3: "Was ist das Problem?",
        4: "Was ist das Problem?",
        5: "Was ist das Problem?",
        6: "Wie ist dieses Thema mit uns verbunden?",
        7: "Was können wir tun",
        8: "Was können wir tun",
    },
    logo: Logo,
    eg: EG,
    audioFile: {
        1: SDG2_1,
        2: SDG2_2,
        3: SDG2_3,
        4: SDG2_4,
        5: SDG2_5,
        6: SDG2_6,
        7: SDG2_7,
        8: SDG2_8,
    },
};
