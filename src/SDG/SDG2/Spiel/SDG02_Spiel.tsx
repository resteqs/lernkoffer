// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-const */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-unused-expressions */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import renderer from "react-dom";
import { Link } from "react-router-dom";
import { CSSProperties, useState } from "react";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { debug } from "console";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import Logo from "../../../SDGLogos/Goal-SDG02.png";
import "./sdg02.css";

import chilli from "./media/chilli.jpg";
import earth from "./media/earth.jpg";
import hamburger from "./media/hamburger.jpg";
import pumpkin from "./media/pumpkin.jpg";
import sushi from "./media/sushi.jpg";
import tajine from "./media/tajine.jpg";

export const SDG02_Spiel = (): JSX.Element => {
    let [showtext, setText] = React.useState(1);

    let [currentlyPicked, setPicked] = React.useState(1);

    let [obj1, setObj1] = React.useState(false);
    let [obj2, setObj2] = React.useState(false);
    let [obj3, setObj3] = React.useState(false);
    let [obj4, setObj4] = React.useState(false);
    let [obj5, setObj5] = React.useState(false);

    let [obj1number, setObj1number] = React.useState(0);
    let [obj2number, setObj2number] = React.useState(0);
    let [obj3number, setObj3number] = React.useState(0);
    let [obj4number, setObj4number] = React.useState(0);
    let [obj5number, setObj5number] = React.useState(0);
    const sdg = "SDG02";

    const noborder: CSSProperties = {
        background: "orange",
        fontSize: "1,5vh",
        padding: "2.5vh 2vh",
    };

    const withborder: CSSProperties = {
        background: "orange",
        fontSize: "1.5vh",
        padding: "0vh 2vh",
    };

    let buttonStyle = noborder;

    function toggleClass(): any {
        buttonStyle === noborder ? (buttonStyle = withborder) : buttonStyle === noborder;
        incrementCount();
    }

    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }

    // eslint-disable-next-line unicorn/consistent-function-scoping

    let button1 =
        obj1 === false ? (
            <div style={{ marginBottom: "2.5vh", paddingBottom: "1vh" }}>
                <button
                    className="pushable"
                    type="button"
                    onClick={() => {
                        setObj1number(currentlyPicked);
                        setPicked(currentlyPicked + 1);
                        incrementCount();
                        setObj1(true);
                    }}
                >
                    <div style={{ width: "38.4vh" }}>
                        <span className="shadow" />
                        <span className={infotextbutton.edgeorange} />
                        <span className="front" style={buttonStyle}>
                            Nord Amerika
                        </span>
                    </div>
                </button>{" "}
            </div>
        ) : (
            <div>{}</div>
        );
    let button2 =
        obj2 === false ? (
            <div style={{ marginBottom: "2.5vh", paddingBottom: "1vh" }}>
                <button
                    className="pushable"
                    type="button"
                    onClick={() => {
                        setObj2number(currentlyPicked);
                        setPicked(currentlyPicked + 1);
                        incrementCount();
                        setObj2(true);
                    }}
                >
                    <div style={{ width: "38.4vh" }}>
                        <span className="shadow" />
                        <span className={infotextbutton.edgeorange} />
                        <span className="front" style={buttonStyle}>
                            Afrika
                        </span>
                    </div>
                </button>{" "}
            </div>
        ) : (
            <div>{}</div>
        );
    let button3 =
        obj3 === false ? (
            <div style={{ marginBottom: "2.5vh", paddingBottom: "1vh" }}>
                <button
                    className="pushable"
                    type="button"
                    onClick={() => {
                        setObj3number(currentlyPicked);
                        setPicked(currentlyPicked + 1);
                        incrementCount();
                        setObj3(true);
                    }}
                >
                    <div style={{ width: "38.4vh" }}>
                        <span className="shadow" />
                        <span className={infotextbutton.edgeorange} />
                        <span className="front" style={buttonStyle}>
                            Europa
                        </span>
                    </div>
                </button>{" "}
            </div>
        ) : (
            <div>{}</div>
        );
    let button4 =
        obj4 === false ? (
            <div style={{ marginBottom: "2.5vh", paddingBottom: "1vh" }}>
                <button
                    className="pushable"
                    type="button"
                    onClick={() => {
                        setObj4number(currentlyPicked);
                        setPicked(currentlyPicked + 1);
                        incrementCount();
                        setObj4(true);
                    }}
                >
                    <div style={{ width: "38.4vh" }}>
                        <span className="shadow" />
                        <span className={infotextbutton.edgeorange} />
                        <span className="front" style={buttonStyle}>
                            Süd Amerika
                        </span>
                    </div>
                </button>{" "}
            </div>
        ) : (
            <div>{}</div>
        );
    let button5 =
        obj5 === false ? (
            <div style={{ marginBottom: "2.5vh", paddingBottom: "1vh" }}>
                <button
                    className="pushable"
                    type="button"
                    onClick={() => {
                        setObj5number(currentlyPicked);
                        setPicked(currentlyPicked + 1);
                        incrementCount();
                        setObj5(true);
                    }}
                >
                    <div style={{ width: "38.4vh" }}>
                        <span className="shadow" />
                        <span className={infotextbutton.edgeorange} />
                        <span className="front" style={buttonStyle}>
                            Asien
                        </span>
                    </div>
                </button>{" "}
            </div>
        ) : (
            <div>{}</div>
        );

    let buttons = (
        <section style={{ display: "block", float: "right" }}>
            <div>
                {button1}
                {button2}
                {button3}
                {button4}
                {button5}
            </div>
        </section>
    );

    const text = {
        1: (
            <div>
                <p style={{ marginTop: "3vh", marginLeft: "2.5vh" }} className="underlinedHeader">
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
                <p style={{ marginTop: "3vh", marginLeft: "2.5vh" }} className="underlinedHeader">
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
                <p style={{ marginTop: "3vh", marginLeft: "2.5vh" }} className="underlinedHeader">
                    {" "}
                    Einleitung:{" "}
                </p>
                <p className="einleitungText">
                    In diesem Spiel möchte ich, dass du dir verschiedene Gerichte ansiehst, die Beschreibung dazu liest
                    und dann entscheidest, von welchem Kontinent (Afrika, Asien, Europa, Nordamerika oder Südamerika)
                    dieses Gericht kommt (das könnt ihr natürlich auch in der Gruppe überlegen und entscheiden). Ihr
                    könnt dann einfach auf den Kontinent drücken, wo ihr denkt, dass das Essen herkommt. Am Ende siehst
                    du dann die richtige Lösung!
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
                    <div style={{ float: "left", maxWidth: "50%", marginBottom: "6vh" }}>
                        <p>
                            Beschreibung: Das ist eine Kürbissuppe. Bei der Zubereitung nimmt man einen Kürbis,
                            schneidet ihn in kleine Stücke und kocht diese, bis sie weich sind. Danach dann püriert man
                            sie und gibt noch etwas Flüssigkeit (z.B. Wasser oder Brühe) dazu, damit die Suppe flüssiger
                            wird.{" "}
                        </p>
                    </div>
                </section>
                {buttons}
            </div>
        ),
        6: (
            <div>
                <img className="center" src={hamburger} alt="" />
            </div>
        ),
        7: (
            <div>
                <section>
                    <div style={{ float: "left", maxWidth: "50%", marginBottom: "6vh" }}>
                        <p>
                            Beschreibung: Das ist ein Burger. Hier wird ein Brötchen in der Mitte durchgeschnitten und
                            mit verschiedenen Zutaten belegt. Im Normalfall sind Käse und eine Scheibe gebratenes
                            Hackfleisch. Man kann sich diese Burger sehr verschieden belegen. Manche legen noch Zwiebel
                            und Tomaten darauf oder Salat. Oft kommt auch eine Scheibe Gurke drauf und dann wird das
                            Ganze noch mit verschiedenen Saucen bestrichen.{" "}
                        </p>
                    </div>
                </section>
                {buttons}
            </div>
        ),
        8: (
            <div>
                <img className="center" src={chilli} alt="" />
            </div>
        ),
        9: (
            <div>
                <div>
                    <section>
                        <div style={{ float: "left", maxWidth: "50%", marginBottom: "6vh" }}>
                            <p>
                                Beschreibung: Das ist Chili Con Carne. Es ist eine Art Eintopf, in dem Hackfleisch und
                                Gemüse zusammen gekocht werden. Traditionell werden spezielle Chilibohnen sowie Mais
                                benutzt. Man kann aber auch sehr unterschiedliche Sachen selbst noch mit hineingeben. Es
                                gibt dieses Gericht auch für Vegetarier ohne Fleisch, dann heißt es Chili Sin Carne.
                                Meist ist dieses (egal ob mit oder ohne Fleisch) eher scharf, wie der Name „Chili“ schon
                                verrät.{" "}
                            </p>
                        </div>
                    </section>
                    {buttons}
                </div>
            </div>
        ),
        10: (
            <div>
                <img className="center" src={sushi} alt="" />
            </div>
        ),
        11: (
            <div>
                <section>
                    <div style={{ float: "left", maxWidth: "50%", marginBottom: "6vh" }}>
                        <p>
                            Beschreibung: Das ist Sushi. Es gibt viele verschiedene Arten von Sushi. Doch die meisten
                            bestehen aus klebrigem Reis, Fisch und teilweise Gemüse. Das dunkle, was um den Reis
                            gewickelt ist, ist eine bestimmte Art Algen, die man essen kann und kaum einen eigenen
                            Geschmack hat.{" "}
                        </p>
                    </div>
                </section>
                {buttons}
            </div>
        ),
        12: (
            <div>
                <img className="center" src={tajine} alt="" />
            </div>
        ),

        13: (
            <div>
                <section>
                    <div style={{ float: "left", maxWidth: "50%", marginBottom: "6vh" }}>
                        <p>
                            Beschreibung: Das ist Tajine. Es ist ein sehr traditionelles Gericht, das nach den Tontöpfen
                            benannt wurde, in denen es gekocht wird. Es gibt sehr viele verschiedene Arten von Tajine.
                            Meist werden sehr viel Gemüse, Fisch oder Fleisch und jede Menge verschiedener Gewürze
                            verwendet.{" "}
                        </p>
                    </div>
                </section>
                {buttons}
            </div>
        ),
        14: (
            <div>
                <p style={obj3number === 1 ? { color: "green" } : { color: "red" }}>Kürbissuppe kommt aus Europa. </p>
                <p style={obj1number === 2 ? { color: "green" } : { color: "red" }}>Burger kommt aus Nord Amerika. </p>
                <p style={obj4number === 3 ? { color: "green" } : { color: "red" }}>
                    Chili Con Carne kommt aus Süd Amerika.
                </p>
                <p style={obj5number === 4 ? { color: "green" } : { color: "red" }}>Sushi kommt aus Asien. </p>
                <p style={obj2number === 5 ? { color: "green" } : { color: "red" }}>Tajine kommt aus Afrika. </p>
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

    buttonBack =
        showtext >= 2 ? (
            <div style={{ marginTop: "0.5vh", marginLeft: "5vw" }} className="backbutton02s">
            {" "}
            <div style={{ position: "absolute", top: "67.5vh", left: "5vw" }}>
                <button className={infotextbutton.pushable} type="button" onClick={incrementCount}>
                    <span className={infotextbutton.shadow} />
                    <span className={infotextbutton.edge} />
                    <span className={infotextbutton.front} style={{ backgroundColor: "red" }}>
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


    buttonNext =
        showtext < 5 || showtext === 6 || showtext === 8 || showtext === 10 || showtext === 12 ? (
            <div style={{ marginTop: "0.5vh", marginLeft: "5vw" }} className="nextbutton">
                {" "}
                <div style={{ position: "absolute", top: "67.5vh", left: "85vw" }}>
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

    buttonEnd =
        showtext === 14 ? (
            <div style={{ marginTop: "25.5vh", marginLeft:"80vw", position:"absolute" }} className="nextbutton">
                <Link to="/Vorlagen/Endscreen">
                    {" "}
                    <button className={infotextbutton.pushable} type="button">
                        <span className={infotextbutton.shadow} />
                        <span className={infotextbutton.edgegreen} />
                        <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                            <p className={infotextbutton.buttontext}>Beenden </p>
                        </span>
                    </button>
                </Link>
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
