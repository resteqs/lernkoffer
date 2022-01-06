// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG06.png";
import Tabelle from "./Media/Tabelle.png"
import React from "react";

export const SDG06_FreieArbeit: TextProps = {
    sdgNumber: 6,
    sdgTitle: "Forschertagebuch - Wasserverbrauch ",
    sdg: "SDG06",
    logo: Logo,
    header: {
        1: "Aufgabe",
        2: "Aufgabe",
        3: "Aufgabe",
        4: "Aufgabe",
        5: "Aufgabe",
        6: "Wasser-Spartipps",
        7: "Wasser-Spartipps",
        8: "Wasser-Spartipps",


    },

    text: {
        1: (
            <p>
                Wasser ist extrem wichtig für das Überleben vieler Lebewesen auf der Erde. Auch wir Menschen brauchen
                Wasser tagtäglich und benutzen es für viele verschiedene Dinge.{" "}
            </p>
        ),
        2: (
            <p>
                Überlegt doch einmal gemeinsam, für was ihr jeden Tag Wasser benutzt. Notiert dann für 5 Tage für welche
                Aktivität ihr wie viel Wasser verbraucht habt. Die Menge an Wasser könnt ihr entweder messen oder ihr
                schätzt es ab, wichtig ist hierbei, dass ihr überall die gleiche Einheit nehmt. Am besten geeignet wäre
                die Einheit „Liter“ und zum Zählen der Liter eine Strichliste, damit ihr am Ende alles ganz einfach
                zusammenzählen könnt. Außerdem stehen in der folgenden Tabelle nur ein paar Beispiele, bei denen man
                Wasser braucht. Diese Liste kann natürlich ergänzt und verändert werden, je nachdem wie euer
                „Wasser-Alltag“ aussieht.{" "}
            </p>
        ),
        3: <p>Jeder soll die Tabelle nun abzeichnen. Anschließend legt fest, von wann bis wann ihr sie ausfüllen wollt. Tragt in dieser Zeit gewissenhaft euren Wasserverbrauch ein und rechnet am Ende jedes Tages aus, wie viel ihr insgesamt genutzt habt. Wenn ihr mit allen 5 Tagen fertig seid, besprecht eure Ergebnisse und vergleicht eure Literanzahl. </p>,
        4: <img style = {{  marginLeft: "425px" }} src={Tabelle} alt="tabelle" />,
        5: <p>Lest euch nun noch abschließend folgende Tipps zum Wassersparen durch: </p>,
        6: <ul  style= {{ listStyleType: "disc" }}>
            <li>- zum Blumengießen Regenwasser benutzen </li>
            <li>- kurz Duschen anstatt Baden  </li>
            <li>- Warmwasserhahn nur aufdrehen, wenn es unbedingt notwendig ist</li>
            <li>- Wasserhahn zudrehen während des Einseifens </li>
            <li>- keinen Wasserhahn tropfen lassen, sondern immer ganz zudrehen </li>
            <li>- Waschmaschine voll machen und niedrigste benötigte Temperatur wählen </li>
            <li>- Geschirrspüler voll machen und Sparprogramm benutzen </li>
            <li>- Rasen seltener mähen </li>
            <li>- beim Toilettenspülen Stopp-/Spartaste betätigen</li>

        </ul>
    },
};
