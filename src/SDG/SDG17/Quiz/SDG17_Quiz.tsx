// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
import * as React from "react";
import { Link } from "react-router-dom";
import { InfotextButton } from "../../../Components/Buttons/InfotextButton";
import { TextProps } from "../../../Interfaces/SDG";
import Logo17 from "../../../SDGLogos/Goal-SDG17.png";

export const SDG17_Quiz: TextProps = {
    sdgNumber: 17,
    sdgTitle: "Leiterspiel aller SDGs",
    sdg: "SDG17",
    logo: Logo17,
    header: {
        1: "Einleitung",
        2: "Spielanleitung",
        3: "",
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
            <div style={{ margin: "auto", display: "block", width: "40%" }}>
                <Link to="/SDG17/QuizÜbersicht">
                    <InfotextButton version="green">Zu der Übersicht</InfotextButton>
                </Link>
            </div>
        ),
    },
};
