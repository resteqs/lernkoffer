/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/no-unused-prop-types */

import * as React from "react";
import { Link } from "react-router-dom";
import "../../styles/colour_sdgs.css";
import "../../styles/App.css";
import "../../styles/component.css";
import Modal from "react-modal";
import { ModalComponnet } from "../Interfaces/SDG";

interface Props {
  sdg: ModalComponnet;
}

export const ModalComponent = (props:Props): JSX.Element => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
/*
  function openModal()
  {
    setIsOpen(true);
  }

  // function after

*/

  const modal =
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setIsOpen(false)}
      overlayClassName={{
        base: "overlay-base",
        afterOpen: "overlay-after",
        beforeClose: "overlay-before"
      }}
      className={{
        base: "content-base",
        afterOpen: "content-after",
        beforeClose: "content-before"
      }}
      closeTimeoutMS={500}

    >
      <div className="content-header"><p>Title</p> <button type="button" className="personCheckOkButton" onClick={() => setIsOpen(false)}><b>Okay</b></button></div>

    </Modal>
  return (
    <>
      

    </>
  );
};
