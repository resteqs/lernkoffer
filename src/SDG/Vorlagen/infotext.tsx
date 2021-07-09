// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unused-state */
import * as React from 'react';
import '../../styles/colour_sdgs.css';
import '../../styles/infotext.css';

import Logo from '../../SDGLogos/Goal-04.png';

// eslint-disable-next-line react/prefer-stateless-function
export class infotext extends React.Component {
    
    render(): JSX.Element{
        return(
           <div><div className = "colour_sdg04" >
           <div className = "header">
          Hochwertiged Bildung <img className ="sdglogo" alt="logo" src={Logo}/>    
           </div> 
           
       </div>
       <div className = "infotextbox" ><p>
                    As you know at the moment, we are taking a look at climate change and what we can do to slow it down
                    or even stop and reverse it.
                </p>
                <p>
                    A huge part of this is the topic of transportation. Everything and everybody needs to be transported
                    in several ways to different locations.
                </p>
                <p>
                    In the following, you will have to decide which mean of transport produces more emissions (gases
                    produced by a lot of things e.g. cars while their engines are running). You have the choice between
                    two means of transportation.
                </p>
                <p>
                    To make it more fun, we make a game out of it. Choose three corners or places you want to use. Every
                    question has three possible answers. The people who think object number one produces more of the
                    asked gas go to the first corner/spot. Those who think the second object frees more of this gas go
                    to the second corner/spot, and those of you who think they both free the same amount of gas go to
                    the third corner/spot.
                </p>
       
       </div></div>
    );
}

}
export default infotext
