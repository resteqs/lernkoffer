// eslint-disable-next-line react/prefer-stateless-function
import * as React from "react";
import { Link } from "react-router-dom";
import { InfotextButton } from "../../../../Components/Buttons/InfotextButton";
import { TextProps } from "../../../../Interfaces/SDG";
import Logo from "../../../../SDGLogos/Goal-SDG13.png";

export const foxHedgehog: TextProps = {
    sdgNumber: 13,
    sdgTitle: "Suchspiel",
    sdg: "SDG13",
    logo: Logo,
    header: {
        1: "Fuchs und Igel",
        2: "Fuchs und Igel",
    },
    text: {
        1: (
            <div>
                Fuchs und Igel sind niedliche kleine Tiere, könnte man denken. Wie sollten sie mit dem Treibhauseffekt und dem Klimawandel
                in Verbindung stehen? Tiere sind gewissermaßen natürliche Produzenten von bestimmten Gasen wie
                Methan oder Kohlenstoffdioxid (CO<sub>2</sub>). Die meisten Gase, die von Tieren produziert werden, stammen aus
                der industriellen Tierhaltung und vor allem von Wiederkäuern, denn sie rülpsen und furzen Methan, das
                bei ihrer Verdauung entsteht.
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
