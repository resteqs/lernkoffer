
// eslint-disable-next-line unicorn/filename-case
import * as React from "react";
import Logo from "../../../SDGLogos/Goal-SDG03.png";
import EG from "../../../EG/EG2.png";
import { InfotextProps } from "../../../Interfaces/SDG";
import SDG3_1 from "./audio/SDG3_1.mp3"
import SDG3_2 from "./audio/SDG3_2.mp3"
import SDG3_3 from "./audio/SDG3_3.mp3"
import SDG3_4 from "./audio/SDG3_4.mp3"
import SDG3_5 from "./audio/SDG3_5.mp3"
import SDG3_6 from "./audio/SDG3_6.mp3"
import SDG3_7 from "./audio/SDG3_7.mp3"
import SDG3_8 from "./audio/SDG3_8.mp3"

export const SDG03_Infotext:InfotextProps = {
    number: 3,
    name: "Gesundheit und Wohlergehen",
    sdg: "SDG03",
    logo: Logo,
    eg: EG,
    text: {
        1: "Es ist wichtig für den Aufbau wohlhabender Gesellschaften",
        2: "Wir müssen unsere Anstrengungen koordinieren, um eine universelle Gesundheitsversorgung und eine nachhaltige Finanzierung der Gesundheit zu erreichen. Darüber hinaus werden wir durch neu entstehende Gesundheitsgefahren herausgefordert.",
        3: "Die Fortschritte in vielen Gesundheitsbereichen, z. B. beim Verringern einiger Infektionskrankheiten, gehen weiter, aber diese Verbesserungen passiert langsamer. Im Jahr 2018 erhielten schätzungsweise 19,4 Millionen Kinder im ersten Lebensjahr nicht die notwendigen Impfstoffe. Obwohl die Immunisierung (der Prozess der Verabreichung eines Impfstoffs zum Schutz vor Krankheiten) eine der erfolgreichsten und günstigsten Gesundheitsmaßnahmen der Welt ist. Im Jahr 2017 war nur etwa ein Drittel bis die Hälfte der Weltbevölkerung durch lebenswichtige Gesundheitsleistungen abgedeckt.",
        4: "Krankheiten und Todesfälle durch übertragbare Krankheiten werden in die Höhe schnellen. Wir müssen uns gemeinsam anstrengen, um eine einheitliche Gesundheitsversorgung zu erreichen und um somit vor neu entstehenden Gesundheitsgefahren geschützt zu sein. Das ist wichtig, da die Vorteile die Kosten überwiegen. Denn nur gesunde Menschen können arbeiten, Geld verdienen und somit für sich selbst und andere sorgen. ",
        5: "Du kannst damit beginnen, deine eigene Gesundheit und die Gesundheit der Menschen in deiner Umgebung zu fördern und zu schützen, indem du gut informierte Entscheidungen triffst und zum Beispiel dich selbst und deine zukünftigen Kinder impfen lässt. Außerdem kannst du deinen Mitmenschen die Bedeutung einer guten Gesundheit und eines gesunden Lebensstils sowie das Recht der Menschen auf eine hochwertige Gesundheitsversorgung erklären.",
    },
    header: {
        2: "Warum?",
        3: "Was ist das Problem?",
        4: "Wie ist dieses Thema mit uns verbunden?",
        5: "Was können wir tun?",
        
    },
    audioFile: {
        1: SDG3_1,
        2: SDG3_2,
        3: SDG3_3,
        4: SDG3_4,
        5: SDG3_5,
       
    }
}