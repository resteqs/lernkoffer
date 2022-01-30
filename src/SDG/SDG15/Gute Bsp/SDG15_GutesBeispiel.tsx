// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG15.png";
import WWF from "../Gute Bsp/Media/WWF.jpg";

export const SDG15_GutesBeispiel: TextProps = {
    sdgNumber: 17,
    sdgTitle: " WWF ",
    sdg: "SDG15",
    logo: Logo,
    header: {
        1: "Einstieg",
        2: "Einstieg",
        3: "Inhalt", 
        4: "Wer oder was ist WWF?", 
        5: "Wer oder was ist WWF?", 
        6: "Was macht diese Organisation?",
        7: "Was macht diese Organisation?",
        8: "Schluss",
    },
    text: {
        1: (
            <div>
                {" "}
                <img style={{ paddingLeft: "26,5vw", height: "45vh", marginTop: "10vh" }} src={WWF} alt="" />{" "}
            </div>
        ),
        2: <div> Kennst du dieses Tier? Fällt dir ein Logo ein, auf dem es zu sehen ist? </div>,
        3: (
            <div>
                {" "}
                Vielleicht bist du schon auf WWF gekommen. Wenn nicht, ist es auch nicht schlimm. Ich möchte dir nun ein
                wenig über WWF erzählen, also wer das ist, was sie machen und warum.
            </div>
        ),
        4: (
            <div>
                {" "}
                WWF steht für World Wide Fund For Nature. Das ist Englisch und heißt so viel wie „Weltweite Kasse für
                die Natur“. Aber warum Kasse? – Naja, wie ihr an dem Namen schon erkennen könnt, kümmert sich diese
                Gruppe um die Natur. Da sie viele Sachen machen, benötigen sie auch Geld. Und dieses wird von der
                Organisation zentral verwaltet und den Projekten auf der ganzen Welt dann jeweils zugeteilt.{" "}
            </div>
        ),
        5: (
            <div>
                <ul>
                    <li>
                        {" "}
                        Aber nun zu der Arbeit, die WWF leistet und wer das überhaupt ist. Die Organisation wurde am 11.
                        September 1961 gegründet und zählt mittlerweile zu den größten weltweit aktiven
                        Umweltschutzorganisationen, die es gibt.
                    </li>
                    <li style={{ marginTop: "3vh" }}>
                        {" "}
                        Sie haben in fast 100 Ländern einen Sitz und sind in vielen mehr aktiv tätig, um zum Beispiel
                        den Klimawandel zu stoppen.
                    </li>
                </ul>
            </div>
        ),
        6: (
            <div>
                <ul>
                    <li>
                        {" "}
                        Besonders der Klimawandel stellt für die Menschen eine Herausforderung dar. Daher hat WWF es
                        sich zur Aufgabe gemacht, die Natur zu schützen. Insbesondere kümmern sie sich um die Ozeane,
                        Wälder, Frischwasser und eine vielfältige Tierwelt, da diese Dinge eine wichtige Grundlage für
                        das Leben der Menschen auf der Erde bilden.{" "}
                    </li>
                    <li style={{ marginTop: "3vh" }}>
                        {" "}
                        Zusätzlich arbeitet der Verein an den zwei größten Problemen für die Natur. Das sind zum einen
                        der Klimawandel und zum anderen die Essensproduktion.
                    </li>
                </ul>
            </div>
        ),
        7: (
            <div>
                {" "}
                Das dritte Ziel besteht darin, die Hauptprobleme für die Verluste der Natur zu finden und an ihnen zu
                arbeiten. Dazu zählen Finanzsysteme, diese müssten die Natur wertschätzen, Regierungssysteme, die ihre
                Bürger dazu motivieren sollten, die Erde zu schützen und als drittes wird die Wirtschaft verantwortlich
                gemacht. In dieser sollte eine nachhaltige Produktion und ein umweltfreundlicher Konsum normal werden.
            </div>
        ),
        8: (
            <div>
                <ul>
                    <li>
                        {" "}
                        WWF setzt sich aber nicht nur für die Natur, sondern auch für den Menschen ein. Zum Beispiel
                        wird die LGBTQ+ Bewegung, die sich um die Gleichstellung von nicht heterosexuellen Paaren
                        bemüht, unterstützt.
                    </li>
                    <li style={{ marginTop: "3vh" }}>
                        {" "}
                        Nachdem du diese Organisation nun besser kennst, könntest du dir selbst überlegen (oder auch in
                        der Gruppe), ob dir eine Möglichkeit einfällt, wie man die Tiere, die bei dir leben, schützen
                        kann. Oder sind dir in deiner Gemeinde schon einmal Ungerechtigkeiten aufgefallen? Dann könntest
                        du das deinen Eltern, Lehrern und Freunden erzählen und somit vielleicht etwas gutes Bewirken.
                        Ganz nach dem Vorbild von WWF.
                    </li>
                </ul>
            </div>
        ),
    },
};
