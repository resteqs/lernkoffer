import React, { CSSProperties, FC, memo } from "react";
import { useDrop } from "react-dnd";
import "../../../../styles/sdg13.css";
import "../../../../styles/App.css";

const style: CSSProperties = {
    height: "12rem",
    width: "12rem",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    fontSize: "1rem",
    lineHeight: "normal",
    float: "left",
};

const scalingTrashCans: CSSProperties = {
    lineHeight: 600,
};

export interface DustbinProps {
    accept: string[];
    img: string;
    lastDroppedItem?: any;
    onDrop: (item: any) => void;
}

export const Dustbin: FC<DustbinProps> = memo((props: DustbinProps) => {
    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
            accept: props.accept,
            drop: props.onDrop,
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        [props.accept, props.onDrop],
    );

    const isActive = isOver && canDrop;
    const backgroundColor = "FFFFF";
    /*
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
*/
    return (
        <div ref={drop} style={{ ...style, backgroundColor }}>
            <img className="ifeelLikeTrash" src={props.img} alt="" />
            This dustbin accepts: {props.accept.join(", ")}
        </div>
    );
});

/* originally in the return div component
{isActive ? "Release to drop" : `This dustbin accepts: ${accept.join(", ")}`} */

/* shows the last dropped item on Screen
{lastDroppedItem && (
        <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
 
      )}

*/
