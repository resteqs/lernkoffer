import * as React from 'react'
import {Link} from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class sdg13 extends React.Component{
    render(): JSX.Element{
        return(
           <div>
               <h1 className = "header">SDG 13</h1>
               
                <Link to ="/sdg13/tutorial/page1">
                    <li className = "play-dictionary">Play</li> 
                </Link>

                <Link to = "/dictionary">
                   <li className = "play-dictionary"> Dictionary</li>
                </Link>
           </div>
        );
    }
}

export default sdg13

