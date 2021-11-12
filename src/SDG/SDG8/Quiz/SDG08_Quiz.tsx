// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable eslint-comments/no-duplicate-disable */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-const */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
import * as React from "react";
import classNames from "classnames";
import renderer from "react-dom";

import Logo from "../../../SDGLogos/Goal-SDG08.png";
import Modal from "react-modal";
import infotextbutton from "../../../styles/Infotextbutton.module.css";

import { Link } from "react-router-dom";

interface States {
    shouldShowModal: boolean;
    onlyCloseWithButton: boolean;
}

// eslint-disable-next-line react/prefer-stateless-function
export const SDG08_Quiz = (): JSX.Element => {
    const sdg = "SDG08";
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let [showtext, setText] = React.useState(1);
    let [itemSelected, setSelectedItem] = React.useState(0);

    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }

    function select1(): void {
        setSelectedItem(1);
    }
    function select2(): void {
        setSelectedItem(2);
    }
    function select3(): void {
        setSelectedItem(3);
    }

    const Question = {
        1: (
            <div>
                <p>
                    „In einer Beziehung soll nur der Mann Geld verdienen! Die Aufgabe der Frau ist es, den Haushalt zu
                    führen und auf die Kinder aufzupassen, falls es welche gibt!“{" "}
                </p>
            </div>
        ),
        2: (
            <div>
                <p>„In Firmen und Geschäften dürfen sowohl Männer als auch Frauen die Chefs sein!“ </p>
            </div>
        ),
        3: (
            <div>
                <p>„Jede Frau soll (genauso wie jeder Mann) aus freien Stücken heiraten können“ </p>
            </div>
        ),
        4: (
            <div>
                <p>„Auch Männer dürfen Berufe wie Krankenpfleger, Sekretär oder Friseur ausüben“ </p>
            </div>
        ),
        5: (
            <div>
                <p>„In einer Beziehung darf der Mann wegen seines Geschlechts über die Frau bestimmen“ </p>
            </div>
        ),
        6: (
            <div>
                <p>„Jeder soll für dieselbe Arbeit auch genau gleich viel Geld bekommen!“ </p>
            </div>
        ),
        7: (
            <div>
                <p>
                    „Wenn beispielsweise ein verheirateter Mann stirbt, sollen nur männliche Verwandte wie der Sohn
                    erben, nicht die Ehefrau!“{" "}
                </p>
            </div>
        ),
    };

    const Answer1Text = {
        1: `Text2`,
        2: `Text2`,
        3: `Text3`,
        4: `Text4`,
    };

    const Answer2Text = {
        1: `Text2`,
        2: `Text2`,
        3: `Text3`,
        4: `Text4`,
    };

    const Explanation = {
        1: (
            <div>
                <p>
                    Da jeder Mensch, unabhängig des Geschlechts, gleichbehandelt werden und die gleichen Möglichkeiten
                    haben soll, gehört es sich, dass in einer Beziehung die Partner gemeinsam entscheiden, wer welche
                    Aufgaben übernimmt, ob die Aufgaben so strickt vergeben werden müssen und ob sie aufgeteilt werden
                    können. Das sollte nur geschehen, wenn beide Partner einverstanden sind. Dadurch sind dann beide
                    Partner im Idealfall zufriedener mit ihren Aufgaben, was natürlich auch die Stimmung im Haus und in
                    der Beziehung generell besser macht!{" "}
                </p>
            </div>
        ),
        2: (
            <div>
                <p>
                    Wer Chef wird sollte nur danach entschieden werden, ob jemand für diesen Job geeignet ist und die
                    notwendigen Fähigkeiten dazu besitzt. Dementsprechend sollte nicht danach ausgewählt werden, welches
                    Geschlecht die Person hat, sondern nur auf das Können geachtet werden. Wenn dadurch gleich viele
                    Männer und Frauen Chefs würden, könnten die Frauen und Männer sich dann auch selbst besser darum
                    kümmern, dass sie gerechter behandelt werden.{" "}
                </p>
            </div>
        ),
        3: (
            <div>
                <p>
                    Jeder Mensch, egal ob Mann oder Frau, hat das Recht sein Leben so zu gestalten, wie er das möchte.
                    Dazu gehören unter anderem, wen und ob man heiraten möchte, beziehungsweise mit wem man zusammen
                    sein möchte. Das wird auch in der „Allgemeinen Erklärung der Menschenrechte“ gesagt. Ein weiterer
                    Vorteil von einer freien Wahl des Partners ist, dass die Beziehung wahrscheinlich glücklicher ist
                    und länger hält!{" "}
                </p>
            </div>
        ),
        4: (
            <div>
                <p>
                    Die Berufswahl ist unabhängig vom Geschlecht, und jeder darf sich für jeden Beruf bewerben, wenn er
                    das möchte. Denn es ist für die Jobwahl egal welches Geschlecht man hat, solange man den Job ausüben
                    will, sollte man auch versuchen, ihn auszuüben!{" "}
                </p>
            </div>
        ),
        5: (
            <div>
                <p>
                    In der „Allgemeinen Erklärung der Menschenrechte“ wird gesagt, dass jeder Mensch die gleichen Rechte
                    hat, deswegen sollten auch innerhalb einer Beziehung beide Partner die gleichen Rechte haben! So
                    könnte es verhindert werden, dass der Mann die Frau zu irgendetwas schlimmem zwingt (zum Beispiel
                    Gewalt gegen Frauen).{" "}
                </p>
            </div>
        ),
        6: (
            <div>
                <p>
                    Dies steht fast genauso in der „Allgemeinen Erklärung der Menschenrechte“: „Jeder, ohne Unterschied,
                    hat das Recht auf gleichen Lohn für gleiche Arbeit.“{" "}
                </p>
            </div>
        ),
        7: (
            <div>
                <p>
                    Hier wird gesagt, dass nur männliche Verwandte erben dürfen. Das heißt, dass der Mann, wenn die Frau
                    sterben würde, erben würde. Also hat der Mann dieses Recht. Da aber in der Ehe beide Partner die
                    gleichen Rechte haben, dürfen auch beide vom jeweils anderen etwas erben.{" "}
                </p>
            </div>
        ),
    };

    const answerNumbers1 = {
        1: "Wrong",
        2: "True",
        3: "True",
        4: "True",
        5: "Wrong",
        6: "True",
        7: "Wrong",
    };

    const answerNumbers2 = {
        1: "True",
        2: "Wrong",
        3: "Wrong",
        4: "Wrong",
        5: "True",
        6: "Wrong",
        7: "True",
    };

    const answerNumbers3 = {
        1: "True",
        2: "Wrong",
        3: "Wrong",
        4: "Wrong",
        5: "True",
        6: "Wrong",
        7: "True",
    };

    const text = {
        1: (
            <div>
                <p className="einleitungText">
                    Welche dieser Kinderrechte sind, denkst du, bei Milo verletzt worden? Wenn du denkst, dass er das
                    Kinderrecht besitzt, dann tippe auf den &#128522;, wenn du dir unsicher bist oder denkst, dass er es
                    nur teilweise ausführen kann, dann tippe auf &#128528;, wenn er das Recht nicht hat, dann tippe auf
                    &#128577;.{" "}
                </p>
            </div>
        ),
        2: (
            <div>
                <p className="einleitungText">
                    Dadurch wird gesagt, dass unabhängig von Geschlecht, Herkunft, Religion und vielen weiteren Sachen
                    jeder Mensch die gleichen Rechte hat Bei manchen von den Beispielen, die ich euch gerade genannt
                    habe, wurden Menschenrechte verletzt. Manchmal habe ich euch auch einfach ein Zitat aus der
                    „Allgemeinen Erklärung der Menschenrechte &ldquo; dazugegeben!{" "}
                </p>
            </div>
        ),
        3: (
            <div>
                <p className="einleitungText">
                    Ich hoffe, ihr erkennt durch diese Beispiele jetzt besser, wo Frauen und Männer ungleich behandelt
                    werden!{" "}
                </p>
            </div>
        ),
    };

    let answerCW;
    let answer;
    let buttonCheck;
    let question;
    let button1;
    let button2;

    let modal;
    answerCW =
        itemSelected === 0 ? (
            <p>Wrong</p>
        ) : (itemSelected === 1 ? (
            <p>{answerNumbers1[showtext]}</p>
        ) : 
        // eslint-disable-next-line unicorn/no-nested-ternary
        (itemSelected === 2 ? (
            <p>{answerNumbers2[showtext]}</p>
        ) : itemSelected === 3 ? (
            <p>{answerNumbers3[showtext]}</p>
        ) : (
            <div> </div>
        )));

    answer = (
        <p style={{ fontSize: "40px" }}>
            {" "}
            <b>Antwort:</b>
            {Explanation[showtext]}{" "}
        </p>
    );

    modal = (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
            overlayClassName={{
                base: "overlay-base",
                afterOpen: "overlay-after",
                beforeClose: "overlay-before",
            }}
            className={{
                base: "content-base",
                afterOpen: "content-after",
                beforeClose: "content-before",
            }}
            closeTimeoutMS={50}
        >
            <div className="content-header">
                {answerCW}
                <button
                    type="button"
                    className="personCheckOkButton"
                    onClick={() => {
                        setIsOpen(false);
                        incrementCount();
                        setSelectedItem(0);
                    }}
                >
                    <b>Okay</b>
                </button>
            </div>
            {answer}
        </Modal>
    );

    buttonCheck =
        showtext <= 7 ? (
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

    // source of the thumb: https://pixabay.com/de/vectors/hand-m%c3%b6gen-daumen-hoch-157251/
    button1 =
        showtext <= 7 ? (
            <button
                type="button"
                style={{
                    marginLeft: "120px",
                    marginRight: "20px",
                    marginTop: "60px",
                    background: "none",
                    borderColor: "blue",
                    borderWidth: "11px",
                    borderRadius: "15px",
                }}
                className={itemSelected === 1 ? "selectedPerson" : ""}
                onClick={() => select1()}
            >
                <div
                    style={{
                        width: "500px",
                        height: "500px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    id="1"
                >
                    <p style={{ fontSize: "190px" }}>
                        <div>&#128522;</div>
                    </p>{" "}
                </div>{" "}
            </button>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    // source of the thumb: https://pixabay.com/de/vectors/abneigung-hand-daumen-nieder-nein-157252/
    button2 =
        showtext >= 2 && showtext <= 7 ? (
            <button
                type="button"
                style={{
                    marginRight: "150px",
                    marginTop: "60px",
                    float: "right",
                    background: "none",
                    borderColor: "blue",
                    borderWidth: "11px",
                    borderRadius: "15px",
                }}
                className={itemSelected === 3 ? "selectedPerson" : ""}
                onClick={() => select3()}
            >
                <div
                    style={{
                        width: "500px",
                        height: "500px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    id="2"
                >
                    <p style={{ fontSize: "190px" }}>
                        <div>&#128577;</div>
                    </p>{" "}
                </div>
            </button>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    let button3 =
        showtext >= 2 && showtext <= 7 ? (
            <button
                type="button"
                style={{
                    marginRight: "100px",
                    marginTop: "60px",
                    float: "right",
                    background: "none",
                    borderColor: "blue",
                    borderWidth: "11px",
                    borderRadius: "15px",
                }}
                className={itemSelected === 2 ? "selectedPerson" : ""}
                onClick={() => select2()}
            >
                <div
                    style={{
                        width: "500px",
                        height: "500px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    id="3"
                >
                    <p style={{ fontSize: "190px" }}>
                        <div>&#128528;</div>
                    </p>{" "}
                </div>
            </button>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
    question =
        showtext >= 2 ? (
            <div style={{ textAlign: "center" }}>
                <p style={{ marginTop: "60px", marginLeft: "50px", fontSize: "50px" }} className="underlinedHeader">
                    {Question[showtext]}
                </p>
            </div>
        ) : (
            <div />
        );

    let buttonBack =
        showtext >= 9 ? (
            <div style={{ marginTop: "1px" }} className="backButtonDiv">
                {" "}
                <button type="button" onClick={decrementCount} className="backButton">
                    &#129044;
                </button>
            </div>
        ) : (
            <div> </div>
        );

    let buttonNext =
        showtext >= 8 && showtext <= 9 ? (
            <div style={{ marginTop: "10px" }} className="nextbutton">
                {" "}
                <div style={{ position: "absolute", top: "750px", left: "1700px" }}>
                    <button className={infotextbutton.pushable} type="button" onClick={incrementCount}>
                        <span className={infotextbutton.shadow} />
                        <span className={infotextbutton.edgegreen} />
                        <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                            <p className={infotextbutton.buttontext}>Weiter</p>
                        </span>
                    </button>
                </div>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    let buttonEnd =
        showtext === 10 ? (
            <div style={{ marginTop: "10px" }} className="nextbutton">
                {" "}
                <Link to="/Vorlagen/Endscreen">
                    {" "}
                    <div style={{ position: "absolute", top: "750px", left: "1700px" }}>
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
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    let textDisplay = showtext === 1 ? <p className="bodytext"> {text[showtext]}</p> : <div> </div>;

    let questionNumber = showtext >= 10 ? <p className="questionNumber">Frage: {showtext}/7</p> : <div> </div>;

    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Hochwertige Bildung
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>

            {textDisplay}
            {question}
            {button1}
            {button2}
            {button3}
            {buttonCheck}
            {modal}
            {buttonNext}
            {buttonBack}
            {buttonEnd}
            {questionNumber}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG08_Quiz />, document.getElementById("root"));
