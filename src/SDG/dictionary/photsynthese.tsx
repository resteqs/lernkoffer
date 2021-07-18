import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
export const photosynthese = (): JSX.Element => {
    return (
        <div>
            <h1 className="header">Photosynthese</h1>
            <Link to="/dictionary">
                <button className="buttonNext" type="button">
                    Back
                </button>
            </Link>
        </div>
    );
};
