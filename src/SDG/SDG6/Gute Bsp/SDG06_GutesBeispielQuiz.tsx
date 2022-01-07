/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/filename-case */

import * as React from "react";
import { Quiz3OProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG06.png";

export const SDG06_GutesBeispielQuiz: Quiz3OProps = {
    sdgNumber: 6,
    sdgTitle: "Aufgaben/Fragen für SDG 06 nach den Steckbriefen",
    sdg: "SDG06",
    logo: Logo,
    tile: { 6: "Fallen euch Vor- und Nachteile von den Projekten ein?" },
    text: { 6: <div> </div> },
    question: { 
        1: "Welches Tier hatte Beth Koigi als Vorbild für ihr Projekt?",
        2: "Was macht die „Water Box“ („Wasser Box“)?",
        3: "Wie denken Matt Damon und Gary White, dass sie das Problem des Wassermangels lösen können, ohne den Menschen selbst einen Zugang zu sauberem Wasser zu ermöglichen?",
        4: "Warum ist es so wichtig, dass wir sofort anfangen Wasser zu recyceln (also zu säubern und wieder her zu nehmen)?",
        5: "Wie viel kostet eine Blaue Box pro Monat?",
    },

    buttonLeftContent: {
        1: <p style = {{ fontSize:"65px" }}>Nebeltrinker-Käfer</p>,
        2: <p style = {{ fontSize:"65px" }}>zieht Wasser aus der Luft</p>,
        3: <p style = {{ fontSize:"50px" }}>sie vergeben Kredite</p>,
        4: <p style = {{ fontSize:"50px" }}>weil das Wasser seltsam schmeck</p>,
        5: <p style = {{ fontSize:"65px" }}>2,66 Euro</p>,
    },

    buttonMiddleContent: {
        1: <p style = {{ fontSize:"65px" }}>Löwe</p>,
        2: <p style = {{ fontSize:"65px" }}>lässt Blumen wachsen</p>,
        3: <p style = {{ fontSize:"50px" }}>sie ermöglichen einen direkten Zugang zu Wasser</p>,
        4: <p style = {{ fontSize:"50px" }}>weil es in ein paar Jahren nicht mehr genug Wasser für alle geben wird</p>,
        5: <p style = {{ fontSize:"65px" }}>5,75 Euro</p>,
    },

    buttonRightContent: {
        1: <p style = {{ fontSize:"65px" }}>Fisch</p>,
        2: <p style = {{ fontSize:"65px" }}>sie filtert Wasser</p>,
        3: <p style = {{ fontSize:"50px" }}>sie bauen Brunnen</p>,
        4: <p style = {{ fontSize:"50px" }}>weil sie ihre Pflanzen gießen wollen</p>,
        5: <p style = {{ fontSize:"65px" }}>50 Euro</p>,
    },

    answerNumbersLeft: {
        1: "Richtig",
        2: "Falsch",
        3: "Richtig",
        4: "Falsch",
        5: "Falsch",
    },

    answerNumbersMiddle: {
        1: "Falsch",
        2: "Falsch",
        3: "Falsch",
        4: "Richtig",
        5: "Richtig",
    },

    answerNumbersRight: {
        1: "Falsch",
        2: "Richtig",
        3: "Falsch",
        4: "Falsch",
        5: "Falsch",
    },

    explanation: {
        1: "Nebeltrinker-Käfer ist die richtige Antwort",
        2: "sie filtert Wasser ist die richtige Antwort",
        3: "sie vergeben Kredit ist die richtige Antwort",
        4: "weil es in ein paar Jahren nicht mehr genug Wasser für alle geben wird ist die richtige Antwort",
        5: "5,75 Euro ist die richtige Antwort ",
    },

    isQuizActive: { 
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: false,
    },

};
