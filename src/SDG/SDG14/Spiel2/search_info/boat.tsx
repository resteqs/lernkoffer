import * as React from 'react';
import { Link } from 'react-router-dom';
import { InfotextButton } from '../../../../Components/Buttons/InfotextButton';
import { TextProps } from '../../../../Interfaces/SDG';
import Logo from "../../../../SDGLogos/Goal-SDG14.png";

export const boat:TextProps = {
    sdgNumber: 14,
    sdgTitle: 'Boot',
    sdg: 'SDG14',
    logo: Logo,
    header: {
        1: "Erklärung",
        2: "Zurück zum Tippspiel"
    },
    text: {
        1: "Kreuzfahrtschiffe stoßen eine Menge Schwefeldioxid und Stickstoffdioxid aus, die Wasserverschmutzer und gefährliche Stoffe sind. Der Hauptgrund für die Erzeugung dieser schädlichen Gase ist der Treibstoff, den die meisten Schiffe verwenden, das so genannte Heizöl, das in den meisten Ländern nicht verwendet werden darf, weil bei seiner Verbrennung enorme Mengen gefährlicher Gase entstehen. Doch viele Wissenschaftler suchen nach einer besseren Möglichkeit, solche großen Motoren zu betreiben, und haben bereits eine Lösung gefunden. Es ist das Flüssiggas, weil es nicht so viele schädliche Stoffe freisetzt.",
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