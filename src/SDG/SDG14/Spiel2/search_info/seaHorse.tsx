import * as React from 'react';
import { Link } from 'react-router-dom';
import { InfotextButton } from '../../../../Components/Buttons/InfotextButton';
import { TextProps } from '../../../../Interfaces/SDG';
import Logo from "../../../../SDGLogos/Goal-SDG14.png";

export const seaHorse:TextProps = {
    sdgNumber: 14,
    sdgTitle: 'Seepferdchen',
    sdg: 'SDG14',
    logo: Logo,
    header: {
        1: "Erklärung",
        2: "Zurück zum Tippspiel"
    },
    text: {
        1: "Es ist kein Hai. Es ist kein Barrakuda. Es ist nicht der Blauflossenthunfisch. Nein, eine der tödlichsten Kreaturen im Meer ist keine Spezies, die wir überhaupt als Raubtier betrachten. Es ist das Seepferdchen. Aber obwohl sie wirklich gefährlich sind, sind diese kleinen Tiere eine bedrohte Art, weil die Menschen sie angeln, um sie zu Glücksbringern zu machen und ihr Lebensraum, die Korallen, immer mehr schrumpft.",
        2: (
            <div style={{ textAlign: "center", marginTop: "10vh" }}>
                <Link to = "/SDG14/Spiel2/Spiel">
                    <InfotextButton version="green">
                        Zum Tippspiel
                    </InfotextButton>
                </Link>
            </div>
        )
    }
}