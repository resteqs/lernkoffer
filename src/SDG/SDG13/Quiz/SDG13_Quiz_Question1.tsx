import React from "react";
import Modal, { ICustomModalStyle } from "@bdenzer/react-modal";
import Logo from "../../../SDGLogos/Goal-SDG13.png";

export const SDG13_Quiz_Question1 = (): JSX.Element => {
    const [button1Color, setButton1Color] = React.useState("rgb(204,204,255)");
    const [button2Color, setButton2Color] = React.useState("blue");
    const [shouldShowModal, setShouldShowModal] = React.useState(false);
    const onlyCloseWithButton = true;

    const closeModal = (): void => {
        setShouldShowModal(false);
    };

    const openModal = (): void => {
        setShouldShowModal(true);
    };

    const handleClick = (): void => {
        setButton1Color("green");
        setButton2Color("red");
        setTimeout(
            (openMod: () => void) => {
                openMod();
            },
            1000,
            [openModal],
        );
    };

    const modalStyle: ICustomModalStyle = {
        animationTime: 400,
        closeButtonText: {
            color: "white",
        },
        hoveredButtonText: {
            fontWeight: "bold",
        },
        modalHeader: {
            backgroundColor: "green",
        },
        modalTitle: {
            color: "white",
        },
    };

    return (
        <>
            <div className="colour_sdg13">
                <div className="header">
                    Hochwertige Bildung <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>

            <p className="quizQuestion">Does a passenger car or a plane produce more greenhouse gases?</p>
            <div>
                <button
                    className="answerButtonleft"
                    style={{ backgroundColor: button1Color }}
                    type="button"
                    onClick={handleClick}
                >
                    The passenger car
                </button>
                <button
                    className="answerButtonright"
                    style={{ backgroundColor: button2Color }}
                    type="button"
                    onClick={handleClick}
                >
                    The plane
                </button>
            </div>
            <div>
                <Modal
                    closeModal={closeModal}
                    customStyle={modalStyle}
                    shouldShowModal={shouldShowModal}
                    title="React Modal in TypeScript"
                    onlyCloseWithButton={onlyCloseWithButton}
                >
                    The plane does. Studies show that a plane produces about 230 grams per Person per kilometer (g/Pkm)
                    while a passenger car only frees about 147 g/Pkm.
                </Modal>
            </div>
        </>
    );
};
