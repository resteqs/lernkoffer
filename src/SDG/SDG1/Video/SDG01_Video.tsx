
// eslint-disable-next-line unicorn/filename-case
import * as React from "react"
import { VideoProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG01.png";
import Video from "./Erste_Zahlungsmittel.mp4"


export const SDG01_Video:VideoProps = {
    sdgNumber: 1,
    sdgTitle: "Erste Zahlungsmittel",
    sdg: "SDG01",
    logo: Logo,
    source: Video,
    quelle:  <p> <a href="https://www.tagesschau.de/multimedia/video/video-cc-183~_parentId-creativecommonsdossier-101.html">„Kurzerklärt: Armutsgrenzen“</a> by „Tagesschau“ is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de"> „CC BY-NC-ND 4.0“ </a> <a href="https://www.tagesschau.de/multimedia/video/video-cc-123~_parentId-creativecommonsdossier-101.html"> (Angaben der Tagesschau)  </a>  </p>,
};