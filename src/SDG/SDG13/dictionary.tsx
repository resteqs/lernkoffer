import * as React from 'react'

// eslint-disable-next-line react/prefer-stateless-function
export class dictionary extends React.Component{
    render(): JSX.Element{
        return(
           <div>
               <h1 className = "header">SDG 13</h1>
               <h2 className= "h2">The quick brown fox jumps over the lazy dog</h2>
           </div>
        );
    }
}
export default  dictionary