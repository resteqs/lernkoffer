// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG09.png";
import Schaukel from "../Freie Arbeit/Media/Schaukel.jpg";
import Werkstatt from "../Freie Arbeit/Media/Werkstatt.jpg";

export const SDG10_FreieArbeit: TextProps = {
    sdgNumber: 10,
    sdgTitle: "Spielplatz für alle",
    sdg: "SDG10",
    logo: Logo,
    header: {
        1: " Einleitung",
        2: "Aufgabe",
        3: "Aufgabe",
        4: "Ende",
        5: "Schaukel für Rollstuhlfahrer:innen",
        6: "Eine Werkstatt, um Dinge zu bauen oder reparieren", 
        7: "Ende", 

    },

    text: {
        1: (
            <div>
                {" "}
                Viele Kinder gehen in ihrer Freizeit gerne auf einen Spielplatz oder spielen einfach so mit Freunden.
                Aber nicht jedes Kind kann auf so einem gemeinsamen Spielplatz auch spielen. Das ist nicht gerecht,
                oder? Stelle dir einmal vor, du sitzt in einem Rollstuhl. Alle deine Freunde haben Spaß beim Schaukeln,
                aber du kannst nicht mitmachen, sondern nur zusehen. Nachdem das niemand schön findet, sollten
                öffentliche Plätze (Orte, zu denen jeder Mensch gehen kann) für jeden gleich gut zu besuchen sein.
            </div>
        ),
        2: (
            <div>
                Überlege dir, wie ein Spielplatz in deiner Vorstellung aussehen sollte, damit wirklich jeder Spaß haben
                kann. Ihr könnt diese Aufgabe allein oder auch in der Gruppe lösen. Eure Ideen könnt ihr auch auf ganz
                verschiedene Arten sammeln. Entweder ihr setzt euch in einem Kreis zusammen und redet über eure
                Vorstellungen und entwickelt sie vielleicht zusammen weiter, oder ihr malt Plakate und erklärt diese den
                anderen. Wer möchte, kann natürlich auch Dinge basteln und diese dann vorstellen. Wer weiß, vielleicht
                fällt euch ja ein neues Spielzeug ein?
            </div>
        ),
        3: (
            <div>
                Wie immer ist es natürlich wichtig, dass niemand ausgelacht wird, wenn er/sie eine Idee oder ein Plakat
                vorstellt und es wird auch niemand gezwungen, etwas zu zeigen.
            </div>
        ),
        4: (
            <div>
                {" "}
                Einige gute Ideen, um Spielplätze für alle gut nutzbar zu machen, gibt es schon. Wenn du möchtest,
                kannst du dir, wenn du auf Weiter klickst, ein paar Bilder von Lösungen ansehen.{" "}
            </div>
        ),
        5: <div> <img style= {{ marginLeft: "500px",  height: "700px" }} src= {Schaukel} alt="" /> </div>,
        6: <div> <img style= {{ marginLeft: "700px", marginTop: "200px" ,   height: "400px" }} src= {Werkstatt} alt="" /> </div>,
        7: (
            <div>
                {" "}
                Wenn euch auffällt, dass ihr im Dorf oder der Gemeinde vielleicht noch einige Veränderungen vornehmen
                müsstet, damit alle einen Spielplatz (oder jeden anderen öffentlichen Ort) ohne Probleme nutzen können,
                solltet ihr einmal mit euren Eltern, Lehrer:innen oder sogar Politiker:innen reden. Wichtig hierbei ist,
                dass ihr freundlich bleibt und versucht euch auf eine Lösung zu einigen oder ein Problem zu erklären,
                ohne Gewalt anzuwenden{" "}
            </div>
        ),
    },
};
