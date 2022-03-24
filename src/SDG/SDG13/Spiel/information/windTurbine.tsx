// eslint-disable-next-line react/prefer-stateless-function
import * as React from "react";
import { Link } from "react-router-dom";
import { InfotextButton } from "../../../../Components/Buttons/InfotextButton";
import { TextProps } from "../../../../Interfaces/SDG";
import Logo from "../../../../SDGLogos/Goal-SDG13.png";

export const windTurbine: TextProps = {
    sdgNumber: 13,
    sdgTitle: "Suchspiel",
    sdg: "SDG13",
    logo: Logo,
    header: {
        1: "Windrad",
        2: "Windrad",
        3: "Windrad",
    },
    text: {
        1: "Eine neue Art der Energiegewinnung. Es ist ein recht häufig diskutiertes Thema, ob der Bau von Windrädern ökologisch sinnvoll ist oder nicht. Die meisten Debatten enden mit einem positiven Ergebnis für diese Räder, weil sie mit Wind arbeiten, der sowohl endlos als auch in den Nächten verfügbar ist. Im Gegensatz dazu ist es ein großes Problem bei der Solarenergie, dass das Sonnenlicht nur für eine begrenzte Zeit, genauer gesagt tagsüber, zur Verfügung steht. Außerdem ist der Platzbedarf für den Bau der Windanlagen eher gering. Die einzigen Emissionen, die bei Windrädern entstehen, entstehen bei der Herstellung der Teile.",
        2: "Aber wie immer gibt es auch bei diesem Thema eine nicht ganz so sonnige Seite. Ein Hauptgrund, warum die Menschen Windräder nicht mögen, ist, dass sie groß sind und einen großen Schatten auf die Umgebung werfen. Deshalb gibt es in den meisten Ländern Vorschriften für einen Mindestabstand solcher Windparks zu Städten und Ortschaften. Das größte Problem ist, dass sie kaum die Menge produzieren, die ein Atomkraftwerk leisten könnte.",
        3: (
            <div style={{ textAlign: "center", marginTop: "10vh" }}>
                <Link to="/SDG13/Spiel1">
                    <InfotextButton version="green">Zürück zum Tippspiel</InfotextButton>
                </Link>
            </div>
        ),
    },
};
