/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { HashRouter , Route, Switch } from "react-router-dom";



/**----------------------------------------------------------------------------
 *                              Style sheets
 ----------------------------------------------------------------------------*/
import "./styles/App.css";
import "./styles/colour_sdgs.css";
import "./styles/infotext.css";


/**----------------------------------------------------------------------------
 *                                SDG 13
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
import { SDG13_FreieArbeit } from "./SDG/SDG13/Freie Arbeit/SDG13_FreieArbeit";
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */

/**                                 Quiz                                     */

/**                                Spiel                                     */
/**                                Spiel2                                    */


/**                                Spiel2                                    */

import { TextComponent } from "./Components/Text/TextComponent";
import { SDG13_Spiel_Tutorial } from "./SDG/SDG13/Spiel/SDG13_Spiel_Tutorial";

import { play13 }  from "./SDG/SDG13/Spiel/play";
import { akw }  from "./SDG/SDG13/Spiel/information/akw";
import { cow }  from "./SDG/SDG13/Spiel/information/cow";
import { bicycle } from "./SDG/SDG13/Spiel/information/bicycle";
import { windTurbine }  from "./SDG/SDG13/Spiel/information/windTurbine";
import { tractor } from "./SDG/SDG13/Spiel/information/tractor";
import { tree }  from "./SDG/SDG13/Spiel/information/tree";
import { foxHedgehog }  from "./SDG/SDG13/Spiel/information/foxHedgehog";

export const App = (): JSX.Element => {
    window.open("", '_self' )
    return (
        <HashRouter basename="">
            <Switch> 
                <Route exact path="/"><TextComponent sdg={SDG13_Spiel_Tutorial}/></Route>
                <Route exact path="/SDG13/Spiel1"  component={play13}/>
                <Route exact path="/SDG13/Spiel1/akw"><TextComponent sdg={akw}/></Route>                   
                <Route exact path="/SDG13/Spiel1/cow"><TextComponent sdg={cow}/></Route>  
                <Route exact path="/SDG13/Spiel1/bicycle"><TextComponent sdg={bicycle}/></Route>  
                <Route exact path="/SDG13/Spiel1/wind_turbine"><TextComponent sdg={windTurbine}/></Route>  
                <Route exact path="/SDG13/Spiel1/tractor"><TextComponent sdg={tractor}/></Route>  
                <Route exact path="/SDG13/Spiel1/tree"><TextComponent sdg={tree}/></Route>  
                <Route exact path="/SDG13/Spiel1/fox_and_hedgehog"><TextComponent sdg={foxHedgehog}/></Route>  
            </Switch>
    </HashRouter>
);}