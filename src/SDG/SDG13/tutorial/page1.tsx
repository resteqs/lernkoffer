import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class page1 extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">Tutorial</h1>
                <div> 
                    <p className = "sdg13playinformation">In the air, there are many different kinds of gases that you cannot always see. One of them is Carbon Dioxide. As you might know, the high level of CO<sub>2</sub> promotes climate change and therefore it is considered a danger to our environment.</p>
                   
                    <Link to = "/sdg13/tutorial/page2">
                        <button className = "buttonNext" type = "button">NEXT</button>
                    </Link> 
                    <Link to = "/sdg13">
                        <button className = "buttonBack" type = "button">NEXT</button>
                    </Link>   
                       
                    
                </div>
                
            </div>
        );
    }
}

export default page1;
