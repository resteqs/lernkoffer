// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-const */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */

import * as React from "react";
import renderer from "react-dom";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import "../../../styles/colour_sdgs.css";
import { Link } from "react-router-dom";
import Logo from "../../../SDGLogos/Goal-SDG01.png";

export const SDG01_Spiel = (): JSX.Element => {
    const sdg = "SDG01";
    let [showtext, setText] = React.useState(1);
    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }

    let buttonNext;
    let einleitung;
    buttonNext =
        showtext <= 3 ? (
            <div style={{ marginTop: "10px" }} className="nextbutton">
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
    einleitung =
        showtext === 1 ? (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    Einleitung:{" "}
                </p>
                <p className="einleitungText">
                    “Geld regiert die Welt” – Ein Sprichwort, das man oft in ganz verschiedenen Zusammenhängen hört.
                    Aber wer verdient eigentlich wie viel? Hast du dir dazu schon einmal Gedanken gemacht? Du wirst
                    gleich jeweils zwei Steckbriefe (oder nur den Namen) zu unterschiedlichen Berufen angezeigt
                    bekommen. Lies dir diese Informationen gut durch. Im Anschluss kannst du dir überlegen, mit welchem
                    dieser zwei Berufe man wohl mehr verdient (das könnt ihr auch in der Gruppe diskutieren und dann die
                    Antwort angeben, für die die Mehrheit ist).{" "}
                </p>
            </div>
        ) : (
            <div />
        );

    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Hochwertige Bildung <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>

            {einleitung}
            {buttonNext}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG01_Spiel />, document.getElementById("root"));
