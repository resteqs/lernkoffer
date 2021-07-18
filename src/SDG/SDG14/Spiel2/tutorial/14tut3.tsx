import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class page143 extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">Tutorial</h1>
                <div>
                    <p className="playinformation">
                        Can you guess those animals who will become extinct soon? Click on them and find them before
                        they die out.
                    </p>

                    <Link to="/SDG14/play">
                        <button className="buttonNext" type="button">
                            NEXT
                        </button>
                    </Link>

                    <Link to="/SDG13/tutorial/page2">
                        <button className="buttonBack" type="button">
                            BACK
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default page143;
