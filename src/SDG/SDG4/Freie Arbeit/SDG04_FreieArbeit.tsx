import React from "react";
import renderer from "react-dom";
import { Link } from "react-router-dom";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import "../../../styles/colour_sdgs.css";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG04.png";
import Schule from "../Freie Arbeit/Schule.png";

export const SDG04_FreieArbeit = (): JSX.Element => {
    const [showtext, setText] = React.useState(1);
    const sdg = "SDG04";

    const text = {
        1: (
            <p>
                {" "}
                Jede Schule ist anders und oftmals ganz unterschiedlich ausgestattet. Aber auch das Schulgelände
                unterscheidet sich immer, das eine Mal gibt es ein großes Gebäude mit vielen Räumen und Gängen, ein
                anderes Mal findet der Unterricht draußen statt. Überlegt euch doch einmal, wie eure Wunsch-Schule
                aussehen würde.{" "}
            </p>
        ),
        2: (
            <div style={{ textAlign: "left", fontSize: "30px" }}>
                <p>
                    <ul>
                        <li>Zu folgenden Punkten könntet ihr euch z.B. Gedanken machen:</li>
                        <li> - Drinnen oder Draußen?</li>
                        <li>
                            {" "}
                            - Bei Gebäuden: Größe, Aussehen, Raumzahl, innenaustattung der Räume, Außenanlage, z.B.
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
                            Geräte)
                        </li>
                    </ul>
                </p>

                <p>
                    {" "}
                    Wenn ihr euch Gedanken gemacht habt, könnt ihr diese Ideen auch aufschreiben, damit ihr nichts
                    vergesst. Anschließend holt euch Stifte und Papier und fangt an zu malen{" "}
                </p>
                <p>
                    {" "}
                    Falls ihr nicht so viele Ideen habt oder gerne meine Wunsch-Schule sehen wollt, klickt auf weiter{" "}
                </p>
            </div>
        ),
        3: <img src={Schule} alt="" />,
        4: (
            <div style={{ textAlign: "left", fontSize: "30px" }}>
                <p>
                    {" "}
                    In der Pause (auf dem Bild links) könnt ihr Seilspringen oder andere Dinge spielen. Die Person links
                    vom Baum isst gerade Essen, was selbst von den Schüler:innen gekocht wurde (Zimmer unten links).
                    Manche Zutaten zum Kochen kann man auch oben auf dem Schuldach anbauen, wie Obst und Gemüse. Andere
                    Fächer im Schulhaus sind z.B. Musik, Sport und Mathe. Bei Musik ist die Besonderheit, dass man sich
                    ganz entspannt hinlegen kann und gemeinsam Musik hört, während etwas dazu erzählt wird. In Sport
                    kann jeder die Sportart machen, die ihm/ihr am meisten Spaß macht. Mathe, sowie andere Fächer, bei
                    denen man schreiben muss, finden im Klassenzimmer mit Tischen und Stühlen statt. Dort gibt es auch
                    eine Tafel für die Lehrkraft.Außerdem gibt es regelmäßig Stunden draußen in der Natur, bei denen es
                    darum geht, wie man die Natur schützen kann, aber auch, wie wir gemeinsam miteinander leben können.
                    Dabei wird auch gelernt, wie wir respektvoll und freundlich sind und was wir für uns und unsere
                    Gesundheit machen sollten.{" "}
                </p>
            </div>
        ),
        5: (
            <p>
                Seid ihr fertig? Dann zeigt doch eure schönen Bilder eurer Klasse, Freunden oder eurer Familie und
                erzählt ihnen, was ihr euch überlegt habt. Oder macht eine Ausstellung daraus, die von jedem besucht
                werden kann, der will. Vielleicht sind sogar ein paar Ideen dabei, die wirklich bei eurer Schule
                umgesetzt werden können.
            </p>
        ),
    };
    const header = {
        1: "Tutorial 1:",
        2: "Tutorial 1:",
        3: "So sieht meine Wunsch-Schule aus:",
        4: "So sieht meine Wunsch-Schule aus:",
        5: "Tutorial 2:",
    };

    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }

    const buttonBack = (
        <div className="backbutton" style={{ marginTop: "50px" }}>
            {" "}
            <button className={infotextbutton.pushable} type="button" onClick={decrementCount} disabled={showtext <= 1}>
                <span className={infotextbutton.shadow} />
                <span className={infotextbutton.edge} />
                <span className={infotextbutton.front}>
                    <p className={infotextbutton.buttontext}>Zurück</p>
                </span>
            </button>
        </div>
    );

    const buttonNext = (
        <div className="nextbutton" style={{ marginTop: "50px" }}>
            {" "}
            <button className={infotextbutton.pushable} type="button" onClick={incrementCount} disabled={showtext >= 4}>
                <span className={infotextbutton.shadow} />
                <span className={infotextbutton.edgegreen} />
                <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                    <p className={infotextbutton.buttontext}>Weiter</p>
                </span>
            </button>
        </div>
    );

    const buttonEnd = (
        <div className="nextbutton" style={{ marginTop: "50px" }}>
            <Link to="/Vorlagen/Endscreen">
                {" "}
                <button className={infotextbutton.pushable} type="button" disabled={showtext !== 5}>
                    <span className={infotextbutton.shadow} />
                    <span className={infotextbutton.edgegreen} />
                    <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                        <p className={infotextbutton.buttontext}>Weiter </p>
                    </span>
                </button>
            </Link>{" "}
        </div>
    );

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
