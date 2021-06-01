// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
import * as React from "react";
import { Link } from "react-router-dom";
import { answer } from "./question1_13_U3";

// eslint-disable-next-line react/prefer-stateless-function
export class answer1_13_u3 extends React.Component {

    constructor(props)
    {   super(props);
        this.DisplayAnswer();
    }

    // eslint-disable-next-line class-methods-use-this
    DisplayAnswer() : void
    {
        if(answer === 1)
        {
            alert("nice")
        } else {
            alert("bad")
        }
        
    }

    render(): JSX.Element {
        return (
            <div>
                <p className = "header">Question 1</p>
                <div className = "questionText">
                    <p className = "text">Does a passenger car or a plane produce more greenhouse gases?</p>
                </div>
                <div>
                    <button className = "answerButtonleftfalse" type = "button">
                        The passenger car
                    </button>
                    <button className = "answerButtonrightright" type = "button">
                        The plane
                    </button>
                </div>
                <p className = "solution">
                    The plane does. Studies show that a plane produces about 230 grams per Person per kilometer (g/Pkm) while a passenger car only frees about 147 g/Pkm.
                </p>
                <Link to  = "/sdg13/u3/question2">
                    <div className = "greenButton">
                        Next Question
                    </div>
                </Link>
            </div>
        );
    }
}
