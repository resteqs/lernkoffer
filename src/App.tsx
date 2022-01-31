/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import "./styles/App.css";
import "./styles/colour_sdgs.css";
import "./styles/sdg13.css";
import "./styles/sdg14.css";
import "./SDG/SDG1/Spiel/sdg1.css";
import "./styles/infotext.css";

import { Quiz_Component } from "./Components/Quiz/QuizComponent";
import { TextComponent } from "./Components/Text/TextComponent";

import { SDG13_Infotext } from "./SDG/SDG13/Info/SDG13_Infotext";
import { InfotextComponent } from "./Components/Infotext/InfotextComponent";
import { SDG11_Infotext } from "./SDG/SDG11/Info/SDG11_Infotext";
import { SDG05_Infotext } from "./SDG/SDG5/Info/SDG05_Infotext";
import { SDG05_GB } from "./SDG/SDG5/Gute Bsp/SDG05_GB";
import { SDG05_Spiel } from "./SDG/SDG5/Spiel/SDG05_Spiel";
import { SDG05_Quiz } from "./SDG/SDG5/Quiz/SDG05_Quiz";
import { SDG11_GB } from "./SDG/SDG11/Gute Bsp/SDG11_GB";
import { SDG11_Spiel } from "./SDG/SDG11/Spiel/SDG11_Spiel";
import { SDG11_FreieArbeit } from "./SDG/SDG11/Freie Arbeit/SDG11_FreieArbeit";

export const App = (): JSX.Element => {
    return (
        <HashRouter basename="/lernkoffer">
            <Switch>
            <Route exact path="/">
                <TextComponent sdg={SDG11_FreieArbeit}/>
            </Route>
            </Switch>
        </HashRouter>
    );
};
