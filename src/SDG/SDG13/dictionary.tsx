import { url } from 'inspector';
import * as React from 'react'
import { Link } from 'react-router-dom';
import { JsxEmit } from 'typescript';
import co2 from "./dictionary_png/background/co2.jpg";
// https://pixabay.com/de/photos/verschmutzung-fabrik-industrie-2575166/
import methane from "./dictionary_png/background/methan.jpg"
// https://pixabay.com/de/photos/flamme-gas-gasflamme-blau-hei%C3%9F-580342/
import dextrose from "./dictionary_png/background/dextrose.jpg"
// https://pixabay.com/de/photos/insulinspritze-insulin-diabetes-1972843/
import photosynthese from "./dictionary_png/background/photosynthese.jpg"
// https://pixabay.com/de/photos/sonnenhut-rudbeckia-black-eyed-4267632/

// eslint-disable-next-line react/prefer-stateless-function
export class dictionary extends React.Component{
    
    
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    static carbonDioxid(){
        console.log("MONTAG")

    }

    render(): JSX.Element{
        const styleco2 = {
            // eslint-disable-next-line no-template-curly-in-string
            backgroundImage: `url(${co2})`
        }
        const stylemethan = {
            // eslint-disable-next-line no-template-curly-in-string
            backgroundImage: `url(${methane})`
        }
        const styledextrose = {
            // eslint-disable-next-line no-template-curly-in-string
            backgroundImage: `url(${dextrose})`
        }
        const styledphotosynthese = {
            // eslint-disable-next-line no-template-curly-in-string
            backgroundImage: `url(${photosynthese})`
        }
        return(
           <div className ="standard-background"> 
                <h1 className = "header">Dictionary</h1>

                <Link to = "/co2">
                        <button className = "sdg13-dictionary-b" style = {styleco2} type ="button"> 
                            Carbon Dioxid
                        </button>
                </Link> 

                <Link to = "/methane">
                        <button className = "sdg13-dictionary-b" style = {stylemethan} type ="button"> 
                            Methane
                        </button>
                </Link> 

                <Link to = "/dextrose">
                        <button className = "sdg13-dictionary-b" style = {styledextrose} type ="button"> 
                            Dextrose
                        </button>
                </Link> 

                <Link to = "/photosynthese">
                        <button className = "sdg13-dictionary-b" style = {styledphotosynthese} type ="button"> 
                            Photosynthese
                        </button>
                </Link> 
           </div>
        );
    }
}
export default dictionary