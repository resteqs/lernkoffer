// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/require-default-props */

import React, { PropsWithChildren } from "react";
import { InfotextButton } from "./InfotextButton";

interface Props {
    onClick?: () => void;
    active?: boolean;
    version?: "green" | "red";
    className?: string;
}

export const FancyButton = (props: PropsWithChildren<Props>): JSX.Element => {
    const active = props.active ?? true;
    const version = props.version ?? "green";
    if (active) {
        return (
            <div className={props.className}>
                <InfotextButton onClick={props.onClick} version={version}>
                    {props.children}
                </InfotextButton>
            </div>
        );
    }
    return <div className="buttonInvisible" />;
};