/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG03.png";
import Kopf from "./Kopf.png";

export const SDG03_Spiel: TextProps = {
    sdgNumber: 3,
    sdgTitle: "So sieht es in meinem Kopf aus",
    sdg: "SDG03",
    logo: Logo,
    header: {
        1: "Einleitung",
        2: "Einleitung",
        3: "Tutorial",
        4: "Vorlage",
        5: "Tutorial",
        6: "Tutorial",
    },
    text: {
        1: (
            <p>
                Gesund – Eine ausgewogene Ernährung (eine Ernährung, durch die alle wichtigen Stoffe aufgenommen werden,
                die der Körper braucht) ist dafür sehr wichtig, aber wusstest du, dass du nicht gesund bist, wenn dich
                etwas bedrückt?! Vielleicht hast du das ja auch schon einmal erlebt, wenn du dir Sorgen um eine Person
                oder ein Haustier oder Sonstiges gemacht hast, dann ging es dir da bestimmt nicht so gut, oder?
            </p>
        ),
        2: (
            <div>
                <p>
                    Aus diesem Grund solltest du dir eine vertraute Person suchen, mit der du über alles reden kannst.
                    Dir sollte dabei bewusst sein, dass du niemandem alles erzählen musst, aber manchmal hilft es
                    einfach, mit jemandem über schwierige Dinge zu reden. So etwas ähnliches möchten wir im Folgenden
                    auch machen.
                </p>
                <p>Dafür brauchst du ein Blatt Papier und einen Stift (optional auch eine Schere).</p>
            </div>
        ),
        3: (
            <div>
                <p>
                    Nimm dir ein Blatt zur Hand und male den Umriss eines Kopfes darauf (wenn du dir nicht sicher bist,
                    wie du den Umriss eines Kopfes zeichnen kannst, findest du, wenn du auf “Weiter“ klickst) Wenn du
                    das hast, kannst du den Kopf entweder einfach auf dem Blatt lassen oder ausschneiden.{" "}
                </p>
            </div>
        ),
        4: <img style={{ height: "60vh", margin: "auto", display: "block" }} src={Kopf} alt="" />,
        5: (
            <p>
                Jetzt kannst du all deine Sorgen in den Kopf schreiben und so den anderen zeigen, wie es in deinem Kopf
                aussieht. Das Wichtigste dabei ist, dass du ehrlich bist und dir bewusst ist, dass du alles schreiben
                kannst, was du möchtest, denn jeden bedrücken unterschiedliche Sachen.{" "}
            </p>
        ),
        6: (
            <p>
                Wenn ihr alle fertig seid, dann setzt euch doch zusammen und wer sich bereit fühlt, der kann den anderen
                erzählen, was ihn/sie beschäftigt. Ganz wichtig hier ist, dass niemand ausgelacht wird und ihr niemanden
                zwingt etwas zu sagen. Vielleicht zeigt euch das, dass es guttun kann, über seine Sorgen zu reden.
            </p>
        ),
    },
    /* eslint-enable react/react-in-jsx-scope */
};
