// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
import * as React from "react";
import ReactRef, { useState, useRef, useEffect } from 'react';
import Modal, { ICustomModalStyle } from "@bdenzer/react-modal";
import classNames from 'classnames';
import a from "./letter-a.png"
import b from "./letter-b.png"
import Logo from "../../../SDGLogos/Goal-06.png";


interface States {
    shouldShowModal: boolean;
    onlyCloseWithButton: boolean;
}


const sdg = "SDG06";
let answer1 = 0;
let answer2 = 0;
const button1class = classNames ('pushable', 'answerButtonleft');
const button2class = classNames ('pushable', 'answerButtonright');

// eslint-disable-next-line react/prefer-stateless-function
export class Quiz extends React.Component<unknown, States> {
    constructor(props: unknown) {
        super(props);
        this.state = {
            shouldShowModal: false,
            onlyCloseWithButton: true,
        };
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        
    }

  

    // eslint-disable-next-line class-methods-use-this
    public  handleClick(): void {
       answer1 = 1 /* leftbutton answer 1 is true 2 is false */
       answer2 = 2 /* rightbutton answer 1 is true 2 is false */
       
    }


        
        
    private closeModal(): void {
        this.setState({ shouldShowModal: false });
    }

    private openModal(): void {
        this.setState({ shouldShowModal: true });
    }

    render(): JSX.Element {
        const modalStyle: ICustomModalStyle = {
            animationTime: 400,
            closeButtonText: {
                color: "white",
            },
            hoveredButtonText: {
                fontWeight: "bold",
            },
            modalHeader: {
                backgroundColor: "green",
            },
            modalTitle: {
                color: "white",
            },
        };
        return (
            <div>
                <head>
                <style>{'body { background-color: #fff; }'}</style>
                </head>
              <div className={`colour_${sdg}`}>
                <div className="header">
                Hochwertige Bildung<img className="sdglogo" alt="logo" src={Logo} />
                </div>
                 </div>
                <p className="questionNumber">Question 1/4</p>
                <p className="quizQuestion">Does a passenger car or a plane produce more greenhouse gases?</p>
                <div>
                    <button
                        className= {button1class}
                        type="button"
                        style = { { height: '30%' } }
                        onClick={() => {
                            this.handleClick()
                            setTimeout(() => {
                                this.openModal();
                            }, 1000);
                        }}
                        
                    >
                     <span className="shadow" />
                    <span className= { answer1 === 1 ?  "edgegreen" : (answer1 === 2 ? "edgered"  :  "edgeblue" ) }/>
                    <span className="front" style = { answer1 === 1 ? { backgroundColor: "green" }: (answer1 === 2 ? { backgroundColor: "red" } : { backgroundColor: "blue" }) }>
                    <img className="letterbox" src= {a} alt="a"/> <br/> <p className="buttontext">Car</p>
        </span>
                    </button>
                    <button
                        className= {button2class}
                        type="button"
                        style = { { height: '30%' } }
                        onClick={() => {
                            this.handleClick()
                            setTimeout(() => {
                                this.openModal();
                            }, 1000);
                        }}
                        
                    >
                     <span className="shadow" />
                    <span className= { answer2 === 1 ?  "edgegreen" : (answer2 === 2 ? "edgered"  :  "edgeblue" ) }/>
                    <span className="front" style = { answer2 === 1 ? { backgroundColor: "green" }: (answer2 === 2 ? { backgroundColor: "red" } : { backgroundColor: "blue" }) }>
                    <img className="letterbox" src= {b} alt="b"/> <br/><p className="buttontext">Planes</p>
        </span>
                    </button>
                </div>
                <div>
                    <Modal
                        closeModal={this.closeModal}
                        customStyle={modalStyle}
                        shouldShowModal={this.state.shouldShowModal}
                        title="React Modal in TypeScript"
                        onlyCloseWithButton={this.state.onlyCloseWithButton === true}
                    >
                        The plane does. Studies show that a plexport default Quiz; ne produces about 230 grams per Person per kilometer
                        (g/Pkm) while a passenger car only frees about 147 g/Pkm.
                    </Modal>
                </div>
            </div>
        );
    }
}
