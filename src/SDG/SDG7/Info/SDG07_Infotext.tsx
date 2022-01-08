/* eslint-disable unicorn/filename-case */ 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import soundfile from "./test.mp3";
import Logo from "../../../SDGLogos/Goal-SDG07.png";
import EG from "../../../EG/EG2.png";
import { InfotextProps } from "../../../Interfaces/SDG";

export const SDG07_Infotext: InfotextProps = {
    number: 7,
    name: "Bezahlbare und saubere Energie",
    sdg: "SDG07",
    text: {
        1: "“Zugang zu bezahlbarer, verlässlicher, nachhaltiger und moderner Energie für alle sichern“",
        2: "Der Zugang zu elektrischem Strom, der nachhaltig produziert wurde, ist nicht nur für den alltäglichen Gebrauch sehr wichtig, sondern auch für die Infrastruktur wie Krankenhäuser, die auf Elektrizität angewiesen sind. Auch Wasserpumpen, Farmanlagen und andere Lebenswichtige Bereiche können ohne Strom nicht betrieben werden. Das macht Strom zu einem der wichtigsten Faktoren in unserem Alltag.",
        3: "In einer Studie, die vergleicht wie viele Menschen 2000 und 2017 Strom zur Verfügung hatten wird klar, dass Entwicklungsländer und vor allem ärmere Länder beim Ausbau des Stromnetzes Probleme haben. Weltweit lag der Durchschnitt der Menschen mit Zugang zu Strom im Jahr 2000 bei 78%, während er im Jahre 2017 schon bei 89% lag. Doch das Problem wird erst deutlich, wenn man z.B. Subsahara-Afrika betrachtet, wo nur 25% (im Jahr 2000) und sieben Jahre später 44% (im Jahr 2017) einen Stromanschluss haben. Das schlecht ausgebaute Stromnetz hat nicht nur Auswirkungen auf den Lebenskomfort, sondern bestimmt auch ob Grundnahrungsmittel wie Wasser zur Verfügung stehen.",
        4: "An vielen Orten auf dieser Welt könnten wir zum Klimaschutz beitragen, wenn wir Strom anstatt Kohle, Holz oder Öl zum Heizen benutzten. Ein weiter ausgebautes Stromnetz bringt zusätzlich Fortschritte wie Internetzugriff für mehr Menschen. Wenn wir sicherstellen können, dass jeder Zugang zu sauberem Strom hat, stoßen wir nicht mehr so viele schädliche Treibhausgase aus was uns dem Klimaziel näherbringt.",
        5: "Du kannst Projekte unterstützen, die Menschen eine Möglichkeit bietet sauberen Strom zu erzeugen um nicht mehr auf Kohle als Heizmittel angewiesen zu sein. Aber auch wir selbst können helfen, indem wir weniger Strom verschwenden, wenn wir zum Beispiel stromsparendere Produkte kaufen oder zu einem Ökostromanbieter wechseln.",
    },
    header: {
        2: "Warum?",
        3: "Was ist das Problem?",
        4: "Wie ist dieses Thema mit uns verbunden?",
        5: "Was können wir tun?",
    },
    logo: Logo,
    eg: EG,
    audioFile: soundfile,
    /* eslint-enable unicorn/filename-case */ 
};
