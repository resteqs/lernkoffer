import * as React from 'react';
import { Link } from 'react-router-dom';
import { InfotextButton } from '../../../../Components/Buttons/InfotextButton';
import { TextProps } from '../../../../Interfaces/SDG';
import Logo from "../../../../SDGLogos/Goal-SDG14.png";

export const shark:TextProps = {
    sdgNumber: 14,
    sdgTitle: 'Hai',
    sdg: 'SDG14',
    logo: Logo,
    header: {
        1: "Erklärung",
        2: "Zurück zum Tippspiel"
    },
    text: {
        1: "Wusstest du, dass nur fünf Menschen pro Jahr von Haien getötet werden? Das Problem ist aber, dass viele asiatische Fischer Haie jagen, um die Flossen abzuschneiden und den langsam sterbenden, aber noch lebenden Hai wieder ins Wasser zu werfen.",
        2: (
            <div style={{ textAlign: "center", marginTop: "10vh" }}>
                <Link to = "/SDG14/Spiel2/Spiel">
                    <InfotextButton version="green">
                        Zum Tippspiel
                    </InfotextButton>
                </Link>
            </div>
        )
    }
}