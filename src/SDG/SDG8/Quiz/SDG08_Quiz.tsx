// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/no-nested-ternary */
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

import thumbup from "../../SDG5/Quiz/thumbs/like.png";
import thumbdown from "../../SDG5/Quiz/thumbs/dislike.png";

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
    function select4(): void {
        setSelectedItem(4);
    }
    function select5(): void {
        setSelectedItem(5);
    }

    const Question = {
        2: (
            <div>
                <p>Erholung </p>
            </div>
        ),
        3: (
            <div>
                <p>Freizeit und Spiel </p>
            </div>
        ),
        4: (
            <div>
                <p>Bildung </p>
            </div>
        ),
        5: (
            <div>
                <p>Gesundheit </p>
            </div>
        ),
        9: (
            <div>
                <p>
                    Ein 13-jähriges Mädchen soll jedes Wochenende mit dem Fahrrad 15min auf einem Fahrradweg zur Oma
                    fahren und ihr etwas zu essen mitbringen{" "}
                </p>
            </div>
        ),
        10: (
            <div>
                <p>Ein 8-jähriger Junge muss jeden Tag 5 Stunden in einem Bergwerk ohne Schutzkleidung arbeiten </p>
            </div>
        ),
        11: (
            <div>
                <p>
                    Zwei Geschwister, ein sechsjähriger Junge und ein zehnjähriges Mädchen fahren mit ihrem Vater für
                    drei Stunden mit dem Traktor auf eine Wiese zum Mähen{" "}
                </p>
            </div>
        ),
    };

    const Explanation = {
        2: (
            <div>
                <p>
                    &#128528;,da Milao nicht schwer körperlich arbeiten muss, so wie seine Brüder auf dem Feld, jedoch
                    kann das lange Sitzen auch sehr anstrengend werden.{" "}
                </p>
            </div>
        ),
        3: (
            <div>
                <p>
                    &#128577;,da Milo selbst erzählt hat, dass er wieder in die Schule möchte, um auch mit anderen
                    Kindern spielen zu können; am Markt sitzt er oft allein da.{" "}
                </p>
            </div>
        ),
        4: (
            <div>
                <p>
                    &#128577;,da Milo schon seit Monaten nicht mehr in der Schule war und noch die Grundlage, wie Lesen
                    und Schreiben, üben muss.{" "}
                </p>
            </div>
        ),
        5: (
            <div>
                <p>
                    &#128522;,da Milo keiner gesundheitlichen Gefahr ausgesetzt ist; er sitzt zwar oft lange, was auch
                    nicht unbedingt gesund ist, besonders für ein Kind, jedoch ist das mittlerweile auch in vielen Büros
                    so.{" "}
                </p>
            </div>
        ),
        9: (
            <div>
                <p>Kein Kinderrecht verletzt.</p>
            </div>
        ),
        10: (
            <div>
                <p>Kinderarbeit, da es sehr gefährlich ist und seine Gesundheit geschädigt wird.</p>
            </div>
        ),
        11: (
            <div>
                <p>Kein Kinderrecht verletzt, die Kinder sollten aber gesichert auf dem Traktor sitzen können.</p>
            </div>
        ),
    };

    const answerNumbers1 = {
        2: "Falsch",
        3: "Falsch",
        4: "Falsch",
        5: "Richtig",
        9: "Richtig",
        10: "Falsch",
        11: "Richtig",
    };

    const answerNumbers2 = {
        2: "Richtig",
        3: "Falsch",
        4: "Falsch",
        5: "Falsch",
        9: "Falsch",
        10: "Richtig",
        11: "Falsch",
    };

    const answerNumbers3 = {
        2: "Falsch",
        3: "Richtig",
        4: "Richtig",
        5: "Falsch",
    };

    const text = {
        1: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Aufgabe 1:{" "}
                </p>
                <p className="einleitungText">
                    Welche dieser Kinderrechte sind, denkst du, bei Milo verletzt worden? Wenn du denkst, dass er das
                    Kinderrecht besitzt, dann tippe auf den &#128522;, wenn du dir unsicher bist oder denkst, dass er es
                    nur teilweise ausführen kann, dann tippe auf &#128528;, wenn er das Recht nicht hat, dann tippe auf
                    &#128577;.{" "}
                </p>
            </div>
        ),

        6: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Fazit{" "}
                </p>
                <p className="einleitungText">
                    Milo leistet also Kinderarbeit: er kann nicht mehr zur Schule gehen oder spielen und somit sind
                    seine Kinderrechte verletzt. Außerdem ist er mit 10 Jahren noch zu jung dafür den ganzen Tag auf dem
                    Markt zu arbeiten. Aber auch alle seine Geschwister leisten Kinderarbeit. Das zeigt, dass die
                    Familie in Armut lebt und das Geld braucht, das ihre Kinder erarbeiten. Dies sollte jedoch nicht der
                    Fall sein. Zwei arbeitende Erwachsene sollten genug verdienen können, um vier Kinder zu versorgen.
                    Wenn das nicht der Fall ist, verdienen sie nicht so viel, wie ihnen eigentlich zu steht. Um Milo und
                    seinen Geschwistern zu helfen, müssten ihre Mutter und ihr Vater vom Staat oder von
                    Hilfsorganisationen Geld bekommen, damit alle Kinder wieder zur Schule gehen können. Außerdem sollte
                    es besser überprüft werden, ob auf dem Markt oder auf den Feldern Kinderarbeit vorhanden ist.{" "}
                </p>
            </div>
        ),
        7: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Aufgabe 2:{" "}
                </p>
                <p className="einleitungText">
                    Das heißt aber nicht, dass Kinder gar nicht „arbeiten“ dürfen. Solange keines ihrer Rechte
                    einge-schränkt wird oder sie es ganz verlieren, kann es sogar gut sein für Kinder etwas mitzuhelfen.
                    Durch z.B. Helfen im Haushalt oder Füttern eines eigenen Haustieres lernen Kinder Verantwortung zu
                    über-nehmen und was es heißt, sich um andere und sich selbst zu kümmern. Außerdem kann es ihnen
                    hel-fen selbstbewusster zu werden und viele Kinder freuen sich auch, wenn sie fertig sind, da sie
                    ihren Eltern und dem Rest der Familie helfen konnten. Wichtig ist immer darauf zu achten, wie alt
                    die Kin-der sind, ob es gefährlich oder schädigend ist und wie viel Zeit es beansprucht.{" "}
                </p>
            </div>
        ),

        8: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Aufgabe 2:{" "}
                </p>
                <p className="einleitungText">
                    Entscheide bei den folgenden 3 Bespielen, ob es für Kinder erlaubt ist, dies zu arbeiten oder nicht.
                    Wenn es erlaubt ist, wähle den grünen Daumen aus, ansonsten den roten Daumen.{" "}
                </p>
            </div>
        ),

        12: (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    {" "}
                    Fazit Aufgabe 2:{" "}
                </p>
                <p className="einleitungText">
                    Ihr wisst nun hoffentlich, was Kinderarbeit bedeutet. Hoffentlich musstet ihr diese noch nicht
                    selbst erleben und wenn doch, dann wisst ihr nun, dass es nicht okay ist und könnt mit jemandem, dem
                    ihr vertraut, darüber reden. Grundsätzlich solltet ihr immer sagen, wenn euch eine Arbeit zu viel
                    wird, ihr Hilfe braucht oder euch einfach nicht wohlfühlt diese zu machen. Das kann sehr viel helfen
                    und ist wichtig.{" "}
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
        ) : itemSelected === 1 ? (
            <p>{answerNumbers1[showtext]}</p>
        ) : itemSelected === 2 ? (
            <p>{answerNumbers2[showtext]}</p>
        ) : itemSelected === 3 ? (
            <p>{answerNumbers3[showtext]}</p>
        ) : (
            <div> </div>
        );

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

    button1 =
        showtext >= 2 && showtext <= 5 ? (
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
                        width: "350px",
                        height: "350px",
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

    button2 =
        showtext >= 2 && showtext <= 5 ? (
            <button
                type="button"
                style={{
                    marginRight: "120px",
                    marginTop: "60px",
                    float: "right",
                    background: "none",
                    borderColor: "blue",
                    borderWidth: "11px",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className={itemSelected === 3 ? "selectedPerson" : ""}
                onClick={() => select3()}
            >
                <div
                    style={{
                        width: "350px",
                        height: "350px",
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
        showtext >= 2 && showtext <= 5 ? (
            <button
                type="button"
                style={{
                    marginRight: "300px",
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
                        width: "350px",
                        height: "350px",
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

    // source of the thumb: https://pixabay.com/de/vectors/hand-m%c3%b6gen-daumen-hoch-157251/
    let button4 =
        showtext >= 9 && showtext <= 11 ? (
            <button
                type="button"
                style={{
                    marginLeft: "150px",
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
                >
                    <p style={{ fontSize: "190px" }}>
                        <div>
                            <img style={{ maxWidth: "300px" }} src={thumbup} alt="yes" />
                        </div>
                    </p>{" "}
                </div>{" "}
            </button>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    // source of the thumb: https://pixabay.com/de/vectors/abneigung-hand-daumen-nieder-nein-157252/
    let button5 =
        showtext >= 9 && showtext <= 11 ? (
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
                >
                    <p style={{ fontSize: "190px" }}>
                        <div>
                            <img style={{ maxWidth: "300px" }} src={thumbdown} alt="yes" />
                        </div>
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
        (showtext >= 6 && showtext <= 8) || showtext === 1 ? (
            <div style={{ marginTop: "10px" }} className="nextbutton">
                {" "}
                <div style={{ position: "absolute", top: "950px", left: "1700px" }}>
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
        showtext === 12 ? (
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

    buttonCheck =
        (showtext > 1 && showtext < 6) || (showtext > 8 && showtext <= 11) ? (
            <div style={{ marginTop: "10px" }} className="personCheckAnswerButton">
                {" "}
                <div style={{ position: "absolute", top: "950px" }}>
                    <button className={infotextbutton.pushable} type="button" onClick={() => setIsOpen(true)}>
                        <span className={infotextbutton.shadow} />
                        <span className={infotextbutton.edgegreen} />
                        <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                            <p className={infotextbutton.buttontext}>Überprüfe</p>
                        </span>
                    </button>
                </div>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
    let textDisplay = showtext === 1 || showtext >= 6 ? <p className="bodytext"> {text[showtext]}</p> : <div> </div>;

    let questionNumber = showtext >= 10 ? <p className="questionNumber">Frage: {showtext}/7</p> : <div> </div>;

    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Menschenwürdige Arbeit und Wirtschaftswachstum
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>

            {textDisplay}
            {question}
            {button1}
            {button2}
            {button3}
            {button4}
            {button5}
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
