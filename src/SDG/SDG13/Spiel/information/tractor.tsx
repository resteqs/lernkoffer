// eslint-disable-next-line react/prefer-stateless-function
import * as React from "react";
import { Link } from "react-router-dom";
import { InfotextButton } from "../../../../Components/Buttons/InfotextButton";
import { TextProps } from "../../../../Interfaces/SDG";
import Logo from "../../../../SDGLogos/Goal-SDG13.png";

export const tractor:TextProps = {
    sdgNumber: 13,
    sdgTitle: "Suchspiel",
    sdg: "SDG13",
    logo: Logo,
    header: {
        1: "Traktor",
        2: "Traktor",
        3: "Traktor",
    },
    text: {
        1: "Landwirtschaft - ein wichtiger Teil der Wirtschaft eines jeden Landes. Dennoch entstehen hier Emissionen in einer recht hohen Menge, die durch den Einsatz neuer Technologien reduziert werden könnten. Heutzutage ist die Landwirtschaft für etwa 17 bis 32 Prozent der weltweiten Treibhausgase verantwortlich. Diese Zahlen setzen sich aus den direkten Emissionen zusammen, die durch Aktivitäten wie Viehzucht oder das Ausbringen von Dünger entstehen.",
        2: "Aber es gibt auch Dinge, an die man vielleicht nicht sofort denkt, wie die Abholzung von Wäldern für mehr Platz oder die von fossilen Brennstoffen betriebenen Motoren. Dabei gibt es schon ziemlich gute Ideen, wie man das ändern kann. Zum Beispiel könnten Landwirte versuchen, das Brachliegen von Feldern zu vermeiden, den Einsatz von Düngemitteln zu reduzieren und zu optimieren oder versuchen, die Fleischproduktion zu verringern. Und es gibt so viele mehr, die wir hier nicht aufzählen können...",
        3: <div style={{ textAlign: "center", marginTop: "10vh"  }}><Link to = "/SDG13/Spiel1"><InfotextButton version="green">Zürück zum Tippspiel</InfotextButton></Link></div>
    },
}