
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
        1: "In der Luft gibt es viele verschiedene Arten von Gasen, die man nicht immer sehen kann. Eines davon ist Kohlenstoffdioxid. Wie du vielleicht weißt, fördert der hohe CO2-Gehalt den Klimawandel und gilt deshalb als Gefahr für unsere Umwelt.",
        2: "Es wird oft diskutiert, wie man die produzierte Menge an CO2 senken kann. In unserer heutigen Welt gibt es viele Dinge mit hohen Emissionen, aber auch einige mit geringen oder gar keinen Emissionen. Es gibt aber auch Objekte, die dieses Gas aus der Luft binden. Dadurch wird die Konzentration von schädlichen Gasen in der Luft verringert.",
        3: (
        <div>
            <p>Kannst du erraten, welches Element welche Menge an Gasen produziert? Klicke sie an und finde es heraus.</p>
            <div style={{ textAlign: "center", marginTop: "10vh"  }}>
                <Link to = "/">
                    <InfotextButton version="green">
                        Zum Tippspiel
                    </InfotextButton>
                </Link>
            </div>
        </div>
        ),
    }
}