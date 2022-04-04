/* eslint-disable unicorn/filename-case */ 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import soundfile from "./test.mp3";
import Logo from "../../../SDGLogos/Goal-SDG17.png";
import EG from "../../../EG/EG2.png";
import { InfotextProps } from "../../../Interfaces/SDG";

export const SDG17_Infotext: InfotextProps = {
    number: 17,
    name: "Partnerschaften zu Erreichung der Ziele",
    sdg: "SDG17",
    text: {
        1: "Menschen auf der ganzen Welt brauchen Hilfe, ihnen fehlen Geld, um Trinkwasserbrunnen zu errichten oder sie erfahren keine Bildung, weil keine Schulen gebaut werden können. Sie benötigen also finanzielle Unterstützung von anderen Ländern, um auch in Zukunft selbst auf eigenen Beinen stehen zu können. Dennoch gehen diese Gelder in den letzten Jahren zurück oder sind unzureichend vorhanden.",
        2: "Die Weltgemeinschaft basiert auf dem Handel zwischen Ländern. So kann jedes Land selbständig Projekte finanzieren und fördern. In ärmeren Ländern geht dies jedoch nicht. So sind sie auf Unterstützung von anderen Staaten angewiesen. Bei der Finanzierung der SDG’s, die Weltweit Entwicklungshilfe leisten, fehlen zum Beispiel 4,5 Milliarden Euro jährlich. Des weiteren gehen die Direktinvestitionen in Entwicklungsländer in den letzten Jahren um 40% zurück. Viele arme Länder investieren wenig in ihren eigenen Handel, was natürlich Partnerschaften erschwert, auf denen sie wiederum aufbauen können.",
        3: "Von einer Welt mit guten Partnerschaften und in der alle Menschen Zugang zu Wissen und Technologie haben, profitieren wir alle. Wir können nachhaltig Probleme lösen, um so eine Zukunft für alle zu schaffen in der wir leben wollen. Darüber hinaus müssen wir eine gute Infrastruktur und Kommunikation erschaffen, mit der wir auch Probleme wie Wasserknappheit oder Hunger lösen können. Wenn wir es also schaffen, dass Entwicklungspartnerschaften gefördert werden, internationale Systeme wie der Finanzmarkt überall zugänglich sind und Investitionen nachhaltig eingesetzt werden, dann können wir garantieren, dass Menschen ein besseres Leben führen können.",
        4: "Um Partnerschaften zu stärken und notwendige Kommunikation aufzubauen, kannst du dich und deine Mitmenschen darüber informieren, was es bedeutet, Partnerschaften aufzubauen. Wenn du deine Mitmenschen darauf Aufmerksam machst, dass es wichtig ist Finanzsysteme Weltweit zugänglich zu machen und Investitionen nachhaltig zu gestalten, dann stärken wir alle und besonders arme Länder auf der ganzen Welt.",
        
    },
    header: {
        1: "Warum?",
        2: "Was ist das Problem?",
        3: "Wie ist dieses Thema mit uns verbunden?",
        4: "Was können wir tun?",
   
    },
    logo: Logo,
    eg: EG,
    audioFile: soundfile,
    /* eslint-enable unicorn/filename-case */ 
};
