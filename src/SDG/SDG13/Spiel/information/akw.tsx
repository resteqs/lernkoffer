// eslint-disable-next-line react/prefer-stateless-function
import * as React from "react";
import { Link } from "react-router-dom";
import { InfotextButton } from "../../../../Components/Buttons/InfotextButton";
import { TextProps } from "../../../../Interfaces/SDG";
import Logo from "../../../../SDGLogos/Goal-SDG13.png";

export const akw: TextProps = {
    sdgNumber: 13,
    sdgTitle: "Suchspiel",
    sdg: "SDG13",
    logo: Logo,
    header: {
        1: "Atom-/Kernkraftwerk",
        2: "Atom-/Kernkraftwerk",
        3: "Atom-/Kernkraftwerk",
        4: "Atom-/Kernkraftwerk",
    },
    text: {
        1: (
            <p>
                Der Begriff &quot;Atomkraft&quot; wird oft negativ verwendet, aber es gibt wirklich einige positive
                Dinge über diese Art der Energieerzeugung zu sagen. Ein großer Teil der weltweit verbrauchten Energie
                ist bereits klimaneutral (2017 waren es 24,3%, Tendenz steigend), aber der Rest wird in Atomkraftwerken (der
                Anteil an der gesamten produzierten Energiemenge ist von Land zu Land sehr unterschiedlich, da es sowohl
                Länder wie Deutschland gibt, die versuchen, die Nutzung dieser Energie zu reduzieren, als auch Länder
                wie die USA, die ein großes Potenzial in der Atomkraft sehen) und Kohlekraftwerken erzeugt.{" "}
            </p>
        ),
        2: (
            <p>
                Ein Grund, warum die Kernenergie bis heute nicht verboten ist, obwohl es große und bekannte Katastrophen
                wie Fukushima und Tschernobyl gab, ist die Tatsache, dass sie keine Emissionen produziert. Aber die
                Menschen haben aus diesen Unfällen gelernt und so sind die Sicherheitsvorschriften höher als je zuvor.
                Trotzdem haben wir keine Ahnung, wie wir mit dem Atommüll umgehen sollen. Das größte Problem bei
                Kohlekraftwerken hingegen ist zweifelsohne die Menge der produzierten Emissionen von Gasen wie
                Kohlenstoffdioxid.{" "}
            </p>
        ),
        3: (
            <p>
                Aber warum nutzt man diese Technik trotzdem? Grundsätzlich sind Kohlekraftwerke immer noch im Einsatz,
                weil sie viel mehr Energie produzieren als jede andere Energiequelle und daher nicht so einfach ersetzt
                werden können.
            </p>
        ),
        4: (
            <div style={{ textAlign: "center", marginTop: "10vh" }}>
                <Link to="/SDG13/Spiel1">
                    <InfotextButton version="green">Zürück zum Tippspiel</InfotextButton>
                </Link>
            </div>
        ),
    },
};
