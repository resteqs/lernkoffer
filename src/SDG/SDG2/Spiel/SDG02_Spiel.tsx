// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import renderer from "react-dom";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import { Link } from "react-router-dom";
import Logo from "../../../SDGLogos/Goal-SDG02.png";
import "./sdg02.css";

import { CSSProperties } from "react";

export const SDG02_Spiel = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(1);
    const sdg = "SDG02";

    const text = {
        1: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader"> Einleitung: { " " }</p>
                <p className = "einleitungText">
                    Bestimmt gibt es Sachen, die du sehr gerne isst und andere, die dir nicht so gut schmecken. Das ist
                    bei jedem etwas anderes, die einen mögen lieber süßes Essen, die anderen lieber scharfes Essen und
                    wieder andere essen bestimmte Dinge gar nicht, wie zum Beispiel Fleisch (diese Menschen leben
                    vegetarisch). {" "}
                </p>
            </div>
        ),

        2: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader"> Einleitung: { " " }</p>  
                    <p className = "einleitungText">
                    Auf der ganzen Welt isst man unterschiedliche Sachen. Das ist oftmals durch die Geschichte eines
                    Landes bedingt. Ein weiterer großer Faktor ist die Lage des Landes und damit verbunden, was dort
                    wächst und entsprechend gegessen werden kann.
                </p>
            </div>
        ),

        3: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader"> Einleitung: { " " }</p>  
                    <p className = "einleitungText">
                    In diesem Spiel möchte ich, dass du dir verschiedene Gerichte ansiehst, die Beschreibung dazu liest
                    und dann entscheidest, von welchem Kontinent (Afrika, Asien, Europa, Nord Amerika oder Süd Amerika)
                    dieses Gericht kommt (das könnt ihr natürlich auch in der Gruppe überlegen und entscheiden). Wenn
                    ihr euch alle Beschreibungen durchgelesen habt, kommt ihr zu einer Weltkarte. Nun könnt ihr die
                    Gerichte jeweils auf den Platz ziehen, wo ihr denkt, dass es herkommt.
                </p>
            </div>
        ),

        6: (
            <div>
                <p>
.
                </p>
            </div>
        ),
        7: (
            <div>
                <p>
.
                </p>
            </div>
        ),

        8: (
            <div>
                <p>
.
                </p>
            </div>
        ),
        9: (
            <div>
                <p>
.
                </p>
            </div>
        ),
        10: (
            <div>
                <p>
                    Das Problem ist, dass die Gruppe mit zu viel Nahrung oft nicht weiß, wie sie denen mit zu wenig
                    Nahrung helfen kann. Dabei können Fehler passieren und im schlimmsten Fall die aktuelle Lage
                    verschlechtern.{" "}
                </p>
            </div>
        ),
        11: (
            <div>
                <p>
                    Weil die „Reichen“ nicht immer wissen, wie es „Armen“ geht, verstehen sie nicht die
                    Herausforderungen, die bei der benachteiligten Gemeinschaft tagtäglich bestehen.
                </p>
            </div>
        ),
        12: (
            <div>
                <p>
                    Deshalb ist es so wichtig, dass alle miteinander reden, um herauszufinden wie am besten geholfen
                    werden kann, damit wie in diesem Beispiel der Wolf dem Hasen gegen dessen Hunger helfen kann.
                </p>
            </div>
        ),

        13: (
            <div>
                <p>
                    Alle Lebewesen auf der Erde sollten genügend zum Essen haben. Im Nachhaltigkeitsziel 02 geht es
                    darum, dafür zu sorgen, dass es keinen Hunger mehr in unserer Welt gibt. In diesem werden
                    verschiedene Bereiche angegangen, die mit Essen und der Landwirtschaft verbunden sind.
                </p>
            </div>
        ),
        14: (
            <div>
                <p>
                    Um mehr darüber zu erfahren, nehmt euch die EarthyGlobe Figur und lest über den Hintergrund und die
                    Probleme, die durch den Hunger weltweit entstehen. Abschließend erfahrt ihr auch, wie ihr helfen
                    könnt.
                </p>
            </div>
        ),
    };
    const header = {
        1: (
            <div>
                <p>Einleitung</p>
            </div>
        ),
        4: (
            <div>
                <p>Einleitung</p>
            </div>
        ),
        5: (
            <div>
                <p>Einleitung</p>
            </div>
        ),
        6: (
            <div>
                <p>Fabel – Der Wolf und der Hase?</p>
            </div>
        ),
        7: (
            <div>
                <p>Fabel – Der Wolf und der Hase?</p>
            </div>
        ),
        8: (
            <div>
                <p>Moral der Fabel</p>
            </div>
        ),
        9: (
            <div>
                <p>Moral der Fabel</p>
            </div>
        ),
        10: (
            <div>
                <p>Moral der Fabel</p>
            </div>
        ),
        11: (
            <div>
                <p>Moral der Fabel</p>
            </div>
        ),
        12: (
            <div>
                <p>Moral der Fabel</p>
            </div>
        ),
        13: (
            <div>
                <p>Überleitung</p>
            </div>
        ),
        14: (
            <div>
                <p>Überleitung</p>
            </div>
        ),
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
    let wolf;
    let rabbit;

    // eslint-disable-next-line prefer-const
    buttonBack =
        showtext >= 2 ? (
            <div className ="movedown">
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
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
    // eslint-disable-next-line prefer-const
    buttonNext =
        showtext <= 13 ? (
            <div className ="movedown">
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
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
    // eslint-disable-next-line prefer-const
    buttonEnd =
        showtext === 14 ? (
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

    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Kein Hunger
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div className="spacer">
                <p className="bodytext">
                    {" "}
                    {text[showtext]} {wolf} {rabbit}
                </p>
            </div>
            {buttonBack}
            {buttonNext}
            {buttonEnd}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG02_Spiel />, document.getElementById("root"));
