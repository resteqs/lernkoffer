/* eslint-disable unicorn/filename-case */ 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import soundfile from "./test.mp3";
import Logo from "../../../SDGLogos/Goal-SDG11.png";
import EG from "../../../EG/EG2.png";
import { InfotextProps } from "../../../Interfaces/SDG";

export const SDG11_Infotext: InfotextProps = {
    number: 11,
    name: "Nachhaltige Städte und Gemeinden",
    sdg: "SDG11",
    text: {
        1: "“Städte und Siedlungen inklusiv, sicher, widerstandsfähig und nachhaltig gestalten“",
        2: "Die Anzahl der Leute, die in städtischen Regionen leben, nimmt sehr stark zu, und damit gehen auch viele Probleme einher, mit denen sich die Menschen beschäftigen müssen. Einige davon sind eine immer schlimmer werdende Luftverschmutzung, ungerechte Infrastruktur und öffentliche Dienste sowie die Zersiedelung (das heißt, dass viele Menschen in die Städte ziehen, diese aber nicht ausreichend geplant sind). Darüber hinaus sind sichere öffentliche Transportmittel, vertrauenswürdige öffentliche Dienste und Parks sehr wichtig, um die Gesundheit der Bevölkerung zu sichern.",
        3: "Zweifellos das größte Problem ist, dass ein großer Teil vieler Städte „Slums“ sind, also Stadtviertel, in denen die Menschen zum einen keinen Zugang zu einer funktionierenden Infrastruktur (Busse, Bahnen, …), Wasser-, Abwasser- und Müllsystemen haben, zusätzlich aber unter schlechten Wohnbedingungen leiden. Dazu kommt noch, dass die öffentlichen Transportmittel und Gesundheitseinrichtungen immer stärker überlastet sind.",
        4: "Wenn Menschen keinen Zugang zu öffentlichen Transportmitteln haben, sind sie mehr oder weniger dazu gezwungen, selbstständig mit dem Auto zu fahren, wenn sie längere Strecken zurücklegen müssen. Das wiederum würde eine extreme Luftverschmutzung verursachen, was schlecht für unser Klima und die Umwelt ist.",
        5: "Konkret heißt das, dass im Jahr 2000 circa 28 Prozent der städtischen Bevölkerung weltweit in „Slums“ lebte, wobei diese Zahl bis zum Jahr 2014 auf 23 Prozent abnahm. Allerdings hat diese Zahl bis zum Jahr 2018 wieder zugenommen und steht aktuell bei 24 Prozent, was ungefähr einer Milliarde Menschen entspricht",
        6: "Laut Daten von 2019 hatte aus 610 Städten in insgesamt 95 Ländern nur etwa die Hälfte der städtischen Bevölkerung Zugang zu „kleinen“ öffentlichen Transportmitteln (Busse/Straßenbahnen) in einer Distanz von unter 500m zu Fuß und Zugang zu „großen“ öffentlichen Transportmitteln (Bahnen/U-Bahnen/Fähren) in einer Distanz von unter 1.000m zu Fuß.",
        7: "Es wäre eine große Verbesserung, wenn mehr Menschen, die Zugang zu öffentlichen Transportmitteln haben, diese auch aktiv nutzen würden und nicht allein mit dem Auto fahren. Noch besser wäre es, wenn mehr Leute mit Fahrrädern fahren oder zu Fuß gehen würden."
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
