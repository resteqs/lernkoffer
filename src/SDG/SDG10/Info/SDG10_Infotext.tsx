/* eslint-disable unicorn/filename-case */ 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import soundfile from "./test.mp3";
import Logo from "../../../SDGLogos/Goal-SDG10.png";
import EG from "../../../EG/EG2.png";
import { InfotextProps } from "../../../Interfaces/SDG";

export const SDG10_Infotext: InfotextProps = {
    number: 10,
    name: "Weniger Ungleichheiten ",
    sdg: "SDG10",
    text: {
        1: "“Ungleichheiten in und zwischen Ländern verringern“",
        2: "Ungleichheiten sind in vielen Teilen der Welt sehr groß und eines der größten Hindernisse für nachhaltige Entwicklung und Armutsbekämpfung. In den letzten Jahren haben die Ungleichheiten vor allem in ärmeren Ländern zugenommen. Dadurch werden die Möglichkeiten aller Menschen, die sich am sozialen, kulturellen, politischen und wirtschaftlichen Leben beteiligen und einen sinnvollen Beitrag dazu leisten wollen, beschränkt.",
        3: "Die Verteilung des Geldes auf der Welt ist sehr ungerecht. Die reichsten 10 Prozent der Bevölkerung auf Welt haben über 85 % des weltweiten Vermögens. Kinder in ärmeren Ländern haben schon ab ihrer Geburt eine drei Mal so hohe Wahrscheinlichkeit bevor ihrem fünften Lebensjahr zu sterben als Kinder in reicheren Ländern. Wo du geboren wirst, sagt also in vielen Fällen bereits aus, welche Bildung du erfahren wirst und wie dein späteres Leben verlaufen wird. Du solltest aber deine eigene Zukunft genauso selbst bestimmen können wie viele andere Menschen auch.",
        4: "In vielen Ländern auf dieser Welt und vielleicht auch in deinem gibt es große Ungleichheiten in der Bevölkerung. Kinder reicher Eltern bekommen bessere Bildung und haben bessere Zukunftschancen. Wenn wir also sicherstellen können, dass alle Menschen egal welchem Alter, Geschlecht, Herkunft oder Religion dieselben Rechte und vor allem dieselben Chancen haben, können wir die Ungleichheiten in und zwischen Ländern stark verringern.",
        5: "Du kannst dich und andere Menschen über eure Rechte informieren, du kannst Gruppen organisieren, die sich für diese Rechte aussprechen und in diesen dafür sorgen, dass jede:r die gleichen Chancen bekommt. Du kannst dich auch dafür einsetzen, dass Entwicklungsländer gefördert und in Handelsabkommen einbezogen werden.",
        
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
