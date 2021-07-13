import * as React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';

import co2 from "./dictionary_png/background/co2.jpg";
// https://pixabay.com/de/photos/verschmutzung-fabrik-industrie-2575166/
import methane from "./dictionary_png/background/methan.jpg"
// https://pixabay.com/de/photos/flamme-gas-gasflamme-blau-hei%C3%9F-580342/
import dextrose from "./dictionary_png/background/dextrose.jpg"
// https://pixabay.com/de/photos/insulinspritze-insulin-diabetes-1972843/
import photosynthese from "./dictionary_png/background/photosynthese.jpg"
// https://pixabay.com/de/photos/sonnenhut-rudbeckia-black-eyed-4267632/

export const dictionary = ():JSX.Element => {    
    
    const styleco2 = {
        backgroundImage: `url(${co2})`
    }
    const stylemethan = {
        backgroundImage: `url(${methane})`
    }
    const styledextrose = {
        backgroundImage: `url(${dextrose})`
    }
    const styledphotosynthese = {
        backgroundImage: `url(${photosynthese})`
    }
        
    return(
        <BrowserRouter>
        <div className ="standard-background"> 
            <h1 className = "header">Dictionary</h1>

            <Link to = "/dictionary/co2">
                    <button className = "sdg13-dictionary-b" style = {styleco2} type ="button"> 
                        Carbon Dioxide
                    </button>
            </Link> 

            <Link to = "/dictionary/methane">
                    <button className = "sdg13-dictionary-b" style = {stylemethan} type ="button"> 
                        Methane
                    </button>
            </Link> 

            <Link to = "/dictionary/dextrose">
                    <button className = "sdg13-dictionary-b" style = {styledextrose} type ="button"> 
                        Dextrose
                    </button>
            </Link> 

            <Link to = "/dictionary/photosynthese">
                    <button className = "sdg13-dictionary-b" style = {styledphotosynthese} type ="button"> 
                        Photosynthesis
                    </button>
            </Link> 
        </div>
        </BrowserRouter>
    );
}
