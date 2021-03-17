// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import frog from "./frog.png";

// eslint-disable-next-line react/prefer-stateless-function
export class five extends React.Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        // eslint-disable-next-line react/no-unused-state
        status: "NA",
        // eslint-disable-next-line react/no-unused-state
        targetTrashID: null,

        trash: [
            // eslint-disable-next-line object-shorthand
            { name: "frog", id: "1", ob: { frog: frog } },
        ],
    };

    // eslint-disable-next-line class-methods-use-this
    onDragEnd() {
        console.log("lol");
    }

    render(): JSX.Element {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="standard-background">
                    {this.state.trash.map((item) => {
                        return (
                            <div>
                                <p>{item.name}</p>
                                <img src={this.state.trash[0].ob.frog} alt="N/A" />

                                <p>{item.id}</p>
                            </div>
                        );
                    })}
                </div>
            </DragDropContext>
        );
    }
}
