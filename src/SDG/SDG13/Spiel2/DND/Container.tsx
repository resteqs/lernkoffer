// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */
import { FC, useState, useCallback } from "react";
import { NativeTypes } from "react-dnd-html5-backend";
import update from "immutability-helper";
import { Dustbin } from "./Dustbin";
import { Box } from "./Box";
import { ItemTypes } from "./ItemTypes";

import apple from "../trash/apple.png";
import banana from "../trash/banana.png";
import book from "../trash/book.png";
import bottle from "../trash/bottle.png";
import glas_bottle from "../trash/glas_bottle.png";
import oil_bottle from "../trash/oil_bottle.png";
import paper from "../trash/paper.png";
import shoe from "../trash/shoe.png";
import teddy from "../trash/teddy.png";
import tin_can from "../trash/tin_can.png";

import glas_container from "../trash_cans/glas.png"
import organic_container from "../trash_cans/organic.png"
import paper_container from "../trash_cans/paper.png"
import plastic_container from "../trash_cans/plastic.png"
import residual_container from "../trash_cans/residual.png"

interface DustbinState {
    accepts: string[];
    lastDroppedItem: any;
    img: string;
}

export interface DustbinSpec {
    accepts: string[];
    lastDroppedItem: any;
}

interface BoxState {
    name: string;
    image: string;
    type: string;
}

export interface BoxSpec {
    name: string;
    image: string;
    type: string;
}

export interface ContainerState {
    droppedBoxNames: string[];
    dustbins: DustbinSpec[];
    trash: BoxSpec[];
}

export const Container: FC = () => {
    const [trash] = useState<BoxState[]>([
        { name: "apple", image: apple, type: ItemTypes.ORGANIC },
        { name: "banana", image: banana, type: ItemTypes.ORGANIC },
        { name: "book", image: book, type: ItemTypes.PAPER },
        { name: "bottle", image: bottle, type: ItemTypes.PLASTIC },
        { name: "glas bottle", image: glas_bottle, type: ItemTypes.PLASTIC },
        { name: "oil bottle", image: oil_bottle, type: ItemTypes.GLASS },
        { name: "paper", image: paper, type: ItemTypes.PAPER },
        { name: "shoe", image: shoe, type: ItemTypes.RESIDUAL },
        { name: "teddy", image: teddy, type: ItemTypes.RESIDUAL },
        { name: "tin can", image: tin_can, type: ItemTypes.PLASTIC },
    ]);

    const [dustbins, setDustbins] = useState<DustbinState[]>([
        { accepts: [ItemTypes.GLASS], lastDroppedItem: null, img: glas_container },
        { accepts: [ItemTypes.ORGANIC], lastDroppedItem: null, img: organic_container },
        { accepts: [ItemTypes.PAPER], lastDroppedItem: null, img: paper_container },
        { accepts: [ItemTypes.PLASTIC], lastDroppedItem: null, img: plastic_container },
        { accepts: [ItemTypes.RESIDUAL], lastDroppedItem: null, img: residual_container },
    ]);

    const [droppedBoxNames, setDroppedBoxNames] = useState<string[]>([]);

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    function isDropped(boxName: string) {
        return droppedBoxNames.includes(boxName);
    }

    const handleDrop = useCallback(
        (index: number, item: { name: string }) => {
            const { name } = item;
            setDroppedBoxNames(update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }));
            setDustbins(
                update(dustbins, {
                    [index]: {
                        lastDroppedItem: {
                            $set: item,
                        },
                    },
                }),
            );
            // eslint-disable-next-line no-lone-blocks
            {
                alert("Excelent");
            }
        },
        [droppedBoxNames, dustbins],
    );

    return (
        <div>
            <div style={{ overflow: "hidden", clear: "both" }}>
            {dustbins.map(({ accepts, lastDroppedItem, img }, index) => (
                    <Dustbin
                        accept={accepts}
                        img = {img}
                        lastDroppedItem={lastDroppedItem}
                        onDrop={(item: { name: string }) => handleDrop(index, item)}
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                    />
                ))}
            </div>

            <div style={{ overflow: "hidden", clear: "both" }}>
                {trash.map(({ name, image, type }, index) => (
                    <div>
                        <Box
                            name={name}
                            image={image}
                            type={type}
                            isDropped={isDropped(name)}
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                        >
                            <img src={trash[index].image} alt="0" />
                        </Box>
                    </div>
                ))}
            </div>
        </div>
    );
};
