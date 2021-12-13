import React, { CSSProperties, FC, memo } from "react";
import { useDrag } from "react-dnd";

const style: CSSProperties = {
    border: "1px dashed gray",
    backgroundColor: "white",
    padding: "0.5rem 1rem",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    cursor: "move",
    float: "left",
};

const coolerStyle: CSSProperties = {
    visibility: "hidden",
    filter: "blur(10px)",
    cursor: "move",
};

const correctDropped: CSSProperties = {
    filter: "",
};

export interface BoxProps {
    type: string;
    name: string;
    image: string;
    isDropped: boolean;
}

export const Box: FC<BoxProps> = memo((props: BoxProps) => {
    const [{ opacity }, drag] = useDrag(
        () => ({
            item: { image: props.image, type: props.type },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.4 : 1,
            }),
        }),
        [props.image, props.type],
    );

    return (
        <div ref={drag} style={{ ...style, opacity }}>
            {props.isDropped ? (
                <img style={coolerStyle} src={props.image} alt=" " />
            ) : (
                <img style={correctDropped} src={props.image} alt=" " />
            )}
        </div>
    );
});
