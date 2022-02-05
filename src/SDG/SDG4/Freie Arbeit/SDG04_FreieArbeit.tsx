// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import renderer from "react-dom";
import { Link } from "react-router-dom";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import "../../../styles/colour_sdgs.css";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG04.png";
import Schule from "../Freie Arbeit/Schule.png";

export const SDG04_FreieArbeit = (): JSX.Element => {
    // eslint-disable-next-line prefer-const

    const [showtext, setText] = React.useState(1);
    const sdg = "SDG04";

    const text = {
        1: (
            <div>
                <p>
                    {" "}
                    Jede Schule ist anders und oftmals ganz unterschiedlich ausgestattet. Auch das Schulgelände
                    unterscheidet sich immer, manche Schulen haben ein großes Gebäude mit vielen Räumen und Gängen, in
                    anderen Schulen findet der Unterricht draußen statt. Überlegt euch doch einmal, wie eure
                    Wunsch-Schule aussehen würde.{" "}
                </p>
            </div>
        ),
        2: (
            <div style={{ textAlign: "left", fontSize: "30px" }}>
                <p>
                    <ul>
                        <li>Zu folgenden Punkten könntet ihr euch z.B. Gedanken machen:</li>
                        <li> - Unterrricht drinnen oder draußen?</li>
                        <li>
                            {" "}
                            - Bei Gebäuden: Größe, Aussehen, Raumzahl, Innenaustattung der Räume, Außenanlage, z.B.
                            Spielplatz, Wiese zum Spielen etc.
                        </li>
                        <li> - In der Natur: Möbel, Wetterschutz, Essen und Trinken</li>
                        <li> - Welche Regeln sollte es geben?</li>
                        <li> - Für wen ist die Schule?</li>
                        <li>
                            {" "}
                            - Für was wird sie alles genutzt und was braucht ihr deshalb? (z.B. für das Fach „Kochen“
                            ist eine Küche/Feuerstelle nötig)
                        </li>
                        <li>
                            {" "}
                            - Was benutzt ihr im Unterricht? (z.B. Kreide und Tafel, Papier und Stift oder elektronische
                            Geräte){" "}
                        </li>
                    </ul>
                </p>

                <p style={{ marginTop: "3vh" }}>
                    {" "}
                    Wenn ihr euch dazu Gedanken gemacht habt, könnt ihr diese Ideen auch aufschreiben, damit ihr nichts
                    vergesst. Anschließend holt euch Stifte und Papier und fangt an zu malen!{" "}
                </p>
                <p>
                    {" "}
                    Falls ihr nicht so viele Ideen habt oder gerne meine Wunsch-Schule sehen wollt, könnt ihr auf
                    “Weiter“ klicken!{" "}
                </p>
            </div>
        ),
        3: (
            <div>
                <p>
                    {" "}
                    <img src={Schule} alt="" />{" "}
                </p>
            </div>
        ),
        4: (
            <div style={{ textAlign: "left", fontSize: "30px" }}>
                <p>
                    {" "}
                    In der Pause (auf dem Bild links) könnt ihr Seilspringen oder andere Dinge spielen. Die Person links
                    vom Baum isst gerade Essen, was selbst von den Schüler:innen gekocht wurde (Zimmer unten links).
                    Manche Zutaten zum Kochen kann man auch oben auf dem Schuldach anbauen, wie zum Beispiel Obst und
                    Gemüse. Andere Fächer, die im Schulhaus unterrichtet werden, sind z.B. Musik, Sport und Mathe. Bei Musik ist die Besonderheit,
                    dass man sich ganz entspannt hinlegen kann und gemeinsam Musik hört, während etwas dazu erzählt
                    wird. In Sport kann jeder die Sportart machen, die ihm/ihr am meisten Spaß macht. Mathe, sowie
                    andere Fächer, bei denen man schreiben muss, finden im Klassenzimmer mit Tischen und Stühlen statt.
                    Dort gibt es auch eine Tafel für die Lehrkraft. Außerdem gibt es regelmäßig Stunden draußen in der
                    Natur, bei denen es darum geht, wie man die Natur schützen kann, aber auch, wie wir gemeinsam
                    miteinander leben können. Dabei wird auch gelernt, wie wir respektvoll und freundlich sind und was
                    wir für uns und unsere Gesundheit machen sollten.{" "}
                </p>
            </div>
        ),
        5: (
            <div>
                <p>
                    Seid ihr fertig? Dann zeigt doch eure schönen Bilder eurer Klasse, Freunden oder eurer Familie und
                    erzählt ihnen, was ihr euch überlegt habt. Oder macht eine Ausstellung daraus, die von jedem besucht
                    werden kann, der will. Vielleicht sind sogar ein paar Ideen dabei, die wirklich bei eurer Schule
                    umgesetzt werden können.
                </p>
            </div>
        ),
    };
    const header = {
        1: (
            <div>
                <p>Tutorial 1:</p>
            </div>
        ),
        2: (
            <div>
                <p>Tutorial 1:</p>
            </div>
        ),
        3: (
            <div>
                <p>So sieht meine Wunsch-Schule aus:</p>
            </div>
        ),
        4: (
            <div>
                <p>So sieht meine Wunsch-Schule aus:</p>
            </div>
        ),
        5: (
            <div>
                <p>Tutorial 2:</p>
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

    // eslint-disable-next-line prefer-const
    buttonBack =
        showtext >= 2 ? (
            <div className="backbutton" style={{ marginTop: "50px" }}>
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
        showtext <= 4 ? (
            <div className="nextbutton" style={{ marginTop: "50px" }}>
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
        showtext === 5 ? (
            <div className="nextbutton" style={{ marginTop: "50px" }}>
                <Link to="/Vorlagen/Endscreen">
                    {" "}
                    <button className={infotextbutton.pushable} type="button">
                        <span className={infotextbutton.shadow} />
                        <span className={infotextbutton.edgegreen} />
                        <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                            <p className={infotextbutton.buttontext}>Beenden </p>
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
                    Hochwertige Bildung
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
// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG04_FreieArbeit />, document.getElementById("root"));
