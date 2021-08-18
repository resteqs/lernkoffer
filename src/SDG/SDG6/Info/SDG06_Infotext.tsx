// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */

import * as React from "react";
import renderer from "react-dom";
import "../../../styles/colour_sdgs.css";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG06.png";

export const SDG06_Infotext = (): JSX.Element => {
    const [showtext, setText] = React.useState(1);
    const sdg = "SDG06";
    const text = {
        1: `
Im Jahr 2017 konnten geschätzte 3 Milliarden Menschen (zum Vergleich: 2020 gab es welt-weit fast 8 Milliarden Menschen auf der Welt) ihre Hände zu Hause nicht sicher waschen - eine der billigsten, einfachsten und effektivsten Möglichkeiten, die Ausbreitung von Krank-heiten zu verhindern.
Wasser-, Sanitär- und Hygienedienstleistungen sind auch nicht immer in medizinischen Ver-sorgungseinrichtungen verfügbar: In vielen Einrichtungen auf der ganzen Welt fehlt es an den Versorgungsstellen an grundlegender Wasserversorgung, es gibt keine sanitären Einrich-tungen oder es fehlt an Seife und Wasser. 
Und heute begegnen 4,2 Milliarden Menschen im-mer noch täglichen Herausforderungen, selbst auf die grundlegendsten Dienstleistungen zu-zugreifen. 
Davon müssen 673 Mio. Menschen in der Öffentlichkeit auf die Toilette gehen.`,
        2: `Es wird an vielen Orten schwieriger sein, vorherzusagen, ob Wasser verfügbar sein wird. In einigen Regionen verschlimmern Dürren die Wasserknappheit und beeinträchtigen daher die Gesundheit und Produktivität der Menschen. 
Darüber hinaus bedroht es die Natur im Allge-meinen, zum Beispiel die Artenvielfalt (d. h. die Anzahl und Art der Pflanzen und Tiere, die in einem bestimmten Gebiet oder auf der ganzen Welt existieren) und die Fähigkeit der Öko-systeme, sich an eine sich weltweit verändernde Umwelt anzupassen.
Wenn wir sicherstellen können, dass jeder Zugang zu nachhaltigen Wasser- und Sanitär-diensten hat, wird dies uns helfen, den Klimawandel zu mildern. 
Durch eine nachhaltige Ver-waltung unseres Wassers können wir auch unsere Nahrungsmittel- und Energieproduktion besser steuern und zu menschenwürdiger Arbeit und Wirtschaftswachstum beitragen. 
Ohne eine bessere Infrastruktur und Verwaltung werden jedes Jahr weitere Millionen von Men-schen an wasserbedingten Krankheiten wie Malaria sterben.`,
    };
    const header = {
        1: "Was ist das Problem? ",
        2: "Was können wir tun? ",
    };

    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }
    return (
        <div>
            <div className={`colour_${sdg}`}>
                <div className="header">
                    Hochwertige Bildung <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div className="infotextbox">
                <p>
                    <b>{header[showtext]}</b>
                </p>{" "}
                <br />
                <p> {text[showtext]} </p>
            </div>
            <button className="backbutton" type="button" onClick={decrementCount}>
                Zurück
            </button>
            <button className="nextbutton" type="button" onClick={incrementCount}>
                Weiter
            </button>
        </div>
    );
};

// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG06_Infotext />, document.getElementById("root"));
