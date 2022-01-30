/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/control-has-associated-label */
// eslint-disable-next-line unicorn/filename-case
import * as React from "react"
import Logo from "../../../SDGLogos/Goal-SDG05.png";

import KamalaHarris from "./Media/Kamala Harris.jpg";
import MarieCurie from "./Media/Marie Curie.jpg";
import HarrietTubman from "./Media/Harriet Tubman.jpg";

import RosalindFranklin from "./Media/Rosalind Franklind.jpg";
import GloriaSteinem from "./Media/Gloria Steinem.jpg";
import AmandaGorman from "./Media/Amanda Gorman.jpg";
import { ModalQuizComponent } from "../../../Components/Modal/ModalComponent";

import { FancyButton } from "../../../Components/Buttons/FancyButton";
import { Link } from "react-router-dom";


export const SDG05_Spiel = ():JSX.Element => {
    const [showtext, setText] = React.useState(1);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const sdgNumber = 5;
    const sdgTitle =  "Vorbilder";
    const sdg = "SDG05";
    const logo = Logo;
    const [itemSelected, setSelectedItem] = React.useState(0);

    
    const textBox:React.CSSProperties = {
        padding: "4vw",
        textAlign: "center",
    };
    
    const header =  {
        1: "Einleitung",
        2: "Einleitung",
        3: "Anleitung",
        4: "Kamala Harris",
        5: "Marie Curie",
        6: "Harriet Tubman",
        7: "Rosalind Franklin",
    };

    const text: Record<number, JSX.Element| string> =  {
        1: "Hast du auch ein Vorbild? Vielleicht deine Mama, dein Papa oder Oma und Opa. Oder vielleicht eine Lehrkraft. Hast du auch ein Vorbild? Vielleicht deine Mama, dein Papa oder Oma und Opa. Oder vielleicht eine Lehrkraft. Wir orientieren uns oft an unseren Vorbildern.",
        2: "Leider wird nicht oft über Frauen geredet, die Großes geleistet haben, und deren Arbeit oder Persönlichkeit uns allen etwas beibringen kann. Deshalb kannst du nun mehr über starke Frauen aus der Vergangenheit und Gegenwart erfahren und vielleicht findest du ein neues Vorbild. Sie alle haben sich sehr für Schwächere eingesetzt oder etwas andere Wichtiges bewirkt.",
        3: "Du wirst nun Bilder von Frauen sehen. Vielleicht kennst du schon jemanden? Überlegt gemeinsam, was sie getan haben. Tippe dann auf ein Bild, um mehr über die Frau hinter dem Bild zu erfahren.",
        4: <button type="button" onClick={() => setIsOpen(true)} style = {{ display: "block", margin:"auto" }}><img src={KamalaHarris} alt="" style = {{ display: "block", margin:"auto", width:"30vw" }} /></button>,
        5: <button type="button" onClick={() => setIsOpen(true)} style = {{ display: "block", margin:"auto" }}><img src={MarieCurie} alt="" style = {{ display: "block", margin:"auto", width:"20vw" }}/></button>,
        6: <button type="button" onClick={() => setIsOpen(true)} style = {{ display: "block", margin:"auto" }}><img src={HarrietTubman} alt="" style = {{ display: "block", margin:"auto", width:"20vw" }}/></button>,
        7: <button type="button" onClick={() => setIsOpen(true)} style = {{ display: "block", margin:"auto" }}><img src={RosalindFranklin} alt="" style = {{ display: "block", margin:"auto", width:"20vw" }} /></button>,
        8: "Und? Welche ist deine Favorit?"
    };
    
    const maxSlides = Object.keys(text).length;
    const TextForPicture: Record<number, string> = {
        4: "Kamala Harris ist amerikanische Politikerin und die erste Vize-Präsidentin der USA. Sie arbeitete vor ihrer politischen Karriere als Anwältin und setzt sich sehr für „Farbige“ und die Akzeptanz von gleichgeschlechtlichen Beziehungen ein.",
        5: "Marie Curie war eine Physikerin und Chemikerin aus Polen. Sie ist die einzige Frau, die 2 Nobelpreise bekam, nämlich für Chemie und Physik. Sie hat sich außerdem zu Lebzeiten dafür eingesetzt, dass Frauen studieren dürfen. Das war nämlich früher keine Selbstverständlichkeit. Berühmt ist sie für ihre Forschung zu Radioaktivität.",
        6: "Harriet Tubman entkam der Sklaverei im Süden der Vereinigten Staaten. Sie half dann, viele andere Freiheitssuchende in die Freiheit zu führen. Sie diente auch der Union während des amerikanischen Bürgerkriegs. Nach ihrem Tod geriet Harriet Tubman in Vergessenheit, heute zählt sie zu den bekanntesten historischen Persönlichkeiten, die gegen die Sklaverei kämpften.",
        7: "Rosalind Franklin war eine intelligente und interessierte Wissenschaftlerin aus England. Ihre wichtigste Entdeckung waren der Bauplan und die Bausteine des menschlichen Körpers. Sie musste während ihrer ganzen beruflichen Laufbahn mit Vorurteilen von männlichen Kollegen kämpfen. Beispielsweise haben 2 ihrer Kollegen, James Watson und Francis Crick ihre Arbeit veröffentlicht, ohne zu sagen, dass sie von ihr war!",
    }

    const incrementCount = (): void => {
        setText((prevState) => prevState + 1);
    };

    const decrementCount = (): void => {
        setText((prevState) => prevState - 1);
    };

    const buttonBack = (
        <div style={{ bottom: "38px", left: "-38px", position: "fixed" }}>
            <FancyButton
                onClick={decrementCount}
                version="red"
                className="backbutton"
                active={showtext>1}
            >
                Zurück
            </FancyButton>
        </div>
    );
    const buttonNext = (
        <div style={{ bottom: "38px", right: "38px", position: "fixed" }}>
            <FancyButton
                onClick={incrementCount}
                version="green"
                className="nextbutton"
                active={showtext < maxSlides}
            >
                Weiter
            </FancyButton>
        </div>
    );

    const buttonEnd = (
        <Link to="/Vorlagen/Endscreen">
            <div style={{  bottom: "38px", right: "38px", position: "fixed" }}>
                <FancyButton
                    onClick={incrementCount}
                    version="green"
                    className="nextbutton"
                    active={showtext === maxSlides}
                >
                    Beenden
                </FancyButton>
            </div>
        </Link>
    );

    const answerCW = (
        header[showtext]
    );
    const Modal = (
        modalIsOpen === true ? (
            <ModalQuizComponent
                incrementCount={incrementCount}
                answercw={answerCW}
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                answer={TextForPicture[showtext]} 
                setSelectedItem={ ()=> setSelectedItem(showtext)}           
                />
        ) : (
            <div> </div>
        )
    );
    
    return (
        <>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    {sdgTitle} <img className="sdglogo" alt="logo" src={logo} />
                </div>
            </div>
            <div style = {textBox}>
                <p className="headertext">
                    <b>{header[showtext]}</b>
                </p>{" "}
                <br />
                <p className="texttext">
                    <p>{text[showtext]}</p>
                </p>{" "}
            </div>
            {Modal}
            {buttonBack}
            {buttonNext}
            {buttonEnd}    
        </>
    );
}