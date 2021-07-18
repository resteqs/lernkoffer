import * as React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';

import Kohlenstoffdioxid from "./Wörterbuch_Bilder/Hintergrundbilder/Kohlenstoffdioxid.jpg";
// https://pixabay.com/de/photos/verschmutzung-fabrik-industrie-2575166/
import Methan from "./Wörterbuch_Bilder/Hintergrundbilder/Methan.jpg";
// https://pixabay.com/de/photos/flamme-gas-gasflamme-blau-hei%C3%9F-580342/
import  Dextrose  from "./Wörterbuch_Bilder/Hintergrundbilder/Dextrose.jpg";
// https://pixabay.com/de/photos/insulinspritze-insulin-diabetes-1972843/
import Photosynthese from "./Wörterbuch_Bilder/Hintergrundbilder/Photosynthese.jpg";
// https://pixabay.com/de/photos/sonnenhut-rudbeckia-black-eyed-4267632/

export const Wörterbuch = ():JSX.Element => {    
    
    const styleKohlenstoffdioxid = {
        backgroundImage: `url(${Kohlenstoffdioxid})`
    }
    const stylemethan = {
        backgroundImage: `url(${Methan})`
    }
    const styleDextrose = {
        backgroundImage: `url(${Dextrose})`
    }
    const styledPhotosynthese = {
        backgroundImage: `url(${Photosynthese})`
    }
        
    return(
        <BrowserRouter>
        <div className ="standard-background"> 
            <h1 className = "header">Wörterbuch</h1>

            <Link to = "/Wörterbuch/Kohlenstoffdioxid">
                    <button className = "sdg13-Wörterbuch-b" style = {styleKohlenstoffdioxid} type ="button"> 
                        Carbon Dioxide
                    </button>
            </Link> 

            <Link to = "/Wörterbuch/Methan">
                    <button className = "sdg13-Wörterbuch-b" style = {stylemethan} type ="button"> 
                        Methan
                    </button>
            </Link> 

            <Link to = "/Wörterbuch/Dextrose">
                    <button className = "sdg13-Wörterbuch-b" style = {styleDextrose}  type ="button"> 
                        Dextrose
                        
                    </button>
            </Link> 

            <Link to = "/Wörterbuch/Photosynthese">
                    <button className = "sdg13-Wörterbuch-b" style = {styledPhotosynthese} type ="button"> 
                        Photosynthesis
                    </button>
            </Link> 
        </div>
        </BrowserRouter>
    );
}
