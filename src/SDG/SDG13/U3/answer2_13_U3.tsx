// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
import * as React from "react";

// eslint-disable-next-line react/prefer-stateless-function
export class answer2_13_u3 extends React.Component {

    render(): JSX.Element {
        return (
            <div>
                <p className = "header">Question 2</p>
                <div className = "questionText">
                    <p className = "text">Does a railroad (long-distance traffic) or a tram/underground produce more volatile organic compounds (gases that are pretty precarious)?</p>
                </div>
                <div>
                    <button className = "answerButtonleftfalse" type = "button">
                        The railroad
                    </button>
                    <button className = "answerButtonrightfalse" type = "button">
                        The tram/underground
                    </button>
                </div>
                <p className = "solution">
                    None of them does produce any of those gases.
                </p>
                <a className = "greenButton" href="/sdg13/u3/question3" >Next Question</a>
            </div>
        );
    }
}
