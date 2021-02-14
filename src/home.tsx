import * as React from 'react'
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
export class home extends React.Component{
    render(): JSX.Element{
        return(
           <div className = "standard-background" >
               <div className = "header">
               This is our home page
               Need help
               Go to     
               </div> 
               <div className = "header">
               <Link  to = "/help" >HELP</Link>
               </div>
               
           </div>
           
        );
    }
}

export default  home