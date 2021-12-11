/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable unicorn/filename-case */

import * as React from "react";
import renderer from "react-dom";
import "../../../styles/colour_sdgs.css";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG01.png";
import { Infotext_Component } from "../../../Components/Infotext/Infotext_Component";
// eslint-disable-next-line import/no-duplicates
import EG from "./eg/EG.png";
// eslint-disable-next-line import/no-duplicates
import audiofile from "./eg/EG.png";

export interface content {
    id: number;
    text: JSX.Element;
}

export const SDG01_Infotext = (): JSX.Element => {
    const [showtext, setText] = React.useState(1);
    const sdg = "SDG01";
    const sdgNumber = 1;
    const maxSlides = 7;

    const text = {
        1: (
            <div>
                <p>
                    <b>“Verfügbarkeit von Jobs und einem gerechten Gehalt für alle gewährleisten”</b>
                </p>
            </div>
        ),
        2: (
            <div>
                <p className="Infotext02">
                    Ein sicherer Arbeitsplatz und vor allem faires Gehalt für jeden sind für die Struktur einer
                    Gesellschaft enorm wichtig. Viele Aspekte wie Ernährungssicherheit, Frieden und Bildung hängen stark
                    davon ab. Ein fester Job bildet aber auch die Grundlage für ein Leben, in dem ihr alle
                    Grundbedürfnisse befriedigen könnt, wie sich zu ernähren und ein Dach über dem Kopf zu haben.
                    Außerdem ist es wahrscheinlicher, dass Kinder, die in Armut leben, schlechte oder sogar gar keine
                    Bildung erfahren.{" "}
                </p>
            </div>
        ),
        3: (
            <div>
                <p className="Infotext02">
                    Im Jahre 2015 waren 700 Millionen Menschen von extremer Armut betroffen (zum Vergleich: 2020 lebten
                    fast 8 Milliarden Menschen auf der Welt). Extreme Armut betrifft Menschen die mit weniger als 1,57€
                    am Tag leben müssen und so ihre Grundbedürfnisse nicht mehr befriedigen können.
                </p>
            </div>
        ),
        4: (
            <div>
                <p className="Infotext02">
                    Aber Armut ist nicht nur auf schlechtes Einkommen zurückzuführen, sondern auch darauf ob Personen
                    eine Wahl haben, was sie tun wollen, ob die Menschenrechte in ihrem Land eingehalten werden und ob
                    sie Zugriff zu bestimmten Dienstleistungen (z.B. Arztbesuche) haben.{" "}
                </p>
            </div>
        ),
        5: (
            <div>
                <p className="Infotext02">
                    An vielen Orten auf dieser Welt werden Menschen schlecht bezahlt oder haben keinen Job und leben
                    daher unter der Armutsgrenze. Dies schränkt ihren Handlungsspielraum ein und lässt ihnen oft keine
                    Wahl, sodass sie Berufe mit niedrigen Sicherheitsstandards ausführen müssen, in denen sie möglichen
                    Gefahren ausgesetzt werden.
                </p>
            </div>
        ),
        6: (
            <div>
                <p className="Infotext02">
                    Wenn wir sicherstellen können, dass jeder einen sicheren und gut bezahlten Job je nach seinen
                    Fähigkeiten ausführen kann, wird dies natürlich dazu beitragen Armut zu bekämpfen und auszulöschen.
                    Es gehört aber noch mehr Arbeit dazu. Wir müssen zum Beispiel die Lebensstandards erhöhen, ihnen
                    Zugriff auf Bildung geben und vieles mehr.{" "}
                </p>
            </div>
        ),
        7: (
            <div>
                <p className="Infotext02">
                    Auch wir können gegen die Armut kämpfen indem wir Fördervereinen beitreten, Obdachlosen mit Geld
                    oder anderen Mitteln helfen oder benutzte Sachen spenden, anstatt sie wegzuwerfen
                </p>
            </div>
        ),
    };

    const header = {
        1: <p> </p>,
        2: <p>Warum?</p>,
        3: <p>Was ist das Problem?</p>,
        4: <p>Was ist das Problem?</p>,
        5: <p>Wie ist dieses Thema mit uns verbunden?</p>,
        6: <p>Wie ist dieses Thema mit uns verbunden?</p>,
        7: <p> Was können wir tun? </p>,
    };

    return (
        <div>
            <Infotext_Component
                logo={Logo}
                sdgNumber={sdgNumber}
                header={header[showtext]}
                text={text[showtext]}
                maxSlides={maxSlides}
                audioFile={audiofile}
                eg={EG}
                sdg={sdg}
                showtext={showtext}
                setText={setText}
            />
        </div>
    );
};
renderer.render(<SDG01_Infotext />, document.getElementById("root"));
