// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-const */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
import * as React from "react";
import classNames from "classnames";
import a from "./letter-a.png";
import b from "./letter-b.png";
import Logo from "../../../SDGLogos/Goal-SDG06.png";
import Modal from "react-modal";
import infotextbutton from "../../../styles/Infotextbutton.module.css";

interface States {
    shouldShowModal: boolean;
    onlyCloseWithButton: boolean;
}

// eslint-disable-next-line react/prefer-stateless-function
export const Quiz = (): JSX.Element => {
    const sdg = "SDG07";
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let [showtext, setText] = React.useState(1);
    let [itemSelected, setSelectedItem] = React.useState(0)
    const questionsNumber = 4;

    const button1class = classNames("pushable", "answerButtonleft");

    const button2class = classNames("pushable", "answerButtonright");

    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }
    function select1(): void
    {
        setSelectedItem(1);
    }
    function select2(): void
    {
        setSelectedItem(2);
    }

    const Question = {
        1: `Text1`,
        2: `Text2`,
        3: `Text3`,
        4: `Text4`,
    };

    const Answer1Text = {
        1: `Text1`,
        2: `Text2`,
        3: `Text3`,
        4: `Text4`,
    };

    const Answer2Text = {
        1: `Text1`,
        2: `Text2`,
        3: `Text3`,
        4: `Text4`,
    };

    const Explanation = {
        1: `Text1`,
        2: `Text2`,
        3: `Text3`,
        4: `Text4`,
    };

    const answerNumbers1 = {
        1: "Wrong",
        2: "True",
        3: "Wrong",
        4: "True",
    };

    const answerNumbers2 = {
        1: "True",
        2: "Wrong",
        3: "True",
        4: "Wrong",
    };

    let answerCW;
    let answer;
    let buttonCheck;
    let question;
    let button1;
    let button2;

    let modal;
    answerCW = itemSelected === 0 ?(<p>Wrong</p>):( itemSelected === 1 ?( <p>{answerNumbers1[showtext]}</p> ):(<p>{answerNumbers2[showtext]}</p>))
    answer = <p style={{ fontSize: "40px" }}> <b>Antwort:</b>{Explanation[showtext]} </p>
    modal =
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
        closeTimeoutMS={50}
      >


        <div className="content-header">{answerCW}<button type="button" className="personCheckOkButton" onClick={() => {setIsOpen(false); incrementCount(); setSelectedItem(0) }}><b>Okay</b></button></div>
        {answer}
      </Modal>

buttonCheck =
        showtext < 10 ? (
            <div style={{ marginTop: "10px" }} className="personCheckAnswerButton">
                {" "}
                <button className={infotextbutton.pushable} type="button" onClick={() => setIsOpen(true)}>
                    <span className={infotextbutton.shadow} />
                    <span className={infotextbutton.edgegreen} />
                    <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                        <p className={infotextbutton.buttontext}>Überprüfe</p> 
                    </span>
                </button>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

button1 =  <button type="button" style={{ marginLeft: "150px",marginTop:"60px", background: "none", borderColor :"blue" , borderWidth: "11px", borderRadius: "15px" }} className={(itemSelected === 1) ? 'selectedPerson': ''} onClick={() => select1()}><div  style={{ width: "500px", height: "500px", display: "flex", justifyContent: "center", alignItems: "center" , }}><p style ={{ fontSize: "190px" }}>Ja</p> </div> </button>

button2= <button type="button" style={{ marginRight: "150px", marginTop:"60px", float: "right", background: "none", borderColor :"blue" , borderWidth: "11px", borderRadius: "15px" }} className={(itemSelected === 2) ? 'selectedPerson': ''} onClick={() => select2()}><div  style={{ width: "500px", height: "500px", display: "flex", justifyContent: "center", alignItems: "center" , }}><p style ={{ fontSize: "190px" }}>Ja</p> </div> </button>

question =
        showtext !== 10 ? (
            <div style={{ textAlign: "center" }}>
                <p style={{ marginTop: "60px", marginLeft: "50px", fontSize: "50px",  }} className="underlinedHeader">
                {Question[showtext]}
                </p>
            </div>
        ) : (
            <div />
        );

    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Hochwertige Bildung
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <p className="questionNumber">Frage: {showtext}/x</p>
            {question}
            {button1}
            {button2}
            {buttonCheck}
            {modal}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
