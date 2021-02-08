import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { JsxEmit } from 'typescript';
// eslint-disable-next-line import/no-named-as-default
import Nav from './Navbar/Nav';
// eslint-disable-next-line import/no-named-as-default
import home from './SDG/home';


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



// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component{ 
  render():JSX.Element{
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className = "App">
          <Nav/>
          <Switch>
            <Route path = "/home" exact component = {home}/> 
            <Route path = "/sdg12" exact component = {sdg12}/>       
            <Route path = "/sdg13" exact component = {sdg13}/>
            <Route path = "/play" exact component = {play}/>
            <Route path = "/dictionary" exact component = {dictionary}/>
            <Route path = "/co2" exact component = {co2}/>
            <Route path = "/dextrose" exact component = {dextrose}/>
            <Route path = "/methane" exact component = {methane}/>
            <Route path = "/photosynthese" exact component = {photosynthese}/>
            <Route path = "/sdg11" exact component = {sdg12}/>
          </Switch>   
       </div>
      </BrowserRouter>
    );
  }
}
