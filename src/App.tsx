import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// eslint-disable-next-line import/no-named-as-default
import home from './home';


import sdg12 from './SDG/SDG12/sdg12';



// eslint-disable-next-line import/no-named-as-default
import sdg13  from './SDG/SDG13/sdg13';
// eslint-disable-next-line import/no-named-as-default
import play from './SDG/SDG13/play';


// eslint-disable-next-line import/no-duplicates
// eslint-disable-next-line import/no-named-as-default
import dictionary from './SDG/SDG13/dictionary';

import methane from './SDG/SDG13/dictionary/methane';
import co2 from './SDG/SDG13/dictionary/co2';
import photosynthese from './SDG/SDG13/dictionary/photsynthese'; 
import dextrose from './SDG/SDG13/dictionary/dextrose';

import './styles/App.css';
import help from './help';

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component{ 
  render():JSX.Element{
    return(
      <Router basename = "/lernkoffer">
        <div className = "App">
          <Switch>
            <Route path = "/" exact component = {home}/> 
            <Route path = "/help" exact component = {help}/> 
            <Route path = "/sdg11" exact component = {sdg12}/>
            <Route path = "/sdg12" exact component = {sdg12}/>       
            <Route path = "/sdg13" exact component = {sdg13}/>
            <Route path = "/play" exact component = {play}/>
            <Route path = "/dictionary" exact component = {dictionary}/>
            <Route path = "/co2" exact component = {co2}/>
            <Route path = "/dextrose" exact component = {dextrose}/>
            <Route path = "/methane" exact component = {methane}/>
            <Route path = "/photosynthese" exact component = {photosynthese}/>
          </Switch>   
       </div>
      </Router>
    );
  }
}
