// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-const */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable eslint-comments/disable-enable-pair */
// eslint-disable-next-line eslint-comments/no-duplicate-disable
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line unicorn/filename-case

import * as React from "react";
import renderer from "react-dom";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import "../../../styles/colour_sdgs.css";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG05.png";
import "../sdg5.css"


import KamalaHarris from "./Media/Kamala Harris.jpg";
import MarieCurie from "./Media/Marie Curie.jpg";
import HarrietTubman from "./Media/Harriet Tubman.jpg";

import RosalindFranklin from "./Media/Rosalind Franklind.jpg";
import GloriaSteinem from "./Media/Gloria Steinem.jpg";
import AmandaGorman from "./Media/Amanda Gorman.jpg";

export const SDG05_Spiel = (): JSX.Element => {
    const [showtext, setText] = React.useState(1);
    const sdg = "SDG05";
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalOpened, setModalOpened] = React.useState(0);
    const [modalOne, setModalOne] = React.useState(0);
    const [modalTwo, setModalTwo] = React.useState(0);
    const [modalThree, setModalThree] = React.useState(0);
    const [modalFour, setModalFour] = React.useState(0);
    const [modalFive, setModalFive] = React.useState(0);
    const [modalSix, setModalSix] = React.useState(0);
    const maxslide = 8;

    const KamalaHarrisÜ = {
        1: "Kamala Harris",
    };

    const MarieCurieÜ = {
        1: "Marie Curie",
    };

    const HarrietTubmanÜ = {
        1: "Harriet Tubman",
    };

    const RosalindFranklinÜ = {
        1: "Rosalind Franklin",
    };

    const GloriaSteinemÜ = {
        1: "Gloria Steinem",
    };

    const AmandaGormanÜ = {
        1: "Amanda Gorman",
    };

    const KamalaHarrisI = {
        1: "Kamala Harris ist amerikanische Politikerin und die erste Vize-Präsidentin der USA. Sie arbeitete vor ihrer politischen Karriere als Anwältin und setzt sich sehr für „Farbige“ und die Akzeptanz von gleichgeschlechtlichen Beziehungen ein.",
    };

    const MarieCurieI = {
        1: "Marie Curie war eine Physikerin und Chemikerin aus Polen. Sie ist die einzige Frau, die 2 Nobelpreise bekam, nämlich für Chemie und Physik. Sie hat sich außerdem zu Lebzeiten dafür eingesetzt, dass Frauen studieren dürfen. Das war nämlich früher keine Selbstverständlichkeit. Berühmt ist sie für ihre Forschung zu Radioaktivität.",
    };

    const HarrietTubmanI = {
        1: "Harriet Tubman entkam der Sklaverei im Süden der Vereinigten Staaten. Sie half dann, viele andere Freiheitssuchende in die Freiheit zu führen. Sie diente auch der Union während des amerikanischen Bürgerkriegs. Nach ihrem Tod geriet Harriet Tubman in Vergessenheit, heute zählt sie zu den bekanntesten historischen Persönlichkeiten, die gegen die Sklaverei kämpften.",
    };

    const RosalindFranklinI = {
        1: "Rosalind Franklin war eine intelligente und interessierte Wissenschaftlerin aus England. Ihre wichtigste Entdeckung waren der Bauplan und die Bausteine des menschlichen Körpers. Sie musste während ihrer ganzen beruflichen Laufbahn mit Vorurteilen von männlichen Kollegen kämpfen. Beispielsweise haben 2 ihrer Kollegen, James Watson und Francis Crick ihre Arbeit veröffentlicht, ohne zu sagen, dass sie von ihr war!",
    };

    const GloriaSteinemI = {
        1: "Gloria Steinem wurde 1934 in den USA geboren und ist eine bekannte Journalistin, Feministin und Frauenrechtlerin. Sie setzt sich also sehr für die Gleichbehandlung der Frauen und Mädchen in unserer Gesellschaft ein. Für ihre Arbeit und ihre Werke hat sie schon sehr viele Auszeichnungen bekommen.  ",
    };

    const AmandaGormanI = {
        1: "Die amerikanische Dichterin und Aktivistin Amanda Gorman wurde 2017 die erste National Youth Poet Laureate der Vereinigten Staaten. Sie erlangte große Bekanntheit, als sie bei der Amtseinführung von Präsident Joe Biden am 20. Januar 2021 ein Gedicht vortrug. Mit nur 22 Jahren war Gorman die bisher jüngste Dichterin, die dies tun durfte.",
    };

    function openModal1(): void {
        setModalOpened(1);
        if (modalOne === 3) {
            setModalOne(1);
        } else {
            setModalOne(modalOne + 1);
        }
    }
    function openModal2(): void {
        setModalOpened(2);
        if (modalTwo === 4) {
            setModalTwo(1);
        } else {
            setModalTwo(modalTwo + 1);
        }
    }
    function openModal3(): void {
        setModalOpened(3);
        if (modalThree === 5) {
            setModalThree(1);
        } else {
            setModalThree(modalThree + 1);
        }
    }
    function openModal4(): void {
        setModalOpened(4);
        if (modalFour === 6) {
            setModalFour(1);
        } else {
            setModalFour(modalFour + 1);
        }
    }
    function openModal5(): void {
        setModalOpened(5);
        if (modalFive === 7) {
            setModalFive(1);
        } else {
            setModalFive(modalFive + 1);
        }
    }
    function openModal6(): void {
        setModalOpened(6);
        if (modalSix === 8) {
            setModalSix(1);
        } else {
            setModalSix(modalSix + 1);
        }
    }
    const text = {
        1: (
            <div style={{ textAlign: "left", fontSize: "30px" }}>
                <p>
                    <ul>
                        <li>
                            Vorbilder, das sind Menschen, die wir für ihre Art und ihre Arbeit bewundern. Wir schauen zu
                            ihnen auf und versuchen ein klein wenig so zu sein wie sie.{" "}
                        </li>
                        <li>
                            {" "}
                            Hast du auch ein Vorbild? Vielleicht deine Mama, dein Papa oder Oma und Opa. Oder vielleicht
                            eine Lehrkraft.
                        </li>
                        <li> Wir orientieren uns oft an unseren Vorbildern.</li>
                        <li>
                            {" "}
                            Leider wird nicht oft über Frauen geredet, die Großes geleistet haben, und deren Arbeit oder
                            Persönlichkeit uns allen etwas beibringen kann.{" "}
                        </li>
                        <li>
                            {" "}
                            Deshalb kannst du nun mehr über starke Frauen aus der Vergangenheit und Gegenwart erfahren
                            und vielleicht findest du ein neues Vorbild. Sie alle haben sich sehr für Schwächere
                            eingesetzt oder etwas andere Wichtiges bewirkt.
                        </li>
                    </ul>
                </p>
            </div>
        ),
        2: (
            <div style={{ textAlign: "left", fontSize: "30px"  }}>
                <p>
                    {" "}
                    Du wirst nun Bilder von Frauen sehen. Vielleicht kennst du schon jemanden? Überlegt gemeinsam, was
                    sie getan haben. Tippe dann auf ein Bild, um mehr über die Frau hinter dem Bild zu erfahren.{" "}
                </p>
            </div>
        ),

        3: (
            <div>
                <button
                    type="button"
                    style={{
                        background: "none",
                        borderStyle: "none",
                        marginTop: "150px",
                    }}
                    onClick={() => {
                        setIsOpen(true);
                        openModal1();
                    }}
                >
                    <img className="Bilder05Spiel" src={KamalaHarris} alt="" />
                </button>
            </div>
        ),
        4: (
            <div>
                <button
                    type="button"
                    style={{
                        background: "none",
                        borderStyle: "none",
                        marginTop: "150px",
                    }}
                    onClick={() => {
                        setIsOpen(true);
                        openModal2();
                    }}
                >
                    <img className="Bilder05Spiel" src={MarieCurie} alt="" />
                </button>
            </div>
        ),
        5: (
            <div>
                <button
                    type="button"
                    style={{
                        background: "none",
                        borderStyle: "none",
                        marginTop: "150px",
                    }}
                    onClick={() => {
                        setIsOpen(true);
                        openModal3();
                    }}
                >
                    <img className="Bilder05Spiel" src={HarrietTubman} alt="" />
                  
                </button>
            </div>
        ),
        6: (
            <div>
                <button
                    type="button"
                    style={{
                        background: "none",
                        borderStyle: "none",
                        marginTop: "150px",
                    }}
                    onClick={() => {
                        setIsOpen(true);
                        openModal4();
                    }}
                >
                    <img className="Bilder05Spiel" src={RosalindFranklin} alt="" />
                </button>
            </div>
        ),
        7: (
            <div>
                <button
                    type="button"
                    style={{
                        background: "none",
                        borderStyle: "none",
                        marginTop: "150px",
                    }}
                    onClick={() => {
                        setIsOpen(true);
                        openModal5();
                    }}
                >
                    <img className="Bilder05Spiel"  src={GloriaSteinem} alt="" />
                </button>
            </div>
        ),
        8: (
            <div>
                <button
                    type="button"
                    style={{
                        background: "none",
                        borderStyle: "none",
                        marginTop: "150px",
                    }}
                    onClick={() => {
                        setIsOpen(true);
                        openModal6();
                    }}
                >
                    <img className="Bilder05Spiel" src={AmandaGorman} alt="" />
                </button>
            </div>
        ),
    };
    const header = {
        1: (
            <div>
                <p>Einleitung</p>
            </div>
        ),
        2: (
            <div>
                <p>Einleitung</p>
            </div>
        ),
        3: (
            <div>
                <p>Person</p>
            </div>
        ),
        4: (
            <div>
                <p>Person</p>
            </div>
        ),
        5: (
            <div>
                <p>Person</p>
            </div>
        ),
        6: (
            <div>
                <p> Person</p>
            </div>
        ),
        7: (
            <div>
                <p> Person</p>
            </div>
        ),
        8: (
            <div>
                <p> Person</p>
            </div>
        ),
    };

    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }
    let buttonBack;
    let buttonNext;
    let buttonEnd;
    let modal;

    buttonBack =
        showtext >= 2 ? (
            <div className="backbutton">
                {" "}
                <button className={infotextbutton.pushable} type="button" onClick={decrementCount}>
                    <span className={infotextbutton.shadow} />
                    <span className={infotextbutton.edge} />
                    <span className={infotextbutton.front}>
                        <p className={infotextbutton.buttontext}>Zurück</p>
                    </span>
                </button>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    buttonNext =
        showtext <= 7 ? (
            <div className="nextbutton">
                {" "}
                <button className={infotextbutton.pushable} type="button" onClick={incrementCount}>
                    <span className={infotextbutton.shadow} />
                    <span className={infotextbutton.edgegreen} />
                    <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                        <p className={infotextbutton.buttontext}>Weiter</p>
                    </span>
                </button>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    buttonEnd =
        showtext === maxslide ? (
            <div className="nextbutton">
                <div style={{ marginTop: "10px" }} className="nextbutton">
                    {" "}
                    <Link to="/Vorlagen/Endscreen">
                        {" "}
                        <div>
                            <button className={infotextbutton.pushable} type="button" onClick={incrementCount}>
                                <span className={infotextbutton.shadow} />
                                <span className={infotextbutton.edgegreen} />
                                <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                                    <p className={infotextbutton.buttontext}>Weiter</p>
                                </span>
                            </button>
                        </div>
                    </Link>{" "}
                </div>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    const modalContent = {
        1: (
            <div>
                <div className="content-header">
                    {KamalaHarrisÜ[modalOne]}
                    <button
                        type="button"
                        className="personCheckOkButton"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <b>Zurück</b>
                    </button>
                </div>{" "}
                {KamalaHarrisI[modalOne]}
            </div>
        ),
        2: (
            <div>
                <div className="content-header">
                    {MarieCurieÜ[modalTwo]}
                    <button
                        type="button"
                        className="personCheckOkButton"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <b>Zurück</b>
                    </button>
                </div>{" "}
                {MarieCurieI[modalTwo]}
            </div>
        ),
        3: (
            <div>
                <div className="content-header">
                    {HarrietTubmanÜ[modalThree]}
                    <button
                        type="button"
                        className="personCheckOkButton"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <b>Zurück</b>
                    </button>
                </div>{" "}
                {HarrietTubmanI[modalThree]}
            </div>
        ),
        4: (
            <div>
                <div className="content-header">
                    {RosalindFranklinÜ[modalFour]}
                    <button
                        type="button"
                        className="personCheckOkButton"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <b>Zurück</b>
                    </button>
                </div>{" "}
                {RosalindFranklinI[modalFour]}
            </div>
        ),
        5: (
            <div>
                <div className="content-header">
                    {GloriaSteinemÜ[modalFive]}
                    <button
                        type="button"
                        className="personCheckOkButton"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <b>Zurück</b>
                    </button>
                </div>{" "}
                {GloriaSteinemI[modalFive]}
            </div>
        ),
        6: (
            <div>
                <div className="content-header">
                    {AmandaGormanÜ[modalSix]}
                    <button
                        type="button"
                        className="personCheckOkButton"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <b>Zurück</b>
                    </button>
                </div>{" "}
                {AmandaGormanI[modalSix]}
            </div>
        ),
    };

    modal = (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
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
            closeTimeoutMS={50}
        >
            <p style={{ fontSize: "30px" }}>{modalContent[modalOpened]}</p>
        </Modal>
    );

    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Vorbilder
                    <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div className="textbox5">
                <p className="headertext">
                    <b>{header[showtext]}</b>
                </p>{" "}
                <br />
                <p className="headertext">
                    <p>{text[showtext]}</p>
                </p>{" "}
            </div>
            {buttonBack}
            {buttonEnd}
            {buttonNext}

            {modal}
           
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG05_Spiel />, document.getElementById("root"));
