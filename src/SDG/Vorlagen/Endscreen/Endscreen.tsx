import React, { useState } from "react";
import { TextareaAutosize } from "@material-ui/core";
import QrScan from "react-qr-reader";
import validator from "validator";

const validate = (value): void => {
    if (validator.isURL(value)) {
        window.open(value, "_self");
    }
};

const handleError = (err: unknown): void => console.error(err);

export const Endscreen = (): JSX.Element => {
    const [qrscan, setQrscan] = useState("No result");

    const handleScan = (data): void => {
        if (data) {
            setQrscan(data);
            validate(data);
        }
    };

    return (
        <div>
            <span>QR Scanner</span>

            <div style={{ marginTop: 30 }}>
                <QrScan delay={300} onError={handleError} onScan={handleScan} style={{ height: 240, width: 320 }} />
            </div>

            <TextareaAutosize
                style={{ fontSize: 18, width: 320, height: 100, marginTop: 100 }}
                rowsMax={4}
                defaultValue={qrscan}
                value={qrscan}
            />
        </div>
    );
};
