import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// eslint-disable-next-line import/no-named-as-default
import home from "./home";

import sdg12 from "./SDG/SDG12/sdg12";

// eslint-disable-next-line import/no-named-as-default
import sdg13 from "./SDG/SDG13/sdg13";
// eslint-disable-next-line import/no-named-as-default
import play from "./SDG/SDG13/play";

// eslint-disable-next-line import/no-duplicates
// eslint-disable-next-line import/no-named-as-default
import dictionary from "./SDG/SDG13/dictionary";

import methane from "./SDG/SDG13/dictionary/methane";
import co2 from "./SDG/SDG13/dictionary/co2";
import photosynthese from "./SDG/SDG13/dictionary/photsynthese";
import dextrose from "./SDG/SDG13/dictionary/dextrose";

import "./styles/App.css";
import help from "./help";

import page1 from "./SDG/SDG13/tutorial/page1";
import page2 from "./SDG/SDG13/tutorial/page2";
import page3 from "./SDG/SDG13/tutorial/page3";

import akw from "./SDG/SDG13/information/akw";
import cow from "./SDG/SDG13/information/cow";
import bicycle from "./SDG/SDG13/information/bicycle";
import windTurbine from "./SDG/SDG13/information/windTurbine";
import tractor from "./SDG/SDG13/information/tractor";
import tree from "./SDG/SDG13/information/tree";
import foxHedgehog from "./SDG/SDG13/information/foxHedgehog";




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
                        <Route path="/play" exact component={play} />
                        <Route path="/dictionary" exact component={dictionary} />
                        <Route exact path="/dictionary/co2" component={co2} />
                        <Route exact path="/dictionary/dextrose" component={dextrose} />
                        <Route exact path="/dictionary/methane" component={methane} />
                        <Route exact path="/dictionary/photosynthese" component={photosynthese} />

                        <Route exact path="/tutorial/page1" component={page1} />
                        <Route exact path="/tutorial/page2" component={page2} />
                        <Route exact path="/tutorial/page3" component={page3} />

                        <Route exact path="/play/akw" component={akw} />
                        <Route exact path="/play/cow" component={cow} />
                        <Route exact path="/play/bicycle" component={bicycle} />
                        <Route exact path="/play/wind_turbine" component={windTurbine} />
                        <Route exact path="/play/tractor" component={tractor} />
                        <Route exact path="/play/tree" component={tree} />
                        <Route exact path="/play/fox_and_hedgehog" component={foxHedgehog} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
