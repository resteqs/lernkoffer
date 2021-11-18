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
import Logo from "../../../SDGLogos/Goal-SDG11.png";
import Bild1 from "./unknown.png";
import Bild2 from "./unknown1.jpg";
import Bild3 from "./unknown2.jpg";
import Bild4 from "./unknown3.jpg";
import Bild5 from "./unknown4.jpg";
import Bild6 from "./unknown5.jpg";
import Bild7 from "./unknown6.jpg";


import Question from "./question_mark.png";

export const SDG11_GB = (): JSX.Element => {
   
    const [showtext, setText] = React.useState(1);
    const sdg = "SDG11";
    const [modalIsOpen, setIsOpen] = React.useState(false);
    


    const text = {
        1: (
            <div>
                <p className="EinleitungSDG04" style={{ fontSize: "40px", textAlign: "left" }}>
                Zuerst solltest du all das benötigte Material vorbereiten. Das wäre:
                <ul><li> - Eine Dose (am besten machst du diese vorher grob sauber</li>
                <li> - Ein Draht</li>
                <li> - Und natürlich die Füllung: Bambus (wenn du das nicht findest, dann nimm einfach andere hohle Äste oder lass diese weg), zusammengerolltes Papier, Holzwolle, Stroh, dünne Äste, Tannenzapfen oder andere Sachen, die deiner Meinung nach gut wären (Tipp: nimm unterschiedliche Materialien, damit verschiedene Tiere dein Hotel nutzen können)</li>
                <li> - Ein Nagel und ein Hammer</li>
                <li> - Optional: Farbe oder Wolle, um es bunter zu machen; Fäden und Perlen oder Knöpfe (zum Beispiel, wenn du es wie ein Tier gestalten möchtest, das Beine hat</li>
                </ul>
                </p>
                <button type="button" style={{ background: "none", borderColor :"blue" , borderWidth: "11px", borderRadius: "15px", marginTop: "150px" }} onClick={() => openVorlage() }><img  style={{ maxWidth: "100px", maxHeight: "100px" }} src={Bild1} alt="Wirtschaftsinformatiker"/></button>
            </div>
        ),
        2: (
            <div>
                <p className="SpielregelnSDG04" style={{ fontSize: "45px" }}> <br/>
                Nimm die Dose und bemale sie mit der Farbe, oder wickle die Wolle herum.
                Wenn du es einfach halten möchtest, oder nichts dergleichen zur Hand hast, dann überspringe diesen Schritt einfach.
                </p>
                <button type="button" style={{ background: "none", borderColor :"blue" , borderWidth: "11px", borderRadius: "15px", marginTop: "150px" }} onClick={() => openVorlage() }><img  style={{ maxWidth: "100px", maxHeight: "100px" }} src={Bild2} alt="Wirtschaftsinformatiker"/></button>
            </div>
        ),
        3: (
            <div>
                <p className="SpielregelnSDG04" style={{ fontSize: "45px" }}>
                Nimm dir ein Blatt zur Hand und male den Umriss eines Kopfes darauf (wenn du dir nicht sicher bist, wie du den Umriss eines Kopfes zeichnen kannst, dann kannst du einfach hier klicken, dann kommst du zu einer Vorlage, die du einfach abzeichnen kannst) Wenn du das hast, kannst du den Kopf entweder einfach auf dem Blatt lassen oder ausschneiden.
                </p>
                <button type="button" style={{ background: "none", borderColor :"blue" , borderWidth: "11px", borderRadius: "15px", marginTop: "350px" }} onClick={() => openVorlage() }><img  style={{ maxWidth: "100px", maxHeight: "100px" }} src="https://picsum.photos/id/237/1000/1000" alt="Wirtschaftsinformatiker"/></button>
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
        6: (
            <div>
                <p className="SpielregelnSDG04" style={{ fontSize: "45px" }}>
                Wenn ihr alle fertig seid, dann setzt euch doch zusammen und wer sich bereit fühlt, der kann den anderen erzählen, was ihn/sie beschäftigt. Ganz wichtig hier ist, dass niemand ausgelacht wird und ihr niemanden zwingt etwas zu sagen.
                <br/><br/>
                Vielleicht zeigt euch das, dass es guttun kann, über seine Sorgen zu reden.
                </p>
            </div>
        ),

        61: (
         <div><div><img  style={{ maxWidth: "600px", maxHeight: "700px", marginTop: "-70px" }}src={Bild1} alt="vorlage"/>
         </div>
        <div><button type="button" style={{ background: "none", borderColor :"blue" , borderWidth: "11px", borderRadius: "15px", marginTop: "150px", fontSize: "30px" }} onClick={() => closeVorlage() }>Zurück</button></div></div> 
        ),
        62: ( <div><div><img  style={{ maxWidth: "600px", maxHeight: "700px", marginTop: "-70px" }}src="https://picsum.photos/id/237/1000/1000" alt="vorlage"/>
            </div>
           <div><button type="button" style={{ background: "none", borderColor :"blue" , borderWidth: "11px", borderRadius: "15px", marginTop: "150px", fontSize: "30px" }} onClick={() => closeVorlage() }>Zurück</button></div></div> 
           ),
        63: ( <div><div><img  style={{ maxWidth: "600px", maxHeight: "700px", marginTop: "-70px" }}src="https://picsum.photos/id/237/1000/1000" alt="vorlage"/>
           </div>
          <div><button type="button" style={{ background: "none", borderColor :"blue" , borderWidth: "11px", borderRadius: "15px", marginTop: "150px", fontSize: "30px" }} onClick={() => closeVorlage() }>Zurück</button></div></div> 
          ),
        
        64: ( <div><div><img  style={{ maxWidth: "600px", maxHeight: "700px", marginTop: "-70px" }}src="https://picsum.photos/id/237/1000/1000" alt="vorlage"/>
          </div>
         <div><button type="button" style={{ background: "none", borderColor :"blue" , borderWidth: "11px", borderRadius: "15px", marginTop: "150px", fontSize: "30px" }} onClick={() => closeVorlage() }>Zurück</button></div></div> 
         ),
         65: ( <div><div><img  style={{ maxWidth: "600px", maxHeight: "700px", marginTop: "-70px" }}src="https://picsum.photos/id/237/1000/1000" alt="vorlage"/>
         </div>
        <div><button type="button" style={{ background: "none", borderColor :"blue" , borderWidth: "11px", borderRadius: "15px", marginTop: "150px", fontSize: "30px" }} onClick={() => closeVorlage() }>Zurück</button></div></div> 
        ),
        66: ( <div><div><img  style={{ maxWidth: "600px", maxHeight: "700px", marginTop: "-70px" }}src="https://picsum.photos/id/237/1000/1000" alt="vorlage"/>
        </div>
       <div><button type="button" style={{ background: "none", borderColor :"blue" , borderWidth: "11px", borderRadius: "15px", marginTop: "150px", fontSize: "30px" }} onClick={() => closeVorlage() }>Zurück</button></div></div> 
       ),
       67: ( <div><div><img  style={{ maxWidth: "600px", maxHeight: "700px", marginTop: "-70px" }}src="https://picsum.photos/id/237/1000/1000" alt="vorlage"/>
       </div>
      <div><button type="button" style={{ background: "none", borderColor :"blue" , borderWidth: "11px", borderRadius: "15px", marginTop: "150px", fontSize: "30px" }} onClick={() => closeVorlage() }>Zurück</button></div></div> 
      ),


    };
    const header = {
        1: (
            <div>
                <p>Schritt 1</p>
            </div>
        ),
        2: (
            <div>
                <p>Schritt 2</p>
            </div>
        ),
        3: (
            <div>
                <p>Schritt 3</p>
            </div>
        ),
        4: (
            <div>
                <p>Schritt 4</p>
            </div>
        ),
        5: (
            <div>
                <p>Schritt 5</p>
            </div>
        ),
        6: (
            <div>
                <p>Schritt 6</p>
            </div>
        ),
    };
    let a;
    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }
    function openVorlage(): void {
        setText(69);
    }
    function closeVorlage(): void{
        setText(3);
    }
    let buttonBack;
    let buttonNext;
    let buttonEnd; 
    let modal;

    buttonBack =
        showtext >= 2 && showtext !== 69? (
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
        showtext <= 4  && showtext !== 69 ?  (
            <div className="nextbutton" style={{  marginTop: "15px" }}>
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
renderer.render(<SDG11_GB />, document.getElementById("root"));
