// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG10.png";
import "../sdg10.css";

export const SDG10_GutesBeispiel: TextProps = {
    sdgNumber: 10,
    sdgTitle: "#BlackLivesMatter",
    sdg: "SDG10",
    logo: Logo,
    header: {
        1: " Allgemeine Informationen",
        2: "Ziele: ",
        3: "Leitlinien: Black lives matter will...",
        4: "Leitlinien: Black lives matter will...",
        5: "Aufgabe",
        6: "Aufgabe", 
        7: "Lösung", 
    },

    text: {
        1: (
            <div>
                <ul>
                    <li>
                        {" "}
                        <p style={{ textDecoration: "underline" }} className="Kursiv">
                            {" "}
                            Name:{" "}
                        </p>{" "}
                        Black Lives Matter (dt.: Schwarze Leben zählen), #BlackLivesMatter, BLM{" "}
                    </li>

                    <li style={{ marginTop: "60px" }}>
                        {" "}
                        <p style={{ textDecoration: "underline" }} className="Kursiv">
                            {" "}
                            Gründung:{" "}
                        </p>{" "}
                        Sommer 2013 durch Alicia Garza, Patrisse Cullors und Opal Tometi{" "}
                    </li>

                    <li style={{ marginTop: "60px" }}>
                        {" "}
                        <p style={{ textDecoration: "underline" }} className="Kursiv">
                            {" "}
                            Verbreitung:{" "}
                        </p>{" "}
                        weltweit, besonders in den USA, Großbritannien und Kanada{" "}
                    </li>

                    <li style={{ marginTop: "60px" }}>
                        {" "}
                        <p style={{ textDecoration: "underline" }} className="Kursiv">
                            {" "}
                            Mittel zur Verbreitung und Erreichung der Ziele:{" "}
                        </p>{" "}
                        Soziale Medien, Hashtags (#), Proteste, Demonstrationen, Leitsätze{" "}
                    </li>
                </ul>
            </div>
        ),
        2: (
            <div>
                <ul>
                    <li> - Überlegenheit der Menschen mit weißer Hautfarbe beenden </li>
                    <li style={{ marginTop: "20px" }}>
                        {" "}
                        - Gewalt durch den Staat und die Bürgerwehr (nicht staatliche Zusammenschlüsse von Bürgern, um
                        sich selbst und andere vor Straftaten zu schützen) gegen die Gemeinden der schwarzen Bevölkerung
                        verhindern und bekämpfen
                    </li>
                    <li style={{ marginTop: "20px" }}>
                        {" "}
                        - Schwarzen Menschen die Möglichkeit geben, ihre Fantasien auszuleben und innovative (=
                        neuartige, einfallsreiche) Ideen umzusetzen
                    </li>
                    <li style={{ marginTop: "20px" }}>
                        {" "}
                        - die Freude von Menschen mit schwarzer Hautfarbe in den Mittelpunkt stellen {"=>"} sofortige
                        Verbesserungen im Leben der schwarzen Bevölkerung erreichen
                    </li>
                </ul>
            </div>
        ),
        3: (
            <div>
                <ul>
                    <li>
                        {" "}
                        <p style={{ textDecoration: "underline" }}> … sich ausdehnen: </p> so viele Menschen wie möglich
                        erreichen, sowie über die Grenzen des eigenen Landes hinausgehen
                    </li>
                    <li style={{ marginTop: "60px" }}>
                        {" "}
                        <p style={{ textDecoration: "underline" }}> … unterstützen: </p> alle Menschen ohne Ausnahme;
                        jeder Sexualität (also für alle, egal, wen sie lieben) und jeden Geschlechts, mit Behinderung,
                        ohne Papiere (Personen, die ohne Aufenthaltserlaubnis in einem Land leben), mit Vorstrafen und
                        besonders diese, welche innerhalb der schwarzen Befreiungsbewegungen benachteiligt wurden
                    </li>
                </ul>
            </div>
        ),
        4: (
            <div>
                <ul>
                    <li style={{ marginTop: "60px" }}>
                        {" "}
                        <p style={{ textDecoration: "underline" }}> … tätig sein </p> damit in unserer Welt die Leben
                        schwarzer Menschen nicht mehr systematisch unterdrückt werden{" "}
                    </li>
                    <li style={{ marginTop: "60px" }}>
                        {" "}
                        <p style={{ textDecoration: "underline" }}> … Gewissheit geben: </p> für Menschlichkeit,
                        Beiträge zur Gesellschaft und Widerstandsfähigkeit gegen tödliche Unterdrückung{" "}
                    </li>
                </ul>
            </div>
        ),
        5: (
            <div>
                {" "}
                Auf der nächsten Seite werdet ihr einen kurzen Text über BLM lesen. Dabei haben sich 3 Fehler eingeschlichen:
                findet sie und wenn ihr sie gefunden habt tippt auf Weiter, dort findet ihr die Lösung.
            </div>
        ),
        6: (
            <div>
                {" "}
                Die Organisation Black Lives Matter wurde im Sommer 2014 gegründet. Sie ist auf der ganzen Welt
                aktiv und möchte dabei auf die Probleme der schwarzen Bevölkerung aufmerksam machen. Soziale Medien
                werden jedoch nicht von ihnen benutzt, um ihre Botschaft zu verbreiten. Das Ziel der Bewegung ist
                das Leben schwarzer Menschen zu verbessern. BLM will viele Menschen unterstützen, zum Beispiel auch
                Menschen ohne Papiere, die ohne Stifte und Hefte  in einem Land leben.{" "}
            </div>
        ),
        7: <div> 
            <ul>
                <li style={{ marginTop: "90px" }}> Die Organisation Black Lives Matter wurde im Sommer 2013 gegründet... </li>
                <li style={{ marginTop: "90px" }}> ...Soziale Medien werden viel von ihnen benutzt...</li>
                <li style={{ marginTop: "90px" }}> ... BLM will viele Menschen unterstützen, zum Beispiel auch Menschen ohne Papiere, die ohne Aufenthaltserlaubnis in einem Land leben.</li>
            </ul>
        </div>
    },
};
