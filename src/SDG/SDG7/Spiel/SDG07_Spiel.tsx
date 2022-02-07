// eslint-disable-next-line unicorn/filename-case
import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { FancyButton } from "../../../Components/Buttons/FancyButton";
import { CardProps, MemoryCardsComponent } from "../../../Components/MemoryCards/MemoryCardsComponent";
import Logo from "../../../SDGLogos/Goal-SDG07.png";
import front from "./Media/front.png"
import geo from "./Media/geo.png"
import nuclear from "./Media/nuclear.png"
import oil from "./Media/oil.png"
import solar from "./Media/solar.png"
import water from "./Media/water.png"
import wind from "./Media/wind.png"

export const SDG07_Spiel = (): JSX.Element => {
    const [showtext, setText] = React.useState(1);
    const [isOpen, setOpen] = React.useState(false);
    const sdgNumber = 7;
    const sdgTitle = "Energiegewinnung ";
    const sdg = "SDG07";

    const textBox: CSSProperties = {
        padding: "4vw",
        textAlign: "center",
    };

    const incrementCount = (): void => {
        setText((prevState) => prevState + 1);
    };

    const decrementCount = (): void => {
        setText((prevState) => prevState - 1);
    };

    const header: Record<number, string | JSX.Element> = {
        1: "Einleitung",
        2: "Aufgabe:",
    };
    const text: Record<number, string> = {
        1: "Du kennst ja sicher Strom und was Strom ist. Damit werden sehr viele Geräte angetrieben wie zum Beispiel Küchenmaschinen. Aber weißt du auch mit welchen Methoden Strom hergestellt wird? Davon gibt es nämlich sehr viele!",
        2: "Gleich siehst du ein Feld mit Memory-Karten, falls du das Spiel nicht kennst, es geht darum, dass du immer erst eine Karte ziehst und dann eine zweite und versuchst damit Pärchen zu bilden. Hier jedoch musst du immer ein Bild und eine Erklärung zusammenbringen. Noch ein wichtiger Punkt sind Turbinen: Diese sind große Schrauben, die du etwa mit einem Windrad vergleichen kannst, bloß dass durch diese Wasser „fließt“",
        3: " ",
    };
    const maxSlides = Object.keys(text).length;

    const [cards] = React.useState<CardProps[]>([
        { id: "1", image: geo, front, flipped: false, solved: false },
        { id: "5", image: oil, front, flipped: false, solved: false },
        { id: "6", image: nuclear, front, flipped: false, solved: false },
        { id: "6", image: nuclear, front, flipped: false, solved: false },
        { id: "5", image: oil, front, flipped: false, solved: false },
        { id: "2", image: water, front, flipped: false, solved: false },
        { id: "3", image: solar, front, flipped: false, solved: false },
        { id: "4", image: wind, front, flipped: false, solved: false },
        { id: "1", image: geo, front, flipped: false, solved: false },
        { id: "2", image: water, front, flipped: false, solved: false },
        { id: "3", image: solar, front, flipped: false, solved: false },
    ]);

    const showingCards =
        showtext === 3 ? (
            <div style={{ marginTop:"-15vh", marginLeft:"3vw" }}>
                {cards.map(({ id, image }, index) => {
                    return (
                            <MemoryCardsComponent id={id} image={image} front = {front} />
                    );
                })}
            </div>
        ) : (
            <div> </div>
        );

    const buttonBack = (
        <div style={{ bottom: "38px", left: "-38px", position: "fixed" }}>
            <FancyButton onClick={decrementCount} version="red" className="backbutton" active={showtext > 1}>
                Zurück
            </FancyButton>
        </div>
    );
    const buttonNext = (
        <div style={{ bottom: "38px", right: "38px", position: "fixed" }}>
            <FancyButton onClick={incrementCount} version="green" className="nextbutton" active={showtext < maxSlides}>
                Weiter
            </FancyButton>
        </div>
    );

    const buttonEnd = (
        <Link to="/Vorlagen/Endscreen">
            <div style={{ bottom: "38px", right: "38px", position: "fixed" }}>
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

    return (
        <>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    {sdgTitle} <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div style={textBox}>
                <p className="headertext">
                    <b>{header[showtext]}</b>
                </p>{" "}
                <br />
                <p className="texttext">
                    <p>{text[showtext]}</p>
                </p>{" "}
            </div>
            {buttonBack}
            {buttonNext}
            {buttonEnd}
            {showingCards}
        </>
    );
};
