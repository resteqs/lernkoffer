import * as React from 'react';
import { Link } from 'react-router-dom';
import { InfotextButton } from '../../../../Components/Buttons/InfotextButton';
import { TextProps } from '../../../../Interfaces/SDG';
import Logo from "../../../../SDGLogos/Goal-SDG14.png";

export const siameseFightingFish:TextProps = {
    sdgNumber: 14,
    sdgTitle: 'Siamesischer Kampffisch',
    sdg: 'SDG14',
    logo: Logo,
    header: {
        1: "Erklärung",
        2: "Zurück zum Tippspiel"
    },
    text: {
        1: "Oh nein, was macht dieser kleine Kerl hier? Fische wie dieser sollten nicht im Meer leben, ihr Zuhause ist im Aquarium daheim.",
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