// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-unused-expressions */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import renderer from "react-dom";
import { Link } from "react-router-dom";

import { CSSProperties } from "react";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import Logo from "../../../SDGLogos/Goal-SDG08.png";

export const SDG08_Quiz_Prolog = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(1);
    const sdg = "SDG08";

    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }

    const text = {
        1: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Einstieg:{" "}
                </p>
                <p className="einleitungText">
                    Kinder auf der ganzen Welt haben einen sehr unterschiedlichen Alltag. Es gibt beispielsweise Kinder,
                    die untertags arbeiten müssen und andere, die stattdessen in die Schule gehen. Als nächstes werdet
                    ihr eine kurze Geschichte gezeigt bekommen, die ausgedacht ist, aber so passieren könnte.{" "}
                </p>
            </div>
        ),

        2: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Geschichte:{" "}
                </p>
                <p className="einleitungText">
                    Hallo, mein Name ist Milo und ich bin 10 Jahre alt. Ich lebe mit meinen 3 älteren Geschwistern und
                    meinen Eltern in einem Haus mit 2 Räumen. Meine 2 älteren Brüder, die 13 und 15 Jahre alt sind,
                    helfen meinem Vater bei der Arbeit auf dem Baumwollfeld. Das ist wirklich anstrengend und deshalb
                    braucht Vater auch ihre Hilfe. Außerdem verdienen sie so etwas Geld mit. Meine ältere Schwester ist
                    11 Jahre alt und verkauft gemeinsam mit mir und meiner Mutter auf dem Markt Obst und Gemüse.{" "}
                </p>
            </div>
        ),

        3: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Geschichte:{" "}
                </p>
                <p className="einleitungText">
                    Da ich den ganzen Tag über mithelfen muss, war ich schon seit mehreren Monaten nicht mehr in der
                    Schule. Weil ich oft die Preise unseres Obstes und Gemüses für unsere Kunden ausrechnen muss, klappt
                    das Rechnen mittlerweile ganz gut. Ich brauche aber oft sehr lange beim Lesen und beim Schreiben.
                    Meine Geschwister sind auch schon seit längerem nicht mehr in der Schule gewesen.{" "}
                </p>
            </div>
        ),

        4: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Einleitung:{" "}
                </p>
                <p className="einleitungText">
                    Manchmal wünsche ich mir wieder in die Schule gehen zu können. Dort sind andere Kinder mit denen ich
                    spielen kann, auf dem Markt sitze ich oft alleine da. Außerdem möchte ich noch lernen können.{" "}
                </p>
            </div>
        ),

        5: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Einleitung:{" "}
                </p>
                <p className="einleitungText">
                    Aber ich mag es zu wissen, dass ich meiner Familie gerade helfen kann und ohne mich, meine Schwester
                    und meine Brüder könnten meine Eltern nicht genug Geld verdienen. Dann hätten wir zu wenig zu essen
                    oder kein Haus, in dem wir leben könnten. Für diese Dinge bin ich nämlich sehr dank-bar. Vielleicht
                    kann ich ja irgendwann doch wieder in die Schule und später Lehrer werden. Das wäre mein Traumberuf.
                    Dafür muss ich jedoch selbst gut Lesen, Schreiben und Rechnen können.{" "}
                </p>
            </div>
        ),
        6: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Definition „Kinderarbeit“:{" "}
                </p>
                <p className="einleitungText">
                    Kinderarbeit heißt, dass Kinder unter 18 Jahren arbeiten und dafür Geld bekommen. Für diese Arbeit
                    sind die Kinder jedoch noch zu jung oder sie ist besonders gefährlich. Das kann dann dazu führen,
                    dass sie sich nicht richtig entwickeln können, da ihre Gesundheit und/oder ihre Seele darunter
                    leiden.{" "}
                </p>
            </div>
        ),
        7: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Definition „Kinderarbeit“:{" "}
                </p>
                <p className="einleitungText">
                    Durch das meist sehr lange Arbeiten können die Kinder nicht spielen, in die Schule gehen oder sich
                    einmal ausruhen. Es ist besonders schlimm, wenn diese Dinge nicht für sie machbar sind, denn alle
                    Kinder haben ein Recht auf Erholung, Freizeit und Spiel, Bildung und Gesundheit. Deshalb gibt es in
                    vielen Ländern bereits Gesetze, die regeln, ab welchem Alter und wie lange Kinder arbeiten dürfen.
                    Jedoch fehlt das in anderen Ländern noch oder es wird nicht genau und gut genug kontrolliert.{" "}
                </p>
            </div>
        ),
    };

    let buttonBack;
    let buttonNext;
    let buttonEnd;

    // eslint-disable-next-line prefer-const
    buttonBack =
        showtext >= 2 ? (
            <div style={{ marginTop: "1px" }} className="backButtonDiv">
                {" "}
                <button type="button" onClick={decrementCount} className="backButton">
                    &#129044;
                </button>
            </div>
        ) : (
            <div> </div>
        );

    // eslint-disable-next-line prefer-const
    buttonNext =
        showtext < 7  ? (
            <div style={{ marginTop: "10px" }} className="nextbutton">
                {" "}
                <div style={{ position: "absolute", top: "750px", left: "1700px" }}>
                    <button className={infotextbutton.pushable} type="button" onClick={incrementCount}>
                        <span className={infotextbutton.shadow} />
                        <span className={infotextbutton.edgegreen} />
                        <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                            <p className={infotextbutton.buttontext}>Weiter</p>
                        </span>
                    </button>
                </div>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
    // eslint-disable-next-line prefer-const
    buttonEnd =
        showtext === 7 ? (
            <div className="nextbutton">
                <Link to="/SDG08/Quiz">
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

    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Geschlechter­gleichstellung
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div className="spacer">
                <p className="bodytext"> {text[showtext]}</p>
            </div>
            {buttonBack}
            {buttonNext}
            {buttonEnd}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG08_Quiz_Prolog />, document.getElementById("root"));
