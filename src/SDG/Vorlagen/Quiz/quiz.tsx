// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-const */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Modal, { ICustomModalStyle } from "@bdenzer/react-modal";
import classNames from 'classnames';
import a from "./letter-a.png"
import b from "./letter-b.png"
import Logo from "../../../SDGLogos/Goal-SDG06.png";


interface States {
    shouldShowModal: boolean;
    onlyCloseWithButton: boolean;
}

// eslint-disable-next-line react/prefer-stateless-function
export class Quiz extends React.Component<unknown, States> {
   
    sdg = "SDG07";

    questionsNumber = 4;

    button1class = classNames ('pushable', 'answerButtonleft');

    button2class = classNames ('pushable', 'answerButtonright');

    Question = {
        1: `Text1`,
        2: `Text2`,
        3: `Text3`,
        4: `Text4`,
    };

    Answer1Text = {
        1: `Text1`,
        2: `Text2`,
        3: `Text3`,
        4: `Text4`,
    };

    Answer2Text = {
        1: `Text1`,
        2: `Text2`,
        3: `Text3`,
        4: `Text4`,
    };

    Explanation = {
        1: `Text1`,
        2: `Text2`,
        3: `Text3`,
        4: `Text4`,
    };

    answerNumbers1 = { /* leftbutton, answer 1 is true 2 is false */
        1: 2,
        2: 1,
        3: 2,
        4: 1,
    };

    answerNumbers2 = { /* rightbutton, answer 1 is true 2 is false */
        1: 1,
        2: 2,
        3: 1,
        4: 2,
    };

    answer1 = 0;

    answer2 = 0;

    showtext = 1;

   
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
       this.answer1 = this.answerNumbers1[this.showtext] /* leftbutton, answer 1 is true 2 is false */
       this.answer2 = this.answerNumbers2[this.showtext] /* rightbutton, answer 1 is true 2 is false */
       
    }

    public incrementCount(): void {
        this.showtext += 1
    }

        
        
    private closeModal(): void {
        this.setState({ shouldShowModal: false });
       
       if(this.showtext < this.questionsNumber)
       {
        this.incrementCount()
        this.answer1 = 0;
        this.answer2 = 0;
       }
       else
       {
        window.location.href = "src/help.tsx"
       }


    }

    private openModal(): void {
        this.setState({ shouldShowModal: true });
    }

    render(): JSX.Element {
        const modalStyle: ICustomModalStyle = {
            animationTime: 400,
            closeButtonText: {
                color: "red",
                position: "absolute",
                marginTop: "1000px",
                width: "300px",
                zIndex: 100000,
            },
            hoveredButtonText: {
                fontWeight: "bold",
            },
            modalHeader: {
                backgroundColor: "green",
                fontSize: '80px',
                justifyContent: "center"
            },
            modalTitle: {
                color: "white",
            },
            modalInner: {
                maxWidth: '1500px',
                minHeight: '700px',
                marginTop: '100px',
                fontSize: '50px'
            }
        };
        return (
            <div>
                <head>
                <style>{'body { background-color: #fff; }'}</style>
                </head>
              <div className={`colour_${this.sdg}_header`}>
                <div className="header">
                Hochwertige Bildung<img className="sdglogo" alt="logo" src={Logo} />
                </div>
                 </div>
                <p className="questionNumber">Question {this.showtext}</p>
                <p className="quizQuestion">{this.Question[this.showtext]}</p>
                <div>
                    <button
                        className= {this.button1class}
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
                    <span className= { this.answer1 === 1 ?  "edgegreen" : (this.answer1 === 2 ? "edgered"  :  "edgeblue" ) }/>
                    <span className="front" style = { this.answer1 === 1 ? { backgroundColor: "green" }: (this.answer1 === 2 ? { backgroundColor: "red" } : { backgroundColor: "blue" }) }>
                    <img className="letterbox" src= {a} alt="a"/> <br/> <p className="buttontext">{this.Answer1Text[this.showtext]}</p>
        </span>
                    </button>  <FontAwesomeIcon icon="check-square" />
                    <button
                        className= {this.button2class}
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
                    <span className= { this.answer2 === 1 ?  "edgegreen" : (this.answer2 === 2 ? "edgered"  :  "edgeblue" ) }/>
                    <span className="front" style = { this.answer2 === 1 ? { backgroundColor: "green" }: (this.answer2 === 2 ? { backgroundColor: "red" } : { backgroundColor: "blue" }) }>
                    <img className="letterbox" src= {b} alt="b"/> <br/><p className="buttontext">{this.Answer2Text[this.showtext]}</p>
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
                        {this.Explanation[this.showtext]}
                    </Modal>
                </div>
            </div>
        );
    }
}
