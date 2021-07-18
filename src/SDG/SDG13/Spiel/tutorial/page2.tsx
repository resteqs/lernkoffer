import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class page2 extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">Tutorial</h1>
                <div> 
                    <p className = "playinformation">It is often discussed how to lower the produced amount of CO<sub>2</sub>. In our current world, we have a lot of things with high emissions but also a few with low ones or none. Nevertheless, there are also objects that bind this gas from the air. As a result, the concentration of harmful gases in the air is being reduced.</p>
                    <Link to = "/SDG13/tutorial/page3">
                        <button className = "buttonNext" type = "button">NEXT</button>
                    </Link>

                    <Link to = "/SDG13/tutorial/page1">
                        <button className = "buttonBack" type = "button">BACK</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default page2;
