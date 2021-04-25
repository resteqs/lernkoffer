// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
import * as React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
export class question1_13_u3 extends React.Component {

    render(): JSX.Element {
        return (
            <div>
                <p className = "header">Question 1</p>
                <div className = "questionText">
                    <p className = "text">Does a passenger car or a plane produce more greenhouse gases?</p>
                </div>
                <div>
                    <Link to = "/sdg13/u3/answer1">
                        <button className = "answerButtonleft" type = "button" onClick = { () => alert("Think about it") }>
                            The passenger car
                        </button>
                        <button className = "answerButtonright" type = "button" onClick = { () => alert("Well done") } >
                            The plane
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}
