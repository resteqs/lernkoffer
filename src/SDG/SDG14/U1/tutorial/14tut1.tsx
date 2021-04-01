import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class page141 extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">Tutorial</h1>
                <div>
                    <p className = "playinformation">
                        In the Oceans, there are living more than 2.2 million species like blue whales, common sea stars
                        and Atlantic salmons.
                    </p>

                    <Link to="/sdg14/tutorial/page2">
                        <button className="buttonNext" type="button">
                            NEXT
                        </button>
                    </Link>
                    
                </div>
            </div>
        );
    }
}

export default page141