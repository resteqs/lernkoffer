import React from "react";
import Item from "./Item"

// eslint-disable-next-line react/prefer-stateless-function
export class five extends React.Component {
// eslint-disable-next-line react/state-in-constructor
state = {
    // eslint-disable-next-line react/no-unused-state
    items:[
        {id: 1, name: "Item1"}
    ]
}

render(): JSX.Element {
        return (
            <div>
                a
            </div>
        );
    }
}
