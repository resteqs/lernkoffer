// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-const */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

// eslint-disable-next-line unicorn/filename-case
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/control-has-associated-label */
// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import renderer from "react-dom";
import Modal from "react-modal";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import "../../../styles/colour_sdgs.css";
import { Link } from "react-router-dom";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG06.png";
import "../sdg6.css"
import { ModalQuizComponent } from "../../../Components/Modal/ModalComponent";
import { FancyButton } from "../../../Components/Buttons/FancyButton";



export const SDG06_Spiel = (): JSX.Element => {
   
    let [showtext, setText] = React.useState(1);
    let [itemSelected, setSelectedItem] = React.useState(0)
    const sdg = "SDG06";
    const [modalIsOpen, setIsOpen] = React.useState(false);
    

    function select(x:any): void
    {
        setSelectedItem(x);
    }
    const modalHeader = {
        1: `Information`,
        2: `Toilette`,
        3: `Berge`,
        4: `Ein Bad im See`,
        5: 'Eine kurze Trinkpause'
    };
    const modalBody = {
        1: `Du liest dir folgende Informationen am Infostand durch und setzt deshalb für eine Runde aus. In dem 6. Nachhaltigkeitsziel ist es ein wichtiger Punkt, dass die Menschen über Probleme informiert werden, die durch verschmutztes Wasser entstehen. Außerdem möchte die UN (das ist die Organisation, die die Nachhaltigkeitsziele entwickelt hat) Gemeinden und Städte dabei unterstützen, sich bei Projekten zum verbesserten Umgang mit Wasser einzubringen. Frage einmal in deiner Umgebung die Leute, ob sie solche Projekte kennen und vielleicht sogar selbst bei diesen mithelfen. Wenn nicht, wäre es eine gute Idee, in deinem Dorf, deiner Gemeinde oder Stadt solche Projekte vorzustellen oder sogar zu unterstützen.`,
        2: `Ohje, du hast wohl zu viel getrunken und musst daher auf die Toilette. Setze eine Runde aus. Auf der Welt gibt es viele Regionen, in denen es nicht selbstverständlich ist, dass es saubere
        Toiletten gibt und dass diese auch immer für alle zugänglich sind. Das ist jedoch ein Problem, da durch verschmutzte Sanitäranlagen (Toiletten, Waschbecken…) viele Krankheiten verbreitet werden können.`,
        3: `Weißt du, woher das Wasser kommt? Du hast einen kleinen Bach gefunden, neben dem ein Weg läuft und möchtest dem Ursprung des Wassers auf den Grund gehen. Setze eine Runde aus. Die Berge sind eine Gegend, die sich in den letzten Jahrzehnten sehr stark verändert hat. So sind viele Gletscher (große Mengen Eis) geschmolzen und deren Wasser fließt jetzt in unseren Bächen, Flüssen, Seen und Meeren. Es gibt sehr viele Stellen in der Natur, an denen Wasser besonders zu schützen ist. Die Berge sind ein Beispiel dafür, genauso wie Wälder, Bäche und Sümpfe. Sei hier also bitte besonders vorsichtig: wenn du zum Beispiel Müll bei dir hast, dann wirf ihm nicht einfach in den nächsten See, denn dieser verschmutzt sonst sehr schnell und das Wasser kann schlimme Auswirkungen auf deine Gesundheit, die Natur und vieles mehr haben. Behalte deine Abfälle lieber so lange bei dir, bis du eine Gelegenheit hast, den Müll getrennt zu entsorgen.`,
        4: `Der See hier sieht herrlich aus. Warum schwimmst du nicht ein Runde? Setze dafür eine Runde aus. So schönes hellblaues Wasser findet man nicht in jedem See, da einige sehr stark verschmutzt sind. Allerdings ist meist nicht nur die gut sichtbare Verschmutzung (z.B. herumschwimmende Flaschen) ein Problem, sondern auch häufig die Verunreinigung, die man nicht sieht. Wenn zum Beispiel aus Fabriken oder von Feldern Chemikalien in Bäche, Flüsse oder Seen gespült werden, oft nicht mehr zum Trinken geeignet. Auch Pflanzen und Tiere sind häufig betroffen. Aus diesen Gründen ist es sehr wichtig, dass Wasser jeder Art gut geschützt wird. Um das zu tun, gibt es verschiedene Ansätze. Entweder man schließt sich Organisationen an, die Umweltschutz im Allgemeinen oder speziell den Schutz der Gewässer unterstützen oder man stimmt bei Wahlen für Kandidaten, die sich für den Umweltschutz engagieren.`,
        5: 'Du hast schon einen so weiten Weg zurückgelegt, dass du unbedingt etwas trinken solltest. Setze dafür eine Runde aus. In vielen Regionen der Welt haben Menschen nicht ausreichend Trinkwasser oder müssen hierfür weite Strecken zurücklegen. Ein Ziel der UN und ihrer Nachhaltigkeitsziele ist es, dass jeder Mensch bis zum Jahr 2030 Zugang zu ausreichend Trinkwasser hat. Das wiederum bedeutet, dass die Wasserverschmutzung aufhören muss, damit das vorhandene Wasser auf der Erde auch als Trinkwasser genutzt werden kann. Denn ist das Wasser verunreinigt, sollte es weder getrunken noch zum Beispiel zum Kochen verwendet werden, da das schlecht für die Gesundheit sein kann'
    };


    const text = {
        1: (
            <div>
                <p className="EinleitungSDG04" style={{ fontSize: "45px" }}>
                Wasser ist ein Stoff, den alle Menschen, alle Tiere und alle Pflanzen zum Leben brauchen. Er begegnet dir in vielen verschiedenen Situationen. Ich möchte mit euch ein kleines Spiel zum Thema Wasser spielen. Lest euch hierfür erst einmal die ganze Anleitung durch, bereitet alles vor und einigt euch auf ein Ende des Spiels.
                </p>
            </div>
        ),
        2: (
            <div>
                <p className="SpielregelnSDG04" style={{ fontSize: "45px" }}>
                Zuallererst benötigt ihr das laminierte Blatt, das als Spielfeld dient. Am meisten Spaß macht es, in einer Gruppe zu spielen. Jede:r Spieler:in benötigt eine Spielfigur (diese findet ihr im Koffer). Wenn sich jede:r eine Figur ausgesucht hat, stellen alle Teilnehmer:innen die eigene Spielfigur auf das erste Feld (roter Kreis), also das, über dem „Start“ steht.
                </p>
            </div>
        ),
        3: (
            <div>
                <p className="SpielregelnSDG04" style={{ fontSize: "45px" }}>
                Legt eine Reihenfolge fest, in der ihr würfelt. Danach würfelt der/die erste Spieler:in mit dem Würfel, den ihr in dem Koffer findet. Die Anzahl der Augen, die geworfen wurde, entspricht der Anzahl der Felder, um die die Spielfigur nach vorne bewegt werden darf. Wurde dies erledigt ist der Zug beendet und der / die nächste Spieler:in ist an der Reihe.
                </p>
            </div>
        ),
        4: (
            <div>
                <p className="SpielregelnSDG04" style={{ fontSize: "45px" }}>
                Doch Vorsicht: Landet ihr auf einem der Felder, an denen eine Gedankenblase mit einer Zahl zu sehen ist, lest euch den kleinen Text durch, der zu dieser Zahl gehört und befolgt die kurzen Anweisungen.
                </p>
            </div>
        ),
        5: (
            <div>
                <p className="SpielregelnSDG04" style={{ fontSize: "45px" }}>
                Das Spiel kann auf zwei Arten enden: <br/>
                1. Entweder ihr beendet das Spiel, sobald die erste Figur an dem Feld, über dem „Ziel“ steht, ankommt.<br/>
                 2. Oder es wird so lang gespielt, bis auch die letzte Figur am Ende ankommt.<br/><br/>
            Einigt euch vor dem Start des Spiels auf eine der beiden Varianten.
                </p>
            </div>
        ),

    };
    const header = {
        1: (
            <div>
                <p>Einleitung</p>
            </div>
        ),
        2: (
            <div>
                <p>Spielregeln</p>
            </div>
        ),
        3: (
            <div>
                <p>Spielregeln</p>
            </div>
        ),
        4: (
            <div>
                <p>Spielregeln</p>
            </div>
        ),
        5: (
            <div>
                <p>Ende</p>
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
    let buttonBackArrow; 
    let buttonNext;
    let infotextbox;
    let card1;
    let card2;
    let card3;
    let card4;
    let card5;
    let cards;

    buttonBack =
        showtext >= 2 && showtext <= 5? (
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

       let buttonEnd = (
            <Link to="/Vorlagen/Endscreen">
                <div style={{  bottom: "38px", right: "38px", position: "fixed" }}>
                    <FancyButton
                       
                        version="green"
                        className="nextbutton"
                        active={showtext === 5}
                    >
                        Beenden
                    </FancyButton>
                </div>
            </Link>
        );
    
        const answerCW = (
            header[showtext]
        );

       let modal = (
            modalIsOpen === true ? (
                <ModalQuizComponent
                    incrementCount={() =>incrementCount}
                    answercw={answerCW}
                    modalIsOpen={modalIsOpen}
                    setIsOpen={setIsOpen}
                    answer={modalBody[itemSelected] } 
                    setSelectedItem={ ()=> setSelectedItem(showtext)}           
                    />
            ) : (
                <div> </div>
            )
        );
    infotextbox = showtext <= 5?(<div className="infotextbox">
    <p className="headertext">
        <b>{header[showtext]}</b>
    </p>{" "}
    <br />
    <p className="headertext">
        <p>{text[showtext]}</p>
    </p>{" "}
</div>):(<div>{" "}</div>); 

card1 = <div><button className="sdg6card" type="button" onClick={() => {setIsOpen(true); select(1)}}>1</button></div>
card2 = <div><button className="sdg6card" type="button" onClick={() => {setIsOpen(true); select(2)}}>2</button></div>
card3 = <div><button className="sdg6card" type="button" onClick={() => {setIsOpen(true); select(3)}}>3</button></div>
card4 = <div><button className="sdg6card" type="button" onClick={() => {setIsOpen(true); select(4)}}>4</button></div>
card5 = <div><button className="sdg6card" type="button" onClick={() => {setIsOpen(true); select(5)}}>5</button></div>
cards = showtext ===6?(<div style={{ marginTop:"300px", display: "flex", justifyContent: "center",alignItems: "center" }}>{card1} {card2}{card3}{card4}{card5}</div>):(<div>{" "}</div>);
return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                Spielbrett
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            {infotextbox}
            {buttonBack}
            {buttonNext}
            {buttonEnd}
            {modal}
            {cards}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG06_Spiel />, document.getElementById("root"));
