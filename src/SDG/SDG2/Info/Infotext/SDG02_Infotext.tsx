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
import infotextbutton from "../../../../styles/Infotextbutton.module.css";
import "../../../../styles/colour_sdgs.css";
import "../../../../styles/infotext.css";
import Logo from "../../../../SDGLogos/Goal-SDG02.png";
import EG from "../../../../EG/EG2.png";
import "../../Spiel/sdg02.css";
import ReactAudioPlayer from "react-audio-player";

export const SDG02_Infotext = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(1);
    const sdg = "SDG02";

    const text = {
        1: (
            <div>
                <p>
                    <b>
                        „den Hunger beenden, Ernährungssicherheit und eine bessere Ernährung erreichen und eine
                        nachhaltige Landwirtschaft fördern“
                    </b>
                </p>
            </div>
        ),
        2: (
            <div>
                <p className="Infotext02">
                    Wenn Menschen extrem hungern und unterernährt sind, kann es keine nachhaltige Entwicklung geben. Da
                    sie so wenig Essen haben, werden sie geschwächt und können schneller krank werden. Infolgedessen
                    können sie nicht mehr so viel arbeiten und verdienen weniger Geld. Ohne das können sie nicht mehr
                    Essen kaufen. Das heißt, dass durch den Hunger und die Unterernährung eine Falle entsteht, aus
                    welcher sie sich nicht so einfach befreien können.{" "}
                </p>
            </div>
        ),
        3: (
            <div>
                <p className="Infotext02">
                    Es gibt Menschen, die sich nicht regelmäßig gesund und ausgewogen, also abwechslungsreich, ernähren
                    können. Das liegt dann daran, dass manche Dinge, wie Geld oder Nahrung, nicht ausreichend vorhanden
                    sind.
                </p>
            </div>
        ),
        4: (
            <div>
                <p className="Infotext02">
                    Ein Ernährungssystem (Anbauen &#10140; Verarbeiten &#10140; Verpacken &#10140; Transportieren
                    &#10140; Verteilen &#10140; Handeln &#10140; Einkaufen &#10140; Zubereiten &#10140; Verzehren von
                    Essen) kann von Konflikten, Klimakrisen, Heuschrecken-Plagen und Pandemien bedroht werden.
                </p>
            </div>
        ),
        5: (
            <div>
                <p className="Infotext02">
                    Wenn die Bürger:innen unsicher werden, produzieren sie weniger Nahrung, was dazu führt, dass es
                    weniger Essen gibt und die Preise dafür steigen. Deshalb ist es wichtig, dass der Agrarsektor (=
                    Landwirtschaft) mit Geld unterstützt wird. Dadurch können Hunger und Armut verringert werden, die
                    Ernährung wird besser gesichert, es entstehen mehr Arbeitsplätze und die Anfälligkeit für
                    Katastrophen oder andere Bedrohungen sinkt.
                </p>
            </div>
        ),
        6: (
            <div>
                <p className="Infotext02">
                    Eine Welt ohne Hunger kann unser Arbeitsleben, unsere Gesundheit, Bildung, Gleichberechtigung und
                    gesellschaftliche Entwicklung verbessern. Sie ist sehr wichtig, um eine bessere Zukunft für alle zu
                    schaffen. Darüber hinaus sind wir mit Hunger nicht in der Lage die anderen Nachhaltigkeitsziele zu
                    erreichen, da er dazu führt, dass wir uns nicht mehr so gut weiterentwickeln können.{" "}
                </p>
            </div>
        ),
        7: (
            <div>
                <p className="Infotext02">
                    Um Ernährung sicher zu stellen, müssen wir uns mit mehreren Themen befassen: z. B. mit dem Schutz
                    der Gesellschaft, um sichere und nahrhafte Lebensmittel besonders für Kinder zu gewährleisten. Ein
                    anderes Beispiel ist die Veränderung der Ernährungssysteme, damit die Welt nachhaltiger und
                    inklusiver (= mehr alle miteinbeziehen) wird. Du kannst helfen, indem du bei Landwirten oder Märkten
                    aus deiner Gegend einkaufst und dich für nachhaltige Lebensmittel entscheidest.
                </p>
            </div>
        ),
        8: (
            <div>
                <p className="Infotext02">
                    Außerdem ist es wichtig, eine gute Ernährung für alle zu unterstützen und Lebensmittelverschwendung
                    zu bekämpfen. Auch Unternehmen und deine Regierung sollten Entscheidungen und Veränderungen treffen,
                    die dieses Nachhaltigkeitsziel unterstützen. Bei diesen, sowie in deiner Gemeinde zählt deine Stimme
                    als zukünftige:r Wähler:in und Verbraucher:in von Nahrung.
                </p>
            </div>
        ),
    };
    const header = {
        1: (
            <div>
                <p> </p>
            </div>
        ),
        2: (
            <div>
                <p>Warum?</p>
            </div>
        ),
        3: (
            <div>
                <p>Was ist das Problem?</p>
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
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Kein Hunger <img className="sdglogo" alt="logo" src={Logo} />
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
            <ReactAudioPlayer
                src="https://cdn.discordapp.com/attachments/807650919780057129/916030116767891456/Mobiles_Museum_Infotext_4.mp3"
                controls
                style={{ position: "absolute", top: "1100px", left: "80px" }}
            />{" "}
            <img className="EG " alt="" src={EG} />
        </div>
    );
};
