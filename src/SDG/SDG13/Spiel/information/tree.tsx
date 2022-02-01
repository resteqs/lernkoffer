// eslint-disable-next-line react/prefer-stateless-function
import * as React from "react";
import { Link } from "react-router-dom";
import { InfotextButton } from "../../../../Components/Buttons/InfotextButton";
import { TextProps } from "../../../../Interfaces/SDG";
import Logo from "../../../../SDGLogos/Goal-SDG13.png";

export const tree:TextProps = {
    sdgNumber: 13,
    sdgTitle: "Suchspiel",
    sdg: "SDG13",
    logo: Logo,
    header: {
        1: "Baum",
        2: "Baum",
        3: "Baum",

    },
    text: {
        1: "Wie wir alle wissen, sind Bäume für die Photosynthese verantwortlich. Gerade in der heutigen Zeit, in der fast alles, was wir tun, mit einer Aktion verbunden ist, die Kohlenstoffdioxid produziert, sind diese Pflanzen extrem wichtig, da eine höhere Konzentration von Kohlenstoffdioxid in der Luft für alle Lebewesen gefährlich wäre und den Klimawandel vorantreiben würde. Doch viele Menschen scheinen nicht zu wissen, dass Bäume nicht nur schön anzusehen sind, sondern auch Funktionen haben, die unser Leben beeinflussen, denn ihr Holz ist ein gutes Baumaterial, sie schaffen einen Lebensraum für viele Tierarten, werfen einen Schatten, der vor allem im Sommer eine hohe Verdunstung von Wasser bewirkt.",
        2: "Natürlich gibt es noch viele andere Gründe, warum Bäume so wichtig für uns Menschen sind, aber das sind die Wichtigsten. Verstehst du jetzt, warum wir die Waldrodung sofort stoppen müssen? Das sind übrigens jedes Jahr bis zu 300.000 Quadratkilometer, und mehr als die Hälfte davon im Regenwald!",
        3: <div style={{ textAlign: "center", marginTop: "10vh"  }}><Link to = "/SDG13/Spiel1"><InfotextButton version="green">Zürück zum Tippspiel</InfotextButton></Link></div>
    },
}