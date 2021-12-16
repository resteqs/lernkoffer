// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable eslint-comments/disable-enable-pair */
// eslint-disable-next-line eslint-comments/no-duplicate-disable
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */
/* eslint-disable unicorn/filename-case */

import * as React from "react";
import renderer from "react-dom";
import { Link } from "react-router-dom";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import "../../../styles/colour_sdgs.css";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG03.png";
import EG from "../../../EG/EG2.png";
import ReactAudioPlayer from "react-audio-player";


export const SDG03_Quiz = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(7);
    const sdg = "SDG03";

    const text = {
        1: (
            <div>
                <p>
                    <b>
                    „Iss nicht so viele Süßigkeiten, das ist ungesund!“
                    </b><br/>
                    <b>
                    „Bleib bitte weg von der Straße, die ist gefährlich!“
                    </b>
                </p>
            </div>
        ),
        2: (
            <div>
                <p className="Infotext03">
                Diese beiden Sätze haben sicher schon viele Eltern auf der ganzen Welt gesagt. Es ist wichtig, darauf zu achten, dass wir gesund bleiben, sowohl körperlich als auch seelisch. Im Folgenden konzentrieren wir uns nun auf die körperliche Gesundheit. Aber wann ist unser Körper eigentlich „gesund“? {" "}
                </p>
            </div>
        ),
        3: (
            <div>
                <p className="Infotext03">
                Die WHO beschreibt die Gesundheit 1948 auf folgende Weise:

&quot;Gesundheit ist ein Zustand völligen […] Wohlbefindens und nicht nur das Freisein von Krankheit und Gebrechen. Sich des bestmöglichen Gesundheitszustandes zu erfreuen ist ein Grundrecht jedes Menschen, ohne Unterschied der Rasse, der Religion, der politischen Überzeugung, der wirtschaftlichen oder sozialen Stellung.&quot;
                </p>
            </div>
        ),
        4: (
            <div>
                <p className="Infotext03">
                Das heißt also, dass man, wenn man sich wohl fühlt und keine Krankheiten hat, gesund ist. Außerdem ist es ein Menschenrecht so gesund wie möglich zu sein! Deshalb sollte auch jeder Mensch auf der Welt zu einem/r Arzt/Ärztin gehen können, wenn er krank ist.
                </p>
            </div>
        ),
        5: (
            <div>
                <p className="Infotext03">
                Das Gute ist aber, dass wir nicht hilflos sind und viele Dinge tun können, um unsere Gesundheit zu erhalten und/oder zu verbessern. Zum einen können wir unseren Körper unterstützen gesund zu bleiben, indem wir uns z.B. ausreichend viel bewegen, gesund Essen und Trinken, regelmäßig waschen und genügend schlafen. Zum anderen hilft es aber unserem Körper auch, wenn wir gewisse Dinge entweder gar nicht machen oder nur ab und zu. Was genau damit gemeint ist, erfahrt ihr nun:
                </p>
            </div>
        ),
        6: (
            <div>
                <p className="Infotext03" style={{ fontSize: "44px" }}>
                Es gibt viele Sachen auf der Welt, die uns nicht guttun und uns krank machen. Dabei sind manche gefährlicher als andere. Ihr seht jetzt gleich 3 Bilder und dazu jeweils einen Infotext. Lest euch alles durch und überlegt dann, welche Dinge schlechter oder weniger schlecht für die Gesundheit sind. Ordnet am Ende die Bilder jeweils den Plätzen 1-3 zu. Platz 1 ist für die Sache, die ihr am schlimmsten für den Körper seht, Platz 3 für das, was am wenigsten schädlich ist. Tipp: Denkt hier eher an die Folgen für den Menschen, wenn er es bereits lange zu sich genommen hat.
                </p>
            </div>
        ),
        7: (
            <div>
               
                <p className="Infotext03" style={{ fontSize: "34px" }}>
                Auf diesem Bild könnt ihr sehen wie mehrere Menschen mit einem alkoholischen Getränk anstoßen. Vielleicht habt ihr von solchen Getränken schon gehört, die bekanntesten sind zum Beispiel Bier, Wein oder Schnaps. „Alkoholische“ Getränke enthalten, wie bereits der Namen sagt, <b>Alkohol</b>. Das ist eine Flüssigkeit ohne Farbe, die leicht brennbar ist und einen typischen Geruch und Geschmack hat. In den Getränken, die man im Supermarkt einkaufen kann, ist aber immer nur ein kleiner Teil Alkohol enthalten, gemischt mit z.B. Säften oder anderen Flüssigkeiten.
                </p>
                <img  style={{ maxWidth: "600px", maxHeight: "500px", marginTop: "40px", zIndex:5 }}src="https://picsum.photos/id/237/1000/1000" alt="vorlage"/>
            </div>
        ),
        8: (
            <div>
                <p className="Infotext03">
                Wenn man Alkohol trinkt, gelangt dieser direkt ins Blut und dann weiter in die <b>Leber</b> (ein Organ in deinem Bauch). Da Alkohol aber giftig für den Körper ist, verwandelt die Leber ihn in einen weniger schädlichen Stoff. Das dauert allerdings etwas länger. Die Gefahr bei alkoholischen Getränken ist, dass man <b>süchtig</b> werden kann, wenn man regelmäßig trinkt, da sich der Körper an dessen Wirkung gewöhnt. Dies wird dann „Alkoholsucht“, „Alkoholkrankheit“ oder „Alkoholismus“ genannt. Dabei wird jedoch die Leber auf lange Sicht sehr überlastet, weil sie dann ständig daran arbeiten muss, den Alkohol abzubauen. Aber auch <b>andere Organe</b> in deinem Bauch (z.B. der Magen), das <b>Herz</b> und das <b>Gehirn</b> nehmen Schaden. Zusätzlich steigt das Risiko an verschiedenen Arten von <b>Krebs</b> zu erkranken.
                </p>
            </div>
        ),
    };
    const header = {
        1: (
            <div>
                <p>Einstieg</p>
            </div>
        ),
        2: (
            <div>
                <p>Warum?</p>
            </div>
        ),
        3: (
            <div>
                <p>Warum?</p>
            </div>
        ),
        4: (
            <div>
                <p>Was ist das Problem?</p>
            </div>
        ),
        5: (
            <div>
                <p>Was ist das Problem?</p>
            </div>
        ),
        6: (
            <div>
                <p>Wie ist dieses Thema mit uns verbunden?</p>
            </div>
        ),
        7: (
            <div>
                <p>Was können wir tun?</p>
            </div>
        ),
        8: (
            <div>
                <p>Was können wir tun?</p>
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
        showtext < 8 ? (
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
        showtext === 8 ? (
            <div className="nextbutton">
                <div style={{ marginTop: "10px" }} className="nextbutton">
                    {" "}
                    <Link to="/Vorlagen/Endscreen">
                        {" "}
                        <div>
                            <button className={infotextbutton.pushable} type="button" onClick={incrementCount}>
                                <span className={infotextbutton.shadow} />
                                <span className={infotextbutton.edgegreen} />
                                <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                                    <p className={infotextbutton.buttontext}>Weiter</p>
                                </span>
                            </button>
                        </div>
                    </Link>{" "}
                </div>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    return (
        <div style = {{ position: "absolute" }}>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Gesundheit und Wohlergehen <img className="sdglogo" alt="logo" src={Logo} />
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
           {" "}
            <img className="EG " alt="" src={EG} style = {{ left: "0px", top: "20px",width: "200px", height: "130px" }} />
        </div>
    );
};
renderer.render(<SDG03_Quiz />, document.getElementById("root"));
