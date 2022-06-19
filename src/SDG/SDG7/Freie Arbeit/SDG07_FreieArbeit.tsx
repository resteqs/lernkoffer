// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG07.png";
import Bild1 from "./Media/Bild1.png";
import Bild2 from "./Media/Bild2.png";
import Bild3 from "./Media/Bild3.png";
import Bild4 from "./Media/Bild4.png";
import Bild5 from "./Media/Bild5.png";

import React from "react";

export const SDG07_FreieArbeit: TextProps = {
    sdgNumber: 7,
    sdgTitle: "Experiment: Kartoffel garen",
    sdg: "SDG07",
    logo: Logo,
    header: {
        1: "Einleitung",
        2: "Benötigte Materialien:",
        3: "Ziel des Experiments: eine Kartoffel durchkochen",
        4: "Schritt 1:",
        5: "Schritt 1:",
        6: "Schritt 2:",
        7: "Schritt 2:",
        8: "Schritt 3:",
        9: "Schritt 3:",
        10: "Schritt 4:",
        11: "Schritt 4:",
        12: "Anleitung für das Experiment",
        13: "Anleitung für das Experiment",
    },
    text: {
        1: (
            <div>
                <p style={{ marginBottom: "20px" }}>
                    In diesem 7. Nachhaltigkeitsziel geht es um bezahlbare und saubere Energie. Ein Beispiel für
                    erneuerbare Energie ist die Sonnenenergie. Dabei werden die Energie und die Wärme der Sonne, die durch
                    die Sonnenstrahlen unsere Erde erreichen, genutzt. Diese Energie kann mittlerweile in andere Formen
                    umgewandelt werden, sodass sie beispielsweise nicht nur Wärme erzeugen kann, sondern auch Strom. Das
                    wird durch die sogenannten „Solarzellen“ gemacht, deren Technik „Photovoltaik“ genannt wird.
                </p>
                <p>
                    Bei dem Experiment, das ich dir nun erklären werde, kannst du selbst lernen, Sonnenenergie zu
                    gewinnen und zu nutzen.
                </p>
            </div>
        ),
        2: (
            <div>
                <p style={{ marginLeft: "50px" }}>- 1 Körbchen</p>
                <p style={{ marginLeft: "50px" }}>- 1 Stück Aluminiumfolie</p>
                <p style={{ marginLeft: "50px" }}>- 1 Löffel</p>
                <p style={{ marginLeft: "50px" }}>- 1 kleine Kartoffel</p>
                <p style={{ marginLeft: "50px" }}>- 1 sauberer Nagel </p>
            </div>
            ),
        3: <img style = {{ display:"block", marginLeft:"auto", marginRight:"auto", width:"30%" }}src={Bild1} alt="" />,        
        4: "Nimm zuerst das Körbchen und die Aluminiumfolie. Lege die Folie mit der glänzenden Seite nach oben in das Körbchen und kleide es mit ihr aus.",
        5: <img style = {{ display:"block", marginLeft:"auto", marginRight:"auto", width:"30%" }}src={Bild2} alt=""/>,
        6: "Nimm als Nächstes den Löffel und streiche die Folie in dem Körbchen möglichst glatt.",
        7: <img style = {{ display:"block", marginLeft:"auto", marginRight:"auto", width:"30%" }}src={Bild3} alt=""/>,
        8: "Nimm dann den Nagel und steche ihn von unten mittig sowohl durch das Körbchen als auch durch die Aluminiumfolie.",
        9: <img style = {{ display:"block", marginLeft:"auto", marginRight:"auto", width:"30%" }}src={Bild4} alt=""/>,
        10: "Nimm zum Schluss die Kartoffel und stecke sie auf den herausstehenden Nagel.",
        11: <img style = {{ display:"block", marginLeft:"auto", marginRight:"auto", width:"30%" }}src={Bild5} alt=""/>,
        12: "Nun hast du alles fertig gebaut. Warte bis an einem Tag die Sonne viel scheint und stell dann das Körbchen ab der Mittagszeit in die Sonne, sodass sie direkt auf die Kartoffel scheint. Es kann helfen, wenn der Behälter etwas schräg steht und immer wieder während des Nachmittags in Richtung Sonne gedreht wird. Am Abend solltest du die Kartoffel essen können. Das erkennst du daran, wenn sie innen gelb und weich ist. Wenn du magst, kannst du versuchen, andere Gemüsesorten auf diese Weise zu kochen. Wichtig ist, dabei immer zu überprüfen, ob es durchgekocht ist.",
        13: "Wie funktioniert das jetzt mit der Sonnenenergie? Die Aluminiumfolie sorgt dafür, dass die Strahlen der Sonne, wenn sie auf die Folie treffen, in einem Punkt in der Mitte des Körbchens gebündelt werden. Dort wird es sehr heiß und die Kartoffel wird an dieser Stelle gegart.",
    },
};
