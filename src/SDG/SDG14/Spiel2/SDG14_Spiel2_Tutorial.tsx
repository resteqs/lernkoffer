// eslint-disable-next-line unicorn/filename-case
import * as React from 'react';
import { Link } from "react-router-dom";
import { InfotextButton } from '../../../Components/Buttons/InfotextButton';
import { TextProps } from '../../../Interfaces/SDG';
import Logo from "../../../SDGLogos/Goal-SDG14.png";

export const SDG14_Spiel2_Tutorial:TextProps = {
    sdgNumber: 14,
    sdgTitle: 'Suchspiel',
    sdg: 'SDG14',
    logo: Logo,
    header: {
        1: "Erklärung",
        2: "Erklärung",
        3: "Erklärung",

    },
    text: {
        1: "In den Ozeanen leben mehr als 2,2 Millionen Arten wie Blauwale, Seesterne und Atlantische Lachse.",
        2: "Aber viele Lebewesen sind vom Aussterben bedroht, was bedeutet, dass wir in ein paar Jahren vielleicht keines dieser Wildtiere mehr finden werden.",
        3: (
            <>
            <p>Kannst du die Tiere erraten, die bald aussterben werden? Klicke auf sie und finde sie, bevor sie aussterben.</p>
            <div style={{ textAlign: "center", marginTop: "10vh" }}>
                <Link to = "/SDG14/Spiel2/Spiel">
                    <InfotextButton version="green">
                        Zum Tippspiel
                    </InfotextButton>
                </Link>
            </div>
        </>
        )
    }
};
