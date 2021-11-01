// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-const */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

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


export const SDG06_Spiel = (): JSX.Element => {
   
    let [showtext, setText] = React.useState(1);
    let [itemSelected, setSelectedItem] = React.useState(0)
    const sdg = "SDG06";
    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    showtext = 6;

    function select(x:any): void
    {
        setSelectedItem(x);
    }
    const modalHeader = {
        1: `Text1`,
        2: `Text2`,
        3: `Text3`,
        4: `Text4`,
        5: 'Text5'
    };
    const modalBody = {
        1: `Text1`,
        2: `Text2`,
        3: `Text3`,
        4: `Text4`,
        5: 'Text5'
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
    let buttonEnd; 
    let modal;
    let infotextbox;
    let card1;
    let card2;
    let card3;
    let card4;
    let card5;

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
        buttonBackArrow = showtext > 5 ?( <div style={{ marginTop: "1px" }} className ="backButtonDiv">
        {" "}
       <button type="button" onClick={decrementCount} className= "backButton">&#129044;</button>
    </div> ):(<div>{" "}</div>);

        modal=
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
            overlayClassName={{
              base: "overlay-base",
              afterOpen: "overlay-after",
              beforeClose: "overlay-before"
            }}
            className={{
              base: "content-base",
              afterOpen: "content-after",
              beforeClose: "content-before"
            }}
            closeTimeoutMS={500}
          >
            <div className="content-header"><p>{modalHeader[itemSelected]}</p> <button type="button" className="personCheckOkButton" onClick={() => setIsOpen(false)}><b>Okay</b></button></div>
            {modalBody[itemSelected]}
        </Modal>

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

return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                     Spiel
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            {infotextbox}
            {buttonBack}
            {buttonBackArrow}
            {buttonNext}
            {buttonEnd}
            {modal}
            <div style={{ marginTop:"300px", display: "flex", justifyContent: "center",alignItems: "center" }}>{card1} {card2}{card3}{card4}{card5}</div>
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG06_Spiel />, document.getElementById("root"));
