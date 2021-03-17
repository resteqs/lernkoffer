// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable global-require */
import React from "react"
import frog from "./frog.png"
import giraff from "./pic/giraff.png"

// eslint-disable-next-line react/prefer-stateless-function
export class drag extends React.Component {
    flags = [
        { id: 1, name: "USA", image: frog },
        { id: 2, name: "Canada", image: giraff },
       ]
       
    render():JSX.Element{
        return (      
            <div>
                {this.flags.map((area) => 
                // eslint-disable-next-line jsx-a11y/alt-text
                <img key={area.id} src={area.image} />
                )}
            </div>
        );
    }
}
