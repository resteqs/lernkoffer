// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
import * as React from "react";
import { Link } from "react-router-dom";



// eslint-disable-next-line import/no-mutable-exports
let answer = 0;

// eslint-disable-next-line react/prefer-stateless-function
export class question1_13_u3 extends React.Component {
    
   // eslint-disable-next-line class-methods-use-this
   public answer1() : void
    {
        answer = 1;
    }

    // eslint-disable-next-line class-methods-use-this
    public answer2() : void
    {
        answer = 2;
    }

    render(): JSX.Element {
        return (
            <div>
                <p className = "header">Question 1</p>
                <div className = "questionText">
                    <p className = "text">Does a passenger car or a plane produce more greenhouse gases?</p>
                </div>
                <div>
                    <Link to = "/sdg13/u3/answer1">
                        <button className = "answerButtonleft" type = "button" onClick = { () => this.answer1()}> 
                            The passenger car
                        </button> 
                        <button className = "answerButtonright" type = "button" onClick = { () => this.answer2 } >
                            The plane
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export { answer }