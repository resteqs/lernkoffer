// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG11.png";
import Stadt from "./Bild1.png";

export const SDG11_FreieArbeit: TextProps = {
    sdgNumber: 11,
    sdgTitle: "Gestalte deine eigene kleine nachhaltige Stadt",
    sdg: "SDG11",
    logo: Logo,
    header: {
        1: "Schritt 1: ",
        2: "Schritt 2: ",
        3: "Schritt 3: ",
        4: "Lösungsvorschlag",
    },

    text: {
        1: (
            <div>
                {" "}
                Stelle dir einmal vor, wie eine nachhaltige Stadt für dich aussehen sollte. Verwende dazu all dein
                gesammeltes Wissen.
            </div>
        ),
        2: (
            <div>
                Nimm nun alle Materialien, mit denen du ein Bild „bauen“ möchtest. Als Grundlage solltest du mit einem
                Blatt (die Größe ist ganz dir überlassen) beginnen. Ich habe hier auch gleich ein buntes Papier
                genommen, aber das ist auch dir überlassen. Die Materialien, die du nutzen möchtest, können ganz
                unterschiedlich sein. Du kannst mit verschiedenen Stiften oder Kreiden oder sonstigen Farben malen,
                verschiedene Papierarten nehmen und Sachen ausschneiden oder falten und dann auf dein Bild kleben. Du
                kannst aber auch ganz andere Sachen noch nutzen, ich habe meine Wolken zum Beispiel aus Watte gemacht.
            </div>
        ),
        3: (
            <div>
                Jetzt, da du dir ausgedacht hast, wie deine ideale Stadt aussehen soll und all die benötigten Materialien
                bereitgelegt hast, kann es los gehen. Fang einfach an zu basteln, kleben, malen, was auch immer dir in
                den Sinn kommt und werde so kreativ, wie du möchtest und kannst.
            </div>
        ),
        4: (
            <div>
                Nur ein Beispiel, wie ich mir eine nachhaltige Stadt vorstelle. Wie du sehen kannst, sind hier viele
                Pflanzen und im Hintergrund wird mit Windrädern nachhaltig Strom produziert und auch auf den Hausdächern
                und dem Bus befinden sich Solarzellen, um grünen Strom zu produzieren.
                <img style={{ marginBottom: "-20vw", marginLeft: "35.333vw", height: "26.667vw" }} src={Stadt} alt="" />
            </div>
        ),
    },
};
