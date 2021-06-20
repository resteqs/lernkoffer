import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// eslint-disable-next-line import/no-named-as-default
import home from "./home";

import sdg12 from "./SDG/SDG12/sdg12";

// eslint-disable-next-line import/no-named-as-default
import sdg13 from "./SDG/SDG13/sdg13";

// eslint-disable-next-line import/no-duplicates
// eslint-disable-next-line import/no-named-as-default
import dictionary from "./SDG/dictionary/dictionary";

import co2 from "./SDG/dictionary/co2";
import dextrose from "./SDG/dictionary/dextrose";
import methane from "./SDG/dictionary/methane";
import photosynthese from "./SDG/dictionary/photsynthese";


import "./styles/App.css";
import "./styles/sdg13.css";
import "./styles/sdg14.css";
import help from "./help";

import { play13 }  from "./SDG/SDG13/U1/play";

import akw from "./SDG/SDG13/U1/information/akw";
import cow from "./SDG/SDG13/U1/information/cow";
import bicycle from "./SDG/SDG13/U1/information/bicycle";
import windTurbine from "./SDG/SDG13/U1/information/windTurbine";
import tractor from "./SDG/SDG13/U1/information/tractor";
import tree from "./SDG/SDG13/U1/information/tree";
import foxHedgehog from "./SDG/SDG13/U1/information/foxHedgehog";


import page141 from "./SDG/SDG14/U1/tutorial/14tut1";
import page142 from "./SDG/SDG14/U1/tutorial/14tut2";
import page143 from "./SDG/SDG14/U1/tutorial/14tut3";

import play14 from "./SDG/SDG14/U2/play14";

import clownfish from "./SDG/SDG14/U2/search_info/clownfish";
import ray from "./SDG/SDG14/U2/search_info/ray";
import seaHorse from "./SDG/SDG14/U2/search_info/seaHorse";
import shark from "./SDG/SDG14/U2/search_info/shark";
import siamesefightingFish from "./SDG/SDG14/U2/search_info/siameseFightingFish";
import surgeonfish from "./SDG/SDG14/U2/search_info/surgeonfish";
import turtle from "./SDG/SDG14/U2/search_info/turtle";
import boat from "./SDG/SDG14/U2/search_info/boat";

import { Main } from "./SDG/SDG13/U5/DND/Main";
import { infotext06 } from "./SDG/SDG6/U0/06infotext";
import { spiel04 } from "./SDG/SDG4/spiel/04spiel";
import { infotext11 } from "./SDG/SDG11/U0/11infotext";
import { infotext13 } from "./SDG/SDG13/U0/13infotext";
import { infotext14 } from "./SDG/SDG14/U0/14infotext";
import { tutorial_13_u3 } from "./SDG/SDG13/U3/tutorial_13_U3";
import { question1_13_u3 } from "./SDG/SDG13/U3/question1_13_U3";
import { answer1_13_u3 } from "./SDG/SDG13/U3/answer1_13_U3";
import { answer3_13_u3 } from "./SDG/SDG13/U3/answer3_13_U3";
import { question3_13_u3 } from "./SDG/SDG13/U3/question3_13_U3";
import { answer2_13_u3 } from "./SDG/SDG13/U3/answer2_13_U3";
import { question2_13_u3 } from "./SDG/SDG13/U3/question2_13_U3";
import { tips_13_u3 } from "./SDG/SDG13/U3/tips_13_U3";
import { infotext_03_01 } from "./SDG/SDG03/U01/infotext_03_01";

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component {
    render(): JSX.Element {
        return (
            <Router basename="/lernkoffer">
                <div className="App">
                    <Switch> 
                        <Route exact path="/" component={home} />
                        <Route exact path="/help" component={help} />
                        
                        <Route exact path="/dictionary"  component={dictionary} />
                        <Route exact path="/dictionary/co2" component={co2} />
                        <Route exact path="/dictionary/dextrose" component={dextrose} />
                        <Route exact path="/dictionary/methane" component={methane} />
                        <Route exact path="/dictionary/photosynthese" component={photosynthese} />

                        <Route exact path="/sdg03/u1/infotext" component={infotext_03_01} />

                        <Route exact path="/sdg04/spiel1/spiel04" component={spiel04} />
                        <Route exact path="/sdg06/u1/infotext06" component={infotext06} />

                        <Route exact path="/sdg06/u1/infotext11" component={infotext11} />

                        <Route exact path="/sdg11" component={sdg12} />

                        <Route exact path="/sdg12" component={sdg12} />

                        <Route exact path="/sdg13" component={sdg13} />
                        <Route exact path="/sdg13/u1/infotext13" component={infotext13} />
                        <Route exact path="/sdg13/u3/tutorial1" component={tutorial_13_u3} />
                        <Route exact path="/sdg13/u3/tips" component={tips_13_u3} />
                        <Route exact path="/sdg13/u3/question1" component={question1_13_u3} />
                        <Route exact path="/sdg13/u3/answer1" component={answer1_13_u3} />
                        <Route exact path="/sdg13/u3/question2" component={question2_13_u3} />
                        <Route exact path="/sdg13/u3/answer2" component={answer2_13_u3} />
                        <Route exact path="/sdg13/u3/question3" component={question3_13_u3} />
                        <Route exact path="/sdg13/u3/answer3" component={answer3_13_u3} />

                        <Route exact path="/sdg13/tutorial/page1" component={page141} />
                        <Route exact path="/sdg13/tutorial/page2" component={page142} />
                        <Route exact path="/sdg13/tutorial/page3" component={page143} />
                        
                        <Route exact path="/sdg13/play"  component={play13} />

                        <Route exact path="/sdg13/play/akw" component={akw} />
                        <Route exact path="/sdg13/play/cow" component={cow} />
                        <Route exact path="/sdg13/play/bicycle" component={bicycle} />
                        <Route exact path="/sdg13/play/wind_turbine" component={windTurbine} />
                        <Route exact path="/sdg13/play/tractor" component={tractor} />
                        <Route exact path="/sdg13/play/tree" component={tree}/>
                        <Route exact path="/sdg13/play/fox_and_hedgehog" component={foxHedgehog}/>

                        <Route exact path="/sdg13/u1/dnd" component={Main} />


                        <Route exact path="/sdg14/u0/infotext14" component={infotext14} />

                        <Route exact path="/sdg14/tutorial/page1" component={page141} />
                        <Route exact path="/sdg14/tutorial/page2" component={page142} />
                        <Route exact path="/sdg14/tutorial/page3" component={page143} />
                        
                        <Route exact path="/sdg14/play" component={play14} />

                        <Route exact path="/sdg14/play/clownfish" component={clownfish} />
                        <Route exact path="/sdg14/play/ray" component={ray} />
                        <Route exact path="/sdg14/play/seaHorse" component={seaHorse} />
                        <Route exact path="/sdg14/play/shark" component={shark} />
                        <Route exact path="/sdg14/play/siameseFightingFish" component={siamesefightingFish} />
                        <Route exact path="/sdg14/play/surgeonfish" component={surgeonfish} />
                        <Route exact path="/sdg14/play/turtle" component={turtle} />
                        <Route exact path="/sdg14/play/boat" component={boat} />                       
                    </Switch>
                </div>
            </Router>
        );
    }
}
