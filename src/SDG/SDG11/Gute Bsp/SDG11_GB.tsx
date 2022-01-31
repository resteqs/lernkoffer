// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG11.png";

import Schritt1 from "./unknown.png";
import Schritt2 from "./unknown1.jpg";
import Schritt3 from "./unknows5.jpg";
import Schritt4_1 from "./unknown2.png";
import Schritt4_2 from "./unknown6.jpg";
import Schritt5_1 from "./unknown3.jpg";
import Schritt5_2 from "./unknown4.jpg";

export const SDG11_GB: TextProps = {
    sdgNumber: 11,
    sdgTitle: "Insektenhotel",
    sdg: "SDG11",
    logo: Logo,
    header: {
        1: "Anmerkung zum Bemalen der Dose:",
        2: "Anmerkung zum Bemalen der Dose:",
        3: "Schritt 1:",
        4: "Schritt 1:",
        5: "Schritt 1:",
        6: "Schritt 2:",
        7: "Schritt 2:",
        8: "Schritt 3:",
        9: "Schritt 3:",
        10: "Schritt 4:",
        11: "Schritt 4:",
        12: "Schritt 4:",
        13: "Schritt 5:",
        14: "Schritt 5:",
        15: "Schritt 5:",
        16: "Schritt 5:",
        17: "Schritt 5:",



    },

    text: {
        1: (
            <div>
                {" "}
                Es gibt viele Möglichkeiten, wie dein Insektenhotel am Ende aussehen könnte. Eine davon ist es wie eine
                Biene oder ein anderes Tier, das du magst, aussehen zu lassen. Aber natürlich kannst du es auch ganz
                einfach halten und die Dose nur in einer Farbe oder gar nicht bemalen. Mach es einfach so, wie es dir am
                besten gefällt und vor allem auch so, wie es am besten für dich möglich ist.
            </div>
        ),
        2: (
            <div>
                {" "}
                Aber wenn du nur eine Farbe nutzen möchtest, dann wäre weiß am besten, weil es das Sonnenlicht
                reflektieren (zurückwerfen) würde und die Farbe, die du nicht nutzen solltest, ist schwarz. Diese würde
                das Sonnenlicht nämlich aufnehmen und dann wird es in der Dose sehr heiß, was schlecht für die Tiere
                innerhalb des Hotels ist.
            </div>
        ),
        3: (
            <div>
                Zuerst solltest du all das benötigte Material vorbereiten. Das wäre:
                <ul>
                    <li> <b> - Eine Dose </b> (am besten machst du diese vorher grob sauber)</li>
                    <li> <b> - Ein Draht </b> </li>
                    <li>
                        {" "}
                        - Und natürlich die Füllung:  <b> Bambus </b> (wenn du das nicht findest, dann nimm einfach andere hohle
                        Äste oder lass diese weg), <b> zusammengerolltes Papier </b>, <b>Holzwolle </b> , <b> Stroh </b>, <b> dünne Äste </b>, <b>Tannenzapfen
                        oder andere Sachen </b>, die deiner Meinung nach gut wären (Tipp: nimm unterschiedliche Materialien,
                        damit verschiedene Tiere dein Hotel nutzen können)
                    </li>
                </ul>
            </div>
        ),
        4: (
            <div>
                <ul>
                    <li> <b> - Ein Nagel und ein Hammer </b> </li>
                    <li>
                        {" "}
                        <b> - Optional: </b> Farbe oder Wolle, um es bunter zu machen und/oder Fäden und Perlen oder Knöpfe (zum
                        Beispiel, wenn du es wie ein Tier gestalten möchtest, das Beine hat)
                    </li>
                </ul>
            </div>
        ),
        5: <img style={{ display:"block", margin:"auto" }} src={Schritt1} alt="" />,
        6: (
            <div>
                Nimm die Dose und bemale sie mit der Farbe oder wickle die Wolle herum. Wenn du es einfach halten
                möchtest oder nichts dergleichen zur Hand hast, dann überspringe diesen Schritt einfach.
            </div>
        ),
        7: <img style={{ display:"block", margin:"auto" }} src={Schritt2} alt="" />,

        8: (
            <div>
                Am besten lässt du dir hier von einem Erwachsenen helfen: Nimm den Hammer und den Nagel und mache damit
                ein Loch in den Boden der Dose (Wenn du ein Tier mit Beinen gestalten möchtest, dann mach noch ein paar
                Löcher in die Dose, durch die du Fäden fädelst und an die Enden Knöpfe oder Perlen knotest).
            </div>
        ),
        9: <img style={{ display:"block", margin:"auto" }} src={Schritt3} alt="" />,
        10: (
            <div>
                Nimm nun den Draht und fädle ihn durch das offene Ende der Dose und das Loch, was du gerade mit dem
                Nagel gemacht hast. Wenn du damit fertig bist, knote die Enden über der Dose zusammen. Benutze hier ein
                wenig mehr Draht, weil das dann die Schlaufe wird, an der das Hotel aufgehängt werden soll.
            </div>
        ),
        11: <img style={{ display:"block", margin:"auto" }} src={Schritt4_1} alt="" />,
        12: <img style={{ display:"block", margin:"auto" }} src={Schritt4_2} alt="" />,
        13: (
            <div>
                Nimm nun das Füllmaterial und fülle damit die Dose. Achte dabei darauf, dass du genug benutzt, sonst
                wird es zu locker und alles fällt wieder heraus, wenn der Wind ein bisschen geht.
                
                
            </div>
        ),
        14: <img style={{ display:"block", margin:"auto" }} src={Schritt5_1} alt="" />,
        15: <img style={{ display:"block", margin:"auto" }} src={Schritt5_2} alt="" />,
        16: (
            <div>
                Nachdem dein Insektenhotel jetzt fertig ist, nimm es und suche dir einen guten Platz in der Natur (Tipp:
                ein guter Platz ist immer in einem Baum).
            </div>
        ),
    },
};
