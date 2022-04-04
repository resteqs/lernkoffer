import * as React from 'react';
import { Link } from 'react-router-dom';
import { InfotextButton } from '../../../../Components/Buttons/InfotextButton';
import { TextProps } from '../../../../Interfaces/SDG';
import Logo from "../../../../SDGLogos/Goal-SDG14.png";

export const turtle:TextProps = {
    sdgNumber: 14,
    sdgTitle: 'Schildkröte',
    sdg: 'SDG14',
    logo: Logo,
    header: {
        1: "Erklärung",
        2: "Zurück zum Tippspiel"
    },
    text: {
        1: "Schildkröten werden selten gefischt, dennoch geraten sie oft in die Netze der Fischer, was zu einem enormen Bestandsrückgang führt. Ein weiterer Grund für ihr Aussterben ist die Verschmutzung der Ozeane.",
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