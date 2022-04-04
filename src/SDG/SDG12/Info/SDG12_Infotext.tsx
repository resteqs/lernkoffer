/* eslint-disable unicorn/filename-case */ 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import soundfile from "./test.mp3";
import Logo  from "../../../SDGLogos/Goal-SDG12.png";
import EG from "../../../EG/EG2.png";
import { InfotextProps } from "../../../Interfaces/SDG";

export const SDG12_Infotext: InfotextProps = {
    number: 12,
    name: "Nachhaltig Produzieren und Konsumieren",
    sdg: "SDG12",
    text: {
        1: "“Nachhaltige Konsum- und Produktionsmuster sicherstellen“",
        2: "Die weltweite Produktion von Waren hat einen großen Einfluss auf unsere Umwelt. Die große Menge an Abgasen (giftige Gase), die durch die Herstellung und vor allem den Transport dieser Güter erzeugt wird, muss reduziert werden. Außerdem müssen wir sicherstellen, dass die Güter, wie Nahrung, besser genutzt und verteilt werden, damit sie nicht weggeworfen wird. Dies können wir durch nachhaltigen Konsum (hernehmen/verwenden/kaufen) und durch effizientes (besseres Ergebnis in gleicher Zeit durch besseres Arbeiten) Produzieren und Verteilen erreichen.",
        3: "Jedes Jahr wird ungefähr eine Milliarde Tonnen Essen weggeworfen. Dieses Essen hat ungefähr den Warenwert von einer Billion Euro. Das ist nicht nur ein wirtschaftliches, sondern auch ein Umweltproblem, da durch dieses Essen Treibhausgase (Gase die dem Klima schaden) beim Transport oder der Produktion erzeugt wurden. Diese Treibhausgase sind zusammengerechnet mehr als ein Fünftel der gesamten Treibhausgase, die die Menschheit produziert.",
        4: "Aber nicht nur die Nahrungsverteilung ist ineffizient (Gegenteil von effizient), auch der Stromverbrauch kann durch bessere Geräte gesenkt werden. Hier könnten wir, wenn die gesamte Welt zu effizienteren Glühbirnen wechseln würde, 120 Milliarden Euro an Stromkosten sparen. Dieses Geld könnten wir dann zum Beispiel in bessere Bildung investieren.",
        5: "An vielen Orten auf dieser Welt wird das Konsumieren von Produkten nicht mehr nach „wie viel brauche ich?“, sondern nach „wie viel will ich?“ bestimmt. Dies hatte zur Folge, dass im Jahr 2020 drei Mal so viele Menschen auf der Welt übergewichtig waren, als Menschen, die Hunger leiden mussten.",
        6: "Wenn wir die Nahrungsverteilung fairer organisieren, nachhaltiger konsumieren und die Produktion von Gütern umweltfreundlicher gestalten, können wir einen großen Beitrag zum Klimaschutz leisten.",
        7: "Du kannst beim nächsten Einkauf darauf achten, nur Dinge zu kaufen, die du wirklich brauchst, um so weniger Müll zu verursachen. Du kannst außerdem energieeffizientere Geräte nutzen und deine alten Glühbirnen austauschen. Alte Kleidung oder Spielzeuge kannst du weiterschenken oder spenden und damit anderen eine Freude machen."
    },
    header: {
        2: "Warum?",
        3: "Was ist das Problem?",
        4: "Was ist das Problem?",
        5: "Wie ist dieses Thema mit uns verbunden?",
        6: "Wie ist dieses Thema mit uns verbunden?",
        7: "Was können wir tun?",
    },
    logo: Logo,
    eg: EG,
    audioFile: soundfile,
    /* eslint-enable unicorn/filename-case */ 
};
