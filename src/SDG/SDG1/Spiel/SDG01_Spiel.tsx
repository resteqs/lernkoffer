// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
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
    // eslint-disable-next-line unicorn/consistent-function-scoping
    function toggleExplenation(): void {
        const x = document.getElementById("hover")!;
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }

    let buttonNext;
    let einleitung;
    let person1_1;
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

        person1_1 =
        showtext === 2 ? (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    Person Nr. 1.1: Wirtschaftsinformatiker{" "}
                </p>
                <p className="einleitungText">
                   <ul>
                    <li>&#9679;Branche: </li>
                    <li>&#9679;Definition: Arbeit in einem (meist großen) Unternehmen. Beschäftigt sich mit der Technik eines Unternehmens. Genauer gesagt damit, dass wichtige betriebswirtschaftliche Fragen (sagen einer Firma, was sie machen müssen, damit ihre Produkte gut verkauft werden/welche Produkte momentan besonders gut verkauft werden können) <abbr title="mit der Hilfe von Computern und moderner Technik" tabIndex={0}>digital</abbr> gelöst werden </li>  
                    <li>&#9679; </li>  
                    <li>&#9679; </li>  
                    <li>&#9679; </li>  
                    <li>&#9679; </li>  

                       </ul>{" "}
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

            <div id="hover"><p>test</p></div>

            {einleitung}
            {person1_1}
            {buttonNext}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG01_Spiel />, document.getElementById("root"));
