import * as React from 'react';
import { Link } from 'react-router-dom';
import { InfotextButton } from '../../../../Components/Buttons/InfotextButton';
import { TextProps } from '../../../../Interfaces/SDG';
import Logo from "../../../../SDGLogos/Goal-SDG14.png";

export const clownfish:TextProps = {
    sdgNumber: 14,
    sdgTitle: 'Clownfisch',
    sdg: 'SDG14',
    logo: Logo,
    header: {
        1: "Erklärung",
        2: "Zurück zum Tippspiel"
    },
    text: {
        1: <p> Eine angenehme Überraschung, Nemo und seine Freunde leben ein tolles Leben im Ozean. Auch wenn die hohe Nachfrage nach Clownfischen nach dem Erfolg von &quot;Findet Nemo&quot; ein echtes Problem ist. Das wiederum führte zu einer Überfischung der Clownfische vor allem in Riffgebieten. Die Chemikalie, die dabei eingesetzt wurde, schädigte auch die Korallenriffe, die normalerweise ein Zuhause für diese Fische sind.</p>,
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