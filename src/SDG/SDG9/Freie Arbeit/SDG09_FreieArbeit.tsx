// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG09.png";
import Kartenhaus from "./Kartenhaus.png";

export const SDG09_FreieArbeit: TextProps = {
    sdgNumber: 9,
    sdgTitle: "Kartenhaus",
    sdg: "SDG09",
    logo: Logo,
    header: {
        1: " Einleitung",
        2: "Spiel",
        3: "Spiel",
        4: "Spiel",
        5: "Ende",
        6: "Ende",
        7: "Ende",
        8: "Ende",
    },

    text: {
        1: (
            <div>
                {" "}
                Ein Kartenhaus – hast du so etwas schon einmal gebaut? Wenn ja, ist es dir gelungen? Ich möchte heute,
                dass du versuchst, mit deiner Gruppe ein Kartenhaus zu bauen. Dafür braucht ihr einen Satz Spielkarten
                Diesen findet ihr im Koffer.{" "}
            </div>
        ),
        2: (
            <div>
                <ul>
                    <li>
                        {" "}
                        Nehmt euch 15 Karten aus der Schachtel und verteilt sie gerecht (so gerecht wie möglich) an alle
                        Gruppenmitglieder.
                    </li>
                    <li>
                        {" "}
                        Sucht euch eine möglichst gerade und ebene Fläche, auf der ihr das Kartenhaus bauen könnt, damit
                        es nicht umfällt.
                    </li>
                    <li>
                        {" "}
                        Überlegt euch gemeinsam, wie ihr aus diesen Karten ein Haus bauen könnt, das stabil steht.
                        Verwendet dazu alle 15 Karten. Dabei dürfen die Karten aber nicht nur auf der flachen Seite
                        aufeinandergelegt werden.{" "}
                    </li>
                </ul>
            </div>
        ),
        3: (
            <div>
                <ul>
                    <li>
                        {" "}
                        Probiert viele verschiedene Ideen aus. Manche funktionieren vielleicht etwas besser als die
                        andern. Woran könnte das liegen?
                    </li>
                    <li>
                        {" "}
                        Bei diesem Spiel gibt es keine Musterlösung, wie euer Haus aussehen soll, aber wenn ihr auf
                        Weiter klickt, könnt ihr euch meine Idee ansehen.
                    </li>
                </ul>
            </div>
        ),
        4: (
            <div>
                {" "}
                <img style={{ marginLeft: "680px" }} src={Kartenhaus} alt="" />
            </div>
        ),
        5: (
            <div>
                {" "}
                Ist euch etwas aufgefallen, das alle Ideen, die funktioniert haben, gemeinsam hatten? Die Voraussetzung
                dafür, dass euer Kartenhaus nicht einstürzt, ist eine feste und stabile Basis. Das heißt also, dass es
                von Anfang an gut gebaut sein muss, damit es später auch noch stehen kann.{" "}
            </div>
        ),
        6: (
            <div>
                {" "}
                Das ist aber nicht nur bei eurem Kartenhaus oder echten Häusern so. Ein Beispiel ist das 9.
                Nachhaltigkeitsziel der UN. Hierbei geht es um Industrie, Innovation und Infrastruktur. – Doch was haben
                diese drei Dinge mit einem Kartenhaus zu tun?{" "}
            </div>
        ),
        7: (
            <div>
                {" "}
                Ganz einfach: wenn beispielsweise in der Industrie nicht auf umweltfreundliche Produktion geachtet wird,
                wird der Klimawandel vorangetrieben und die Erde erwärmt sich immer weiter. Das wäre in unserem
                Kartenhausbeispiel eine wacklige unterste Schicht. Auf dieser kann eine weitere zwar einige Zeit stehen
                (auch die Menschen können einige Zeit mit schlechter Luft und kaputter Umwelt leben), aber sie wird bald
                umfallen und damit geht auch die unterste Schicht kaputt (nach zu langem Warten ist der Klimawandel
                nicht mehr aufzuhalten und die Umwelt kann sich von dem Schaden, der ihr durch den Menschen zugefügt
                wurde, nicht mehr erholen).{" "}
            </div>
        ),
        8: (
            <div>
                {" "}
                Es gibt noch viele andere Möglichkeiten, dieses Kartenhaus mit echten Problemen in der Welt zu
                vergleichen. Fallen dir in der Gruppe einige ein?{" "}
            </div>
        ),
    },
};
