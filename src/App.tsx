/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { HashRouter , Route, Switch } from "react-router-dom";
import { Home } from "./home";



/**----------------------------------------------------------------------------
 *                              Style sheets
 ----------------------------------------------------------------------------*/
import "./styles/App.css";
import "./styles/colour_sdgs.css";
import "./styles/infotext.css";
// the next lines caused a mental breakdown. FUCK THIS SHIT 
import "./styles/sdg13.css";
import "./styles/sdg14.css";
import "./SDG/SDG1/Spiel/sdg1.css"


import { TextComponent } from "./Components/Text/TextComponent";
import { SDG07_FreieArbeit } from "./SDG/SDG7/Freie Arbeit/SDG07_FreieArbeit";
import { SDG07_Spiel } from "./SDG/SDG7/Spiel/SDG07_Spiel";
import { InfotextComponent } from "./Components/Infotext/InfotextComponent";
import { SDG07_Infotext } from "./SDG/SDG7/Info/SDG07_Infotext";
import { Quiz_Component } from "./Components/Quiz/QuizComponent";
import { SDG07_Quiz } from "./SDG/SDG7/Quiz/SDG07_Quiz";
import { VideoComponent } from "./Components/Video/VideoComponent";
import { SDG07_Video_Wasserstoff } from "./SDG/SDG7/Video/SDG07_Video_Wasserstoff";
import { SDG07_Video_Windrad } from "./SDG/SDG7/Video/SDG07_Video_Windräder";
 


export const App = (): JSX.Element => {
    window.open("", '_self' )
    return (
        <HashRouter basename="">
            <Switch> 
                <Route exact path="/"><VideoComponent sdg = {SDG07_Video_Wasserstoff}/></Route> 
            </Switch>
    </HashRouter>
);}