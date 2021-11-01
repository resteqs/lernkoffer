// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-const */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import a from "../../Vorlagen/Quiz/letter-a.png";
import b from "../../Vorlagen/Quiz/letter-b.png";
import Logo from "../../../SDGLogos/Goal-SDG06.png";
import Modal from "react-modal";
import { debug } from "console";

interface States {
    shouldShowModal: boolean;
    onlyCloseWithButton: boolean;
}

// eslint-disable-next-line react/prefer-stateless-function
export const SDG05_Quiz = (): JSX.Element => {
    const sdg = "SDG07";

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const questionsNumber = 4;

    const button1class = classNames("pushable", "answerButtonleft");

    const button2class = classNames("pushable", "answerButtonright");

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
        /* leftbutton, answer 1 is true 2 is false */ 1: 2,
        2: 1,
        3: 2,
        4: 1,
    };

    const answerNumbers2 = {
        /* rightbutton, answer 1 is true 2 is false */ 1: 1,
        2: 2,
        3: 1,
        4: 2,
    };

    let answer1 = 0;

    let answer2 = 0;

    let showtext = 1;

    // eslint-disable-next-line class-methods-use-this
    function handleClick(): void {
        answer1 = answerNumbers1[showtext]; /* leftbutton, answer 1 is true 2 is false */
        answer2 = answerNumbers2[showtext]; /* rightbutton, answer 1 is true 2 is false */
    }

    function incrementCount(): void {
        showtext += 1;
    }

    let modal;
    modal = (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => {
                setIsOpen(false);
                incrementCount();
                console.log(showtext);
            }}
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
            closeTimeoutMS={500}
        >
            <div className="content-header">
                <p>Title</p>{" "}
                <button type="button" className="personCheckOkButton" onClick={() => setIsOpen(false)}>
                    <b>Okay</b>
                </button>
            </div>
        </Modal>
    );

    return (
        <div>
            <head>
                <style>{"body { background-color: #fff; }"}</style>
            </head>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Hochwertige Bildung
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <p className="questionNumber">Question {showtext}</p>
            <p className="quizQuestion">{Question[showtext]}</p>
            <div>
                <button
                    className={button1class}
                    type="button"
                    style={{ height: "30%" }}
                    onClick={() => {
                        handleClick();
                        setTimeout(() => {
                            setIsOpen(true);
                        }, 1000);
                    }}
                >
                    <span className="shadow" />
                    <span className={answer1 === 1 ? "edgegreen" : (answer1 === 2 ? "edgered" : "edgeblue")} />
                    <span
                        className="front"
                        style={
                            answer1 === 1
                                ? { backgroundColor: "green" }
                                : (answer1 === 2
                                ? { backgroundColor: "red" }
                                : { backgroundColor: "blue" })
                        }
                >
                        <img className="letterbox" src={a} alt="a" /> <br />{" "}
                        <p className="buttontext">{Answer1Text[showtext]}</p>
                    </span>
                </button>{" "}
                <FontAwesomeIcon icon="check-square" />
                <button
                    className={button2class}
                    type="button"
                    style={{ height: "30%" }}
                    onClick={() => {
                        handleClick();
                        setTimeout(() => {
                            setIsOpen(true);
                        }, 1000);
                    }}
                >
                    <span className="shadow" />
                    <span className={answer2 === 1 ? "edgegreen" : (answer2 === 2 ? "edgered" : "edgeblue")} />
                    <span
                        className="front"
                        style={
                            answer2 === 1
                                ? { backgroundColor: "green" }
                                : (answer2 === 2
                                ? { backgroundColor: "red" }
                                : { backgroundColor: "blue" })
                        }
                    >
                        <img className="letterbox" src={b} alt="b" /> <br />
                        <p className="buttontext">{Answer2Text[showtext]}</p>
                    </span>
                </button>
            </div>
            {modal}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
