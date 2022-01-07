/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/no-nested-ternary */
/* eslint-disable unicorn/filename-case */

import * as React from "react";
import { Link } from "react-router-dom";
import { Quiz3OProps } from "../../Interfaces/SDG";
import { Quiz3Button } from "./Button/Quiz3Button";
import { ModalQuizComponent } from "../Modal/ModalComponent";
import { FancyButton } from "../Buttons/FancyButton";
import "../../styles/quizComponentStyle.css";

interface Props {
    sdg: Quiz3OProps;
}

// orientiert an 04 Quiz
export const Quiz3Component = (props: Props): JSX.Element => {
    const [showtext, setText] = React.useState(1);
    const [itemSelected, setSelectedItem] = React.useState(0);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const maxSlides = Object.keys(props.sdg.isQuizActive).length;

    const incrementCount = (): void => {
        setText((prevState) => prevState + 1);
    };

    const decrementCount = (): void => {
        setText((prevState) => prevState - 1);
    };

    const openModal = (): void => {
        setIsOpen(true);
    };

    const answerCW =
        itemSelected === 0 ? (
            <p>Falsch</p>
        ) : itemSelected === 1 ? (
            <p>{props.sdg.answerNumbersLeft[showtext]}</p>
        ) : itemSelected === 2 ? (
            <p>{props.sdg.answerNumbersMiddle[showtext]}</p>
        ) : itemSelected === 3 ? (
            <p>{props.sdg.answerNumbersRight[showtext]}</p>
        ) : (
            <div> </div>
        );

    const question =
        props.sdg.isQuizActive[showtext] === true ? (
            <p className="quizComponentQuestion">{props.sdg.question[showtext]}</p>
        ) : (
            <div> </div>
        );

    const buttonLeftOnClick = (): void => {
        setSelectedItem(1);
    };
    const buttonMiddleOnClick = (): void => {
        setSelectedItem(2);
    };
    const buttonRightOnClick = (): void => {
        setSelectedItem(3);
    };

    const button = (
        <div>
            <Quiz3Button
                id="left"
                content={props.sdg.buttonLeftContent[showtext]}
                className={itemSelected === 1 ? "selectedPerson" : ""}
                active={props.sdg.isQuizActive[showtext] === true}
                onClick={buttonLeftOnClick}
                styleDiv={{ float:"left" }}
            />

            <Quiz3Button
                id="middle"
                content={props.sdg.buttonMiddleContent[showtext]}
                className={itemSelected === 2 ? "selectedPerson" : ""}
                active={props.sdg.isQuizActive[showtext] === true}
                onClick={buttonMiddleOnClick}
                styleDiv={{ display:"inline", marginLeft:"60px" }}
            />
            <Quiz3Button
                id="right"
                content={props.sdg.buttonRightContent[showtext]}
                className={itemSelected === 3 ? "selectedPerson" : ""}
                active={props.sdg.isQuizActive[showtext] === true}
                onClick={buttonRightOnClick}
                styleDiv={{ float:"right", }}
            />

            
        </div>
    );

    const buttonCheck = (
        <div style={{ top: "900px", position: "fixed", left: "800px" }}>
            <FancyButton
                onClick={openModal}
                version="green"
                className="checkButton"
                active={props.sdg.isQuizActive[showtext] === true}
            >
                Überprüfen
            </FancyButton>
        </div>
    );

    const buttonBack = (
        <div style={{ top: "900px", position: "fixed" }}>
            <FancyButton
                onClick={decrementCount}
                version="red"
                className="backbutton"
                active={props.sdg.isQuizActive[showtext] === false}
            >
                Zurück
            </FancyButton>
        </div>
    );
    const buttonNext = (
        <div style={{ top: "900px", right: "60px", position: "fixed" }}>
            <FancyButton
                onClick={incrementCount}
                version="green"
                className="nextbutton"
                active={props.sdg.isQuizActive[showtext] === false}
            >
                Weiter
            </FancyButton>
        </div>
    );

    const buttonEnd = (
        <Link to="/Vorlagen/Endscreen">
            <div style={{ top: "900px", right: "60px", position: "fixed" }}>
                <FancyButton
                    onClick={incrementCount}
                    version="green"
                    className="nextbutton"
                    active={showtext === maxSlides && props.sdg.isQuizActive[showtext] === false}
                >
                    Beenden
                </FancyButton>
            </div>
        </Link>
    );

    const Modal =
        modalIsOpen === true ? (
            <ModalQuizComponent
                incrementCount={incrementCount}
                answercw={answerCW}
                setSelectedItem={setSelectedItem}
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                answer={props.sdg.explanation[showtext]}
            />
        ) : (
            <div> </div>
        );

    return (
        <>
            <div className={`colour_${props.sdg.sdg}_header`}>
                <div className="header">
                    {props.sdg.sdgTitle} <img className="sdglogo" alt="logo" src={props.sdg.logo} />
                </div>
            </div>

            {props.sdg.isQuizActive[showtext] === false ? (
                <>
                    <p className="title">{props.sdg.tile[showtext]}</p>
                    <p className="einleitungText" style={{ fontSize: "50px" }}>
                        {props.sdg.text[showtext]}
                    </p>
                </>
            ) : (
                <div> </div>
            )}

            {question}
            {button}
            {buttonCheck}
            {Modal}

            {buttonBack}
            {buttonNext}
            {buttonEnd}
        </>
    );
};
