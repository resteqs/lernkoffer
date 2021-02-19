import React from "react";

// eslint-disable-next-line react/prefer-stateless-function
class bicycle extends React.Component{
    render(): JSX.Element{
        return(
           <div className = "standard-background">
                <h1 className = "header">BICYCLE</h1>
                <div>                
                {/* eslint-disable-next-line react/style-prop-object */}
                <p className = "sdg13playinformation">He emissions about&nbsp;<span className = "red">21g of CO<sub>2</sub>&nbsp;per kilometer&nbsp;</span>which is more than&nbsp;<span className = "red">ten times less than a car</span>! Besides, it is&nbsp;<span className = "red">healthy&nbsp;</span>to bicycle and helps to reduce the noise in the cities. If you want to save money, a bike should be your choice since the usage costs are only&nbsp;<span className = "red">10 cents per driven kilometer.</span> For cars, the price lies between 40 and 140 cents!&nbsp;</p>
                </div>
           </div>
        );
    }
}

export default bicycle