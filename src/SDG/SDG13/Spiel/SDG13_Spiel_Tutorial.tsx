// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import { Link } from "react-router-dom";
import { InfotextButton } from "../../../Components/Buttons/InfotextButton";
import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG13.png";

export const SDG13_Spiel_Tutorial: TextProps = {
    sdgNumber: 13,
    sdgTitle: "Suchspiel",
    sdg: "SDG13",
    logo: Logo,
    header: {
        1: "Tutorial",
        2: "Tutorial",
        3: "Tutorial",
    },
    text: {
        1: (
            <div>
                In der Luft gibt es viele verschiedene Arten von Gasen, die man nicht immer sehen kann. Eines davon ist
                Kohlenstoffdioxid (auch CO<sub>2</sub> genannt). Wie du vielleicht weißt, fördert der hohe CO<sub>2</sub>-Gehalt den Klimawandel und gilt deshalb
                als Gefahr für unsere Umwelt.
            </div>
        ),
        2: (
            <div>
                Es wird oft diskutiert, wie man die produzierte Menge an CO<sub>2</sub> senken kann. In unserer heutigen
                Welt gibt es viele Dinge mit hohen Emissionen, aber auch einige mit geringen oder gar keinen Emissionen.
                Es gibt aber auch Objekte, die dieses Gas aus der Luft binden. Dadurch wird die Konzentration von
                schädlichen Gasen in der Luft verringert.
            </div>
        ),
        3: (
            <div>
                <p>
                    Kannst du erraten, welches Element welche Menge an Gasen produziert? Klicke es an und finde es
                    heraus.
                </p>
                <div style={{ textAlign: "center", marginTop: "10vh" }}>
                    <Link to="/SDG13/Spiel1">
                        <InfotextButton version="green">Zum Tippspiel</InfotextButton>
                    </Link>
                </div>
            </div>
        ),
    },
};
