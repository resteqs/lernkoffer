// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Link } from "react-router-dom";

export const Help = ():JSX.Element => {
    return (
        <div>
            <h1 className="header">Helpful links</h1>
            <div>
            
                <Link to = "/Wörterbuch">
                    <div className="centre">Wörterbuch</div>
                </Link>

                <Link to = "/SDG01/Spiel">
                    <div className="centre">SDG 01 Spiel</div>
                </Link>

                <Link to = "/SDG02/Infotext/Infotext">
                    <div className="centre">SDG 02 Infotext Infotext</div>
                </Link>

                <Link to = "/SDG02/Infotext/Fable">
                    <div className="centre">SDG 02 Infotext Fabel</div>
                </Link>

                <Link to = "/SDG02/Spiel">
                    <div className="centre">SDG 02 Spiel</div>
                </Link>

                <Link to = "/SDG03/FreieArbeit">
                    <div className="centre">SDG 03 Freie Arbeit</div>
                </Link>

                <Link to = "/SDG03/Infotext">
                    <div className="centre">SDG 03 infotext</div>
                </Link>

                <Link to = "/SDG04/Infotext">
                    <div className="centre">SDG 04 Infotext</div>
                </Link>

                <Link to="/SDG04/Spiel1/SDG04_Spiel">
                    <div className="centre">SDG 04 game</div>
                </Link>

                <Link to = "/SDG04/FreieArbeit">
                    <div className="centre">SDG 04 Freie Arbeit</div>
                </Link>
                
                <Link to = "/SDG04/Gute Bsp">
                    <div className="centre">SDG 04 Gutes Beispiel</div>
                </Link>

                <Link to = "/SDG05/Quiz/Prolog">
                    <div className="centre">SDG 05 Quiz</div>
                </Link>

                <Link to = "/SDG06/Infotext">
                    <div className="centre">SDG 06 infotext</div>
                </Link>

                <Link to = "/SDG08/Quiz/Prolog">
                    <div className="centre">SDG 08 Quiz</div>
                </Link>

                <Link to = "/SDG11/Infotext">
                    <div className="centre">SDG 11 infotext</div>
                </Link>


                <Link to = "/SDG13/Infotext">
                    <div className="centre">SDG 13 infotext</div>
                </Link>
                
                <Link to = "/SDG13/Quiz/Tutorial1">
                    <div className="centre">SDG 13 Quiz - Tutorial</div>
                </Link>

                <Link to =  "/SDG13/Quiz/Question1">
                    <div className="centre">SDG 13 Quiz - Question 1</div>
                </Link>
                <Link to =  "/SDG13/Quiz/Question2">
                    <div className="centre">SDG 13 Quiz - Question 2</div>
                </Link>
                <Link to =  "/SDG13/Quiz/Question3">
                    <div className="centre">SDG 13 Quiz - Question 3</div>
                </Link>
                <Link to =  "/SDG13/Quiz/Tips">
                    <div className="centre">SDG 13 Quiz - Tips</div>
                </Link>

                <Link to="/SDG13/Spiel1">
                    <div className="centre">SDG 13 Suchspiel (Land)</div>
                </Link>

                <Link to="/SDG13/Spiel2">
                    <div className="centre">SDG 13 Spiel 2 - Mülltrennung</div>
                </Link>

                <Link to = "/SDG14/Infotext">
                    <div className="centre">SDG 14 infotext</div>
                </Link>

                <Link to="/SDG14/Spiel2/tutorial1">
                    <div className="centre">SDG 14 tutorial</div>
                </Link>

                <Link to="/SDG14/Spiel2">
                    <div className="centre">SDG 14 game</div>
                </Link>

                <Link to="/Vorlagen/MagicButton">
                    <div className="centre">Magic Awesome Button with magic</div>
                </Link>

                <Link to="/Vorlagen/countdown">
                    <div className="centre">Clock goes tick tack </div>
                </Link>
                
                <Link to="/Vorlagen/SimpleCountdown">
                    <div className="centre">clock (easy one) </div>
                </Link>

                <Link to="/Vorlagen/infotext">
                    <div className="centre">Infotext</div>
                </Link>

                <Link to="/Vorlagen/Quiz">  <div className="centre">Quiz vorlage</div> </Link>

                <Link to="/Vorlagen/Endscreen">
                    <div className="centre">Endscreen</div>
                </Link>
                
            </div>
        </div>
    );
};
