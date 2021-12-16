/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/filename-case */

import * as React from "react";

interface Props{
    sdgNumber: number
    
}
export const NameOfSDG: React.FC<Props> = ({ sdgNumber }:Props ):JSX.Element => {
    
    const titleofSDG = {
        1: <p>Keine Armut</p>,
        2: <p>Kein Hunger</p>,       
        3: <p>Gesundheit und Wohlergehen</p>,   
        4: <p>Hochwertige Bildung</p>,       
        5: <p>Geschlechtergleichheit</p>,       
        6: <p>Sauberes Wasser und Sanitärversorgung</p>,       
        7: <p>Bezahlbare und saubere Energie</p>,   
        8: <p>Menschenwürdige Arbeit und Wirtschaftswachstum</p>,
        9: <p>Industrie, Innovationen und Infrastruktur</p>,
        10: <p>Weniger Ungleichheit</p>,       
        11: <p>Nachhaltige Städte und Gemeinden</p>,    
        12: <p>Nachhaltige/r Konsum- und Produktion</p>,    
        13: <p>Maßnahmen zum Klimaschutz</p>,       
        14: <p>Leben unter Wasser</p>,    
        15: <p>Leben an Land</p>,    
        16: <p>Frieden, Gerechtigkeit und starke Instituttionen</p>, 
        17: <p>Partnerschaften zur Erreichung der Ziele</p>,    
    };

    return(
        <div>
            {titleofSDG [sdgNumber]}
        </div>
    );
}