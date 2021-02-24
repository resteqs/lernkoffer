import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class surgeonfish extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">surgeonfish</h1>
                <p className="playinformation">Finally, good news, this species is having a great time in the seas.</p>

                <Link to="/sdg14/play">
                    <button className="buttonBack" type="button">
                        Back
                    </button>
                </Link>
            </div>
        );
    }
}

export default surgeonfish;
