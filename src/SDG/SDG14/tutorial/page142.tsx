import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prefer-stateless-function
class page142 extends React.Component {
    render(): JSX.Element {
        return (
            <div className="standard-background">
                <h1 className="header">Tutorial</h1>
                <div>
                    <p className = "playinformation">
                        But many living creatures are threatened with extinction which means that in a few years we
                        might not be able to find any of these wild animals anymore.{" "}
                    </p>

                    <Link to="/sdg14/tutorial/page3">
                        <button className="buttonNext" type="button">
                            NEXT
                        </button>
                    </Link>

                    <Link to="/sdg14/tutorial/page1">
                        <button className="buttonBack" type="button">
                            BACK
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default page142;
