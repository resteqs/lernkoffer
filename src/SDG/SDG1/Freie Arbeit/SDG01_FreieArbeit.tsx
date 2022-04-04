// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG01.png";

export const SDG01_FreieArbeit: TextProps = {
    sdgNumber: 1,
    sdgTitle: "Collage",
    sdg: "SDG01",
    logo: Logo,
    header: {
        1: " Anleitung ",
        2: " Anleitung ",
        3: " Anleitung ",
        4: " Anleitung ",
    },

    text: {
        1: (
            <div>
                Jede:r soll nun für sich selbst eine Collage gestalten, also ein durch Aufkleben von Verschiedenfarbigem
                Papier oder anderem Material hergestelltes Bild. Zuerst braucht ihr dafür ein großes leeres, vielleicht
                auch farbiges Blatt, auf dem ihr alles aufklebt. Dann sucht ihr euch eure Materialien zusammen: ihr
                könnt alte Zeitungen zerschneiden oder unterschiedliche Papierarten (z.B. Transparentpapier, Wellpappe,
                Krepppapier etc.) verwenden; dünne Äste und Blätter sammeln; Blumen trocken; Folie, Filz, Stofffetzen
                und Wolle hernehmen und natürlich braucht ihr Stifte, Schere und Kleber.
            </div>
        ),
        2: (
            <div>
                <ul>
                    <li>
                        {" "}
                        In der Collage sollen nun alle zeigen, was Armut für ihn/sie persönlich bedeutet. Dabei könnt
                        ihr euch an eurem eigenen Besitz orientieren, aber auch an Dinge, welche ihr euch wünschen
                        würdet.{" "}
                    </li>
                    <li style={{ marginTop: "2.667vh" }}>
                        {" "}
                        Ihr könnt die Erklärung vom Anfang natürlich noch ergänzen mit Sachen, die hier noch nicht
                        genannt wurden, mit denen ihr das Gefühl habt, ein gutes Leben zu haben (z.B. eure Familie,
                        Freund:innen, Haustiere).
                    </li>
                </ul>
            </div>
        ),
        3: (
            <div>
                Wenn ihr wollt, könnt ihr dabei auch noch unterscheiden, ob ihr diese Elemente mit Geld kaufen könnt
                oder nicht. Falls es käuflich ist, könnt ihr als Symbol eine Münze daneben malen, wenn nicht, dann lasst
                ihr sie einfach weg.
            </div>
        ),
        4: (
            <div>
                <ul>
                    <li>Seid ihr fertig? </li>
                    <li style={{ marginTop: "2.667vh" }}>
                        Dann stellt nun immer eine Person ihr Plakat den anderen vor und erklärt, was sie sich überlegt
                        hat. Besprecht anschließend alle zusammen, ob ihr das genauso seht oder eine andere Meinung
                        habt. Zum Schluss könntet ihr die Collagen noch aufhängen.{" "}
                    </li>{" "}
                </ul>
            </div>
        ),
    },
};
