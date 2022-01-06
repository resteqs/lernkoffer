// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG12.png";
import Müll1 from "../Freie Arbeit/Media/Müll 1.jpg"
import Müll2 from "../Freie Arbeit/Media/Müll2.jpg"

export const SDG12_FreieArbeit: TextProps = {
    sdgNumber: 12,
    sdgTitle: "Kunst aus Müll",
    sdg: "SDG12",
    logo: Logo,
    header: {
        1: " Einleitung ",
        2: "Beispiel",
        3: "Aufgabe",
        4: "Hier könnt ihr zwei Beispiele sehen:",
    },

    text: {
        1: (
            <div>
                {" "}
                Da wir sehr viele Dinge verbrauchen, die teilweise nicht mehr hergestellt werden können oder das sehr
                lange dauert, ist es wichtig bereits vorhandene Sachen wiederzuverwenden. Das nennt man auch
                „Recycling“. Zum Beispiel kann man auch aus „Müll“ Kunst schaffen{" "}
            </div>
        ),
        2: (
            <div>
                {" "}
                In Sankt Petersburg, einer Stadt in Russland, gibt es das sogenannte „Pro Waste“ (dt.: Für Müll) Museum.
                Der Museumsleiter German Khilchenko will darauf aufmerksam machen, dass man mit Müll nützliche Dinge,
                wie einen Tisch, bauen kann und er somit ein Rohstoff ist. Er will den Menschen, die durch sein Museum
                gehen, die unterschiedlichsten Möglichkeiten zeigen, was alles aus Abfall entstehen kann. Dadurch sollen
                mehr Leute motiviert werden Dinge zu recyclen, denn in Russland wird noch sehr viel weggeschmissen und
                wahrscheinlich nicht einmal jedes zehnte Produkt wiederverwendet{" "}
            </div>
        ),
        3: (
            <div>
                {" "}
                Nun könnt ihr selbst versuchen, Kunst aus Müll zu bauen. Dabei könnt ihr so kreativ werden, wie ihr
                wollt und eurer Fantasie freien Lauf lassen. Folgende Materialien könntet ihr verwenden: alte Knöpfe,
                leere Becher/Flaschen/Dosen, Schachteln (z.B. Schuhkartons), alte Klopapierrollen, Stoffreste, kaputte
                Kleidung, Wolle etc. Aber auch Dinge aus der Natur: Tannenzapfen, Nussschalen, Rinde, Kastanien,
                verlassene Schneckenhäuschen und vieles mehr. Holt euch noch Kleber und Schere und los geht’s!
            </div>
        ),
        4: <div> <img style= {{ marginLeft: "550px", height: "500px" }} src= {Müll1} alt="" /> <img style= {{ height: "500px" }} src={Müll2} alt="" /> </div>,
    },
};
