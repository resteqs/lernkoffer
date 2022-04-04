// eslint-disable-next-line react/prefer-stateless-function
import * as React from "react";
import { Link } from "react-router-dom";
import { InfotextButton } from "../../../../Components/Buttons/InfotextButton";
import { TextProps } from "../../../../Interfaces/SDG";
import Logo from "../../../../SDGLogos/Goal-SDG13.png";

export const cow: TextProps = {
    sdgNumber: 13,
    sdgTitle: "Suchspiel",
    sdg: "SDG13",
    logo: Logo,
    header: {
        1: "Kuh",
        2: "Kuh",
    },
    text: {
        1: (
            <div>
                Wusstest du, dass Kühe Methan rülpsen und furzen? Dieses Gas ist für unser Klima viel schlimmer als CO
                <sub>2</sub>. In Zahlen bedeutet das, dass über 100 Kilogramm Methan dem CO<sub>2</sub>-Ausstoß von
                18.000 gefahrenen Kilometern mit einem Auto entspricht. Außerdem fressen Kühe Soja, was zur Abholzung des
                Regenwaldes führt, da das Soja irgendwo wachsen muss. Ein oft vorgebrachtes Argument ist jedoch, dass der
                Anteil des Methans, der durch die Tierhaltung verursacht wird, nur 2% des gesamten Treibhauseffekts
                ausmacht.
            </div>
        ),
        2: (
            <div style={{ textAlign: "center", marginTop: "10vh" }}>
                <Link to="/SDG13/Spiel1">
                    <InfotextButton version="green">zum Tippspiel</InfotextButton>
                </Link>
            </div>
        ),
    },
};
