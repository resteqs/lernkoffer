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

export const SDG03_Infotext = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(1);
    const sdg = "SDG03";

    const text = {
        1: (
            <div>
                <p>
                    <b>“Ein gesundes Leben für alle Menschen jeden Alters gewährleisten und ihr Wohlergehen fördern”</b>
                </p>
            </div>
        ),
        2: (
            <div>
                <p className="Infotext03">
                    Es ist wichtig für den Aufbau wohlhabender Gesellschaften. Die meisten Länder, insbesondere arme
                    Länder, haben nicht genügend Gesundheitseinrichtungen, medizinische Versorgung und medizinisches
                    Personal. Im Falle eines gesundheitlichen Notfalls können Menschen in jedem Land, unabhängig von
                    seinem Reichtum, in den Bankrott oder in die Armut getrieben werden.{" "}
                </p>
            </div>
        ),
        3: (
            <div>
                <p className="Infotext03">
                    Wir müssen unsere Anstrengungen koordinieren, um eine universelle Gesundheitsversorgung und eine
                    nachhaltige Finanzierung der Gesundheit zu erreichen. Darüber hinaus werden wir durch neu
                    entstehende Gesundheitsgefahren herausgefordert.
                </p>
            </div>
        ),
        4: (
            <div>
                <p className="Infotext03">
                    Die Fortschritte in vielen Gesundheitsbereichen, z. B. bei der Senkung der Mütter- und
                    Kindersterblichkeit, bei der Erhöhung der Durchimpfungsrate und bei der Reduzierung einiger
                    Infektionskrankheiten, gehen weiter, aber das Tempo der Verbesserung hat sich verlangsamt. Im Jahr
                    2018 erhielten schätzungsweise 19,4 Millionen Kinder im ersten Lebensjahr nicht die notwendigen
                    Impfstoffe.
                </p>
            </div>
        ),
        5: (
            <div>
                <p className="Infotext03">
                    Obwohl die Immunisierung (der Prozess der Verabreichung eines Impfstoffs zum Schutz vor Krankheiten)
                    eine der erfolgreichsten und kosteneffektivsten Gesundheitsmaßnahmen der Welt ist. Im Jahr 2017 war
                    nur etwa ein Drittel bis die Hälfte der Weltbevölkerung durch essenzielle Gesundheitsleistungen
                    abgedeckt.
                </p>
            </div>
        ),
        6: (
            <div>
                <p className="Infotext03">
                    Krankheiten und Todesfälle durch übertragbare Krankheiten werden in die Höhe schnellen. Jedoch
                    erfordert es ein starkes Engagement ein gesundes Leben für alle zu gewährleisten. Es ist aber
                    wichtig, da die Vorteile die Kosten überwiegen. Gesunde Menschen sind die Grundlage für gesunde
                    Volkswirtschaften.{" "}
                </p>
            </div>
        ),
        7: (
            <div>
                <p className="Infotext03">
                    Du kannst damit beginnen, deine eigene Gesundheit und die Gesundheit der Menschen in deiner Umgebung
                    zu fördern und zu schützen, indem du gut informierte Entscheidungen triffst und zum Beispiel dich
                    selbst und deine zukünftigen Kinder impfen lässt.
                </p>
            </div>
        ),
        8: (
            <div>
                <p className="Infotext03">
                    Du kannst in deiner Gemeinde das Bewusstsein für die Bedeutung einer guten Gesundheit, eines
                    gesunden Lebensstils sowie für das Recht der Menschen auf eine hochwertige Gesundheitsversorgung
                    schärfen, insbesondere für die Schwächsten, wie Frauen und Kin-der.
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
        <div>
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
            <ReactAudioPlayer
                src="https://cdn.discordapp.com/attachments/807650919780057129/916030116767891456/Mobiles_Museum_Infotext_4.mp3"
                controls
                style={{ position: "absolute", top: "1100px", left: "80px" }}
            />{" "}
            <img className="EG " alt="" src={EG} />
        </div>
    );
};
