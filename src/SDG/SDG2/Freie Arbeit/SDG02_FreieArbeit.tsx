/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable prefer-const */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-eval */

// eslint-disable-next-line unicorn/filename-case
import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG02.png";
import LeereFlügel from "./Leere Flügel.jpg";
import FlügelSDG02 from "./Schmetterling SD02.png";

export const SDG02_FreieArbeit: TextProps = {
    sdgNumber: 2,
    sdgTitle: "Schmetterlingsflügel",
    sdg: "SDG02",
    logo: Logo,
    header: {
        1: "Einleitung",
        2: "Erklärung",
        3: "Vorlage",
        4: "Ende",
        5: "Zusatz",
    },
    text: {
        1: (
            <p>
                Das Nachhaltigkeitsziel Nummer 2 heißt „Kein Hunger“. Deshalb möchte ich euch eine interessante und
                hoffentlich auch lustige Aufgabe geben, bei der ihr zeigen könnt, welche Lebensmittel euch wichtig und
                gesund erscheinen.{" "}
            </p>
        ),
        2: (
            <div>
                <p>
                    Im Folgenden sollt ihr euch einmal überlegen, was ihr für sehr wichtige Nahrungsmittel haltet und
                    diese in ein Paar Schmetterlingsflügel hinein malen. Dafür benötigt jede:r ein Blatt Papier und
                    einen Stift. Gerne könnt ihr die Schmetterlinge auch bunt ausmalen oder sogar Sachen aufkleben. Aber
                    das ist ganz euch überlassen. Wenn ihr nicht wisst, wie ihr die Flügel eines Schmetterlings zeichnen
                    könnt, dann seht euch die Vorlage auf der nächsten Seite an. Diese sollte auch ausgedruckt mit im
                    Kofer enthalten sein.
                </p>
            </div>
        ),
        3: <img style={{ height: "35vw", margin: "auto", display: "block" }} src={LeereFlügel} alt="" />,
        4: (
            <p>
                Seid ihr alle fertig? Dann könntet ihr euch zusammen in einen Kreis setzen und jede:r stellt seine/ihre
                Flügel kurz vor (Was habe ich gemalt? Warum denke ich, dass dieses Nahrungsmittel wichtig ist?...). Am
                Ende könntet ihr all die verschiedenen Bilder auch aufhängen und die Vielfalt bewundern.
            </p>
        ),
        5: (
            <div>
                <p>
                    Es gibt offiziell zu jedem einzelnen SDG (Nachhaltigkeitsziel) jeweils ein Paar Flügel. Diese könnt
                    ihr unten sehen (das sind die offiziellen Schmetterlingsflügel des zweiten SDGs).
                </p>
                <img style={{ height: "30vw", margin: "auto", display: "block" }} src={FlügelSDG02} alt="" />
            </div>
        ),
    },
    /* eslint-enable react/react-in-jsx-scope */
};
