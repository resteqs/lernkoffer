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
        5: "Schritt 2:",
        6: "Schritt 3:",
        7: "Schritt 4:",
        8: "Schritt 5:",
        9: "Schritt 6:",
    },

    text: {
        1: (
            <div>
                {" "}
                Es gibt viele Möglichkeiten, wie dein Insektenhotel am Ende aussehen könnte. Eine davon ist, es wie eine
                Biene oder ein anderes Tier, das du magst, aussehen zu lassen. Aber natürlich kannst du es auch ganz
                einfach halten und die Dose nur in einer Farbe oder gar nicht bemalen. Mach es einfach so, wie es dir am
                besten gefällt und vor allem auch so, wie es am besten für dich möglich ist.
            </div>
        ),
        2: (
            <div>
                {" "}
                Aber wenn du nur eine Farbe nutzen möchtest, dann ist weiß am besten, weil es das Sonnenlicht
                reflektieren (zurückwirft) würde und die Farbe, die du nicht nutzen solltest, ist schwarz. Schwarze Farbe nimmt das Sonnenlicht auf
                und dann wird es in der Dose sehr heiß, was schlecht für die Tiere
                innerhalb des Hotels ist.
            </div>
        ),
        3: (
            <div>
                Zuerst solltest du all das benötigte Material vorbereiten. Für das Insektenhotel brauchst du:
                <ul>
                    <li> <b> - eine Dose </b> (am besten machst du diese vorher grob sauber)</li>
                    <li> <b> - einen Draht </b> </li>
                    <li>
                        {" "}
                        - die Füllung:  <b> Bambus </b> (Wenn du das nicht findest, dann nimm einfach andere hohle
                        Äste oder lass diese weg.), <b> zusammengerolltes Papier</b>, <b>Holzwolle</b>, <b> Stroh</b>, <b> dünne Äste</b>, <b>Tannenzapfen
                        oder andere Sachen</b>, die deiner Meinung nach gut wären.</li> 
                        <li> 
                    Tipp: Nimm unterschiedliche Materialien, damit verschiedene Tiere dein Hotel nutzen können.  </li>
                    
                </ul>
            </div>
        ),
        4: (
            <div>
                <ul>
                    <li> <b> - einen Nagel und einen Hammer </b> </li>
                    <li>
                        {" "}
                        <b> - optional: </b> Farbe oder Wolle, wenn du es bunter gestalten willst und/oder Foptional: Fäden sowie Perlen oder Knöpfe, wenn du es wie ein Tier gestalten willst, das Beine hat.
                    </li>
                </ul>
                <img style={{ marginLeft: "800px" }} src={Schritt1} alt="" />
            </div>
        ),
        5: (
            <div>
                Nimm die Dose und bemale sie mit der Farbe oder wickle die Wolle herum. Wenn du es einfach halten
                möchtest oder nichts dergleichen zur Hand hast, dann überspringe diesen Schritt einfach.
                <img style={{ marginBottom: "-400px", marginLeft: "300px" }}src={Schritt2} alt="" />
            </div>
        ),
        6: (
            <div>
                Am besten lässt du dir hier von einem Erwachsenen helfen: Nimm den Hammer und den Nagel und mache damit
                ein Loch in den Boden der Dose (Wenn du ein Tier mit Beinen gestalten möchtest, dann mach noch ein paar
                Löcher in die Dose, durch die du Fäden fädelst und an die Enden Knöpfe oder Perlen knotest).
                <img style={{ marginBottom: "-600px", marginLeft: "-600px" }} src={Schritt3} alt="" />
            </div>
        ),
        7: (
            <div>
                Nimm nun den Draht und fädle ihn durch das offene Ende der Dose und das Loch, was du gerade mit dem
                Nagel gemacht hast. Wenn du damit fertig bist, knote die Enden über der Dose zusammen. Benutze hier ein
                wenig mehr Draht, weil das dann die Schlaufe wird, an der das Hotel aufgehängt werden soll.
                <img style={{ marginBottom: "-400px", marginLeft: "400px" }} src={Schritt4_1} alt="" />
                <img style={{ marginBottom: "-400px", marginLeft: "500px" }} src={Schritt4_2} alt="" />
            </div>
        ),
        8: (
            <div>
                Nimm nun das Füllmaterial und fülle damit die Dose. Achte dabei darauf, dass du genug benutzt, sonst
                wird es zu locker und alles fällt wieder heraus, wenn der Wind ein bisschen geht.
                <img style={{ marginBottom: "-600px", marginLeft: "300px" }} src={Schritt5_1} alt="" />
                <img style={{ marginBottom: "-600px", marginLeft: "50px" }} src={Schritt5_2} alt="" />
            </div>
        ),
        9: (
            <div>
                Nachdem dein Insektenhotel jetzt fertig ist, nimm es und suche dir einen guten Platz in der Natur (Tipp:
                ein guter Platz ist immer in einem Baum).
            </div>
        ),
    },
};
