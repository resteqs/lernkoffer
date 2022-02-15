/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/no-unused-prop-types */

import * as React from "react";
import "../../styles/colour_sdgs.css";
import "../../styles/App.css";
import "../../styles/component.css";
import Modal from "react-modal";
import { ModalProps } from "../../Interfaces/SDG";

export const ModalQuizComponent = (props: ModalProps): JSX.Element => {

    function closeModal(): void {
        props.incrementCount();
        props.setSelectedItem(0);
        props.setIsOpen(false);
    }

    return (
        <>
            <Modal
                isOpen={props.modalIsOpen}
                onRequestClose={() => props.setIsOpen(false)}
                overlayClassName={{
                    base: "overlay-base",
                    afterOpen: "overlay-after",
                    beforeClose: "overlay-before",
                }}
                className={{
                    base: "content-base",
                    afterOpen: "content-after",
                    beforeClose: "content-before",
                }}
                closeTimeoutMS={500}
            >
                <div className="content-header">
                    {props.answercw}
                    <button type="button" style={{ bottom:"60px" }} className="personCheckOkButtonComp"  onClick={() => closeModal()}>
                        <b>Okay</b>
                    </button>
                </div>
                <p style={{ fontSize: "4vh", margin: "10px" }}>
                    {" "}
                    <b>Antwort: </b>
                    {props.answer}{" "}
                </p>
            </Modal>
        </>
    );
};
