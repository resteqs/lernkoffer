// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-unused-expressions */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import renderer from "react-dom";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import { Link } from "react-router-dom";
import Logo from "../../../SDGLogos/Goal-SDG02.png";
import "./sdg02.css";

import chilli from "./media/chilli.jpg";
import earth from "./media/earth.jpg";
import hamburger from "./media/hamburger.jpg";
import pumpkin from "./media/pumpkin.jpg";
import sushi from "./media/sushi.jpg";
import tajine from "./media/tajine.jpg";

import { CSSProperties } from "react";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { debug } from "console";

export const SDG02_Spiel = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(1);
    let obj1:boolean; let obj2:boolean; let obj3:boolean;
    const sdg = "SDG02";

    const noborder:CSSProperties = {
        background: "orange",
        fontSize: "30px",
    }
    
    const withborder: CSSProperties = {
        background: "orange",
        fontSize: "30px",
        border: "black 10px solid",
    }

    
    let buttonStyle = noborder;

    function toggleClass():any {
        (buttonStyle === noborder) ? (buttonStyle = noborder):(buttonStyle === noborder);

        
    }

    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }

    // eslint-disable-next-line unicorn/consistent-function-scoping
    function obj1select(): void {
        obj1 = !obj1;        
    }
    function obj2select(): void {
        obj1 = !obj1;        
    }
    function obj3select(): void {
        obj1 = !obj1;        
    }

    const text = {
        1: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Einleitung:{" "}
                </p>
                <p className="einleitungText">
                    Bestimmt gibt es Sachen, die du sehr gerne isst und andere, die dir nicht so gut schmecken. Das ist
                    bei jedem etwas anderes, die einen mögen lieber süßes Essen, die anderen lieber scharfes Essen und
                    wieder andere essen bestimmte Dinge gar nicht, wie zum Beispiel Fleisch (diese Menschen leben
                    vegetarisch).{" "}
                </p>
            </div>
        ),

        2: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Einleitung:{" "}
                </p>
                <p className="einleitungText">
                    Auf der ganzen Welt isst man unterschiedliche Sachen. Das ist oftmals durch die Geschichte eines
                    Landes bedingt. Ein weiterer großer Faktor ist die Lage des Landes und damit verbunden, was dort
                    wächst und entsprechend gegessen werden kann.
                </p>
            </div>
        ),

        3: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Einleitung:{" "}
                </p>
                <p className="einleitungText">
                    In diesem Spiel möchte ich, dass du dir verschiedene Gerichte ansiehst, die Beschreibung dazu liest
                    und dann entscheidest, von welchem Kontinent (Afrika, Asien, Europa, Nord Amerika oder Süd Amerika)
                    dieses Gericht kommt (das könnt ihr natürlich auch in der Gruppe überlegen und entscheiden). Wenn
                    ihr euch alle Beschreibungen durchgelesen habt, kommt ihr zu einer Weltkarte. Nun könnt ihr die
                    Gerichte jeweils auf den Platz ziehen, wo ihr denkt, dass es herkommt.
                </p>
            </div>
        ),

        4: (
            <div>
                <img className="center" src={pumpkin} alt="" />
            </div>
        ),
        
        5: (
            <div>
                <section>
                    <div style={{ float: "left", maxWidth: "50%", marginBottom: "120px" }}>
                        <p>
                            Beschreibung: Das ist eine Kürbissuppe. Bei der Zubereitung nimmt man einen Kürbis, schneidet
                            ihn in kleine Stücken und kocht diese, bis sie weich sind. Wenn die Stückchen fertiggekocht
                            sind, dann püriert man sie und gibt noch etwas Flüssigkeit (z.B. Wasser oder Brühe) dazu, damit
                            die Suppe flüssiger wird.{" "}
                        </p>
                    </div>
                </section>
                
                <section style = {{ display: "block", float: "right" }}> 
                    <div >    
                        <div style = {{ marginBottom : "50px" }}>
                            <button className = "pushable" type="button" onClick = { () => {(buttonStyle === noborder) ? (buttonStyle = withborder):( " " ) }} >
                                <div style = {{ width: "768px" }}>
                                    <span className="shadow" style = {{ backgroundColor: "cc7000" }} />
                                    <span className={infotextbutton.edgeorange} />
                                    <span className="front" style = { buttonStyle }>Europa</span>
                                </div>
                            </button> { " " }
                        </div>
                        <div style = {{ marginBottom : "50px", paddingBottom: "20px" }}>
                            <button className = "pushable" type="button" onClick = { () => toggleClass()}> 
                                <div style = {{ width: "768px" }}>
                                    <span className="shadow" />
                                    <span className={infotextbutton.edgeorange} />
                                    <span className="front" style = { buttonStyle }>Amerika</span>
                                </div>
                            </button> { " " }
                        </div>
                        <div style = {{ marginBottom : "50px", paddingBottom: "20px" }}>
                            <button className = "pushable" type="button" onClick = { () => toggleClass()}>
                                <div style = {{ width: "768px" }}>
                                    <span className="shadow" />
                                    <span className={infotextbutton.edgeorange} />
                                    <span className= "front " style = { buttonStyle }> 
                                        Afrika
                                    </span>
                                </div>
                            </button> { " " }
                        </div>
                    </div>
                </section>
            </div>
        ),

        8: (
            <div>
                <p>.</p>
            </div>
        ),
        9: (
            <div>
                <p>.</p>
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

    
    let buttonBack;
    let buttonNext;
    let buttonEnd;
    let showobject1;
    let showobject2;

    // eslint-disable-next-line prefer-const
    buttonBack =
        showtext >= 2 ? (
            <div className="movedown">
                <div className="backbutton">
                    <div>
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
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
    // eslint-disable-next-line prefer-const
    buttonNext =
        showtext <= 13 ? (
            <div className="movedown">
                <div className="nextbutton">
                    <div>
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
                <p className="bodytext"> {text[showtext]}</p>
            </div>
            {buttonBack}
            {buttonNext}
            {buttonEnd}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG02_Spiel />, document.getElementById("root"));
