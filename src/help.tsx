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

                    <Link to = "sdg06/u1/infotext06">
                        <div className="centre">SDG 06 infotext</div>
                    </Link>

                    <Link to = "sdg06/u1/infotext11">
                        <div className="centre">SDG 11 infotext</div>
                    </Link>
                    
                    <Link to = "/sdg13/u2/infotext13">
                        <div className="centre">SDG 13 infotext</div>
                    </Link>

                    <Link to = "/sdg13/u3/tutorial1">
                        <div className="centre">SDG 13 CO2 Quiz</div>
                    </Link>

                    <Link to =  "/sdg13/u3/question1">
                        <div className="centre">SDG 13 CO2 Quiz Question 1</div>
                    </Link>

                   
                    <Link to="/sdg13">
                        <div className="centre">SDG 13 search game</div>
                    </Link>

                    <Link to="/sdg13/u1/dnd">
                        <div className="centre">SDG 13 DND</div>
                    </Link>
                
                    <Link to = "sdg14/u0/infotext14">
                        <div className="centre">SDG 14 infotext</div>
                    </Link>

                    <Link to="/sdg14/tutorial/page1">
                        <div className="centre">SDG 14 tutorial</div>
                    </Link>

                    <Link to="/sdg14/play">
                        <div className="centre">SDG 14 game</div>
                    </Link>
                    <Link to="/sdg04/spiel1/spiel04">
                        <div className="centre">SDG 4 game</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default help;
