import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// eslint-disable-next-line import/no-extraneous-dependencies
import CSS from "csstype";
import Example from "./example";
import Logo from "../../../../SDGLogos/Goal-SDG13.png";

const heightLineStyle: CSS.Properties = {
    marginBottom: "2vh",
};

export function Main(): JSX.Element {
    return (
        <div className="App">
            <nav>
                <div className="colour_SDG03">
                    <p className="header">
                        Mülltrennung
                        <img className="sdglogo" alt="logo" src={Logo} />
                    </p>
                </div>
                <div style={heightLineStyle} />
                <div>
                    <DndProvider backend={HTML5Backend}>
                        <Example />
                    </DndProvider>
                </div>
            </nav>
        </div>
    );
}
