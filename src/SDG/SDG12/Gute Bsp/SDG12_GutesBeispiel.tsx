// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG12.png";
import Bild12_1 from "../Gute Bsp/Media/12_1.jpg";
import Bild12_2 from "../Gute Bsp/Media/12_2.jpg";
import Bild12_3 from "../Gute Bsp/Media/12_3.jpg";
import Bild12_4 from "../Gute Bsp/Media/12_4.jpg";

export const SDG12_GutesBeispiel: TextProps = {
    sdgNumber: 12,
    sdgTitle: "Folie aus Maisstärke",
    sdg: "SDG12",
    logo: Logo,
    header: {
        1: " Einleitung ",
        2: " Einleitung",
        3: "Einleitung",
        4: "Info",
        5: "Info",
        6: "Info",
    },

    text: {
        1: (
            <div>
                {" "}
                Zuerst sieh dir alle Bilder an, die dir gleich gezeigt werden und überleg, welche Gemeinsamkeit sie
                haben.
                <img style={{ marginBottom: "-600px", marginLeft: "-500px", height: "400px" }} src={Bild12_1} alt="" />
                <img style={{ marginBottom: "-600px", height: "400px" }} src={Bild12_2} alt="" />
                <img style={{ marginBottom: "-600px", height: "400px" }} src={Bild12_3} alt="" />
            </div>
        ),
        2: (
            <div>
                {" "}
                <ul>
                    <li> Ist dir etwas aufgefallen?</li>
                    <li style={{ marginTop: "50px" }}>
                        {" "}
                        Alle Gegenstände, die du gerade gesehen hast, sind aus Plastik hergestellt. Das Problem bei
                        diesem Material ist, dass es aus einem Stoff hergestellt wird, der Erdöl heißt und ein „fossiler
                        Rohstoff“ (sehr alte Stoffe, die sehr langsam entstehen und deshalb nur begrenzt zur Verfügung
                        stehen) ist. Außerdem löst sich Plastik nicht auf. Die Folge dessen ist, dass es über Jahre zum
                        Beispiel in Meeren schwimmt, so die Umwelt verschmutzt und von vielen Tieren für Nahrung
                        gehalten wird.
                    </li>
                </ul>
            </div>
        ),
        3: (
            <div>
                {" "}
                Diese Tiere können Plastik aber nicht verdauen und sterben deshalb, wenn sie zu viel davon fressen. Aus
                diesem Grund haben viele Menschen ein anderes Material gesucht, mit dem man Dinge verpacken kann.{" "}
            </div>
        ),
        4: (
            <div>
                {" "}
                <img style={{ marginLeft: "550px", height: "600px" }} src={Bild12_4} alt="" />{" "}
            </div>
        ),
        5: (
            <div>
                <ul>
                    <li> Ein Maiskolben. Was hat denn der jetzt mit Verpackungen zu tun? </li>
                    <li style={{ marginTop: "50px" }}>
                        {" "}
                        Ganz einfach: Es gibt ein Material, das mit PLA abgekürzt wird. Das steht für Polylactide oder
                        auch Polymilchsäure. Das besondere an diesem Material ist, dass es aus einem Bestandteil von
                        Mais hergestellt werden kann.
                    </li>
                    <li>
                        {" "}
                        Mais ist eine Pflanze, die wieder nachwächst, man bezeichnet ihn deshalb auch als
                        „nachwachsenden Rohstoff“. Bei diesen besteht nicht das Problem, dass sie irgendwann ausgehen,
                        so wie es bei „fossilen Rohstoffen“ der Fall ist.
                    </li>
                </ul>
            </div>
        ),
        6: (
            <div>
                <ul>
                    <li>
                        {" "}
                        Außerdem kann Folie aus Maisstärke (der Bestandteil von Mais, der zur Herstellung von PLA
                        genutzt wird) industriell kompostiert werden (sie können also in bestimmten Anlagen unter
                        besonderen Bedingungen schnell zersetzt werden, ähnlich wie auf dem Kompost, den du vielleicht
                        zuhause im Garten hast).
                    </li>
                    <li>
                        {" "}
                        Jedoch ist ein Problem bei PLA, dass es nicht so hitzebeständig ist, wie Folien aus Erdöl (das
                        bedeutet, dass Folien aus Maisstärke schneller schmelzen). Ein großer Vorteil ist jedoch, dass
                        PLA geschmacksneutral und lebensmittelecht ist (Essen, das in Verpackungen aus PLA eingepackt
                        wird, schmeckt auch nach langer Zeit nicht nach der Folie).
                    </li>
                </ul>
            </div>
        ),

        7: (
            <div>
                Um zu erreichen, dass mehr Firmen Materialien wie PLA verwenden, können wir als Verbraucher:in
                verschiedene Dinge tun. Zum Beispiel kann man sich bewusst für Produkte entscheiden, die aus solchen
                Materialien hergestellt werden. Man könnte auch bei friedlichen Protesten teilnehmen oder anderen Leuten
                davon erzählen oder sogar mit Politiker:innen darüber reden.{" "}
            </div>
        ),
        8: (
            <div>
                <ul>
                    <li>
                        {" "}
                        Aber fallen dir auch andere Möglichkeiten ein, wie Verpackungsmüll vermieden werden kann oder
                        Verpackungen umweltfreundlicher werden könnten?
                    </li>
                    <li style={{ marginTop: "50px" }}>
                        {" "}
                        Überlege dir einige Ideen und teile diese dann mit der Gruppe.
                    </li>
                    <li>
                        {" "}
                        Ich habe noch ein Beispiel für euch: Unverpackt Länden. In diesen Geschäften werden nur Sachen
                        ohne Verpackung verkauft und man nimmt sich selbst Gefäße mit, die man immer wieder hernehmen
                        kann, so wie zum Beispiel Stoffbeutel.
                    </li>
                </ul>
            </div>
        ),
    },
};
