import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class help extends React.Component {
    render(): JSX.Element {
        return (
            <div>
                <h1 className="header">Helpful links</h1>
                <div>
                    <a className="centre" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        SDG12
                    </a>

                    <Link to = "/sdg13/u0/infotext">
                        <div className="centre">SDG13 infotext</div>
                    </Link>
                    <Link to="/sdg13">
                        <div className="centre">SDG13 search game</div>
                    </Link>
                    <Link to="/sdg13/u1/dnd">
                        <div className="centre">SDG 13 DND</div>
                    </Link>

                    <Link to="/sdg14/tutorial/page1">
                        <div className="centre">SDG14</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default help;
