/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { HashRouter , Route, Switch } from "react-router-dom";

import { Home } from "./home";
import { Help } from "./help";

/**----------------------------------------------------------------------------
 *                              Style sheets
 ----------------------------------------------------------------------------*/
import "./styles/App.css";
import "./styles/colour_sdgs.css";
import "./styles/sdg13.css";
import "./styles/sdg14.css";
import "./styles/infotext.css";
import { TextComponent } from "./Components/Text/TextComponent";
import { SDG13_FreieArbeit } from "./SDG/SDG13/Freie Arbeit/SDG13_FreieArbeit";

export const App = (): JSX.Element => {
    window.open("", '_self');

    return (
        <TextComponent sdg={SDG13_FreieArbeit}/>
            
);}