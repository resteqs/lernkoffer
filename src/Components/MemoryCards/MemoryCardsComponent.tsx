// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/click-events-have-key-events */

import * as React from "react";

export interface CardProps {
    id: string;
    image: string;
    front: string;
    solved?: boolean;
    flipped?: boolean;
}

export const MemoryCardsComponent = (props: CardProps): JSX.Element => {
    const [isflipped, setIsflipped] = React.useState(false);
    const [issolved, setIsSolved] = React.useState(false);
    const [isFrontImage, setFrontImage] = React.useState("");
    const cardImage = document.getElementById("cardImage");

    const toggleChild = (): void => {
        setIsflipped(!isflipped);
    };
    // , width:"100vw", margin:"auto", marginTop:"0px",  , justifyItems:"baseline"
    return (
        <div style={{ overflow: "hidden", clear: "both", display: "inline-block", margin:"2vh" }}>
            <img
                src={isflipped ? props.image : props.front}
                alt=""
                typeof="button"
                onClick={() => toggleChild()}
                style={{ height: "auto", width: "15vw", maxHeight:"15vw" }}
            />
        </div>
    );
};