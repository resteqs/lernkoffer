import * as React from "react";
import { Link } from "react-router-dom";

export const home = (): JSX.Element => {
    return (
        <div className="standard-background">
            <div className="header">This is our home page Need help Go to:</div>
            <div className="header">
                <Link to="/help">HELP</Link>
            </div>
            <button type="button">Hallo</button>
        </div>
    );
};
