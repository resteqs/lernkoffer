import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from "./13_Bild_Suchspiel.png";
import wtf2s from "./Vector2.svg"
import wtf2p from "./wtf2.png"

// eslint-disable-next-line react/prefer-stateless-function
export class play extends React.Component{
    render(): JSX.Element{
        return(
           <div>
                <h2>
                   <img className = "logo13" src={logo} alt="" />  
                </h2>

                <Link to = "/sdg13">
                    { /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */ }   { /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */ }  
                    <div className = "b22" onClick={() => console.log("Clicked")}>    

                        <object data={wtf2s} type="image/svg+xml">
                            <img src={wtf2p} alt=""/>
                        </object>
                    </div>
                </Link>  
           </div>
        );
    }
}

export default play
