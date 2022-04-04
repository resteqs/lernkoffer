/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from "../../../SDGLogos/Goal-SDG03.png";
import { TextProps } from "../../../Interfaces/SDG";
import Spielfeld from "./Spielfeld 03.png";

export const SDG03_FreieArbeit: TextProps = {
    sdgNumber: 3,
    sdgTitle: "Einander unterstützen",
    sdg: "SDG03",
    logo: Logo,
    header: {
        1: "Einleitung",
        2: "Spielablauf",
        3: "Spielablauf",
        4: "Spielablauf",
        5: "Spielablauf",
    },
    text: {
        1: `Das Nachhaltigkeitsziel Nummer drei trägt den Titel „Gesundheit und Wohlergehen“. Dazu gehört, wie du bereits weißt, auch die psychische Gesundheit (=seelische Gesundheit). Deshalb habe ich mir ein Spiel ausgedacht, bei dem du schöne Sachen zu dir und deinen Freunden/Freundinnen sagen sollst. Bei diesem Spiel ist es wichtig, dass niemand ausgelacht wird und alle ehrlich sind. Ihr braucht dafür nur einen Würfel und eine Spielfigur pro Spieler:in.`,
        2: `Alle stellen am Anfang ihre Spielfigur auf das „Start“-Feld. Dann fängt jemand an zu würfeln. Die Zahl auf dem Würfel entspricht der Zahl an Feldern, die du deine Spielfigur in Pfeilrichtung bewegen darfst.`,
        3: "Das Spielfeld ist ein Kreis, weil ihr so viele Runden spielen könnt, wie ihr möchtet. Auf den Feldern mit der Blume darfst du etwas Nettes über einen anderen Spieler/eine andere Spielerin sagen. Wenn du auf einem Spielfeld mit einem Buch ankommst, dann denke dir etwas aus, das du selbst sehr gut kannst und möchtest, dass die anderen davon wissen.",
        4: "Die Dinge, die ihr sagt, können ganz unterschiedlich sein. Zum Beispiel könntet ihr sagen, dass ihr die Augenfarbe einer Mitspielerin/eines Mitspielers sehr schön findet. Oder wenn ihr selbst zum Beispiel sehr gut zeichnen könnt, gerne Sport macht oder sonst etwas gerne macht, dann könnt ihr das den Anderen mitteilen.",
        5: "Außerdem könnt ihr euch die Sachen aufschreiben, die andere zu euch sagen und wenn es euch einmal nicht so gut geht, dann könnt ihr euch daran erinnern, was ihr alles könnt und was andere an euch toll finden. Hoffentlich geht es euch dann auch gleich wieder besser.",
        6: <img style={{ height: "80vh", margin: "auto", display: "block" }} className = "Spielfeld03" src={Spielfeld} alt=""/>
    },

    /* eslint-enable unicorn/filename-case */
    /* eslint-enable react/react-in-jsx-scope */
    /* eslint-enable react/no-unescaped-entities */
    /* eslint-enable @typescript-eslint/object-curly-spacing */
};
