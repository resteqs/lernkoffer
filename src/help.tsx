import React from "react";
import { Link } from "react-router-dom";

export const Help = ():JSX.Element => {
    return (
        <div>
            <h1 className="header">Helpful links</h1>
            <div>
                <a className="centre" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    SDG12
                </a>

                <Link to = "/Wörterbuch">
                    <div className="centre">Wörterbuch</div>
                </Link>

                <Link to = "SDG03/u1/infotext">
                    <div className="centre">SDG 03 infotext</div>
                </Link>

                <Link to="/SDG04/Spiel1/SDG04_Spiel">
                    <div className="centre">SDG 4 game</div>
                </Link>
                
                <Link to = "SDG06/u1/infotext06">
                    <div className="centre">SDG 06 infotext</div>
                </Link>

                <Link to = "SDG06/u1/SDG11_Infotext">
                    <div className="centre">SDG 11 infotext</div>
                </Link>
                
                <Link to = "/SDG13/u2/SDG13_Infotext">
                    <div className="centre">SDG 13 infotext</div>
                </Link>

                <Link to = "/SDG13/Quiz/Tutorial1">
                    <div className="centre">SDG 13 Kohlenstoffdioxid Quiz</div>
                </Link>

                <Link to =  "/SDG13/Quiz/Question1">
                    <div className="centre">SDG 13 Kohlenstoffdioxid Quiz Question 1</div>
                </Link>
    
                <Link to="/SDG13">
                    <div className="centre">SDG 13 search game</div>
                </Link>

                <Link to="/SDG13/u1/dnd">
                    <div className="centre">SDG 13 DND</div>
                </Link>
            
                <Link to = "SDG14/u0/infotext14">
                    <div className="centre">SDG 14 infotext</div>
                </Link>

                <Link to="/SDG14/tutorial/page1">
                    <div className="centre">SDG 14 tutorial</div>
                </Link>

                <Link to="/SDG14/play">
                    <div className="centre">SDG 14 game</div>
                </Link>
            </div>
        </div>
    );
};
