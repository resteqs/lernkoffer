import React from "react";
import { Link } from "react-router-dom";

export const SDG13_Quiz_Question2 = (): JSX.Element => {
    return (
        <>
            <p className="header">Question 2</p>
            <div className="questionText">
                <p className="text">
                    Does a railroad (long-distance traffic) or a tram/underground produce more volatile organic
                    compounds (gases that are pretty precarious)?
                </p>
            </div>
            <div>
                <Link to="/SDG13/u3/answer2">
                    <button className="answerButtonleft" type="button" onClick={() => alert("Are you sure about it?")}>
                        The railroad
                    </button>
                    <button className="answerButtonright" type="button" onClick={() => alert("Are you sure about it?")}>
                        The tram/underground
                    </button>
                </Link>
            </div>
        </>
    );
};
