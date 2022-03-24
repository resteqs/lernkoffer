// eslint-disable-next-line react/prefer-stateless-function
import * as React from "react";
import { Link } from "react-router-dom";
import { InfotextButton } from "../../../../Components/Buttons/InfotextButton";
import { TextProps } from "../../../../Interfaces/SDG";
import Logo from "../../../../SDGLogos/Goal-SDG13.png";

export const bicycle: TextProps = {
    sdgNumber: 13,
    sdgTitle: "Suchspiel",
    sdg: "SDG13",
    logo: Logo,
    header: {
        1: "Fahrradfahrer",
        2: "Fahrradfahrer",
    },
    text: {
        1: (
            <div>
                Er stößt etwa 21g CO<sub>2</sub> pro Kilometer aus, was mehr als zehnmal weniger ist als ein Auto!
                Außerdem ist es gesund, Fahrrad zu fahren und hilft, den Lärm in den Städten zu reduzieren. Wenn du Geld
                sparen willst, sollte ein Fahrrad deine Wahl sein, da die Nutzungskosten nur 10 Cent pro gefahrenen
                Kilometer betragen. Beim Auto liegt der Preis zwischen 40 und 140 Cent!
            </div>
        ),
        2: (
            <div style={{ textAlign: "center", marginTop: "10vh" }}>
                <Link to="/SDG13/Spiel1">
                    <InfotextButton version="green">Zürück zum Tippspiel</InfotextButton>
                </Link>
            </div>
        ),
    },
};
