// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { Link } from "react-router-dom";
import { LogoButton } from "../../../Components/Buttons/LogoButton";
import { TextProps } from "../../../Interfaces/SDG";
import Logo1 from "../../../SDGLogos/Goal-SDG01.png";
import Logo2 from "../../../SDGLogos/Goal-SDG02.png";
import Logo3 from "../../../SDGLogos/Goal-SDG03.png";
import Logo4 from "../../../SDGLogos/Goal-SDG04.png";
import Logo5 from "../../../SDGLogos/Goal-SDG05.png";
import Logo6 from "../../../SDGLogos/Goal-SDG06.png";
import Logo7 from "../../../SDGLogos/Goal-SDG07.png";
import Logo8 from "../../../SDGLogos/Goal-SDG08.png";
import Logo9 from "../../../SDGLogos/Goal-SDG09.png";
import Logo10 from "../../../SDGLogos/Goal-SDG10.png";
import Logo11 from "../../../SDGLogos/Goal-SDG11.png";
import Logo12 from "../../../SDGLogos/Goal-SDG12.png";
import Logo13 from "../../../SDGLogos/Goal-SDG13.png";
import Logo14 from "../../../SDGLogos/Goal-SDG14.png";
import Logo15 from "../../../SDGLogos/Goal-SDG15.png";
import Logo16 from "../../../SDGLogos/Goal-SDG16.png";
import Logo17 from "../../../SDGLogos/Goal-SDG17.png";

export const SDG17_Übersicht: TextProps = {
    sdgNumber: 17,
    sdgTitle: "Leiterspiel aller SDGs",
    sdg: "SDG17",
    logo: Logo17,
    header: {
        1: "Einleitung",
        2: "Spielanleitung",
        3: "Zu den Quizzen",
    },

    text: {
        1: (
            <div>
                <p style={{ marginBottom: "50px" }}>
                    Im 17. Nachhaltigkeitsziel geht es darum, dass alle Ziele erreicht werden. Dies geht vor allem durch
                    die Zusammenarbeit der ganzen Bevölkerung auf allen Ebenen. Aber kennt ihr schon die einzelnen
                    Nachhaltigkeitsziele? Wenn ihr euch mit folgendem Brettspiel beschäftigt, könnt ihr diese besser
                    kennenlernen, indem ihr nacheinander zu den verschiedenen Zielen eine Frage beantwortet. Dies
                    funktioniert folgendermaßen:
                </p>{" "}
                <p>
                    Nehmt euch das Set mit den Spielfiguren, den Würfeln und das Spielfeld. Jede:r nimmt sich eine Figur
                    und stellt sie auf „Start“. Wenn ihr wollt, könnt ihr auch als Teams gegeneinander antreten statt
                    allein.{" "}
                </p>{" "}
            </div>
        ),
        2: (
            <p>
                Anschließend fängt eine Person an, würfelt und geht die entsprechende Anzahl an Feldern vor. Wenn ihr
                auf eines der farbigen Felder kommt, drückt auf dem Tablet auf das entsprechende Logo des
                Nachhaltigkeitsziels und euch werden mehrere Fragen dazu getstellt (beantwortet immer nur eine Frage und
                geht klickt dann auf den Button “Zurück zur Übersicht“, wenn ihr zur zweiten Frage direkt wollt, klickt
                einfach auf “Weiter“). Findet ihr die richtige Antwort, dürft ihr 3 Felder vorrücken, wenn nicht müsst
                ihr ein Feld zurück. Kommt ihr beim unteren Ende einer Leiter an, dürft ihr sie nach oben klettern zu
                dem Feld an dem sie endet. Wenn ihr bei dem oberen Ende eines blauen Wasserfalls steht, fällt ihr diesen
                herunter und müsst zum Feld zurück, an dem er endet. Wer als Erster das Ziel erreicht hat gewonnen.
            </p>
        ),
        3: (
            <div>
                <LogoButton URL="/SDG17/Quiz1" Logo={Logo1} />
                <LogoButton URL="/SDG17/Quiz2" Logo={Logo2} />
                <LogoButton URL="/SDG17/Quiz3" Logo={Logo3} />
                <LogoButton URL="/SDG17/Quiz4" Logo={Logo4} />
                <LogoButton URL="/SDG17/Quiz5" Logo={Logo5} />
                <LogoButton URL="/SDG17/Quiz6" Logo={Logo6} />
                <LogoButton URL="/SDG17/Quiz7" Logo={Logo7} />
                <LogoButton URL="/SDG17/Quiz8" Logo={Logo8} />
                <LogoButton URL="/SDG17/Quiz9" Logo={Logo9} />
                <LogoButton URL="/SDG17/Quiz10" Logo={Logo10} />
                <LogoButton URL="/SDG17/Quiz11" Logo={Logo11} />
                <LogoButton URL="/SDG17/Quiz12" Logo={Logo12} />
                <LogoButton URL="/SDG17/Quiz13" Logo={Logo13} />
                <LogoButton URL="/SDG17/Quiz14" Logo={Logo14} />
                <div style={{ marginLeft: "520px" }}>
                    <LogoButton URL="/SDG17/Quiz15" Logo={Logo15} />
                </div>
                <LogoButton URL="/SDG17/Quiz16" Logo={Logo16} />
                <LogoButton URL="/SDG17/Quiz17" Logo={Logo17} />
            </div>
        ),
    },
};
