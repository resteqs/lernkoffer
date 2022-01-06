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
import "./SDG/SDG1/Spiel/sdg1.css"

/**----------------------------------------------------------------------------
 *                              Wörterbuch
 ----------------------------------------------------------------------------*/
import { Wörterbuch } from "./SDG/Wörterbuch/Wörterbuch";
import { Kohlenstoffdioxid } from "./SDG/Wörterbuch/Elemente/Kohlenstoffdioxid";
import { Dextrose } from "./SDG/Wörterbuch/Elemente/Dextrose";
import { Methan } from "./SDG/Wörterbuch/Elemente/Methan";
import { Photosynthese } from "./SDG/Wörterbuch/Elemente/Photosynthese";


/**----------------------------------------------------------------------------
 *                                SDG 01
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
import { SDG01_FreieArbeit } from "./SDG/SDG1/Freie Arbeit/SDG01_FreieArbeit";
/**                             Gutes Beispiel                               */
import  { SDG01_GB } from "./SDG/SDG1/Gute Bsp/SDG01_GB"
/**                               Infotext                                   */
import { SDG01_Infotext } from "./SDG/SDG1/Info/SDG01_Infotext";

/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 02
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
import { SDG02_FreieArbeit } from "./SDG/SDG2/Freie Arbeit/SDG02_FreieArbeit";
/**                             Gutes Beispiel                               */
import { SDG02_GutesBeispiel } from "./SDG/SDG2/Gute Bsp/SDG02_GutesBeispiel";
/**                               Infotext                                   */
// infotext
import { SDG02_Infotext } from "./SDG/SDG2/Info/Infotext/SDG02_Infotext"; 
// fable
import { SDG02_Infotext_Fable } from "./SDG/SDG2/Info/fable/SDG02_Info_Fable";
/**                                 Quiz                                     */
import { SDG02_Quiz } from "./SDG/SDG2/Quiz/SDG02_Quiz";

/**                                Spiel                                     */
import { SDG02_Spiel } from "./SDG/SDG2/Spiel/SDG02_Spiel";

/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 03
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
import { SDG03_FreieArbeit } from "./SDG/SDG3/Freie Arbeit/SDG03_FreieArbeit";
/**                             Gutes Beispiel                               */
import { SDG03_GutesBeispiel } from "./SDG/SDG3/Gute Bsp/SDG03_GutesBeispiel";
/**                               Infotext                                   */
import { SDG03_Infotext } from "./SDG/SDG3/Info/SDG03_Infotext";

/**                                 Quiz                                     */
import { SDG03_Quiz } from "./SDG/SDG3/Quiz/SDG03_Quiz";
/**                                Spiel                                     */
import { SDG03_Spiel } from "./SDG/SDG3/Spiel/SDG03_Spiel";
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 04
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
import { SDG04_FreieArbeit } from "./SDG/SDG4/Freie Arbeit/SDG04_FreieArbeit";

/**                             Gutes Beispiel                               */
import { SDG04_GB } from "./SDG/SDG4/Gute Bsp/SDG04_GB";
/**                               Infotext                                   */
import { SDG04_Infotext } from "./SDG/SDG4/Info/SDG04_Infotext";
/**                                 Quiz                                     */
import { SDG04_Quiz } from "./SDG/SDG4/Quiz/SDG04_Quiz";

/**                                Spiel                                     */
import { SDG04_Spiel } from "./SDG/SDG4/Spiel/04spiel";
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 05
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
import { SDG05_Einstieg } from "./SDG/SDG5/Einstieg/SDG05_Einstieg";
import { SDG05_Infotext } from "./SDG/SDG5/Info/SDG05_Infotext";
/**                                 Quiz                                     */
import { SDG05_Quiz_Prolog } from "./SDG/SDG5/Quiz/SDG05_Quiz_Prolog";
import { SDG05_Quiz } from "./SDG/SDG5/Quiz/SDG05_Quiz";
/**                                Spiel                                     */
import { SDG05_Spiel } from "./SDG/SDG5/Spiel/SDG05_Spiel";
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
import { SDG06_Spiel } from "./SDG/SDG6/Spiel/SDG06_Spiel";
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 07
 *  -------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
import { SDG07_Infotext } from "./SDG/SDG7/Info/SDG07_Infotext";
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 08
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
import { SDG08_FreieArbeit } from "./SDG/SDG8/Freie Arbeit/SDG08_FreieArbeot";
/**                             Gutes Beispiel                               */
import { SDG08_GB } from "./SDG/SDG8/Gute Bsp/SDG08_GB";
/**                               Infotext                                   */
import { SDG08_Infotext } from "./SDG/SDG8/Info/SDG08_Infotext";
/**                                 Quiz                                     */
import { SDG08_Quiz_Prolog } from "./SDG/SDG8/Quiz/SDG08_Quiz_Prolog";
import { SDG08_Quiz } from "./SDG/SDG8/Quiz/SDG08_Quiz";
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 09
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
import { SDG09_FreieArbeit } from "./SDG/SDG9/Freie Arbeit/SDG09_FreieArbeit";

/**                             Gutes Beispiel                               */
import { SDG09_GutesBeispiel } from "./SDG/SDG9/Gute Bsp/SDG09_GutesBeispiel";
/**                               Infotext                                   */
import { SDG09_Infotext } from "./SDG/SDG9/Info/SDG09_Infotext";
/**                                 Quiz                                     */
/**                                Spiel                                     */
import { SDG09_Spiel } from "./SDG/SDG9/Spiel/SDG09_Spiel";
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 10
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
import { SDG10_FreieArbeit } from "./SDG/SDG10/Freie Arbeit/SDG10_FreieArbeit";
/**                             Gutes Beispiel                               */
import { SDG10_GutesBeispiel } from "./SDG/SDG10/Gute Bsp/SD10_GutesBeispiel";
/**                               Infotext                                   */
import { SDG10_Infotext } from "./SDG/SDG10/Info/SDG10_Infotext";
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 11
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
import { SDG11_FreieArbeit } from "./SDG/SDG11/Freie Arbeit/SDG11_FreieArbeit";
/**                             Gutes Beispiel                               */
import { SDG11_GB } from "./SDG/SDG11/Gute Bsp/SDG11_GB";
/**                               Infotext                                   */

import { SDG11_Infotext } from "./SDG/SDG11/Info/SDG11_Infotext";

/**                                 Quiz                                     */
/**                                Spiel                                     */
import { SDG11_Spiel } from "./SDG/SDG11/Spiel/SDG11_Spiel";
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 12
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
import { SDG12_Infotext } from "./SDG/SDG12/Info/SDG12_Infotext";
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
import  akw  from "./SDG/SDG13/Spiel/information/akw";
import  cow  from "./SDG/SDG13/Spiel/information/cow";
import  bicycle from "./SDG/SDG13/Spiel/information/bicycle";
import  windTurbine  from "./SDG/SDG13/Spiel/information/windTurbine";
import  tractor from "./SDG/SDG13/Spiel/information/tractor";
import  tree  from "./SDG/SDG13/Spiel/information/tree";
import foxHedgehog  from "./SDG/SDG13/Spiel/information/foxHedgehog";

/**----------------------------------------------------------------------------
 *                                SDG 14
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
import { SDG14_Infotext } from "./SDG/SDG14/Info/SDG14_Infotext";

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
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
import { SDG15_Infotext } from "./SDG/SDG15/Info/SDG15_Infotext";
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */
/**----------------------------------------------------------------------------
/**----------------------------------------------------------------------------
 *                                SDG 16
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
import { SDG16_Infotext } from "./SDG/SDG16/Info/SDG16_Infotext";
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */
/**----------------------------------------------------------------------------
 *                                SDG 16
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
import { SDG17_Infotext } from "./SDG/SDG17/Info/SDG17_Infotext";
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */
/**----------------------------------------------------------------------------

 /**----------------------------------------------------------------------------
 *                                Vorlagen
 ----------------------------------------------------------------------------*/
import { Infotext } from "./SDG/Vorlagen/Infotext/infotext";
import { Quiz } from "./SDG/Vorlagen/Quiz/quiz";
import { countdown } from "./SDG/Vorlagen/Countdown/countdown";
import { SimpleCountdown } from "./SDG/Vorlagen/Countdown/simpleCountdown"
import { QuizButton } from "./SDG/Vorlagen/Button/QuizButton"
import { Endscreen } from "./SDG/Vorlagen/Endscreen/Endscreen"
import { Video } from "./SDG/Vorlagen/Video/video";

 /**----------------------------------------------------------------------------
 *                                Components
 ----------------------------------------------------------------------------*/
import { InfotextComponent } from "./Components/Infotext/InfotextComponent";
import { InfotextButtonGreen } from "./Components/Buttons/InfotextButtonGreen";
import { InfotextButtonRed } from "./Components/Buttons/InfotextButtonRed";

/**----------------------------------------------------------------------------
 * ----------------------------------------------------------------------------
 * ENDE - ENDE - ENDE - ENDE - ENDE - ENDE- ENDE - ENDE - ENDE - ENDE - ENDE --  
 * ----------------------------------------------------------------------------     
 * --------------------------------------------------------------------------*/


import page141 from "./SDG/SDG14/Spiel2/tutorial/14tut1";
import page142 from "./SDG/SDG14/Spiel2/tutorial/14tut2";
import page143 from "./SDG/SDG14/Spiel2/tutorial/14tut3";

import play14 from "./SDG/SDG14/Spiel2/play14";
import { Quiz_Component } from "./Components/Quiz/QuizComponent";
import { SDGX_Quiz } from "./Components/test";
import { TextComponent } from "./Components/Text/TextComponent";
import { SDG05_GB } from "./SDG/SDG5/Gute Bsp/SDG05_GB";
import { SDG05_FreieArbeit } from "./SDG/SDG5/Freie Arbeit/SDG05_FreieArbeit";
import { SDG10_Spiel } from "./SDG/SDG10/Spiel/SDG10_Spiel";
import { SDG06_FreieArbeit } from "./SDG/SDG6/Freie Arbeit/SDG06_FreieArbeit";







export const App = (): JSX.Element => {
    return (
        <HashRouter basename="/lernkoffer">
            <Switch> 
                <Route exact path="/" component={Home} />
                <Route exact path="/Help" component={Help} />

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
                <Route exact path="/SDG01/FreieArbeit"> <TextComponent sdg = {SDG01_FreieArbeit}/> </Route>
/**                             Gutes Beispiel                               */
                <Route exact path="/SDG01/GutesBeispiel"> <TextComponent sdg = {SDG01_GB}/> </Route>
/**                               Infotext                                   */
                <Route exact path="/SDG01/Infotext"><InfotextComponent sdg = {SDG01_Infotext}/></Route>

/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 02
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path ="/SDG02/FreieArbeit" component={SDG02_FreieArbeit}/>      
/**                             Gutes Beispiel                               */
            <Route exact path = "/SDG02/GutesBeispiel" component={SDG02_GutesBeispiel}/>
/**                               Infotext                                   */
            <Route exact path ="/SDG02/Infotext/Infotext" component={SDG02_Infotext}/>
            <Route exact path ="/SDG02/Infotext/Fable" component={SDG02_Infotext_Fable}/>
/**                                 Quiz                                     */
            <Route exact path ="/SDG02/Quiz" component={SDG02_Quiz}/>
/**                                Spiel                                     */
            <Route exact path ="/SDG02/Spiel" component={SDG02_Spiel}/>

/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 03
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path ="/SDG03/FreieArbeit" component={SDG03_FreieArbeit}/>
/**                             Gutes Beispiel                               */
            <Route exact path = "/SDG03/GutesBeispiel" component={SDG03_GutesBeispiel}/>
/**                               Infotext                                   */
            <Route exact path="/SDG03/Infotext" component={SDG03_Infotext}/>
/**                                 Quiz                                     */
            <Route exact path="/SDG03/Quiz" component={SDG03_Quiz}/>
/**                                Spiel                                     */
            <Route exact path="/SDG03/Spiel" component={SDG03_Spiel}/>
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 04
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path="/SDG04/FreieArbeit" component={SDG04_FreieArbeit}/>                    
/**                             Gutes Beispiel                               */
            <Route exact path="/SDG04/GutesBeispiel" component={SDG04_GB}/>
/**                               Infotext                                   */
            <Route exact path="/SDG04/Infotext"><InfotextComponent sdg = {SDG04_Infotext}/></Route>
/**                                 Quiz                                     */
            <Route exact path="/SDG04/Quiz" component={SDG04_Quiz}/>                    
/**                                Spiel                                     */
            <Route exact path="/SDG04/Spiel1/SDG04_Spiel" component={SDG04_Spiel}/>                    
/**                                Video                                     */

/**----------------------------------------------------------------------------
 *                                SDG 05
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path="/SDG05/FreieArbeit"><TextComponent sdg = {SDG05_FreieArbeit}/></Route>
/**                             Gutes Beispiel                               */
            <Route exact path="/SDG05/GutesBeispiel"><TextComponent sdg = {SDG05_GB}/></Route>
/**                               Infotext                                   */
            <Route exact path="/SDG05/Einstieg"><Quiz_Component sdg = {SDG05_Einstieg}/></Route>
            <Route exact path="/SDG05/Infotext"><InfotextComponent sdg = {SDG05_Infotext}/></Route>
/**                                 Quiz                                     */
            <Route exact path ="/SDG05/Quiz/Prolog" component={SDG05_Quiz_Prolog}/>
            <Route exact path ="/SDG05/Quiz" component={SDG05_Quiz}/>
/**                                Spiel                                     */
            <Route exact path="/SDG05/Spiel" component={SDG05_Spiel}/>
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 06
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path="/SDG06/FreieArbeit"><TextComponent sdg={SDG06_FreieArbeit}/></Route>

/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
            <Route exact path="/SDG06/Infotext"><InfotextComponent sdg={SDG06_Infotext}/></Route>
/**                                 Quiz                                     */
/**                                Spiel                                     */
            <Route exact path="/SDG06/Spiel" component={SDG06_Spiel}/>
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 07
 *  -------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
            <Route exact path="/SDG07/Infotext"><InfotextComponent sdg={SDG07_Infotext}/></Route>
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 08
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path= "/SDG08/FreieArbeit"> <TextComponent sdg= {SDG08_FreieArbeit}/> </Route>
/**                             Gutes Beispiel                               */
            <Route exact path="/SDG08/GutesBeispiel"><TextComponent sdg = {SDG08_GB}/></Route>
/**                               Infotext                                   */
            <Route exact path="/SDG08/Infotext"><InfotextComponent sdg={SDG08_Infotext}/></Route>
/**                                 Quiz                                     */
            <Route exact path="/SDG08/Quiz/Prolog" component={SDG08_Quiz_Prolog}/>
            <Route exact path="/SDG08/Quiz" component={SDG08_Quiz}/>

/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 09
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path="/SDG09/FreieArbeit"><TextComponent sdg={SDG09_FreieArbeit}/></Route>
/**                             Gutes Beispiel                               */ 
            <Route exact path="/SDG09/GutesBeispiel"><TextComponent sdg={SDG09_GutesBeispiel}/></Route>
/**                               Infotext                                   */
            <Route exact path="/SDG09/Infotext"><InfotextComponent sdg={SDG09_Infotext}/></Route>
/**                                 Quiz                                     */
/**                                Spiel                                     */
            <Route exact path="/SDG09/Spiel" component={SDG09_Spiel}/>
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 10
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
<Route exact path= "/SDG10/FreieArbeit"> <TextComponent sdg= {SDG10_FreieArbeit}/> </Route>
/**                             Gutes Beispiel                               */
<Route exact path= "/SDG10/GutesBeispiel"> <TextComponent sdg= {SDG10_GutesBeispiel}/> </Route>
/**                               Infotext                                   */
            <Route exact path="/SDG10/Infotext"><InfotextComponent sdg={SDG10_Infotext}/></Route>
/**                                 Quiz                                     */
/**                                Spiel                                     */
            <Route exact path="/SDG10/Spiel"><TextComponent sdg={SDG10_Spiel}/></Route>

/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 11
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path="/SDG11/FreieArbeit"><TextComponent sdg= {SDG11_FreieArbeit}/> </Route> 
/**                             Gutes Beispiel                               */
            <Route exact path="/SDG11/GutesBeispiel"><TextComponent sdg= {SDG11_GB}/> </Route> 
/**                               Infotext                                   */
            <Route exact path="/SDG11/Infotext"><InfotextComponent sdg={SDG11_Infotext}/></Route>

/**                                 Quiz                                     */
/**                                Spiel                                     */
            <Route exact path="/SDG11/Spiel" component={SDG11_Spiel}/>
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 12
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
            <Route exact path="/SDG12/Infotext"><InfotextComponent sdg={SDG12_Infotext}/></Route>
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 13
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
                <Route exact path="/SDG13/Infotext"><InfotextComponent sdg={SDG13_Infotext}/></Route>                  

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
                <Route exact path="/SDG14/Infotext"><InfotextComponent sdg={SDG14_Infotext}/></Route> 

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
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
                <Route exact path="/SDG15/Infotext"><InfotextComponent sdg={SDG15_Infotext}/></Route>
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */
/**----------------------------------------------------------------------------
 *                                SDG 16
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
                <Route exact path="/SDG16/Infotext"><InfotextComponent sdg={SDG16_Infotext}/></Route>
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */
/**----------------------------------------------------------------------------
 *                                SDG 17
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
                <Route exact path="/SDG17/Infotext"><InfotextComponent sdg={SDG17_Infotext}/></Route>
/**                                 Quiz                                     */
/**                                Spiel                                     */
/**                                Video                                     */
/**----------------------------------------------------------------------------

/**----------------------------------------------------------------------------
*                                 Vorlagen
----------------------------------------------------------------------------*/
                <Route exact path="/Vorlagen/infotext" component={Infotext} />  
                <Route exact path="/Vorlagen/countdown" component={countdown} />  
                <Route exact path ="/Vorlagen/SimpleCountdown" component={SimpleCountdown}/> 
                <Route exact path ="/Vorlagen/quiz" component={Quiz}/> 
                <Route exact path ="/Vorlagen/endscreen" component={Endscreen} />
                <Route exact path ="/Vorlagen/video" component={Video}/> 
                <Route exact path="/Vorlagen/MagicButton" component={QuizButton} />  

/**----------------------------------------------------------------------------
*                                 Components
----------------------------------------------------------------------------*/
                <Route exact path="/Component/InfotextButtonGreen" component={InfotextButtonGreen} />  
                <Route exact path="/Component/InfotextButtonRed" component={InfotextButtonRed} />  
                <Route exact path= "/Component/test"><Quiz_Component sdg={SDGX_Quiz}/></Route>
/**----------------------------------------------------------------------------
 * ----------------------------------------------------------------------------
 * ENDE - ENDE - ENDE - ENDE - ENDE - ENDE- ENDE - ENDE - ENDE - ENDE - ENDE --  
 * ----------------------------------------------------------------------------     
 * --------------------------------------------------------------------------*/

            </Switch>
    </HashRouter>
);}