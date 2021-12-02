// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable eslint-comments/disable-enable-pair */
// eslint-disable-next-line eslint-comments/no-duplicate-disable
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */
/* eslint-disable unicorn/filename-case */


import * as React from "react";
import renderer from "react-dom";
import { BrowserRouter, Link } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import infotextbutton from "../../../styles/Infotextbutton.module.css" ;
import "../../../styles/colour_sdgs.css";
import "../../../styles/infotext.css";
import Logo from "../../../SDGLogos/Goal-SDG04.png";
import "../Spiel/sdg4.css";





export const SDG04_Infotext = (): JSX.Element => {
    // eslint-disable-next-line prefer-const
    let [showtext, setText] = React.useState(1);
    const muiTheme = createMuiTheme({});
    const sdg = "SDG04";
   

    const text = {
        1: <div><p><b>“inklusive, gleichberechtigte und hochwertige Bildung gewährleisten und Möglichkeiten lebenslangen Lernens für alle fördern”</b></p></div>,
        2: <div><p className="Infotext04">Bildung ermöglicht Menschen den gesellschaftlichen Aufstieg. Damit bekommen sie mehr Vorteile, z.B. im Arbeitsleben und deshalb ist Bildung sehr wichtig, um der Armut zu entkommen. Sie hilft, Ungleichheiten zu verringern und die Gleichstellung der Geschlechter zu erreichen. Außerdem ist sie entscheidend für die Förderung von Toleranz (= Offenheit, frei von Vorurteilen) und friedlicheren Gesellschaften. In den letzten zehn Jahren wurden große Fortschritte erzielt: es gibt einen besseren Zugang zu Bildung und mehr Kinder, besonders Mädchen, können in die Schule gehen. Dennoch waren im Jahr 2018 immer noch rund 258 Millionen Kinder und Jugendliche nicht eingeschult - fast jede:r Fünfte auf der ganzen Welt in diesem Alter.</p></div>,
        3: <div><p className="Infotext04">Es gibt noch sehr viele Menschen, die wenig Bildung haben und das obwohl immer mehr Einschulungen jedes Jahr stattfinden. Rund 773 Millionen Erwachsene konnten 2018 nicht lesen und schreiben, zwei Drittel davon waren Frauen. Ein weiteres Problem ist die Tatsache, dass Schulen oft schließen müssen oder nicht alles anbieten, was Schüler haben sollten. So fehlt es beispielsweise an grundlegenden Dingen, wie Trinkwasser, und an Geld, Strom, Computern oder Internet. In jedem dritten sogenannten „Entwicklungsland“ (ein Land, das sich noch weiterentwickeln soll, damit es den Einwohner:innen dort besser geht) haben Frauen und Mädchen es schwer, gebildet zu werden. Daher können sie nicht so viele Fähigkeiten erlernen wie Jungen und haben eingeschränkte Chancen auf dem Arbeitsmarkt.</p></div>,
        4: <div><p className="Infotext04">Obwohl einige Länder hoch digitalisiert sind (also Strom, Computer, Internet und andere technische Dingen besitzen), gibt es auch solche, die kaum vernetzt sind. Dieser Unterschied zwischen den Ländern mit digitalen Medien und ohne muss verkleinert werden, damit alle die gleichen Chancen auf eine hochwertige Bildung haben. Ansonsten verschlimmern sich die Ungleichheiten.</p></div>,
        5: <div><p className="Infotext04">Es ist wichtig, dass deine Regierung Bildung als bedeutsam ansieht, sowohl in der Politik als auch im wirklichen Leben. Wenn du die Möglichkeit hast, mit einem Politiker darüber zu sprechen oder ihn auf andere friedliche Weise zu erreichen (z. B. durch Abstimmungen, Wahlen, Petitionen usw.), solltest du sie nutzen. Wenn du wirklich erfolgreich sein willst, denke daran, eine feste Zusage von der verantwortlichen Person zu bekommen. Im Allgemeinen ist es ein guter Anfang, für eine kostenlose Grundschulbildung für alle zu kämpfen, auch für benachteiligte Gruppen.</p></div>,
    };
    const header = {
        1: <div><p> </p></div>,
        2: <div><p>Warum?</p></div>,
        3: <div><p>Was ist das Problem?</p></div>,
        4: <div><p>Wie ist dieses Thema mit uns verbunden?</p></div>,
        5: <div><p>Was können wir tun?</p></div>,
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
    // eslint-disable-next-line prefer-const
    buttonBack =
        showtext >= 2 ? (
            <div className="backbutton"> <button className= {infotextbutton.pushable} type = "button" onClick={decrementCount} >
            <span className={infotextbutton.shadow} />
            <span className={infotextbutton.edge} />
            <span className={infotextbutton.front}>
               <p className={infotextbutton.buttontext}>Zurück</p> 
            </span>
            </button></div>
           
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
    // eslint-disable-next-line prefer-const
    buttonNext =
        showtext < 5 ? (
            <div className="nextbutton"> <button className= {infotextbutton.pushable} type = "button" onClick={incrementCount}>
            <span className={infotextbutton.shadow} />
            <span className={infotextbutton.edgegreen} />
            <span className={infotextbutton.front} style = { { backgroundColor: "green" } } >
                <p className={infotextbutton.buttontext}>Weiter</p> 
            </span>
            </button></div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
        // eslint-disable-next-line prefer-const
        buttonEnd =
        showtext === 5? (
            <div className="nextbutton">
               <BrowserRouter> <Link to="/Vorlagen/Endscreen">
                    {" "}
                    <button className={infotextbutton.pushable} type="button">
                        <span className={infotextbutton.shadow} />
                        <span className={infotextbutton.edgegreen} />
                        <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                            <p className={infotextbutton.buttontext}>Weiter </p>
                        </span>
                    </button>
                </Link>{" "}</BrowserRouter>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Hochwertige Bildung <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            <div className="infotextbox">
                <p className="headertext">
                    <b>{header[showtext]}</b>
                </p>{" "}
                <br />
                <p className="bodytext"> {text[showtext]} </p>
            </div>
            {buttonBack}
            {buttonNext}
            {buttonEnd}
            <ThemeProvider theme={muiTheme}><AudioPlayer  src="https://github.com/resteqs/lernkoffer/blob/Lernkoffer/src/SDG/SDG4/sdg4.mp3" /> </ThemeProvider>
        </div>
    );
};
renderer.render(<SDG04_Infotext />, document.getElementById("root"));
