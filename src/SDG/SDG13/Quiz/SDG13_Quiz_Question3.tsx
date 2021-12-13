import React from "react";
import { Link } from "react-router-dom";

export const SDG13_Quiz_Question3 = (): JSX.Element => {
    return (
        <div>
            <p className="header">Question 3</p>
            <div className="questionText">
                <p className="text">Does a passenger car or an urban bus produce more carbon dioxide?</p>
            </div>
            <div>
                <Link to="/SDG13/u3/answer3">
                    <button className="answerButtonleft" type="button" onClick={() => alert("excellent")}>
                        The passenger car
                    </button>
                    <button className="answerButtonright" type="button" onClick={() => alert("Think one more time")}>
                        The urban bus
                    </button>
                </Link>
            </div>
        </div>
    );
};
