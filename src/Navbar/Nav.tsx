import React from 'react'
import {Link} from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
export class Nav extends React.Component{ 
  render():JSX.Element{
    return(
      <div>
        <nav>
          <div> 
            <Link className = "nav-logo" to = "/home">
              <li>SDG</li> 
            </Link>           
          </div>
          
          <ul className = "links">
            <Link className = "links" to = "/sdg1" >
              <li>SDG 1</li> 
            </Link>
            <Link className = "links" to = "/sdg2" >
              <li>SDG 2</li> 
            </Link>
            
            <Link className = "links" to = "/sdg3" >
              <li>SDG 3</li> 
            </Link>
            
            <Link className = "links" to = "/sdg4" >
              <li>SDG 4</li> 
            </Link>
            
            <Link className = "links" to = "/sdg5" >
              <li>SDG 5</li> 
            </Link>
            
            <Link className = "links" to = "/sdg6" >
              <li>SDG 6</li> 
            </Link>
            
            <Link className = "links" to = "/sdg7" >
              <li>SDG 7</li> 
            </Link>
            
            <Link className = "links" to = "/sdg8" >
              <li>SDG 8</li> 
            </Link>
            
            <Link className = "links" to = "/sdg9" >
              <li>SDG 9</li> 
            </Link>

            <Link className = "links" to = "/sdg10" >
              <li>SDG 10</li> 
            </Link>

            <Link className = "links" to = "/sdg11" >
              <li>SDG 11</li> 
            </Link>

            <Link className = "links" to = "/sdg12" >
              <li>SDG 12</li> 
            </Link>

            <Link className = "links" to = "/sdg13" >
              <li>SDG 13</li> 
            </Link>

            <Link className = "links" to = "/sdg14" >
              <li>SDG 14</li> 
            </Link>

            <Link className = "links" to = "/sdg15" >
              <li>SDG 15</li> 
            </Link>

            <Link className = "links" to = "/sdg16" >
              <li>SDG 16</li> 
            </Link>

            <Link className = "links" to = "/sdg17" >
              <li>SDG 17</li> 
            </Link>

            <Link className = "links" to = "/sdg18" >
              <li>SDG 18</li> 
            </Link>

          </ul>  
        </nav>
      </div>
    );
  }
}


export default Nav