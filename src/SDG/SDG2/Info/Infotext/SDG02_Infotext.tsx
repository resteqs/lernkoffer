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

export const SDG02_Infotext = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(1);
    const sdg = "SDG02";

    const text = {
        1: `Extremer Hunger und Unterernährung sind nach wie vor ein Hindernis für eine nachhaltige Entwicklung. Sie schaffen eine Falle, aus der sich die Menschen nicht so leicht befreien können, denn Hunger und Unterernährung bedeuten weniger produktive Menschen. Sie können schneller krank werden und sind dann oft nicht in der Lage, mehr zu verdienen und ihre Lebenshaltungskosten zu verbessern.`,
        2: `Menschen, die von "moderater Ernährungsunsicherheit" betroffen sind, sind in der Regel aufgrund von Einkommens- oder anderen Ressourcenbeschränkungen nicht in der Lage, sich regelmäßig gesund und ausgewogen zu ernähren. Konflikte, Klimaschocks, Heuschrecken-Krisen und Pandemien stellen eine Bedrohung für die Ernährungssysteme dar. Unsicherheit der Bürger:innen und rückläufige Nahrungsmittelproduktion haben zu.`,
        3: "Nahrungsmittelknappheit und hohen Nahrungsmittelpreisen beigetragen. Investitionen in dem Agrarsektor (= Landwirtschaft) sind entscheidend für die Reduzierung von Hunger und Armut, die Verbesserung der Ernährungssicherheit, die Schaffung von Arbeitsplätzen und den Aufbau von Widerstandsfähigkeit gegenüber Katastrophen und Schocks.",
        4: "Eine Welt ohne Hunger kann sich positiv auf unsere Volkswirtschaften, Gesundheit, Bildung, Gleichberechtigung und soziale Entwicklung auswirken. Sie ist sehr wichtig, um eine bessere Zukunft für alle zu schaffen. Darüber hinaus werden wir mit Hunger, der die menschliche Entwicklung einschränkt, nicht in der Lage sein, die anderen Nachhaltigkeitsziele wie Bildung, Gesundheit und Gleichberechtigung der Geschlechter zu erreichen.",
        5: "Um Ernährungssicherheit zu erreichen, müssen wir uns mit mehreren Themen befassen, wie z. B. dem sozialen Schutz, um sichere und nahrhafte Lebensmittel insbesondere für Kinder zu gewährleisten. Ziel ist es, die Ernährungssysteme zu verändern, um eine inklusivere und nachhaltigere Welt zu erreichen.",
        6: 'Du kannst helfen, indem du lokale Landwirte oder Märkte unterstützen und dich für nachhaltige Lebensmittel entscheidest, eine gute Ernährung für alle unterstützt und Lebensmittelverschwendung bekämpfst. ',
        7: 'Als Verbraucher:in und zukünftige:r Wähler:in kannst du Unternehmen und deine Regierung auffordern, Entscheidungen und Veränderungen zu treffen, die dieses Nachhaltigkeitsziel unterstützen. Wenn in deinen lokalen Gemeinden Diskussionen stattfinden, kannst du dich ihnen anschließen und dich für das Ziel "Kein Hunger" einsetzen.',
    };
    const header = {
        1: "Warum?",
        2: "Was ist das Problem?",
        3: "Was ist das Problem?",
        4: "Wie ist dieses Thema mit uns verbunden?",
        5: "Was können wir machen?",
        6: "Was können wir machen?",
        7: "Was können wir machen?",
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
        showtext <= 5 ? (
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
        showtext === 6 ? (
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
                    Kein Hunger
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
renderer.render(<SDG02_Infotext />, document.getElementById("root"));
