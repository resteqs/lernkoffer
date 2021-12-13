// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import renderer from "react-dom";
import infotextbutton from "../../../../styles/Infotextbutton.module.css";
import "../../../../styles/colour_sdgs.css";
import { Link } from "react-router-dom";
import "../../../../styles/infotext.css";
import Logo from "../../../../SDGLogos/Goal-SDG02.png";
import wolf_pic from "./media/wolf.jpg";
import rabbit_pic from "./media/rabbit.jpg";
import { CSSProperties } from "react";

export const SDG02_Infotext_Fable = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(1);
    const sdg = "SDG02";

    const text = {
        1: (
            <div>
                <p>
                    Ein Wolf und ein Hase trafen sich zum Essen. Beide brachten etwas mit: der Wolf war gerade auf der
                    Jagd gewesen und legte ein Reh vor dem Hasen ab. Dieser hatte ein paar Karotten dabei, welche er
                    mühsam am Abend davor allein ausgegraben hatte.
                </p>
            </div>
        ),

        4: (
            <div>
                <p>
                    Es war nämlich kurz vor Winterbeginn und nicht mehr viele Karotten waren in der Erde zu finden. „Du
                    hast nur die kleinen Karotten mitgebracht?“, fragte der Wolf. „Ja“, sprach der Hase, „aber ich muss
                    dir auch sagen, dass ich nichts von deinem Reh essen werde.
                </p>
            </div>
        ),
        5: (
            <div>
                <p>
                    Zum einen ist es viel zu groß für mich, zum anderen mag ich überhaupt kein Fleisch.“. Der Wolf war
                    enttäuscht und zeigte kaum Verständnis: „Im Gegensatz zu dir, habe ich mir immerhin Mühe gegeben und
                    für dich gejagt.Deine Karotten esse ich auch nicht, denn mir schmeckt kein Gemüse. Die musstest du
                    eh einfach nur ausgraben.&quot;
                </p>
            </div>
        ),
        6: (
            <div>
                <p>
                    Als der Hase dies hörte, wurde er wütend und stampfte mit der Hinterpfote. „Für dich ist es
                    vielleicht einfach, für mich war es äußerst anstrengend sie zu finden. Und ich wäre bereit dazu
                    gewesen dir mein Essen für eine ganze Woche anzubieten“, erklärte er und schaute den Wolf
                    vorwurfsvoll an
                </p>
            </div>
        ),
        7: (
            <div>
                <p>
                    Der Hase überlegte kurz, stimmte ihm dann zu und für das nächste Treffen machten sie bereits am
                    Morgen davor einen gemeinsamen Ausflug aus. Durch den Hasen lernte der Wolf viele neue Tiere kennen,
                    die mit ihm das Reh essen wollen und der Wolf holte dafür einige Karotten aus dem Lager seines
                    Bekannten für den Hasen.
                </p>
            </div>
        ),

        8: (
            <div>
                <p>
                    Auch bei uns Menschen gibt es die einen, die sehr viel und die anderen, die zu wenig Essen haben.
                    Das kann eben daran liegen, dass in manchen Regionen nur zu bestimmten Jahreszeiten bestimmte
                    Lebensmittel da sind. Oder dass die Ernte kaputt geht, nach zu viel oder zu wenig Regen.{" "}
                </p>
            </div>
        ),
        9: (
            <div>
                <p>
                    Menschen in reichen Ländern merken das oft nicht, weil sie viel Essen von außerhalb ihres eigenen
                    Landes kaufen. Die Bewohner aus ärmeren Ländern hingegen können sich das nicht leisten und müssen
                    dann hungern
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
                <p>Fabel – Der Wolf und der Hase?</p>
            </div>
        ),
        4: (
            <div>
                <p>Fabel – Der Wolf und der Hase?</p>
            </div>
        ),
        5: (
            <div>
                <p>Fabel – Der Wolf und der Hase?</p>
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
        showtext <= 13 ? (
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
    // eslint-disable-next-line prefer-const
    wolf =
        showtext === 2 ? (
            <div>
                <img className="pic_show" src={wolf_pic} alt="" />
            </div>
        ) : (
            <div>
                <img className="pic_hide" src={wolf_pic} alt="" />{" "}
            </div>
        );

    // eslint-disable-next-line prefer-const
    rabbit =
        showtext === 3 ? (
            <div>
                <img className="pic_show" src={rabbit_pic} alt="" />
            </div>
        ) : (
            <div>
                <img className="pic_hide" src={rabbit_pic} alt="" />{" "}
            </div>
        );

    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Kein Hunger
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div className="infotextbox">
                <p className="headertext">
                    <b>{header[showtext]}</b>
                </p>{" "}
                <br />
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
