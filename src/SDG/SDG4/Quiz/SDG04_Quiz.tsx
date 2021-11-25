// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable eslint-comments/no-duplicate-disable */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-const */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
import * as React from "react";
import classNames from "classnames";

import Logo from "../../../SDGLogos/Goal-SDG04.png";
import infotextbutton from "../../../styles/Infotextbutton.module.css";

import { Link } from "react-router-dom";
import { InfotextButtons } from "../../../Components/Buttons/InfotextButton";

interface States {
    shouldShowModal: boolean;
    onlyCloseWithButton: boolean;
}

// eslint-disable-next-line react/prefer-stateless-function
export const SDG04_Quiz = (): JSX.Element => {
    const sdg = "SDG04";
    let [showtext, setText] = React.useState(1);
    let [itemSelected, setSelectedItem] = React.useState(0);
    let [rightAnswers, setRightAnswer] = React.useState(0);

    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }
    function select1(): void {
        incrementAnswer();
        incrementCount();
    }
    function select2(): void {
        incrementCount();
    }

    function incrementAnswer(): void {
        setRightAnswer(rightAnswers + 1);
    }

    const Question = {
        2: (
            <div>
                <p>1. Genießt du eine kostenlose Schulausbildung, die dir Lesen, Schreiben und Rechnen beibringt? </p>
            </div>
        ),
        3: (
            <div>
                <p>
                    2. Bietet dir deine Schule die Möglichkeit später zu arbeiten oder zu studieren/deinen Traumberuf zu
                    machen?{" "}
                </p>
            </div>
        ),
        4: (
            <div>
                <p>
                    3. Ist deine Schule mit grundlegenden Unterrichtsmaterialien (Tafel, Kreide, Stühle und Tische) und
                    Lehrkräften, die für ihren Job ausgebildet wurden, ausgestattet?{" "}
                </p>
            </div>
        ),
        5: (
            <div>
                <p>4. Hat deine Schule eine Toilette und einen Waschbereich, die allen offen zur Verfügung steht? </p>
            </div>
        ),
        6: (
            <div>
                <p>5. Bietet dir deine Schule preisgünstiges und gutes Essen und Trinken? </p>
            </div>
        ),
        7: (
            <div>
                <p>
                    6. Ist jedes Kind in deinem Land, unabhängig von deren Geschlecht, berechtigt zur Schule zu gehen?{" "}
                </p>
            </div>
        ),
        8: (
            <div>
                <p>
                    7. Vermittelt deine Schule Wissen im Bereich der Menschenrechte, Demokratie, Frieden, Freiheit und
                    Toleranz?{" "}
                </p>
            </div>
        ),
    };

    const text = {
        1: (
            <div>
                <p className="einleitungText">
                    Hoffentlich bist du in der Lage in die Schule zu gehen. Ob dir das in die Schule gehen Spaß macht
                    oder nicht ist für dieses Quiz aber nicht so wichtig.{" "}
                </p>
                <p className="einleitungText">
                    {" "}
                    Hochwertige Schulbildung ist für jedes Kind auf der Welt sehr wichtig. Du lernst nicht nur
                    grundlegende Dinge wie Lesen, Schreiben und Rechnen, sondern auch wie du dir selbst vieles
                    beibringen kannst.{" "}
                </p>
                <p className="einleitungText">
                    Damit du herausfinden kannst wie hochwertig deine Bildung ist, spielen wir jetzt ein Spiel.
                </p>
                <p className="einleitungText">
                    {" "}
                    Bei jeder Frage kannst du mit „trifft zu“ oder mit „trifft nicht zu“ antworten. Wenn du die Frage
                    mit „trifft zu“ beantwortet hast, merke 1 Punkt. Wenn du deine Antwort „trifft nicht zu“ war, merke
                    dir 0 Punkte. Zähle am Schluss alle Punkte zusammen und vergleiche mit der Lösung.
                </p>
            </div>
        ),
        9: (
            <div>
                <p className="einleitungText">Deine Punktzahl: {rightAnswers}</p>
            </div>
        ),
    };

    let question;
    let button1;
    let button2;

    // source of the thumb: https://pixabay.com/de/vectors/hand-m%c3%b6gen-daumen-hoch-157251/
    button1 =
        showtext >= 2 && showtext <= 8 ? (
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
                        <div>JA</div>
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
        showtext >= 2 && showtext <= 8 ? (
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
                        <div>NEIN</div>
                    </p>{" "}
                </div>
            </button>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
    question =
        showtext !== 10 ? (
            <div style={{ textAlign: "center" }}>
                <p style={{ marginTop: "60px", marginLeft: "50px", fontSize: "50px" }} className="underlinedHeader">
                    {Question[showtext]}
                </p>
            </div>
        ) : (
            <div />
        );

    let buttonBack =
        showtext <= 2 ? (
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
        (showtext >= 9 && showtext <= 9) || showtext === 1 ? (
            <div style={{ marginTop: "10px" }} className="nextbutton">
                {" "}
                <div style={{ position: "absolute", top: "950px", left: "1700px" }}>
                    <InfotextButtons showtext={showtext} text="Weiter" setText = {setText}/>
                </div>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    let buttonEnd =
        showtext === 9 ? (
            <div style={{ marginTop: "10px" }} className="nextbutton">
                {" "}
                <Link to="/Vorlagen/Endscreen">
                    {" "}
                    <div style={{ position: "absolute", top: "950px", left: "1700px" }}>
                        <InfotextButtons showtext={showtext} text="Weiter" setText = {setText}/>
                    </div>
                </Link>{" "}
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    let Ergebnis =
        showtext === 9 ? (
            rightAnswers === 0 || rightAnswers === 2 ? (
                <div>
                    <p className="einleitungText">
                        Du solltest mit deinen Eltern über deine Schule reden, da jedes Kind ein Recht auf eine
                        hochwertige Bildung hat. Diese können dann mit den Verantwortlichen in der Schule darüber reden,
                        dass bei euch in der Schule Fortbildungen der Lehrer oder neue Unterrichtsmaterialien nötig
                        sind.
                    </p>
                </div>
            ) : // eslint-disable-next-line unicorn/no-nested-ternary
            rightAnswers === 3 || rightAnswers === 4 || rightAnswers === 5 ? (
                <div>
                    <p className="einleitungText">
                        Du verfügst bereits über eine grundlegende Schulausbildung. Dennoch sollte jedes Kind dieselbe
                        sehr gute Bildung bekommen um Chancengleichheit zu garantieren und um Wirtschaftswachstum auch
                        in ärmeren Ländern zu garantieren. Du kannst auch selbst helfen indem du Proteste für bessere
                        Bildung organisierst oder daran teilnimmst.
                    </p>
                </div>
            ) : // eslint-disable-next-line unicorn/no-nested-ternary
            rightAnswers === 6 || rightAnswers === 7 ? (
                <div>
                    Du bekommst eine gute oder sogar sehr gute Bildung, die dir preisgünstig oder kostenlos zur
                    Verfügung steht und alle weiteren wichtigen Kriterien erfüllt. Jetzt kannst du dich auf deine
                    Ausbildung konzentrieren und vielleicht Kindern helfen die keine so gute Schulbildung bekommen.
                </div>
            ) : (
                <div> </div>
            )
        ) : (
            <div> </div>
        );

    let questionNumber =
        showtext >= 10 || showtext !== 1 ? <p className="questionNumber">Frage: {showtext}/7</p> : <div> </div>;
    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Hochwertige Bildung
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <p className="bodytext"> {text[showtext]}</p>

            {question}
            {button1}
            {button2}
            {Ergebnis}
            {buttonNext}
            {buttonBack}
            {buttonEnd}
            {questionNumber}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
