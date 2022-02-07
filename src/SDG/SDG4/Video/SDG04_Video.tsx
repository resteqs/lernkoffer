
// eslint-disable-next-line unicorn/filename-case
import  * as React from "react"
import { VideoProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG04.png";
import Video from "./Video_SDG04.mp4";

export const SDG04_Video:VideoProps = {
    sdgNumber: 4,
    sdgTitle: "Hochwertige Bildung",
    sdg: "SDG04",
    logo: Logo,
    source: Video,
    quelle: <p> Eigenproduktion </p>
}