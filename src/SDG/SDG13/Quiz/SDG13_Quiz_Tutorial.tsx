import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/quiz.css";
import Logo from "../../../SDGLogos/Goal-SDG13.png";

export const SDG13_Quiz_Tutorial = (): JSX.Element => {
    return (
        <div>
            <div className="colour_sdg13">
                <p className="header">
                    Goal 13: CO<sub>2</sub> Quiz <img className="sdglogo" alt="logo" src={Logo} />
                </p>
            </div>
            <div className="quiztextbox">
                <p>
                    As you know at the moment, we are taking a look at climate change and what we can do to slow it down
                    or even stop and reverse it.
                </p>
                <p>
                    A huge part of this is the topic of transportation. Everything and everybody needs to be transported
                    in several ways to different locations.
                </p>
                <p>
                    In the following, you will have to decide which mean of transport produces more emissions (gases
                    produced by a lot of things e.g. cars while their engines are running). You have the choice between
                    two means of transportation.
                </p>
                <p>
                    To make it more fun, we make a game out of it. Choose three corners or places you want to use. Every
                    question has three possible answers. The people who think object number one produces more of the
                    asked gas go to the first corner/spot. Those who think the second object frees more of this gas go
                    to the second corner/spot, and those of you who think they both free the same amount of gas go to
                    the third corner/spot.
                </p>
                <p>
                    After everybody chose an answer take a look at the solution and maybe those of you who chose
                    correctly can explain their thoughts to those who stood in the other corners/spots
                </p>
                <Link to="/SDG13/Quiz/Question1">
                    <div className="greenButton">Got it</div>
                </Link>
            </div>
        </div>
    );
};
