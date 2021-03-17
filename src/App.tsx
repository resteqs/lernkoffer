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
import help from "./help";

import { play13 }  from "./SDG/SDG13/U1/play";

import page1 from "./SDG/SDG13/U1/tutorial/page1";
import page2 from "./SDG/SDG13/U1/tutorial/page2";
import page3 from "./SDG/SDG13/U1/tutorial/page3";

import akw from "./SDG/SDG13/U1/information/akw";
import cow from "./SDG/SDG13/U1/information/cow";
import bicycle from "./SDG/SDG13/U1/information/bicycle";
import windTurbine from "./SDG/SDG13/U1/information/windTurbine";
import tractor from "./SDG/SDG13/U1/information/tractor";
import tree from "./SDG/SDG13/U1/information/tree";
import foxHedgehog from "./SDG/SDG13/U1/information/foxHedgehog";


import page141 from "./SDG/SDG14/tutorial/page141";
import page142 from "./SDG/SDG14/tutorial/page142";
import page143 from "./SDG/SDG14/tutorial/page143";

import play14 from "./SDG/SDG14/play14";

import clownfish from "./SDG/SDG14/search_info/clownfish";
import ray from "./SDG/SDG14/search_info/ray";
import seaHorse from "./SDG/SDG14/search_info/seaHorse";
import shark from "./SDG/SDG14/search_info/shark";
import siamesefightingFish from "./SDG/SDG14/search_info/siameseFightingFish";
import surgeonfish from "./SDG/SDG14/search_info/surgeonfish";
import turtle from "./SDG/SDG14/search_info/turtle";
import boat from "./SDG/SDG14/search_info/boat";

import {drag} from "./SDG/Tests/drag";
import { five } from "./SDG/Tests/five";

import { Main } from "./SDG/SDG13/U2/DND/Main";



// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component {
    render(): JSX.Element {
        return (
            <Router basename="/lernkoffer">
                <div className="App">
                    <Switch>
                        <Route path="/" exact component={home} />
                        <Route path="/help" exact component={help} />
                        <Route path="/sdg11" exact component={sdg12} />
                        <Route path="/sdg12" exact component={sdg12} />
                        <Route path="/sdg13" exact component={sdg13} />
                        
                        <Route exact path="/dictionary"  component={dictionary} />
                        <Route exact path="/dictionary/co2" component={co2} />
                        <Route exact path="/dictionary/dextrose" component={dextrose} />
                        <Route exact path="/dictionary/methane" component={methane} />
                        <Route exact path="/dictionary/photosynthese" component={photosynthese} />


                        <Route exact path="/sdg13/tutorial/page1" component={page1} />
                        <Route exact path="/sdg13/tutorial/page2" component={page2} />
                        <Route exact path="/sdg13/tutorial/page3" component={page3} />
                        
                        <Route exact path="/sdg13/play"  component={play13} />

                        <Route exact path="/sdg13/play/akw" component={akw} />
                        <Route exact path="/sdg13/play/cow" component={cow} />
                        <Route exact path="/sdg13/play/bicycle" component={bicycle} />
                        <Route exact path="/sdg13/play/wind_turbine" component={windTurbine} />
                        <Route exact path="/sdg13/play/tractor" component={tractor} />
                        <Route exact path="/sdg13/play/tree" component={tree}/>
                        <Route exact path="/sdg13/play/fox_and_hedgehog" component={foxHedgehog}/>

                        <Route exact path="/sdg13/u1/dnd" component={Main} />


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
                    
                        <Route exact path="/playground1" component={drag} />
                        <Route exact path="/playground2" component={five} />
                        
                    </Switch>
                </div>
            </Router>
        );
    }
}
