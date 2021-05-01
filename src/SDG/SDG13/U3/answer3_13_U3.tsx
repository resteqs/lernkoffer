// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
import * as React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
export class answer3_13_u3 extends React.Component {

    render(): JSX.Element {
        return (
            <div>
                <p className = "header">Question 3</p>
                <div className = "questionText">
                    <p className = "text">Does a passenger car or an urban bus produce more carbon dioxide?</p>
                </div>
                <div>
                    <button className = "answerButtonleftright" type = "button">
                        The passenger car
                    </button>
                    <button className = "answerButtonrightfalse" type = "button">
                        The urban bus
                    </button>
                </div>
                <p className = "solution">
                The passenger car does, it is estimated that those vehicles free about 1.00 g/Pkm whereas the buses only free about 0.06 g/Pkm
                </p>
                <Link to  = "/sdg13/u3/tips">
                    <div className = "greenButton">
                        Tips
                    </div>
                </Link>
            </div>
        );
    }
}
