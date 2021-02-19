import React from "react";

// eslint-disable-next-line react/prefer-stateless-function
class tree extends React.Component{
    render(): JSX.Element{
        return(
           <div className = "standard-background">
                <h1 className = "header">TREE</h1>
                <div>                
                    <p className = "sdg13playinformation">As we all know trees are responsible for&nbsp;<span className = "red">photosynthesis</span>. Especially nowadays, when nearly everything we do is related to an action producing Carbon Dioxide these plants are&nbsp;<span className = "red">extremely important&nbsp;</span>since a&nbsp;<span className = "red">higher concentration of Carbon Dioxide</span>&nbsp;in the air would be&nbsp;dangerous&nbsp;for all the living creatures and&nbsp;<span className = "red">advance climate change</span>. Yet many people seem to not know that trees are not just nice to look at but also have functions that affect our lives because their wood is a&nbsp;<span className = "red">good building material</span>, they create a&nbsp;<span className = "red">living space</span>&nbsp;for many kinds of animals, cast a&nbsp;<span className = "red">shadow&nbsp;</span>which causes high&nbsp;<span className = "red">evaporation of water</span>, especially in summer. Of course, there are many other reasons why trees are that important to us humans, but these are the most important ones. Do you see now why we must&nbsp;stop&nbsp;the forest clearance right away? This, by the way, goes up to&nbsp;<span className = "red">300.000 square kilometers</span>&nbsp;each year, and more than half of it in the&nbsp;<span className = "red">rainforest</span>!&nbsp;&nbsp;</p>
                </div>
           </div>
        );
    }
}

export default tree