
// eslint-disable-next-line unicorn/filename-case
import * as React from "react"
import { VideoProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG08.png";
import Infaltion from "./Inflation.mp4";

export const SDG08_Video:VideoProps = {
    sdgNumber: 8,
    sdgTitle: "Inflation",
    sdg: "SDG08",
    logo: Logo,
    source: Infaltion,
    quelle: <p> <a href="https://www.tagesschau.de/multimedia/video/video-cc-197~_parentId-creativecommonsdossier-101.html">„Kurzerklärt: Inflation </a> by „Tagesschau“ is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de"> „CC BY-NC-ND 4.0“ </a> <a href="https://www.tagesschau.de/multimedia/video/video-cc-123~_parentId-creativecommonsdossier-101.html"> (Angaben der Tagesschau)  </a> </p>,
    isCCBY:false,
}