// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG10.png";
import Tabelle from "./Media/Tabelle.png";
import Karte from "./Media/Karte.png";
import React from "react";

export const SDG10_Spiel: TextProps = {
    sdgNumber: 1,
    sdgTitle: "Kannst du das blind?",
    sdg: "SDG10",
    logo: Logo,
    header: {
        1: "Einstieg",
        2: "Einstieg",
        3: "Einstieg",
        4: "Überleitung",
        5: "Überleitung",
        6: "Überleitung",
        7: "Spielanleitung „Kannst du das blind?",
        8: "Spielanleitung „Kannst du das blind?",
        9: "Spielanleitung „Kannst du das blind?",
        10: "Spielanleitung „Kannst du das blind?",
        11: "Station 1 – Fühlen (max. 2 Punkte)",
        12: "Station 1 – Fühlen (max. 2 Punkte)",
        13: "Station 2 – Slalomlauf (max. 5 Punkte)",
        14: "Station 2 – Slalomlauf (max. 5 Punkte)",
        15: "Station 3 – Schreiben (max. 3 Punkte)",
        16: "Station 3 – Schreiben (max. 3 Punkte)",
        17: "Station 3 – Schreiben (max. 3 Punkte)",
        18: "Station 4 – Hindernis-Parkour (max. 5 Punkte)",
        19: "Station 4 – Hindernis-Parkour (max. 5 Punkte)",
        20: "Station 4 – Hindernis-Parkour (max. 5 Punkte)",
        21: "Station 4 – Hindernis-Parkour (max. 5 Punkte)",
        22: "Station 4 – Hindernis-Parkour (max. 5 Punkte)",
        23: "Station 4 – Hindernis-Parkour (max. 5 Punkte)",
        24: "Station 4 – Hindernis-Parkour (max. 5 Punkte)",
        25: "Schluss",
        26: "Schluss",
        27: "Schluss",
    },

    text: {
        1: <b>Jeder Mensch ist einzigartig. Wir sind alle unterschiedlich. Jede:r hat Stärken und Schwächen</b>,
        2: (
            <p>
                Überlegt gemeinsam, was mit diesen drei kurzen Sätzen gemeint ist. Inwiefern seid ihr selbst
                einzigartig? Wodurch unterscheidet ihr euch von euren Mitschüler:innen und eurer Lehrkraft? Was sind
                eure Stärken und Schwächen? Es reicht, wenn ihr pro Frage jeweils zwei bis drei Antworten habt. Notiert
                sie euch kurz und besprecht sie dann alle zusammen.
            </p>
        ),
        3: (
            <div>
                <p>
                    Anschließend wird euch vielleicht aufgefallen sein, dass es manchmal gleiche Antworten gab. Auch das
                    macht uns Menschen aus.
                </p>
                <p style={{ textAlign: "center", marginTop: "30px" }}>
                    <b>Wir haben alle Gemeinsamkeiten.</b>
                </p>
            </div>
        ),
        4: (
            <p>
                Leider ist es oft noch so, dass viele Menschen, die anders als der Großteil ihrer Mitmenschen sind,
                benachteiligt werden. Obwohl wir uns alle unterscheiden, haben manche mehr Probleme im Alltag als andere
                und werden unterschiedlich behandelt. Das kann dann daran liegen, dass sie eine andere Hautfarbe, eine
                andere Religion, eine andere Herkunft oder ein anderes Einkommen haben als die Menschen in ihrem Umfeld.
                Ein weiterer Grund für so eine Ungleichheit ist auch eine körperliche oder geistige Behinderung.{" "}
            </p>
        ),
        5: (
            <p>
                Wenn ein Mensch zum Beispiel seine Beine nicht bewegen kann, also diese gelähmt sind, braucht er einen
                Rollstuhl. Mit diesem kann man zwar auf geraden Flächen fahren, jedoch keine Treppen steigen. Trotzdem
                gibt es noch sehr viele Gebäude, die keinen Aufzug haben und somit es einer gelähmten Person nicht
                möglich machen in höhere Stockwerke zu fahren.
            </p>
        ),
        6: (
            <p>
                Blindsein ist ebenfalls eine körperliche Behinderung. Wie es ist, nichts sehen zu können und welche
                Schwierigkeiten es dabei gibt, könnt ihr im nächsten Spiel einmal selbst erleben
            </p>
        ),
        7: (
            <p>
                Findet euch in Zweier-Gruppen zusammen und immer eine Person bekommt die Augen verbunden (z.B. mit einem
                Schal oder einem Tuch). Geht dann sicher, dass diese Person nichts sieht. Sie ist nun „blind“ und sie
                wird die Aufgaben an den jeweiligen Stationen bewältigen. Die andere Person ist „sehend“ und hilft ihr
                jeweils immer auf dem Weg zu der nächsten Station (und auch bei den Stationen selbst). Außerdem trägt
                der/die „Sehende:r“ die Punkte in folgende Tabelle ein:
            </p>
        ),
        8: <img style={{ marginLeft: "200px", marginTop: "170px", width: "1500px" }} src={Tabelle} alt="Tabelle" />,
        9: (
            <div>
                <p>
                    Schreibt diese gemeinsam mit eurem Namen bitte auf ein Blatt ab und denkt daran, gleich nach jeder
                    Station die richtige Punkteanzahl reinzuschreiben!{" "}
                </p>
                <p>
                    Am besten wäre es auch, wenn bei jeder Station mindestens eine Person steht, die kontrolliert, dass
                    die Spielregeln eingehalten werden, am Ende aufräumt und euch die erreichte Punktezahl sagt.{" "}
                </p>
            </div>
        ),
        10: (
            <div>
                <p>
                    Jetzt geht es los! Pro Station darf jeweils ein Zweierteam spielen, wenn ihr fertig seid, geht an
                    die nächste freie Station. Ihr müsst keine Reihenfolge einhalten, solang ihr überall einmal wart.
                    Wenn ihr wollt, könnt ihr euch bei den Stationen abwechseln und die Augenbinde ab und zu vor der
                    nächsten Station tauschen. Sobald ihr alle Stationen habt, zählt ihr eure Punkte zusammen.{" "}
                </p>
                <p>Das sind die Stationen für das Spiel „Kannst du das blind?“: </p>
            </div>
        ),
        11: (
            <div>
                <p>
                    Legt ein Federmäppchen oder eine kleine Tasche auf den Tisch. In diesem sollten viele Stifte drin
                    sein, aber nur ein Radiergummi.{" "}
                </p>
                <p>
                    <p style={{ textDecoration: "underline" }}>Aufgabe für die „blinde“ Person: </p>Finde den
                    Radiergummi innerhalb einer Minute. Wenn du das schaffst, erhältst du 2 Punkte. Aber Achtung: Fallen
                    Stifte vom Tisch, erhältst du nur 1 Punkt.
                </p>
                <p>
                    <p style={{ textDecoration: "underline" }}>Aufgabe für die „sehende“ Person: </p>Verhindere das die
                    Stifte vom Tisch fallen, indem du sie auffängst oder stoppst bevor sie wegrollen.
                </p>
            </div>
        ),
        12: (
            <p>
                <p style={{ textDecoration: "underline" }}>Aufgabe für die Stationsaufsicht: </p>Stoppe die Zeit und
                beobachte, ob Stifte herunterfallen. Gib dem Team nach abgelaufener Zeit Bescheid wie viele Punkte sie
                erreicht haben. Anschließend kann es weitergehen und du bereitest die Station für das nächste Team vor
                (Stifte aufheben, alles wieder in das Federmäppchen).
            </p>
        ),
        13: (
            <div>
                <p>
                    Sucht euch einen größeren Platz, vielleicht einen Gang oder draußen eine ebene Wiese. Stellt nun
                    etwa fünf Stangen mit etwas Abstand in einer geraden Linie auf. Alternativ könnt ihr auch Stöcke in
                    die Wiese stecken (das darf aber nicht zu tief sein).{" "}
                </p>
                <p>
                    <p style={{ textDecoration: "underline" }}>Aufgabe für die Stationsaufsicht: </p>Stoppe die Zeit
                    (drei Minuten) und zähle die umgestoßenen Stangen. Am Ende kannst du dem Team die erreichte
                    Punktezahl sagen und ggf. die Stangen wieder aufheben.
                </p>
            </div>
        ),
        14: (
            <p>
                <p style={{ textDecoration: "underline" }}>Aufgabe für das Zweierteam: </p>Der/die „Sehende:r“ soll die
                „blinde“ Person für höchstens drei Minuten durch den Slalom lotsen. Dabei müsst ihr abwechselnd einmal
                links und einmal rechts um die Stangen herumgehen. Die „sehende“ Person darf den/die „Blinde:n“
                berühren, ihr beide jedoch nicht die Stangen. Wenn ihr durchkommt, ohne eine Stange zu berühren, bekommt
                ihr 5 Punkte. Pro berührte Stange wird ein Punkt abgezogen (also wenn ihr eine Stange berührt, sind es 4
                Punkte, bei zwei Stangen 3 Punkte und so weiter). Wenn ihr eine Stange komplett umwerft, werden sogar
                drei Punkte abgezogen.
            </p>
        ),
        15: (
            <div>
                <p>
                    Legt Papier und Stifte auf einen Tisch. Stellt vor den Tisch einen Stuhl hin. Eine Person muss am
                    Tisch stehen und eine Uhr haben.{" "}
                </p>
                <p>
                    <p style={{ textDecoration: "underline" }}>Aufgabe für die „blinde“ Person: </p>Setze dich auf den
                    Stuhl, dein:e Partner:in darf dir helfen. Wenn die Zeit läuft, nimm den Stift und schreibe ein Wort
                    mit mindestens vier Buchstaben auf das Papier vor dir. Du darfst es nicht laut aussprechen oder
                    beschreiben, denn dein:e Partner:in muss es später versuchen zu lesen. Sobald du das Wort fertig
                    geschrieben hast, sagst du Bescheid. Wenn dein:e Partner:in anfängt das Wort zu erraten, darfst du
                    nur mit Ja oder Nein antworten.
                </p>
            </div>
        ),
        16: (
            <p>
                <p style={{ textDecoration: "underline" }}>Aufgabe für die „sehende“ Person: </p>Hilf der „blinden“
                Person sich auf den Stuhl zu setzen. Wenn die Minute zum Schreiben beginnt, musst du wegschauen. Ist die
                Zeit um oder das Wort fertig geschrieben, darfst du nun wieder zum Tisch schauen. Du hast eine Minute
                Zeit, das Wort zu erraten. Wenn das Wort richtig innerhalb einer Minute erraten wurde, erhaltet ihr 3
                Punkte.{" "}
            </p>
        ),
        17: (
            <p>
                <p style={{ textDecoration: "underline" }}>Aufgabe für die Stationsaufsicht: </p>Du hast die Aufgabe,
                zweimal die Zeit zu stoppen: das erste Mal eine Minute, wenn die „blinde“ Person schreibt, das zweite
                Mal, wenn die „sehende“ Person es errät. Zum Schluss gibst du die erreichte Punktzahl bekannt und legst
                für das nächste Team ein neues Blatt hin (oder drehst das alte Blatt um).
            </p>
        ),
        18: (
            <div>
                Hier braucht ihr wie beim Slalomlauf eine größere Fläche und viel Material:
                <p style={{ marginLeft: "50px" }}> - 2 stabile Kisten zum Draufstellen</p>
                <p style={{ marginLeft: "50px" }}> - 2 lange Seile (oder mehrere kürzere) + 2 kürzere Seile</p>
                <p style={{ marginLeft: "50px" }}> - 2 größere, weiche Bälle (mindestens so groß wie ein Fußball)</p>
                <p style={{ marginLeft: "50px" }}> - 1 leerer, leichter Eimer </p>
                <p style={{ marginLeft: "50px" }}> - 1 Stock</p>
            </div>
        ),
        19: (
            <p>
                Legt zuerst rechts und links mit ungefähr 1,5m Abstand eure Seile auf den Boden. Dabei könnt ihr auch
                Kurven legen, denn sie markieren euren Weg. Neben den Seilen sollte ebenfalls noch etwas Platz sein.
                Legt noch jeweils ein Seil am Anfang und am Ende des Weges hin, damit Start und Ziel gekennzeichnet
                wird. Als erstes Hindernis kommt nach ungefähr drei Schritten eine der beiden Kisten auf den Boden. Dann
                stellt sich mit etwas Abstand zur Kiste eine Person mit einem Ball links neben den Weg. In die Mitte des
                Weges kommt der Eimer. Danach stellt sich wieder mit Abstand, dieses Mal rechts neben den Weg, eine
                weitere Person mit dem zweiten Ball hin. Zum Schluss kommt wieder eine Kiste auf den Boden als letztes
                Hindernis.{" "}
            </p>
        ),
        20: <img style={{ width: "800px", marginLeft: "550px" }} src={Karte} alt="Karte" />,
        21: (
            <p>
                <p style={{ textDecoration: "underline" }}>Aufgabe für die „blinde“ Person: </p>Du bekommst einen Stock
                als Hilfe (das ist auch ein Hilfsmittel für blinde Menschen). Mit diesem darfst du den Weg ertasten und
                den Eimer umwerfen, du kannst aber auch mit deinen Händen um dich tasten.
            </p>
        ),
        22: (
            <div>
                Dein Hindernis-Parkour:
                <p>
                    Beginne beim Start-Seil und gehe den Weg entlang. Steige dann über die erste Kiste und weiche dem
                    Ball, der von links kommt, aus (er darf deine Füße nicht berühren). Als nächstes wirfst du mit
                    deinem Stock den Eimer um und weichst dem Ball von rechts aus. Steige nun über die letzte Kiste und
                    erreiche zum Schluss das Ziel-Seil.{" "}
                </p>
                <p>
                    Wenn du das alles geschafft hast und den Weg nicht verlassen hast (innerhalb der zwei Seile
                    geblieben bist), erwarten dich 5 Punkte. Für jedes Hindernis, was du nicht schaffst, verlierst du 1
                    Punkt.
                </p>
            </div>
        ),
        23: (
            <p>
                <p style={{ textDecoration: "underline" }}>Aufgabe für die „sehende“ Person: </p>Achtung! Du darfst die
                „blinde“ Person nicht berühren und musst außerhalb des Weges bleiben. Zur Hilfe kannst du ihm/ihr aber
                beschreiben, wo was steht. Ganz wichtig wird deine Hilfe dann bei den Bällen. Diese werden von den
                außenstehenden Personen über den Boden auf deine:n Partner:in zugerollt.
            </p>
        ),
        24: (
            <p>
                <p style={{ textDecoration: "underline" }}>
                    Aufgaben für die Stationsaufsicht + die zwei Personen mit den Bällen:{" "}
                </p>
                Als Aufsichtsperson kontrollierst du, ob jedes Hindernis geschafft wurde und zählst die Punkte. Außerdem
                ist es wichtig, dass du am Ende wieder alles aufbaust und hinrichtest, sodass keine Unfälle passieren.
                Als Personen mit einem Ball solltet ihr diesen nicht zu fest auf die Beine der „blinden“ Person zurollen
                (nicht werfen!). Am besten wartet ihr auf darauf, dass die Kiste davor sicher überwunden wurde.{" "}
            </p>
        ),
        25: (
            <div>
                <p>
                    Sind alle Teams einmal dran gewesen? Super! Besprecht eure Erlebnisse und überlegt, was ihr
                    besonders schwer oder einfach fandet.
                </p>
                <p>
                    Wenn ihr „blind“ wart, habt ihr wahrscheinlich festgestellt, dass andere Sinne wie das Fühlen
                    wichtiger wurden. Dadurch konntet ihr auch einige Dinge alleine machen. Manchmal habt ihr aber
                    bestimmt auch Hilfe gebraucht.{" "}
                </p>
            </div>
        ),
        26: (
            <div>
                Diese Tipps könnt ihr beachten, wenn ihr einer Person mit Sehbehinderung helfen wollt:
                <p style={{ marginLeft: "50px" }}>
                    1. Sprich die Person zuerst an und berühre sie nicht einfach. Das kann erschreckend sein.
                </p>
                <p style={{ marginLeft: "50px" }}>2. Stelle dich vor und frage, ob du helfen kannst.</p>
                <p style={{ marginLeft: "50px" }}>
                    3. Wenn die Person keine Hilfe braucht/will, akzeptiere das und verabschiede dich.
                </p>
                <p style={{ marginLeft: "50px" }}>
                    4. Wird deine Hilfe benötigt, zieh oder schiebe die Person nicht, sondern mache es wie bei Schritt 5
                    und 6 beschrieben.{" "}
                </p>
            </div>
        ),
        27: (
            <div>
                <p style={{ marginLeft: "50px" }}>
                    5. Wenn der blinde Mensch einen Langstock zum Tasten hat, stelle dich auf die andere Seite.
                </p>
                <p style={{ marginLeft: "50px" }}>
                    6. Gehe einen Schritt vor die Person und zeige ihr, wo sie sich an deinem Arm festhalten kann.
                </p>
                <p style={{ marginLeft: "50px" }}>
                    7. Bei Treppen, Türen oder anderen Hindernissen auf dem Boden, gebe der Person Bescheid. Bei Treppen
                    hilft es außerdem die erste und letzte Stufe anzukündigen, sowie die Richtung (nach oben oder nach
                    unten).
                </p>
            </div>
        ),
    },
};
