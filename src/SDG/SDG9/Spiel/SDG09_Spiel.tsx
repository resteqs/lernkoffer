// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import renderer from "react-dom";
import { Link } from "react-router-dom";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import "../../../styles/colour_sdgs.css";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG09.png";
import "../sdg9.css"

export const SDG09_Spiel = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(1);
    const sdg = "SDG09";
    const maxslide = 8;

    const text = {
        1: (
            <div style={{ textAlign: "left", fontSize: "40px" }}>
                <p>
                    {" "}
                    Große Projekte, also solche, die sehr schwierig sind oder bei denen viele verschiedene Menschen und
                    manchmal sogar unterschiedliche Länder beteiligt sind, haben zwar einige Vorteile, allerdings
                    entstehen hier auch häufig Probleme. Diese können sehr unterschiedlich sein. Eine dieser
                    Schwierigkeiten ist die Kommunikation (= Austausch von Informationen und Wissen zwischen den
                    Beteiligten).{" "}
                </p>
            </div>
        ),
        2: (
            <div style={{ textAlign: "left", fontSize: "40px" }}>
                <p>
                    {" "}
                    Das könnt ihr auch im Kleinen in eurer Gruppe einmal mit einem Spiel ausprobieren. Ihr werdet
                    schnell merken, wo die Schwierigkeit liegt, aber es wird bestimmt auch lustig werden.{" "}
                </p>
            </div>
        ),
        3: (
            <div style={{ textAlign: "left", fontSize: "40px" }}>
                <ul>
                    <li>
                        Zuerst setzen sich nur drei oder vier Leute in einen Kreis, je nachdem, wie viele ihr seid. Dann
                        denkt sich eine:r ein Wort aus und flüstert das dem/der linken Nachbarn/Nachbarinnen leise ins
                        Ohr.{" "}
                    </li>
                    <li>
                        Diese:r flüstert das, was er/sie verstanden hat dann wieder seinem/seiner linken
                        Nachbarn/Nachbarin ins Ohr. So geht es immer weiter. Wenn ihr bei der letzten Person angekommen
                        seid, sagt diese laut, was sie verstanden hat.{" "}
                    </li>
                </ul>
            </div>
        ),
        4: (
            <div style={{ textAlign: "left", fontSize: "40px" }}>
                <ul>
                    <li>
                        Während dem ganzen Spiel müssen die anderen, die gerade nicht das Wort flüstern, leise sein. Und
                        wenn ihr das Wort von eurem/eurer Nachbarn/Nachbarin zugeflüstert bekommt und es nicht ganz
                        versteht, dürft ihr nicht nachfragen, was er/sie gesagt hat, sondern ihr gebt das weiter, was
                        ihr verstanden habt.{" "}
                    </li>
                    <li>
                        Mit jeder Runde setzen sich mehr Leute dazu. Beobachtet, was passiert. Ihr könnt das Spiel so
                        lange spielen, bis alle Personen im Kreis sitzen, oder wenn ihr noch Lust habt, natürlich auch
                        noch länger.{" "}
                    </li>
                </ul>
            </div>
        ),
        5: (
            <div style={{ textAlign: "left", fontSize: "40px" }}>
                <ul>
                    <li>
                        {" "}
                        Je mehr Menschen das Wort weitergegeben haben, desto schwieriger wurde es, dass das richtige
                        Wort am Ende laut ausgesprochen wurde, oder?{" "}
                    </li>
                    <li>
                        {" "}
                        Ihr seht also, dass trotz eurer Kommunikation (= das leise Flüstern des Wortes, oder zumindest
                        dessen, was ihr verstanden habt) nur ein Teil dessen übermittelt wurde, was eigentlich das Ziel
                        war.{" "}
                    </li>
                </ul>
            </div>
        ),
        6: (
            <div style={{ textAlign: "left", fontSize: "40px" }}>
                <ul>
                    <li>
                        {" "}
                        Genau dieses Problem gibt es auch in Groß. Wenn zum Beispiel Firmen zusammenarbeiten, um neue
                        Produkte zu entwickeln, die umweltfreundlicher sind oder auch, wenn Länder einander helfen, dann
                        kann es immer dazu kommen, dass etwas nicht ganz oder gut genug erklärt wird, beziehungsweise
                        von so vielen Menschen weitergegeben wird, dass im Laufe der Zeit Informationen einfach verloren
                        gehen und damit das Endprodukt nicht das ist, was man eigentlich wollte.{" "}
                    </li>
                </ul>
            </div>
        ),
        7: (
            <div style={{ textAlign: "left", fontSize: "38px" }}>
                <ul>
                    <li>
                        {" "}
                        Daher ist es sehr wichtig, dass ihr gut aufpasst, Dinge gut und vor allem vollständig zu
                        erklären, das ist zwar nicht immer einfach, aber eine Möglichkeit sicher zu gehen, ob euer/eure
                        Partner/Partnerin euch richtig verstanden hat, ist zu fragen, ob alles verständlich war.{" "}
                    </li>
                    <li>
                        {" "}
                        Damit solche Fehler aber weltweit nicht mehr gemacht werden, könntet ihr versuchen euch in der
                        Politik zu engagieren, um wirklich die Wünsche der Bevölkerung umzusetzen. Oder wenn ihr lieber
                        einmal Kaufmann/-frau werden wollt, dann könntet ihr euch später dafür einsetzen, dass die
                        Wünsche von Mitarbeitern oder Kunden/Partnern richtig verstanden werden.{" "}
                    </li>
                </ul>
            </div>
        ),
        8: (
            <div style={{ textAlign: "left", fontSize: "40px" }}>
                <ul>
                    <li>
                        {" "}
                        Die wichtigste Sache dabei ist immer, dass ihr euch gut anhört, was euer Gegenüber sagen möchte.{" "}
                    </li>
                </ul>
            </div>
        ),
    };
    const header = {
        1: (
            <div>
                <p> Einleitung </p>
            </div>
        ),
        2: (
            <div>
                <p> Einleitung </p>
            </div>
        ),
        3: (
            <div>
                <p> Spiel </p>
            </div>
        ),
        4: (
            <div>
                <p> Spiel </p>
            </div>
        ),
        5: (
            <div>
                <p> Ergebnis </p>
            </div>
        ),
        6: (
            <div>
                <p> Ergebnis </p>
            </div>
        ),
        7: (
            <div>
                <p> Ergebnis </p>
            </div>
        ),
        8: (
            <div>
                <p> Ergebnis </p>
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
        showtext < maxslide ? (
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
        showtext === maxslide ? (
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
                    Stille Post
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div className="textbox">
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
renderer.render(<SDG09_Spiel />, document.getElementById("root"));
