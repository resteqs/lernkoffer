// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./home";
import { Help } from "./help";

/**----------------------------------------------------------------------------
 *                              Style sheets
 ----------------------------------------------------------------------------*/
import "./styles/App.css";
import "./styles/colour_sdgs.css";
import "./styles/SDG13.css";
import "./styles/SDG14.css";

/**----------------------------------------------------------------------------
 *                              Wörterbuch
 ----------------------------------------------------------------------------*/
import { Wörterbuch } from "./SDG/Wörterbuch/Wörterbuch";
import { Kohlenstoffdioxid } from "./SDG/Wörterbuch/Elemente/Kohlenstoffdioxid";
import { Dextrose } from "./SDG/Wörterbuch/Elemente/Dextrose";
import { Methan } from "./SDG/Wörterbuch/Elemente/Methan";
import { Photosynthese } from "./SDG/Wörterbuch/Elemente/Photosynthese";
import { Infotext } from "./SDG/Vorlagen/Infotext/infotext";
import { Quiz } from "./SDG/Vorlagen/Quiz/quiz";

/**----------------------------------------------------------------------------
 *                                SDG 01
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 02
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 03
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
import { SDG03_Infotext } from "./SDG/SDG3/Info/SDG03_Infotext";

/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 04
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 05
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 05
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 06
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
import { SDG06_Infotext } from "./SDG/SDG6/Info/SDG06_Infotext";

/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 07
 *  -------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 08
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 09
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 10
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 11
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
import { SDG11_Infotext } from "./SDG/SDG11/Info/SDG11_Infotext";

/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 12
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 13
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
import { SDG13_Infotext } from "./SDG/SDG13/Info/SDG13_Infotext";

/**                                 Quiz                                     */
import { SDG13_Quiz_Tutorial } from "./SDG/SDG13/Quiz/SDG13_Quiz_Tutorial";
import { SDG13_Quiz_Question1 } from "./SDG/SDG13/Quiz/SDG13_Quiz_Question1";
import { SDG13_Quiz_Question3 } from "./SDG/SDG13/Quiz/SDG13_Quiz_Question3";
import { SDG13_Quiz_Question2 } from "./SDG/SDG13/Quiz/SDG13_Quiz_Question2";
import { SDG13_Quiz_Tips } from "./SDG/SDG13/Quiz/SDG13_Quiz_Tips";

/**                                Spiel                                     */
/**                                Spiel2                                    */
import { play13 }  from "./SDG/SDG13/Spiel/play";
import akw from "./SDG/SDG13/Spiel/information/akw";
import cow from "./SDG/SDG13/Spiel/information/cow";
import bicycle from "./SDG/SDG13/Spiel/information/bicycle";
import windTurbine from "./SDG/SDG13/Spiel/information/windTurbine";
import tractor from "./SDG/SDG13/Spiel/information/tractor";
import tree from "./SDG/SDG13/Spiel/information/tree";
import foxHedgehog from "./SDG/SDG13/Spiel/information/foxHedgehog";


/**----------------------------------------------------------------------------
 *                                SDG 14
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
import { infotext14 } from "./SDG/SDG14/Info/14infotext";

/**                                 Quiz                                     */

/**                                Spiel                                     */
import clownfish from "./SDG/SDG14/Spiel2/search_info/clownfish";
import ray from "./SDG/SDG14/Spiel2/search_info/ray";
import seaHorse from "./SDG/SDG14/Spiel2/search_info/seaHorse";
import shark from "./SDG/SDG14/Spiel2/search_info/shark";
import siamesefightingFish from "./SDG/SDG14/Spiel2/search_info/siameseFightingFish";
import surgeonfish from "./SDG/SDG14/Spiel2/search_info/surgeonfish";
import turtle from "./SDG/SDG14/Spiel2/search_info/turtle";
import boat from "./SDG/SDG14/Spiel2/search_info/boat";

/**                                Spiel2                                    */
import { Main } from "./SDG/SDG13/Spiel2/DND/Main";


/**----------------------------------------------------------------------------
 *                                SDG 15
 ----------------------------------------------------------------------------*/
/**----------------------------------------------------------------------------
 *                                SDG 16
 ----------------------------------------------------------------------------*/
/**----------------------------------------------------------------------------
 *                                SDG 17
 ----------------------------------------------------------------------------*/

/**----------------------------------------------------------------------------
 * ----------------------------------------------------------------------------
 * ENDE - ENDE - ENDE - ENDE - ENDE - ENDE- ENDE - ENDE - ENDE - ENDE - ENDE --  
 * ----------------------------------------------------------------------------     
 * --------------------------------------------------------------------------*/


import page141 from "./SDG/SDG14/Spiel2/tutorial/14tut1";
import page142 from "./SDG/SDG14/Spiel2/tutorial/14tut2";
import page143 from "./SDG/SDG14/Spiel2/tutorial/14tut3";

import play14 from "./SDG/SDG14/Spiel2/play14";


import { SDG04_Spiel } from "./SDG/SDG4/Spiel/04spiel";



export const App = (): JSX.Element => {
    return (
        <Router basename="/lernkoffer">
        <div className="App">
            <Switch> 
                <Route exact path="/" component={Home} />
                <Route exact path="/Help" component={Help} />
                <Route exact path ="/Vorlagen/infotext" component={Infotext}/> 

/**----------------------------------------------------------------------------
 *                              Vorlage
 ----------------------------------------------------------------------------*/
                <Route exact path ="/Vorlagen/infotext" component={Infotext}/> 


/**----------------------------------------------------------------------------
 *                              Wörterbuch
 ----------------------------------------------------------------------------*/

                <Route exact path="/Wörterbuch"  component={Wörterbuch}/>
                <Route exact path="/Wörterbuch/Kohlenstoffdioxid" component={Kohlenstoffdioxid}/>
                <Route exact path="/Wörterbuch/Dextrose" component={Dextrose}/>
                <Route exact path="/Wörterbuch/Methan" component={Methan}/>
                <Route exact path="/Wörterbuch/Photosynthese" component={Photosynthese}/>
/**----------------------------------------------------------------------------
 *                                SDG 01
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 02
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 03
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
        <Route exact path="/SDG03/Infotext" component={SDG03_Infotext}/>


/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 04
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
            <Route exact path="/SDG04/Spiel1/SDG04_Spiel" component={SDG04_Spiel}/>                    

/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 05
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 05
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
            <Route exact path="/SDG06/Infotext" component={SDG06_Infotext}/>

/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 06
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */

/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 07
 *  -------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 08
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 09
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 10
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 11
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
                <Route exact path="/SDG11/Infotext" component={SDG11_Infotext}/>

/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 12
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 13
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
                <Route exact path="/SDG13/Infotext" component={SDG13_Infotext}/>                    

/**                                 Quiz                                     */
                <Route exact path="/SDG13/Quiz/Tutorial1" component={SDG13_Quiz_Tutorial}/>
                <Route exact path="/SDG13/Quiz/Question1" component={SDG13_Quiz_Question1}/>
                <Route exact path="/SDG13/Quiz/Question2" component={SDG13_Quiz_Question2}/>
                <Route exact path="/SDG13/Quiz/Question3" component={SDG13_Quiz_Question3}/>
                <Route exact path="/SDG13/Quiz/Tips" component={SDG13_Quiz_Tips} /> 

/**                                Spiel                                     */
                <Route exact path="/SDG13/tutorial/page1" component={page141}/>                    
                <Route exact path="/SDG13/tutorial/page2" component={page142}/>
                <Route exact path="/SDG13/tutorial/page3" component={page143}/>

                <Route exact path="/SDG13/Spiel1"  component={play13}/>
                <Route exact path="/SDG13/Spiel1/akw" component={akw}/>                   
                <Route exact path="/SDG13/Spiel1/cow" component={cow}/>
                <Route exact path="/SDG13/Spiel1/bicycle" component={bicycle}/>
                <Route exact path="/SDG13/Spiel1/wind_turbine" component={windTurbine}/>
                <Route exact path="/SDG13/Spiel1/tractor" component={tractor}/>
                <Route exact path="/SDG13/Spiel1/tree" component={tree}/>
                <Route exact path="/SDG13/Spiel1/fox_and_hedgehog" component={foxHedgehog}/>

/**                                Spiel2                                    */
                <Route exact path="/SDG13/Spiel2" component={Main} />                    



/**----------------------------------------------------------------------------
 *                                SDG 14
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
                <Route exact path="/SDG14/Infotext" component={infotext14} />

/**                                 Quiz                                     */

/**                                Spiel                                     */

/**                                Spiel2                                    */
                <Route exact path="/SDG14/Spiel2/tutorial1" component={page141} />                    
                <Route exact path="/SDG14/Spiel2/tutorial2" component={page142} />
                <Route exact path="/SDG14/Spiel2/tutorial3" component={page143} />
                <Route exact path="/SDG14/Spiel2" component={play14} />
                <Route exact path="/SDG14/Spiel2/clownfish" component={clownfish} />                    
                <Route exact path="/SDG14/Spiel2/ray" component={ray} />
                <Route exact path="/SDG14/Spiel2/seaHorse" component={seaHorse} />
                <Route exact path="/SDG14/Spiel2/shark" component={shark} />
                <Route exact path="/SDG14/Spiel2/siameseFightingFish" component={siamesefightingFish} />
                <Route exact path="/SDG14/Spiel2/surgeonfish" component={surgeonfish} />
                <Route exact path="/SDG14/Spiel2/turtle" component={turtle} />
                <Route exact path="/SDG14/Spiel2/boat" component={boat} />   

/**----------------------------------------------------------------------------
 *                                SDG 15
 ----------------------------------------------------------------------------*/
/**----------------------------------------------------------------------------
 *                                SDG 16
 ----------------------------------------------------------------------------*/
/**----------------------------------------------------------------------------
 *                                SDG 17
 ----------------------------------------------------------------------------*/

/**----------------------------------------------------------------------------
 * ----------------------------------------------------------------------------
 * ENDE - ENDE - ENDE - ENDE - ENDE - ENDE- ENDE - ENDE - ENDE - ENDE - ENDE --  
 * ----------------------------------------------------------------------------     
 * --------------------------------------------------------------------------*/

            </Switch>
        </div>
    </Router>
);}
