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
        1: "Auch durch Wind kann Energie gewonnen werden. Es ist ein recht häufig diskutiertes Thema, ob der Bau von Windrädern ökologisch sinnvoll oder nicht ist. Die meisten Debatten enden mit einem positiven Ergebnis für diese Windkraftanlagen, weil Wind zusätzlich sowohl endlos als auch in den Nächten verfügbar ist. Im Gegensatz dazu ist es ein großes Problem bei der Solarenergie, dass das Sonnenlicht nur tagesüber für eine begrenzte Zeit zur Verfügung steht. Zusätzlich ist der Platzbedarf für den Bau der Windkraftanlagen eher gering. Die einzigen Emissionen, die bei Windrädern entstehen, entstehen bei der Herstellung der Teile.",
        2: "Aber wie immer gibt es auch bei diesem Thema eine nicht ganz so sonnige Seite. Ein Grund, warum Menschen Windräder zum Teil nicht mögen, ist, dass sie groß sind und somit einen großen Schatten auf die Umgebung werfen. Deshalb gibt es in den meisten Ländern Vorschriften für einen Mindestabstand von Windparks zu Städten und Ortschaften. Ein weiteres Problem ist, dass sie wenig Energie als Atomkraftwerke produzieren können.",
        3: (
            <div style={{ textAlign: "center", marginTop: "10vh" }}>
                <Link to="/SDG13/Spiel1">
                    <InfotextButton version="green">zum Tippspiel</InfotextButton>
                </Link>
            </div>
        ),
    },
};
