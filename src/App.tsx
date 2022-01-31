/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { HashRouter , Route, Switch } from "react-router-dom";

import "./styles/App.css";
import "./styles/colour_sdgs.css";
import "./styles/sdg13.css";
import "./styles/sdg14.css";
import "./SDG/SDG1/Spiel/sdg1.css"
import "./styles/infotext.css"

import { Endscreen } from "./SDG/Vorlagen/Endscreen/Endscreen";
import { Quiz_Component } from "./Components/Quiz/QuizComponent";
import { SDG13_Quiz } from "./SDG/SDG13/Quiz/SDG13_Quiz";


export const App = (): JSX.Element => {
    return (
        <HashRouter basename="/lernkoffer">
            <Switch> 
            <Route exact path="/"><Quiz_Component sdg={SDG13_Quiz}/></Route>

            <Route exact path ="/Vorlagen/endscreen" component={Endscreen} />

            </Switch>
    </HashRouter>
);}