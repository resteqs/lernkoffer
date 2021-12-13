// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import renderer from "react-dom";
import { Link } from "react-router-dom";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import "../../../styles/colour_sdgs.css";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG03.png";
import Spielfeld from "./Spielfeld 03.png";
import "../sdg3.css";

export const SDG03_FreieArbeit = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(1);
    const sdg = "SDG03";

    const text = {
        1: `Das Nachhaltigkeitsziel Nummer drei trägt den Titel „Gesundheit und Wohlergehen“. Dazu gehört, wie du bereits weißt, auch die psychische Gesundheit (=seelische Gesundheit). Deshalb habe ich mir ein Spiel ausgedacht, bei dem du schöne Sachen zu dir und deinen Freunden/Freundinnen sagen sollst. Bei diesem Spiel ist es wichtig, dass niemand ausgelacht wird und alle ehrlich sind. Ihr braucht dafür nur einen Würfel und eine Spielfigur pro Spieler:in`,
        2: `Alle stellen am Anfang ihre Spielfigur auf das „Start“-Feld. Dann fängt jemand an zu würfeln. Die Zahl auf dem Würfel entspricht der Zahl an Feldern, die du deine Spielfigur in Pfeilrichtung bewegen darfst`,
        3: "Das Spielfeld ist ein Kreis, weil ihr so viele Runden spielen könnt, wie ihr möchtet. Auf den Feldern mit der Blume darfst du etwas Nettes über einen anderen Spieler/eine andere Spielerin sagen. Wenn du auf einem Spielfeld mit einem Buch ankommst, dann denke dir etwas aus, das du selbst sehr gut kannst und möchtest, dass die anderen wissen.",
        4: "Die Dinge, die ihr sagt, können ganz unterschiedlich sein. Zum Beispiel könntet ihr sagen, dass ihr die Augenfarbe einer Mitspielerin/eines Mitspielers sehr schön findet. Oder wenn ihr selbst zum Beispiel sehr gut zeichnen könnt oder gerne Sport macht, oder sonst etwas gerne macht, dann könnt ihr das den anderen mitteilen",
        5: "Außerdem könnt ihr euch die Sachen aufschreiben, die andere zu euch sagen und wenn es euch einmal nicht so gut geht, dann könnt ihr euch daran erinnern, was ihr alles könnt und was andere an euch toll finden. Hoffentlich geht es euch dann auch gleich wieder besser.",
        6: <img className="Spielfeld03" src={Spielfeld} alt="" />,
    };
    const header = {
        1: "Einleitung",
        2: "Spielablauf",
        3: "Spielablauf",
        4: "Spielablauf",
        5: "Spielablauf",
    };
    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }
    let buttonBack;
    let buttonNext;
    let buttonEnd;

    // eslint-disable-next-line prefer-const
    buttonBack =
        showtext >= 2 ? (
            <div className="backbutton">
                {" "}
                <button className={infotextbutton.pushable} type="button" onClick={decrementCount}>
                    <span className={infotextbutton.shadow} />
                    <span className={infotextbutton.edge} />
                    <span className={infotextbutton.front}>
                        <p className={infotextbutton.buttontext}>Zurück</p>
                    </span>
                </button>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
    // eslint-disable-next-line prefer-const
    buttonNext =
        showtext <= 5 ? (
            <div className="nextbutton">
                {" "}
                <button className={infotextbutton.pushable} type="button" onClick={incrementCount}>
                    <span className={infotextbutton.shadow} />
                    <span className={infotextbutton.edgegreen} />
                    <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                        <p className={infotextbutton.buttontext}>Weiter</p>
                    </span>
                </button>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
    // eslint-disable-next-line prefer-const
    buttonEnd =
        showtext === 6 ? (
            <div className="nextbutton">
                <Link to="/Vorlagen/Endscreen">
                    {" "}
                    <button className={infotextbutton.pushable} type="button">
                        <span className={infotextbutton.shadow} />
                        <span className={infotextbutton.edgegreen} />
                        <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                            <p className={infotextbutton.buttontext}>Weiter </p>
                        </span>
                    </button>
                </Link>{" "}
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    // eslint-disable-next-line prefer-const
    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Freie Arbeit
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div className="infotextbox">
                <p className="headertext">
                    <b>{header[showtext]}</b>
                </p>{" "}
                <br />
                <p className="bodytext"> {text[showtext]} </p>
            </div>
            {buttonBack}
            {buttonNext}
            {buttonEnd}
        </div>
    );
};
