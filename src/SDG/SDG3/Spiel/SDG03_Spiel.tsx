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
import Logo from "../../../SDGLogos/Goal-SDG03.png";

import Question from "./question_mark.png";

export const SDG03_Spiel = (): JSX.Element => {
   
    const [showtext, setText] = React.useState(1);
    const sdg = "SDG03";
    const [modalIsOpen, setIsOpen] = React.useState(false);
    


    const text = {
        1: (
            <div>
                <p className="EinleitungSDG04" style={{ fontSize: "45px" }}>
                Gesund – Eine ausgewogene Ernährung(eine Ernährung, durch die alle wichtigen Stoffe aufgenommen werden, die der Körper braucht) ist dafür sehr wichtig, aber wusstest du, dass du nicht gesund bist, wenn dich etwas bedrückt?! Vielleicht hast du das ja auch schon einmal erlebt, wenn du dir Sorgen um eine Person oder ein Haustier oder Sonstiges gemacht hast, dann ging es dir da bestimmt nicht so gut, oder?
                </p>
            </div>
        ),
        2: (
            <div>
                <p className="SpielregelnSDG04" style={{ fontSize: "45px" }}>
                Aus diesem Grund solltest du dir eine vertraute Person suchen, mit der du über alles reden kannst. Dir sollte dabei bewusst sein, dass du niemandem alles erzählen musst, aber manchmal hilft es einfach, mit jemandem über schwierige Dinge zu reden. So etwas ähnliches möchten wir im Folgenden auch machen.
                <br/><br/>
                Dafür brauchst du ein Blatt Papier und einen Stift (optional auch eine Schere).
                </p>
            </div>
        ),
        3: (
            <div>
                <p className="SpielregelnSDG04" style={{ fontSize: "45px" }}>
                Nimm dir ein Blatt zur Hand und male den Umriss eines Kopfes darauf ( Wenn du das hast, kannst du den Kopf entweder einfach auf dem Blatt lassen oder ausschneiden.
                </p>
            </div>
        ),
        4: (
            <div>
                <p className="SpielregelnSDG04" style={{ fontSize: "45px" }}>
                Jetzt kannst du all deine Sorgen in den Kopf schreiben und so den anderen zeigen, wie es in deinem Kopf aussieht. Das Wichtigste dabei ist, dass du ehrlich bist und dir bewusst ist, dass du alles schreiben kannst, was du möchtest, denn jeden bedrücken unterschiedliche Sachen.
                </p>
            </div>
        ),
        5: (
            <div>
                <p className="SpielregelnSDG04" style={{ fontSize: "45px" }}>
                Wenn ihr alle fertig seid, dann setzt euch doch zusammen und wer sich bereit fühlt, der kann den anderen erzählen, was ihn/sie beschäftigt. Ganz wichtig hier ist, dass niemand ausgelacht wird und ihr niemanden zwingt etwas zu sagen.
                <br/><br/>
                Vielleicht zeigt euch das, dass es guttun kann, über seine Sorgen zu reden.
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
                <p>Spielregeln</p>
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
    let modal;

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

      
        buttonNext =
        showtext <= 4 ? (
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
            <div className="content-header"><p>Title</p> <button type="button" className="personCheckOkButton" onClick={() => setIsOpen(false)}><b>Okay</b></button></div>
            
        </Modal>



return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                     Activity
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div className="infotextbox">
                <p className="headertext">
                    <b>{header[showtext]}</b>
                </p>{" "}
                <br />
                <p className="headertext">
                    <p>{text[showtext]}</p>
                </p>{" "}
            </div>
            {buttonBack}
            {buttonNext}
            {buttonEnd}
            {modal}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG03_Spiel />, document.getElementById("root"));
