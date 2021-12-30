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
        1: "“Gibts noch nich“",
        2: "Gibts noch nich",
        3: "Gibts noch nich",
        4: "Gibts noch nich",
        5: "Gibts noch nich",
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
