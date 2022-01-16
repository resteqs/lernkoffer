
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
        1: "“Ein gesundes Leben für alle Menschen jeden Alters gewährleisten und ihr Wohlergehen fördern”",
        2: "Es ist wichtig für den Aufbau wohlhabender Gesellschaften. Die meisten Länder, insbesondere arme Länder, haben nicht genügend Gesundheitseinrichtungen, medizinische Versorgung und medizinisches Personal. Im Falle eines gesundheitlichen Notfalls können Menschen in jedem Land, unabhängig von seinem Reichtum, in den Bankrott oder in die Armut getrieben werden.",
        3: "Wir müssen unsere Anstrengungen koordinieren, um eine universelle Gesundheitsversorgung und eine nachhaltige Finanzierung der Gesundheit zu erreichen. Darüber hinaus werden wir durch neu entstehende Gesundheitsgefahren herausgefordert.",
        4: "Die Fortschritte in vielen Gesundheitsbereichen, z. B. bei der Senkung der Mütter und Kindersterblichkeit, bei der Erhöhung der Durchimpfungsrate und bei der Reduzierung einiger Infektionskrankheiten, gehen weiter, aber das Tempo der Verbesserung hat sich verlangsamt. Im Jahr 2018 erhielten schätzungsweise 19,4 Millionen Kinder im ersten Lebensjahr nicht die notwendigen Impfstoffe.",
        5: "Obwohl die Immunisierung (der Prozess der Verabreichung eines Impfstoffs zum Schutz vor Krankheiten) eine der erfolgreichsten und kosteneffektivsten Gesundheitsmaßnahmen der Welt ist. Im Jahr 2017 war nur etwa ein Drittel bis die Hälfte der Weltbevölkerung durch essenzielle Gesundheitsleistungen abgedeckt.",
        6: "Krankheiten und Todesfälle durch übertragbare Krankheiten werden in die Höhe schnellen. Jedoch erfordertes ein starkes Engagement ein gesundes Leben für alle zu gewährleisten. Es ist aber wichtig, da die Vorteile die Kosten überwiegen. Gesunde Menschen sind die Grundlage für gesunde Volkswirtschaften.",
        7: "Du kannst damit beginnen, deine eigene Gesundheit und die Gesundheit der Menschen in deiner Umgebung zu fördern und zu schützen, indem du gut informierte Entscheidungen triffst und zum Beispiel dich selbst und deine  zukünftigen Kinder impfen lässt.",
        8: "Du kannst in deiner Gemeinde das Bewusstsein für die Bedeutung einer guten Gesundheit, eines gesunden Lebensstils sowie für das Recht der Menschen auf eine hochwertige Gesundheitsversorgung schärfen, insbesondere für die Schwächsten, wie Frauen und Kinder.",
    },
    header: {
        2: "Warum",
        3: "Warum",
        4: "Was ist das Problem?",
        5: "Was ist das Problem?",
        6: "Wie ist dieses Thema mit uns verbunden?",
        7: "Was können wir tun?",
        8: "Was können wir tun?",
    },
    audioFile: {
        1: SDG3_1,
        2: SDG3_2,
        3: SDG3_3,
        4: SDG3_4,
        5: SDG3_5,
        6: SDG3_6,
        7: SDG3_7,
        8: SDG3_8
    }
}