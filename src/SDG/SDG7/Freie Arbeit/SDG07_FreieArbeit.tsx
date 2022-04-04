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
        2: "Anleitung für das Experiment",
        3: "Anleitung für das Experiment",
        4: "Anleitung für das Experiment",
        5: "Anleitung für das Experiment",
        6: "Anleitung für das Experiment",
        7: "Anleitung für das Experiment",
        8: "Erklärung des Experiments",
    },
    text: {
        1: (
            <div>
                <p style={{ marginBottom: "30px" }}>
                    In diesem 7. Nachhaltigkeitsziel geht es um bezahlbare und saubere Energie. Ein Beispiel für
                    erneuerbare Energie ist die Sonnenenergie. Dabei werden die Energie und Wärme der Sonne, die durch
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
                <p style={{ marginBottom: "20px" }}>Benötigte Materialien:</p>
                <p style={{ marginLeft: "50px" }}>- 1 Körbchen</p>
                <p style={{ marginLeft: "50px" }}>- 1 Stück Aluminiumfolie</p>
                <p style={{ marginLeft: "50px" }}>- 1 Löffel</p>
                <p style={{ marginLeft: "50px" }}>- 1 kleine Kartoffel</p>
                <p style={{ marginLeft: "50px" }}>- 1 sauberer Nagel </p>
                <img
                    style={{ float: "right", marginRight: "200px", marginTop: "-350px", width: "500px" }}
                    src={Bild1}
                    alt=""
                />
                <ul style={{ marginTop: "60px" }}>
                    {" "}
                    <li>Ziel des Experiments: eine Kartoffel durchkochen </li>
                </ul>
            </div>
        ),
        3: (
            <div>
                <p style={{ width: "50%" }}>Schritt 1:</p>
                <p style={{ width: "50%" }}>
                    Nimm zuerst das Körbchen und die Aluminiumfolie. Lege die Folie mit der glänzenden Seite nach oben
                    in das Körbchen und kleide es mit ihr aus.
                </p>
                <img
                    style={{ float: "right", marginRight: "200px", marginTop: "-275px", width: "500px" }}
                    src={Bild2}
                    alt=""
                />
            </div>
        ),
        4: (
            <div>
                <p style={{ width: "50%" }}>Schritt 2:</p>
                <p style={{ width: "50%" }}>
                    Nimm als nächstes den Löffel und streiche die Folie in dem Körbchen möglichst glatt.
                </p>
                <img
                    style={{ float: "right", marginRight: "200px", marginTop: "-175px", width: "500px" }}
                    src={Bild3}
                    alt=""
                />
            </div>
        ),
        5: (
            <div>
                <p style={{ width: "50%" }}>Schritt 3:</p>
                <p style={{ width: "50%" }}>
                    Nimm dann den Nagel und steche ihn von unten mittig sowohl durch das Körbchen als auch durch die
                    Aluminiumfolie.{" "}
                </p>
                <img
                    style={{ float: "right", marginRight: "200px", marginTop: "-225px", width: "500px" }}
                    src={Bild4}
                    alt=""
                />
            </div>
        ),
        6: (
            <div>
                <p style={{ width: "50%" }}>Schritt 4:</p>
                <p style={{ width: "50%" }}>
                    Nimm zum Schluss die Kartoffel und stecke sie auf den herausstehenden Nagel.{" "}
                </p>
                <img
                    style={{ float: "right", marginRight: "200px", marginTop: "-200px", width: "500px" }}
                    src={Bild5}
                    alt=""
                />
            </div>
        ),
        7: (
            <p>
                Nun hast du alles fertig gebaut. Warte bis an einem Tag die Sonne viel scheint und stell dann das
                Körbchen ab der Mittagszeit in die Sonne, sodass sie direkt auf die Kartoffel scheint. Es kann helfen,
                wenn der Behälter etwas schräg steht und immer wieder während des Nachmittags in Richtung Sonne gedreht
                wird. Am Abend solltest du die Kartoffel essen können. Das erkennst du daran, wenn sie innen gelb und
                weich ist. Wenn du magst, kannst du auch andere Gemüsesorten auf diese Weise versuchen zu kochen.
                Wichtig ist dabei immer zu überprüfen, ob es durchgekocht ist.
            </p>
        ),
        8: (
            <p>
                Wie funktioniert das jetzt mit der Sonnenenergie? Die Aluminiumfolie sorgt dafür, dass die St rahlen der
                Sonne, wenn sie auf die Folie treffen, in einem Punkt in der Mitte des Körbchens gebündelt werden. Dort
                wird es sehr heiß und die Kartoffel wird an dieser Stelle gegart.
            </p>
        ),
    },
};
