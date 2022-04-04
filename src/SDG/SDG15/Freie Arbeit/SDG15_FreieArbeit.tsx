// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG15.png";
import KresseHang from "../Freie Arbeit/Media/Kressehang.png"

export const SDG15_FreieArbeit: TextProps = {
    sdgNumber: 15,
    sdgTitle: " Kresse-Hang ",
    sdg: "SDG15",
    logo: Logo,
    header: {
        1: " Einleitung ",
        2: " Einleitung ",
        3: "Aufbau:",
        4: "Aufbau:",
        5: "Versuchsablauf",
        6: "Auflösung",
        7: "Auflösung", 
        8: "Auflösung", 
    },

    text: {
        1: (
            <div>
                <ul>
                    <li style={{ fontStyle: "italic" }}> Frage: </li>
                    <li>
                        {" "}
                        Bäume haben viele wichtige Funktionen für uns Menschen. Weißt du welche das sind? Überlege dir
                        in der Gruppe doch einmal, welche Aufgaben Bäume und andere Pflanzen für uns Menschen erfüllen.
                    </li>
                </ul>
            </div>
        ),
        2: (
            <div>
                <ul>
                    <li style={{ fontStyle: "italic" }}> Antwort:</li>
                    <li>
                        {" "}
                        Vermutlich seid ihr zu dem Schluss gekommen, dass Pflanzen Kohlenstoffdioxid (ein für uns
                        schädliches Gas, das den Klimawandel vorantreibt) zu Sauerstoff (sehr wichtiges Gas, das wir
                        atmen müssen, um leben zu können) machen.
                    </li>
                    <li>
                        {" "}
                        Aber seid ihr auch auf die Aufgabe der Wurzeln gekommen? Diese sind nicht nur für die Pflanzen
                        von großer Bedeutung, da sie so verschiedene Sachen, wie zum Beispiel Wasser, aus dem Boden
                        ziehen. Sie haben auch für den Menschen eine sehr wichtige Aufgabe, die ihr anhand von einem
                        kleinen Experiment herausfinden sollt.
                    </li>
                </ul>
            </div>
        ),
        3: (
            <div>
                <ul>
                    <li>
                        {" "}
                        Um den Versuch durchzuführen, benötigt ihr eine Schale, in die ihr Erde füllen könnt, Samen für
                        zum Beispiel Kresse (ihr könnt auch etwas anderes verwenden, aber Kresse wächst sehr schnell,
                        sodass ihr nicht allzu lang warten müsst) und eine Gießkanne mit Wasser.
                    </li>
                </ul>
            </div>
        ),
        4: (
            <div>
                <ul>
                    <li>
                        {" "}
                        Schüttet nun die Erde in eure Schale und formt damit einen Hang. Als nächstes gebt ihr die Samen
                        auf eine Seite des Hangs. Jetzt ist Geduld gefragt, denn ihr müsst den Pflanzen ein paar Tage
                        Zeit geben, damit sie wachsen können. In dieser Zeit achtet darauf, dass die Erde auf der Seite
                        mit den Pflanzen immer feucht bleibt. Dazu besprüht ihr die Erde am besten mit Wasser, da gießen
                        dazu führen kann, dass die Samen weggespült werden. Lest aber trotzdem schon weiter, damit ihr
                        wisst, was ihr machen sollt, wenn die Kresse, Blumen oder was auch immer ihr verwendet habt,
                        groß genug sind.
                    </li>
                </ul>
            </div>
        ),
        5: (
            <div>
                {" "}
                Wenn eure Pflanzen groß genug sind, dann gießt einmal mit der Gießkanne Wasser über den Hang. Versucht
                dabei erst nur die Seite zu gießen, auf der ihr die Kresse (oder etwas anderes) angepflanzt habt.
                Beobachtet was passiert. Nun macht ihr das gleich auf der Seite ohne Pflanzen. Beobachtet auch hier
                wieder, was passiert. Ist euch etwas aufgefallen? Besprecht eure Beobachtungen in der Gruppe, bevor ihr
                weiterlest.{" "}
                <ul>
                    <li> <img style={{ height: "600px", marginLeft: "600px" }} src= {KresseHang} alt="" /></li>
                </ul>
            </div>
        ),
        6: (
            <div>
                {" "}
                Auf der Seite ohne Pflanzen ist die Erde durch das Wasser aus der Gießkanne einfach heruntergerutscht,
                während sie auf der anderen Seite kaum verrutscht ist, oder?
                <ul>
                    {" "}
                    <li style={{ marginTop: "50px" }}>
                        {" "}
                        Wisst ihr, woran das liegt? Es ist ganz einfach: es liegt an den Wurzeln der Pflanzen!{" "}
                    </li>
                </ul>
            </div>
        ),
        7: (
            <div>
                Dieser Versuch soll euch zeigen, dass Bäume, Büsche, Blumen und alle anderen Pflanzen Aufgaben haben, an
                die man nicht unbedingt sofort denkt, die aber dennoch wichtig sind. Eine davon ist, die Erde
                zusammenzuhalten. Wenn an einem Ort Bäume abgeholzt werden, um zum Beispiel Möbel daraus zu machen und
                keine neuen Bäume gepflanzt werden, dann steigt hier das Risiko eines Erdrutsches. Das bedeutet, dass
                die Erde verrutscht, wenn es viel regnet. Das habt ihr hier mit der Gießkanne nachgestellt.
            </div>
        ),
        8: (
            <div>
                {" "}
                In echt hat das sehr schlimme Auswirkungen: ganze Städte werden verwüstet und Menschen verlieren ihr
                Zuhause. Aus diesem Grund ist es sehr wichtig, dass wir darauf achten, so viele Pflanzen wie nur möglich
                zu pflanzen und zu pflegen.{" "}
            </div>
        ),
    },
};
