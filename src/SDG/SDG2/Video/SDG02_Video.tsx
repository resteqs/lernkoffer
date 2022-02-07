
// eslint-disable-next-line unicorn/filename-case
import  * as React from "react"
import { VideoProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG02.png";
import Video from "./Fleischkonsum.mp4"


export const SDG02_Video:VideoProps = {
    sdgNumber: 2,
    sdgTitle: "Fleischkonsum",
    sdg: "SDG02",
    logo: Logo,
    source: Video,
    quelle: <p> <a href="https://www.zdf.de/dokumentation/terra-x/braucht-der-mensch-fleisch-creative-commons-clip-100.html"> „Braucht der Mensch Fleisch?“</a>by „3sat/nano/scobel/Kerstin Achenbach/Claus Ast“ is licensed under <a href="https://creativecommons.org/licenses/by/4.0/legalcode.de"> „CC BY 4.0“ </a><a href="https://www.zdf.de/dokumentation/terra-x/terra-x-creative-commons-cc-100.html">(Angaben von Terra X)</a> </p>
} 