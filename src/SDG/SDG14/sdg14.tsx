import * as React from 'react'
import {Link} from 'react-router-dom';
import "./sdg14.css";

// eslint-disable-next-line react/prefer-stateless-function
class sdg14 extends React.Component{
    render(): JSX.Element{
        return(
           <div>
               <h1 className = "header">SDG 14</h1>
               
                <Link to ="/sdg14/tutorial/page1">
                    <li className = "play-dictionary">Play</li> 
                </Link>

                <Link to = "/dictionary">
                   <li className = "play-dictionary"> Dictionary</li>
                </Link>
           </div>
        );
    }
}

export default sdg14

