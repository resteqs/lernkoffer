// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable eslint-comments/disable-enable-pair */
// eslint-disable-next-line eslint-comments/no-duplicate-disable
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-const */

import * as React from "react";
import renderer from "react-dom";
import { Link } from "react-router-dom";
import { CSSProperties, useState } from "react";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import "../../../styles/colour_sdgs.css";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG03.png";
import EG from "../../../EG/EG2.png";
import ReactAudioPlayer from "react-audio-player";


export const SDG03_Quiz = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(15);

    let [currentlyPicked, setPicked] = React.useState(1);

    let [obj1, setObj1] = React.useState(false);
    let [obj2, setObj2] = React.useState(false);
    let [obj3, setObj3] = React.useState(false);

    let [obj1number, setObj1number] = React.useState(0);
    let [obj2number, setObj2number] = React.useState(0);
    let [obj3number, setObj3number] = React.useState(0);
    const sdg = "SDG03";


    const noborder: CSSProperties = {
        background: "orange",
        fontSize: "30px",
        padding: "20px 10px",
    };


    let buttonStyle = noborder;


    let button1 =
        obj1 === false ? (
            <div style={{ marginBottom: "50px", paddingBottom: "20px", marginRight: "400px" }}>
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
                    <div style={{ width: "400px" }}>
                        <span className="shadow" />
                        <span className={infotextbutton.edgeorange} />
                        <span className="front" style={buttonStyle}>
                            Alkohol
                        </span>
                    </div>
                </button>{" "}
            </div>
        ) : (
            <div>{}</div>
        );
    let button2 =
        obj2 === false ? (
            <div style={{ marginBottom: "50px", paddingBottom: "20px", marginRight: "400px" }}>
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
                    <div style={{ width: "400px" }}>
                        <span className="shadow" />
                        <span className={infotextbutton.edgeorange} />
                        <span className="front" style={buttonStyle}>
                            Cannabis
                        </span>
                    </div>
                </button>{" "}
            </div>
        ) : (
            <div>{}</div>
        );
    let button3 =
        obj3 === false ? (
            <div style={{ marginBottom: "50px", paddingBottom: "20px", marginRight: "400px" }}>
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
                    <div style={{ width: "400px" }}>
                        <span className="shadow" />
                        <span className={infotextbutton.edgeorange} />
                        <span className="front" style={buttonStyle}>
                           Zigaretten
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
                </div>
            </section>
        );

    const text = {
        1: (
            <div>
                <p className="Infotext03">
                    <b>
                    „Iss nicht so viele Süßigkeiten, das ist ungesund!“
                    </b>
                    
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
        9: (
            <div>
                <p className="Infotext03">
                Hier könnt ihr eine <b>Zigarette</b> sehen. Ihr Hauptbestandteil ist Tabak, also die braunen Krümel, die in Zigarettenpapier eingerollt sind. Tabak ist eigentlich eine Pflanze mit grünen Blättern, welche jedoch für die Zigaretten getrocknet und zerkleinert werden.
                </p>
                <img  style={{ maxWidth: "600px", maxHeight: "500px", marginTop: "40px", zIndex:5 }}src="https://picsum.photos/id/237/1000/1000" alt="vorlage"/>
            </div>
        ),
        10: (
            <div>
                <p className="Infotext03">
                In diesen ist der Stoff <b>Nikotin</b>, der nach dem Anzünden der Zigarette mit dem Rauch in die Lunge gelangt. Nachdem er vom Körper aufgenommen wurde, sorgt er dafür, dass das <b>Herz</b> schneller schlägt, wodurch das Blut schneller fließt. Das ist auf Dauer nicht gut für das Herz und die <b>Blutgefäße</b> (kleine Röhrchen im Körper, durch die das Blut fließt). Jedoch kann man durch das Nikotin und dessen Wirkung <b>süchtig</b> nach Zigaretten werden. Dann muss man immer wieder rauchen, ansonsten wird man gereizt und ruhelos.
                </p>
            </div>
        ),
        11: (
            <div>
                <p className="Infotext03">
                Aber wusstet ihr schon, dass in Zigaretten noch andere schädliche Stoffe sind außer Nikotin? Insgesamt sind <b>mehr als 40 Stoffe</b> im Rauch nachweislich <b>krebserregend</b>. Ein weiterer ist zum Beispiel <b>Teer</b>. Dieser zerstört kleine Härchen in der Lunge, welche diese sauber halten. Wenn sie kaputt sein, kann die Lunge nicht mehr vor dem Schmutz geschützt werden. Das merkt der Raucher dann dadurch, dass er weniger Ausdauer hat und schneller außer Puste kommt. Aber durch die Schadstoffe im Tabak leiden nicht nur das Herz und die Lunge. Auch die <b>Haut</b>, die <b>Zähne</b>, die <b>Zunge</b> und <b>Teile des Halses</b> werden krank
                </p>
            </div>
        ),
        12: (
            <div>
                <p className="Infotext03">
                Die abgebildeten Blätter sind von der Hanf- bzw. Cannabis-Pflanze. Die weiblichen Blüten und die Blätter dieser Pflanze werden, wenn man sie trocknet, <b>Marihuana</b>. Das Harz der Pflanze wird <b>Haschisch</b> genannt. Am häufigsten wird Marihuana oder Haschisch geraucht, indem man es zerbröselt mit Tabak (von normalen Zigaretten) vermischt und zu einem Joint dreht. Dieser sieht meist einer selbst gedrehten Zigarette ähnlich, wie man auf dem gezeigten Bild sehen kann. Andere Möglichkeiten wären auch noch über unterschiedliche Arten von Pfeifen zu rauchen oder Cannabisprodukte in Keksen etc. zu verbacken und dann zu essen.
                </p>
                <img  style={{ maxWidth: "600px", maxHeight: "500px", marginTop: "40px", zIndex:5 }}src="https://picsum.photos/id/237/1000/1000" alt="vorlage"/>
            </div>
        ),
        13: (
            <div>
                <p className="Infotext03">
                Die Wirkung von Marihuana kommt durch einen Stoff in den Blüten, der abgekürzt <b>THC</b> genannt wird. Insgesamt sind die gesundheitlichen Folgen von Cannabis noch nicht ganz erforscht, aber man weiß zum Beispiel, dass der Körper deutlich länger braucht THC als Alkohol abzubauen. Außerdem leidet die <b>Leistungsfähigkeit des Gehirns</b> bei regelmäßigem Rauchen. Man geht sogar davon aus, dass es Gehirnschäden verursachen kann, wenn man als Jugendliche:r damit anfäng
                </p>
            </div>
        ),
        14: (
            <div>
                <p className="Infotext03">
                Da es oft vermischt mit Tabak geraucht wird, werden dessen Risiken übernommen und dementsprechend die Lunge geschädigt. Ein erhöhtes Risiko für Krebserkrankungen ist noch nicht sicher festgestellt worden, aber man geht davon aus, dass auch Cannabisrauch Teer und andere Schadstoffe enthält. Noch dazu gibt es ein erhöhtes Herzinfarktrisiko und auch wieder die Gefahr, dass man <b>abhängig</b> werden kann.
                </p>
            </div>
        ),
        15: (
            <div>
               <p className="Infotext03" style={{ fontSize:"30px" }}>
                 Please select the belowed listed items in the right order (1st ist the most dangerous one and 3rd least dangerous from above)
                </p>
                
                {buttons}
            </div>
        ),
        16: (
            <div>
               <p className="Infotext03" style={{ fontSize:"30px" }}>
                 Please select the belowed listed items in the right order (1st ist the most dangerous one and 3rd least dangerous from above)
                </p>
                
                {buttons}
            </div>
        ),
        17: (
            <div>
               <p className="Infotext03" style={{ fontSize:"30px" }}>
                 Please select the belowed listed items in the right order (1st ist the most dangerous one and 3rd least dangerous from above)
                </p>
                
                {buttons}
            </div>
        ),
        18: (
            <div>
                <p className="Infotext03" style={ obj3number === 1? { color: "green" }: { color:"red" }}>
                Platz 1: Zigarette

- Ungefähr 7 Millionen (7 000 000) Todesfälle weltweit 2017 durch (die Folgen von) Rauchen

- Ungefähr 1,7 Milliarden (1 700 000 000) Menschen rauchen weltweit regelmäßig

Platz 2: Alkohol

- Ungefähr 3 Millionen (3 000 000) Todesfälle weltweit 2017 durch Alkohol

- Ungefähr 140 Millionen (140 000 000) Menschen weltweit alkoholabhängig

Platz 3: Cannabis

- Kaum Todesfälle durch Cannabis

- Ungefähr 13 Millionen (13 000 000) Menschen weltweit abhängig von Cannabis
                </p>
            </div>
        ),
    19: (
            <div>
                <p className="Infotext03">
                Das heißt jedoch nicht, dass man Cannabis nun ohne Risiken konsumieren kann. Alle drei Dinge sind Drogen, also wird man von ihnen in einen Rausch versetzt. Obwohl Alkohol und Zigaretten, und auch in manchen Ländern Cannabis, legal (gesetzlich erlaubt) sind, muss man vorsichtig mit ihnen umgehen. Die Gefahr ist immer vorhanden, süchtig zu werden und sie sind alle schädigend für die Gesundheit. Also haltet euch an die Altersbegrenzungen in eurem Land, informiert euch, bevor ihr etwas zu euch nehmt, was ihr nicht kennt und geht keine Risiken ein. Denkt einfach an folgendes Sprichwort, welches bereits im Mittelalter entstand:

„Die Menge macht das Gift“
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
                <p>Einstieg</p> 
            </div>
        ),
        3: (
            <div>
                <p>Einstieg</p>
            </div>
        ),
        4: (
            <div>
                <p>Einstieg</p>
            </div>
        ),
        5: (
            <div>
                <p>Einstieg</p>
            </div>
        ),
        6: (
            <div>
                <p>Einstieg</p>
            </div>
        ),
        7: (
            <div>
                <p>Alkohol</p>
            </div>
        ),
        8: (
            <div>
                <p>Alkohol</p>
            </div>
        ),
        9: (
            <div>
                <p>Zigaretten</p>
            </div>
        ),
        10: (
            <div>
                <p>Zigaretten</p>
            </div>
        ),
        11: (
            <div>
                <p>Zigaretten</p>
            </div>
        ),
        12: (
            <div>
                <p>Cannabis</p>
            </div>
        ),
        13: (
            <div>
                <p>Cannabis</p>
            </div>
        ),
        14: (
            <div>
                <p>Cannabis</p>
            </div>
        ),
        15:(
            <div>
                <p>Quiz</p>
            </div>
        ),
        16:(
            <div>
                <p>Quiz</p>
            </div>
        ),
        17:(
            <div>
                <p>Quiz</p>
            </div>
        ),
        18:(
            <div>
                <p>Loesung</p>
            </div>
        ),
        19:(
            <div>
                <p>Loesung</p>
            </div>
        )
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
        showtext >= 2 && showtext <= 14? (
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
        showtext <= 14 && showtext ===18 ? (
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
        showtext === 19 ? (
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
