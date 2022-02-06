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
import "./styles/infotext.css";

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
import { SDG01_Spiel } from "./SDG/SDG1/Spiel/SDG01_Spiel";
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
import { SDG06_Quiz } from "./SDG/SDG6/Quiz/SDG06_Quiz";
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
import { SDG08_FreieArbeit } from "./SDG/SDG8/Freie Arbeit/SDG08_FreieArbeit";
/**                             Gutes Beispiel                               */
import { SDG08_GB } from "./SDG/SDG8/Gute Bsp/SDG08_GB";
/**                               Infotext                                   */
import { SDG08_Infotext } from "./SDG/SDG8/Info/SDG08_Infotext";
/**                                 Quiz                                     */
import { SDG08_Quiz } from "./SDG/SDG8/Quiz/SDG08_Quiz";
/**                                Spiel                                     */
import { SDG08_Spiel } from "./SDG/SDG8/Spiel/SDG08_Spiel";
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
import { SDG09_Quiz } from "./SDG/SDG9/Quiz/SDG09_Quiz";
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
import { SDG12_FreieArbeit } from "./SDG/SDG12/Freie Arbeit/SDG12_FreieArbeit";
/**                             Gutes Beispiel                               */
import { SDG12_GutesBeispiel } from "./SDG/SDG12/Gute Bsp/SDG12_GutesBeispiel";
/**                               Infotext                                   */
import { SDG12_Infotext } from "./SDG/SDG12/Info/SDG12_Infotext";
/**                                 Quiz                                     */
/**                                Spiel                                     */
import { SDG12_Spiel } from "./SDG/SDG12/Spiel/SDG12_Spiel";
/**                                Video                                     */


/**----------------------------------------------------------------------------
 *                                SDG 13
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
import { SDG13_FreieArbeit } from "./SDG/SDG13/Freie Arbeit/SDG13_FreieArbeit";
/**                             Gutes Beispiel                               */
import { SDG13_GutesBeispiel } from "./SDG/SDG13/Gute Bsp/SDG13_GutesBeispiel";
/**                               Infotext                                   */
import { SDG13_Infotext } from "./SDG/SDG13/Info/SDG13_Infotext";

/**                                 Quiz                                     */

/**                                Spiel                                     */
/**                                Spiel2                                    */
import { play13 }  from "./SDG/SDG13/Spiel/play";
import { akw }  from "./SDG/SDG13/Spiel/information/akw";
import { cow }  from "./SDG/SDG13/Spiel/information/cow";
import { bicycle } from "./SDG/SDG13/Spiel/information/bicycle";
import { windTurbine }  from "./SDG/SDG13/Spiel/information/windTurbine";
import { tractor } from "./SDG/SDG13/Spiel/information/tractor";
import { tree }  from "./SDG/SDG13/Spiel/information/tree";
import { foxHedgehog }  from "./SDG/SDG13/Spiel/information/foxHedgehog";

/**----------------------------------------------------------------------------
 *                                SDG 14
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
import { SDG14_FreieArbeit } from "./SDG/SDG14/Freie Arbeit/SDG14_FreieArbeit";
/**                             Gutes Beispiel                               */
import { SDG14_GutesBeispiel } from "./SDG/SDG14/Gute Bsp/SDG14_GutesBeispiel";
/**                               Infotext                                   */
import { SDG14_Infotext } from "./SDG/SDG14/Info/SDG14_Infotext";

/**                                 Quiz                                     */

/**                                Spiel                                     */
import { clownfish } from "./SDG/SDG14/Spiel2/search_info/clownfish";
import { ray } from "./SDG/SDG14/Spiel2/search_info/ray";
import { seaHorse } from "./SDG/SDG14/Spiel2/search_info/seaHorse";
import { shark } from "./SDG/SDG14/Spiel2/search_info/shark";
import { siameseFightingFish } from "./SDG/SDG14/Spiel2/search_info/siameseFightingFish";
import { surgeonfish } from "./SDG/SDG14/Spiel2/search_info/surgeonfish";
import { turtle } from "./SDG/SDG14/Spiel2/search_info/turtle";
import { boat } from "./SDG/SDG14/Spiel2/search_info/boat";

/**                                Spiel2                                    */
import { Main } from "./SDG/SDG13/Spiel2/DND/Main";


/**----------------------------------------------------------------------------
 *                                SDG 15
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
import { SDG15_FreieArbeit } from "./SDG/SDG15/Freie Arbeit/SDG15_FreieArbeit";
/**                             Gutes Beispiel                               */
import { SDG15_GutesBeispiel } from "./SDG/SDG15/Gute Bsp/SDG15_GutesBeispiel";
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
import { SDG16_FreieArbeit } from "./SDG/SDG16/Freie Arbeit/SDG16_FreieArbeit";
/**                             Gutes Beispiel                               */
import { SDG16_GutesBeispiel } from "./SDG/SDG16/Gute Bsp/SDG16_GutesBeispiel";
/**                               Infotext                                   */
import { SDG16_Infotext } from "./SDG/SDG16/Info/SDG16_Infotext";
/**                                 Quiz                                     */
/**                                Spiel                                     */
import { SDG16_Spiel } from "./SDG/SDG16/Spiel/SDG16_Spiel";
/**                                Video                                     */
/**----------------------------------------------------------------------------
 *                                SDG 17
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
import { SDG17_FreieArbeit } from "./SDG/SDG17/Freie Arbeit/SDG17_FreieArbeit";
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
import { SDG17_Infotext } from "./SDG/SDG17/Info/SDG17_Infotext";
/**                                 Quiz                                     */
/**                                Spiel                                     */
import { SDG17_Spiel } from "./SDG/SDG17/Spiel/SDG17_Spiel";
/**                                Video                                     */
/**----------------------------------------------------------------------------

 /**----------------------------------------------------------------------------
 *                                Vorlagen
 ----------------------------------------------------------------------------*/
import { Infotext } from "./SDG/Vorlagen/Infotext/infotext";
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
import { SDG10_Quiz } from "./SDG/SDG10/Quiz/SDG10_Quiz";
import { SDG06_FreieArbeit } from "./SDG/SDG6/Freie Arbeit/SDG06_FreieArbeit";
import { SDG07_FreieArbeit } from "./SDG/SDG7/Freie Arbeit/SDG07_FreieArbeit";
import { SDG07_Quiz } from "./SDG/SDG7/Quiz/SDG07_Quiz";
import { SDG06_GutesBeispiel } from "./SDG/SDG6/Gute Bsp/SDG06_GutesBeispiel";
import { SDG01_Quiz } from "./SDG/SDG1/Quiz/SDG01_Quiz";
import { SDG12_Quiz } from "./SDG/SDG12/Quiz/SDG12_Quiz";
import { SDG13_Quiz } from "./SDG/SDG13/Quiz/SDG13_Quiz";
import { SDG16_Einstieg } from "./SDG/SDG16/Einstieg/SDG16_Einstieg";
import { SDG15_Spiel } from "./SDG/SDG15/Spiel/SDG15_Spiel";
import { QuizThreeMixedComponent } from "./Components/Quiz/Quiz3Component";
import { SDG06_GutesBeispielQuiz } from "./SDG/SDG6/Gute Bsp/SDG06_GutesBeispielQuiz";
import { SDG15_Quiz } from "./SDG/SDG15/Quiz/SDG15_Quiz";
import { SDG17_Quiz } from "./SDG/SDG17/Quiz/SDG17_Quiz";
import { SDG17_Quiz_1 } from "./SDG/SDG17/Quiz/Einzelne Quizes/Quiz_1";
import { QuizMixedComponent } from "./Components/Quiz/QuizMixedComponent";
import { SDG17_Quiz_2 } from "./SDG/SDG17/Quiz/Einzelne Quizes/Quiz_2";
import { SDG17_Quiz_3 } from "./SDG/SDG17/Quiz/Einzelne Quizes/Quiz_3";
import { SDG17_Quiz_4 } from "./SDG/SDG17/Quiz/Einzelne Quizes/Quiz_4";
import { SDG17_Quiz_15 } from "./SDG/SDG17/Quiz/Einzelne Quizes/Quiz_15";
import { SDG17_Quiz_6 } from "./SDG/SDG17/Quiz/Einzelne Quizes/Quiz_6";
import { SDG17_Quiz_7 } from "./SDG/SDG17/Quiz/Einzelne Quizes/Quiz_7";
import { SDG17_Quiz_8 } from "./SDG/SDG17/Quiz/Einzelne Quizes/Quiz_8";
import { SDG17_Quiz_9 } from "./SDG/SDG17/Quiz/Einzelne Quizes/Quiz_9";
import { SDG17_Quiz_10 } from "./SDG/SDG17/Quiz/Einzelne Quizes/Quiz_10";
import { SDG17_Quiz_5 } from "./SDG/SDG17/Quiz/Einzelne Quizes/Quiz_5";
import { SDG17_Quiz_11 } from "./SDG/SDG17/Quiz/Einzelne Quizes/Quiz_11";
import { SDG17_Quiz_12 } from "./SDG/SDG17/Quiz/Einzelne Quizes/Quiz_12";
import { SDG17_Quiz_13 } from "./SDG/SDG17/Quiz/Einzelne Quizes/Quiz_13";
import { SDG17_Quiz_14 } from "./SDG/SDG17/Quiz/Einzelne Quizes/Quiz_14";
import { SDG17_Quiz_16 } from "./SDG/SDG17/Quiz/Einzelne Quizes/Quiz_16";
import { SDG17_Quiz_17 } from "./SDG/SDG17/Quiz/Einzelne Quizes/Quiz_17";
import { SDG17_QuizÜbersicht } from "./SDG/SDG17/Quiz/SDG17_QuizÜbersicht";
import { SDG16_Quiz } from "./SDG/SDG16/Quiz/SDG16_Quiz";
import { VideoComponent } from "./Components/Video/VideoComponent";
import { SDG01_Video } from "./SDG/SDG1/Video/SDG01_Video";
import { SDG02_Video } from "./SDG/SDG2/Video/SDG02_Video";
import { SDG03_Video } from "./SDG/SDG3/Video/SDG03_Video";
import { SDG04_Video } from "./SDG/SDG4/Video/SDG04_Video";
import { SDG06_Video } from "./SDG/SDG6/Video/SDG06_Video";
import { SDG07_Video_Wasserstoff } from "./SDG/SDG7/Video/SDG07_Video_Wasserstoff";
import { SDG07_Video_Windrad } from "./SDG/SDG7/Video/SDG07_Video_Windräder";
import { SDG08_Video } from "./SDG/SDG8/Video/SDG08_Video";
import { SDG09_Video } from "./SDG/SDG9/Video/SDG09_Video";
import { SDG10_Video } from "./SDG/SDG10/Video/SDG10_Video";
import { SDG11_Video } from "./SDG/SDG11/Video/SDG11_Video";
import { SDG12_Video } from "./SDG/SDG12/Video/SDG12_Video"
import { SDG14_Video } from "./SDG/SDG14/Video/SDG14_Video";
import { SDG15_Video } from "./SDG/SDG15/Video/SDG15_Video";
import { SDG16_Video } from "./SDG/SDG16/Video/SDG16_Video";
import { SDG17_Video } from "./SDG/SDG17/Video/SDG17_Video";
import { SDG13_Spiel_Tutorial } from "./SDG/SDG13/Spiel/SDG13_Spiel_Tutorial";
import { QuizTwoOrThreeOptionComponent } from "./Components/Quiz/QuizTwoOrThreeOptionComponent";
import { SDG14_Spiel2_Tutorial } from "./SDG/SDG14/Spiel2/SDG14_Spiel2_Tutorial";
import { SDG07_Spiel } from "./SDG/SDG7/Spiel/SDG07_Spiel";









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
                <Route exact path="/SDG01/Quiz"><Quiz_Component sdg = {SDG01_Quiz}/></Route>
/**                                Spiel                                     */
                <Route exact path="/SDG01/Spiel"> <TextComponent sdg={SDG01_Spiel}/></Route>

/**                                Video                                     */
                <Route exact path="/SDG01/Video"><VideoComponent sdg = {SDG01_Video}/></Route>



/**----------------------------------------------------------------------------
 *                                SDG 02 
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path ="/SDG02/FreieArbeit"><TextComponent sdg={SDG02_FreieArbeit}/></Route>   
/**                             Gutes Beispiel                               */
            <Route exact path = "/SDG02/GutesBeispiel" component={SDG02_GutesBeispiel}/>
/**                               Infotext                                   */
            <Route exact path ="/SDG02/Infotext/Infotext"><InfotextComponent sdg={SDG02_Infotext}/></Route>
            <Route exact path ="/SDG02/Infotext/Fabel" component={SDG02_Infotext_Fable}/>
/**                                 Quiz                                     */
            <Route exact path ="/SDG02/Quiz"><Quiz_Component sdg={SDG02_Quiz}/></Route>
/**                                Spiel                                     */
            <Route exact path ="/SDG02/Spiel" component={SDG02_Spiel}/>
/**                                Video                                     */               
            <Route exact path="/SDG02/Video"><VideoComponent sdg = {SDG02_Video}/></Route>



/**----------------------------------------------------------------------------
 *                                SDG 03
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path ="/SDG03/FreieArbeit" component={SDG03_FreieArbeit}/>
/**                             Gutes Beispiel                               */
            <Route exact path = "/SDG03/GutesBeispiel"> <QuizThreeMixedComponent sdg={SDG03_GutesBeispiel}/></Route>
/**                               Infotext                                   */
            <Route exact path="/SDG03/Infotext"><InfotextComponent sdg = {SDG03_Infotext}/></Route>
/**                                 Quiz                                     */
            <Route exact path = "/SDG03/Quiz"> <TextComponent sdg={SDG03_Quiz}/></Route>
/**                                Spiel                                     */
            <Route exact path="/SDG03/Spiel"> <TextComponent sdg={SDG03_Spiel}/></Route>
/**                                Video                                     */
            <Route exact path="/SDG03/Video"><VideoComponent sdg = {SDG03_Video}/></Route>



/**----------------------------------------------------------------------------
 *                                SDG 04
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path="/SDG04/FreieArbeit" component={SDG04_FreieArbeit}/>                    
/**                             Gutes Beispiel                               */
            <Route exact path="/SDG04/GutesBeispiel"><Quiz_Component sdg = {SDG04_GB}/></Route>
/**                               Infotext                                   */
            <Route exact path="/SDG04/Infotext"><InfotextComponent sdg = {SDG04_Infotext}/></Route>
/**                                 Quiz                                     */
            <Route exact path="/SDG04/Quiz" component={SDG04_Quiz}/>                    
/**                                Spiel                                     */
            <Route exact path="/SDG04/Spiel1/SDG04_Spiel" component={SDG04_Spiel}/>                    
/**                                Video                                     */
            <Route exact path="/SDG04/Video"><VideoComponent sdg = {SDG04_Video}/></Route>


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
            <Route exact path="/SDG05/Quiz"><Quiz_Component sdg = {SDG05_Quiz}/></Route>
/**                                Spiel                                     */
            <Route exact path="/SDG05/Spiel" component={ SDG05_Spiel}/>
/**                                Video                                     */

/**---------------------------------------------------------------------------- 
 *                                SDG 06
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path="/SDG06/FreieArbeit"><TextComponent sdg={SDG06_FreieArbeit}/></Route>
/**                             Gutes Beispiel                               */
            <Route exact path="/SDG06/GutesBeispiel"><TextComponent sdg={SDG06_GutesBeispiel}/></Route>
            <Route exact path="/SDG06/GutesBeispielQuiz"><QuizThreeMixedComponent sdg={SDG06_GutesBeispielQuiz}/></Route>

/**                               Infotext                                   */
            <Route exact path="/SDG06/Infotext"><InfotextComponent sdg={SDG06_Infotext}/></Route>
/**                                 Quiz                                     */
            <Route exact path="/SDG06/Quiz"><Quiz_Component sdg={SDG06_Quiz}/></Route>
/**                                Spiel                                     */
            <Route exact path="/SDG06/Spiel" component={SDG06_Spiel}/>
/**                                Video                                     */
            <Route exact path="/SDG06/Video"><VideoComponent sdg = {SDG06_Video}/></Route>



/**----------------------------------------------------------------------------
 *                                SDG 07
 *  -------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path="/SDG07/FreieArbeit"><TextComponent sdg={SDG07_FreieArbeit}/></Route>
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
            <Route exact path="/SDG07/Infotext"><InfotextComponent sdg={SDG07_Infotext}/></Route>
/**                                 Quiz                                     */
            <Route exact path="/SDG07/Quiz"><Quiz_Component sdg={SDG07_Quiz}/></Route>
/**                                Spiel                                     */
            <Route exact path= "/SDG07/Spiel" component={SDG07_Spiel}/>
/**                                Video                                     */
            <Route exact path="/SDG07/VideoWasserstoff"><VideoComponent sdg = {SDG07_Video_Wasserstoff}/></Route>
            <Route exact path="/SDG07/VideoWindrad"><VideoComponent sdg = {SDG07_Video_Windrad}/></Route>

/**----------------------------------------------------------------------------
 *                                SDG 08
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path= "/SDG08/FreieArbeit"><TextComponent sdg= {SDG08_FreieArbeit}/> </Route>
/**                             Gutes Beispiel                               */
            <Route exact path="/SDG08/GutesBeispiel"><TextComponent sdg = {SDG08_GB}/></Route>
/**                               Infotext                                   */
            <Route exact path="/SDG08/Infotext"><InfotextComponent sdg={SDG08_Infotext}/></Route>
/**                                 Quiz                                     */
            <Route exact path="/SDG08/Quiz"><QuizTwoOrThreeOptionComponent sdg={SDG08_Quiz}/></Route>

/**                                Spiel                                     */
            <Route exact path="/SDG08/Spiel"><TextComponent sdg = {SDG08_Spiel}/></Route>
/**                                Video                                     */
            <Route exact path="/SDG08/Video"><VideoComponent sdg = {SDG08_Video}/></Route>



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
            <Route exact path="/SDG09/Quiz"><Quiz_Component sdg={SDG09_Quiz}/></Route>
/**                                Spiel                                     */
            <Route exact path="/SDG09/Spiel" component={SDG09_Spiel}/>
/**                                Video                                     */
            <Route exact path="/SDG09/Video"><VideoComponent sdg = {SDG09_Video}/></Route>



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
            <Route exact path="/SDG10/Quiz"><Quiz_Component sdg={SDG10_Quiz}/></Route>
/**                                Spiel                                     */
            <Route exact path="/SDG10/Spiel"><TextComponent sdg={SDG10_Spiel}/></Route>

/**                                Video                                     */
            <Route exact path="/SDG10/Video"><VideoComponent sdg = {SDG10_Video}/></Route>



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
            <Route exact path="/SDG11/Spiel"><TextComponent sdg= {SDG11_Spiel}/>  </Route>
/**                                Video                                     */
            <Route exact path="/SDG11/Video"><VideoComponent sdg = {SDG11_Video}/></Route>



/**----------------------------------------------------------------------------
 *                                SDG 12
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path="/SDG12/FreieArbeit"><TextComponent sdg= {SDG12_FreieArbeit}/> </Route>
/**                             Gutes Beispiel                               */
            <Route exact path="/SDG12/GutesBeispiel"><TextComponent sdg= {SDG12_GutesBeispiel}/> </Route> 
/**                               Infotext                                   */
            <Route exact path="/SDG12/Infotext"><InfotextComponent sdg={SDG12_Infotext}/></Route>
/**                                 Quiz                                     */
            <Route exact path="/SDG12/Quiz"><Quiz_Component sdg={SDG12_Quiz}/></Route>
/**                                Spiel                                     */
            <Route exact path="/SDG12/Spiel"><TextComponent sdg= {SDG12_Spiel}/> </Route> 
/**                                Video                                     */
            <Route exact path="/SDG12/Video"><VideoComponent sdg = {SDG12_Video}/></Route>



/**----------------------------------------------------------------------------
 *                                SDG 13
* --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path="/SDG13/FreieArbeit"><TextComponent sdg= {SDG13_FreieArbeit}/> </Route> 
/**                             Gutes Beispiel                               */
            <Route exact path="/SDG13/GutesBeispiel"><TextComponent sdg= {SDG13_GutesBeispiel}/> </Route> 
/**                               Infotext                                   */
            <Route exact path="/SDG13/Infotext"><InfotextComponent sdg={SDG13_Infotext}/></Route>                  
/**                                 Quiz                                     */
            <Route exact path="/SDG13/Quiz"><Quiz_Component sdg={SDG13_Quiz}/></Route>
/**                                Spiel                                     */
            <Route exact path="/SDG13/tutorial/page1" component={page141}/>                    
            <Route exact path="/SDG13/tutorial/page2" component={page142}/>
            <Route exact path="/SDG13/tutorial/page3" component={page143}/>
            <Route exact path="/SDG13/Tutorial"> <TextComponent sdg={SDG13_Spiel_Tutorial}/> </Route>


            <Route exact path="/SDG13/Spiel1"  component={play13}/>
            <Route exact path="/SDG13/Spiel1/akw"><TextComponent sdg={akw}/></Route>                   
            <Route exact path="/SDG13/Spiel1/cow"><TextComponent sdg={cow}/></Route>  
            <Route exact path="/SDG13/Spiel1/bicycle"><TextComponent sdg={bicycle}/></Route>  
            <Route exact path="/SDG13/Spiel1/wind_turbine"><TextComponent sdg={windTurbine}/></Route>  
            <Route exact path="/SDG13/Spiel1/tractor"><TextComponent sdg={tractor}/></Route>  
            <Route exact path="/SDG13/Spiel1/tree"><TextComponent sdg={tree}/></Route>  
            <Route exact path="/SDG13/Spiel1/fox_and_hedgehog"><TextComponent sdg={foxHedgehog}/></Route>  

/**                                Spiel2                                    */
            <Route exact path="/SDG13/Spiel2" component={Main} />                    



/**----------------------------------------------------------------------------
 *                                SDG 14
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path="/SDG14/FreieArbeit"><TextComponent sdg= {SDG14_FreieArbeit}/> </Route> 
/**                             Gutes Beispiel                               */
            <Route exact path="/SDG14/GutesBeispiel"><TextComponent sdg= {SDG14_GutesBeispiel}/> </Route> 
/**                               Infotext                                   */
            <Route exact path="/SDG14/Infotext"><InfotextComponent sdg={SDG14_Infotext}/></Route> 

/**                                 Quiz                                     */

/**                                Spiel                                     */

/**                                Spiel2                                    */
            <Route exact path="/SDG14/Spiel2/Tutorial"><TextComponent sdg = {SDG14_Spiel2_Tutorial}/></Route>
            <Route exact path="/SDG14/Spiel2/Spiel" component={play14} />
            <Route exact path="/SDG14/Spiel2/clownfish" ><TextComponent sdg = {clownfish}/></Route>                    
            <Route exact path="/SDG14/Spiel2/ray" ><TextComponent sdg = {ray}/></Route>
            <Route exact path="/SDG14/Spiel2/seaHorse" ><TextComponent sdg = {seaHorse}/></Route>
            <Route exact path="/SDG14/Spiel2/shark" ><TextComponent sdg = {shark}/></Route>
            <Route exact path="/SDG14/Spiel2/siameseFightingFish" ><TextComponent sdg = {siameseFightingFish}/></Route>
            <Route exact path="/SDG14/Spiel2/surgeonfish" ><TextComponent sdg = {surgeonfish}/></Route>
            <Route exact path="/SDG14/Spiel2/turtle" ><TextComponent sdg = {turtle}/></Route>
            <Route exact path="/SDG14/Spiel2/boat"><TextComponent sdg = {boat}/></Route>
/**                                Video                                    */
            <Route exact path="/SDG14/Video"><VideoComponent sdg = {SDG14_Video}/></Route>

/**----------------------------------------------------------------------------
 *                                SDG 15
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path="/SDG15/FreieArbeit"><TextComponent sdg= {SDG15_FreieArbeit}/> </Route> 
/**                             Gutes Beispiel                               */
<Route exact path="/SDG15/GutesBeispiel"><TextComponent sdg= {SDG15_GutesBeispiel}/> </Route> 
/**                               Infotext                                   */
            <Route exact path="/SDG15/Infotext"><InfotextComponent sdg={SDG15_Infotext}/></Route>
/**                                 Quiz                                     */
            <Route exact path="/SDG15/Quiz"><QuizThreeMixedComponent sdg= {SDG15_Quiz}/> </Route> 
/**                                Spiel                                     */
            <Route exact path="/SDG15/Spiel"><TextComponent sdg= {SDG15_Spiel}/> </Route> 
/**                                Video                                     */
            <Route exact path="/SDG15/Video"><VideoComponent sdg = {SDG15_Video}/></Route>


/**----------------------------------------------------------------------------
 *                                SDG 16
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path="/SDG16/FreieArbeit"><TextComponent sdg= {SDG16_FreieArbeit}/> </Route> 
/**                             Gutes Beispiel                               */
            <Route exact path="/SDG16/GutesBeispiel"><Quiz_Component sdg={SDG16_GutesBeispiel}/></Route>
/**                               Infotext                                   */
            <Route exact path="/SDG16/Infotext"><InfotextComponent sdg={SDG16_Infotext}/></Route>
            <Route exact path="/SDG16/Einstieg"><TextComponent sdg= {SDG16_Einstieg}/> </Route> 
/**                                 Quiz                                     */
            <Route exact path="/SDG16/Quiz"><QuizMixedComponent sdg={SDG16_Quiz}/></Route>
/**                                Spiel                                     */
            <Route exact path="/SDG16/Spiel"><TextComponent sdg= {SDG16_Spiel}/> </Route> 
/**                                Video                                     */
            <Route exact path="/SDG16/Video"><VideoComponent sdg = {SDG16_Video}/></Route>

/**----------------------------------------------------------------------------
 *                                SDG 17
 * --------------------------------------------------------------------------*/
/**                              Freie Arbeit                                */
            <Route exact path="/SDG17/FreieArbeit"><TextComponent sdg= {SDG17_FreieArbeit}/> </Route> 
/**                             Gutes Beispiel                               */
/**                               Infotext                                   */
            <Route exact path="/SDG17/Infotext"><InfotextComponent sdg={SDG17_Infotext}/></Route>
/**                                 Quiz                                     */
            <Route exact path="/SDG17/Quiz"><TextComponent sdg= {SDG17_Quiz}/> </Route> 
            <Route exact path="/SDG17/QuizÜbersicht"><TextComponent sdg= {SDG17_QuizÜbersicht}/> </Route> 
            <Route exact path="/SDG17/Quiz1"><QuizMixedComponent sdg= {SDG17_Quiz_1}/> </Route> 
            <Route exact path="/SDG17/Quiz2"><QuizMixedComponent sdg= {SDG17_Quiz_2}/> </Route> 
            <Route exact path="/SDG17/Quiz3"><QuizMixedComponent sdg= {SDG17_Quiz_3}/> </Route> 
            <Route exact path="/SDG17/Quiz4"><QuizMixedComponent sdg= {SDG17_Quiz_4}/> </Route> 
            <Route exact path="/SDG17/Quiz5"><QuizMixedComponent sdg= {SDG17_Quiz_5}/> </Route> 
            <Route exact path="/SDG17/Quiz6"><QuizMixedComponent sdg= {SDG17_Quiz_6}/> </Route> 
            <Route exact path="/SDG17/Quiz7"><QuizMixedComponent sdg= {SDG17_Quiz_7}/> </Route> 
            <Route exact path="/SDG17/Quiz8"><QuizMixedComponent sdg= {SDG17_Quiz_8}/> </Route> 
            <Route exact path="/SDG17/Quiz9"><QuizMixedComponent sdg= {SDG17_Quiz_9}/> </Route> 
            <Route exact path="/SDG17/Quiz10"><QuizMixedComponent sdg= {SDG17_Quiz_10}/> </Route> 
            <Route exact path="/SDG17/Quiz11"><QuizMixedComponent sdg= {SDG17_Quiz_11}/> </Route> 
            <Route exact path="/SDG17/Quiz12"><QuizMixedComponent sdg= {SDG17_Quiz_12}/> </Route> 
            <Route exact path="/SDG17/Quiz13"><QuizMixedComponent sdg= {SDG17_Quiz_13}/> </Route> 
            <Route exact path="/SDG17/Quiz14"><QuizMixedComponent sdg= {SDG17_Quiz_14}/> </Route> 
            <Route exact path="/SDG17/Quiz15"><QuizMixedComponent sdg= {SDG17_Quiz_15}/> </Route> 
            <Route exact path="/SDG17/Quiz16"><QuizMixedComponent sdg= {SDG17_Quiz_16}/> </Route> 
            <Route exact path="/SDG17/Quiz17"><QuizMixedComponent sdg= {SDG17_Quiz_17}/> </Route> 
/**                                Spiel                                     */
            <Route exact path="/SDG17/Spiel"><TextComponent sdg= {SDG17_Spiel}/> </Route> 
/**                                Video                                     */
            <Route exact path="/SDG17/Video"><VideoComponent sdg = {SDG17_Video}/></Route>


/**----------------------------------------------------------------------------

/**----------------------------------------------------------------------------
*                                 Vorlagen
----------------------------------------------------------------------------*/
            <Route exact path="/Vorlagen/infotext" component={Infotext} />  
            <Route exact path="/Vorlagen/countdown" component={countdown} />  
            <Route exact path ="/Vorlagen/SimpleCountdown" component={SimpleCountdown}/> 
            <Route exact path ="/Vorlagen/endscreen" component={Endscreen} />
            <Route exact path ="/Vorlagen/video" component={Video}/> 
            <Route exact path="/Vorlagen/MagicButton" component={QuizButton} />  

/**----------------------------------------------------------------------------
*                                 Components
----------------------------------------------------------------------------*/
            <Route exact path="/Component/InfotextButtonGreen" component={InfotextButtonGreen} />  
            <Route exact path="/Component/InfotextButtonRed" component={InfotextButtonRed} />  
            <Route exact path= "/Component/test"><QuizMixedComponent sdg={SDGX_Quiz}/></Route>
/**----------------------------------------------------------------------------
 * ----------------------------------------------------------------------------
 * ENDE - ENDE - ENDE - ENDE - ENDE - ENDE- ENDE - ENDE - ENDE - ENDE - ENDE --  
 * ----------------------------------------------------------------------------     
 * --------------------------------------------------------------------------*/

            </Switch>
    </HashRouter>
);}