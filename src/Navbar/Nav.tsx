import React from 'react'
import {Link} from 'react-router-dom';
import { NavItems } from './NavItems';


// eslint-disable-next-line react/prefer-stateless-function
export class Nav extends React.Component{ 
  render():JSX.Element{
    return(
      <div>
        <nav>
          <div className = "logo"> 
            <Link to = "/home">
              <li>SDG</li> 
            </Link>           
          </div>
          <ul className = "nav-links">
            <li>SDG 1</li> 
            <li>SDG 2</li> 
            <li>SDG 3</li> 
            <li>SDG 4</li> 
            <li>SDG 5</li> 
            <li>SDG 6</li> 
            <li>SDG 7</li> 
            <li>SDG 8</li> 
            <li>SDG 9</li> 
            <li>SDG 10</li> 
            <li>SDG 11</li> 
            <li>SDG 12</li> 
            <Link to = "/sdg13">
              <li>SDG 13</li> 
            </Link>
            <li>SDG 14</li> 
            <li>SDG 15</li> 
            <li>SDG 16</li> 
            <li>SDG 17</li> 
            <li>SDG 18</li> 
          </ul>  
        </nav>
      </div>
    );
  }
}


export default Nav