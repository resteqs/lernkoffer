import * as React from 'react';
import logo from "./13_Bild_Suchspiel.png";

// eslint-disable-next-line react/prefer-stateless-function
export class play extends React.Component{

    render(): JSX.Element{
        return(
           <div>
                 <h1 className = "header">SDG 13</h1>
                 <h2>
                    <img className = "logo13" src={logo} alt="" />  
                 </h2>
                    
           </div>
        );
    }
}

export default play