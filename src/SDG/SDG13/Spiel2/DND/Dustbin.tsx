// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/prop-types */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */
import { CSSProperties, FC, memo } from "react";
import { useDrop } from "react-dnd";

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

export interface DustbinProps {
    accept: string[];
    lastDroppedItem?: any;
    onDrop: (item: any) => void;
}

export const Dustbin: FC<DustbinProps> = memo(function Dustbin({ accept, lastDroppedItem, onDrop }) {
    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
            accept,
            drop: onDrop,
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        [accept, onDrop],
    );

    const isActive = isOver && canDrop;
    const backgroundColor = "#ffb85f";
    /*
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
*/
    return (
        // eslint-disable-next-line jsx-a11y/aria-role
        <div ref={drop} role="Dustbin" style={{ ...style, backgroundColor }}>
            {isActive ? "Release to drop" : `This dustbin accepts: ${accept.join(", ")}`}
        </div>
    );
});

/* shows the last dropped item on Screen
{lastDroppedItem && (
        <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
 
      )}

*/
