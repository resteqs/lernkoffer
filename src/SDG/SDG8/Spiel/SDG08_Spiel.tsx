// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG08.png";

import Bauarbeiter from "../Spiel/Media/Bauarbeiter.jpg"
import Minenarbeiter from "../Spiel/Media/Minenarbeiter.jpg"
import Bürojobs from "../Spiel/Media/Bürojobs.jpg"
import Feldarbeiter from "../Spiel/Media/Feldarbeiter.jpg"
import Krankenschwester from "../Spiel/Media/Krankenschwester.jpg"

export const SDG08_Spiel: TextProps = {
    sdgNumber: 8,
    sdgTitle: "Wie Menschenwürdig ist welcher Beruf?",
    sdg: "SDG08",
    logo: Logo,
    header: {
        1: " Einleitung ",
        2: "Aufgabe",
        3: "Minenarbeiter",
        4: "Bürojobs:",
        5: "Bauarbeiter",
        6: "Feldarbeiter",
        7: "Krankenschwester",
        8: "Aufgabe",
        9: "Aufgabe",
        10: "Aufgabe",
        11: "Lösung",
        12: "Fazit"
    },

    text: {
        1: (
            <div>
                {" "}
                Ist dir schon einmal aufgefallen, dass manche Jobs schlechter bezahlt sind als andere? Und dass diese
                Jobs auch keine guten Arbeitsbedingungen haben? Das ist doch total unfair!{" "}
            </div>
        ),
        2: <div> 1. Es werden dir verschiedene Berufe und deren Arbeitsbedingungen gezeigt: </div>,
        3: (
            <div>
                {" "}
                In den Schächten der Bergwerke ist es immer dunkel, eng und es herrschen extreme Temperaturen. Aber das
                ist noch nicht alles, denn die Luft ist oft auch giftig und enthält sehr viel Staub, was die Lunge
                schnell zerstören kann. Außerdem können die Schächte jederzeit einstürzen und die Bezahlung ist sehr
                gering.{" "}

                <img style= {{ marginTop: "200px", marginLeft: "800px" }} src= {Minenarbeiter} alt="" />
            </div>
        ),
        4: (
            <div>
                {" "}
                Bei einem Bürojob sitzt man die meiste Zeit vor einem Computer und arbeitet mit ihm. Das ist körperlich
                nicht anstrengend und auch nicht unbedingt gesundheitsschädlich. Die Arbeitszeit ist normalerweise ganz
                in Ordnung und man verdient in der Regel gut.{" "}

                <img style= {{ marginTop: "200px", marginLeft: "800px" }}src={Bürojobs} alt="" />

            </div>
        ),
        5: (
            <div>
                {" "}
                Als Bauarbeiter arbeitest du hauptsächlich draußen, auch bei starkem Regen oder großer Hitze. Die
                schwere körperliche Arbeit kann sich auch auf deine Gesundheit auswirken, z. B. durch Rückenprobleme.
                Als Bauarbeiter verdienst du nicht sehr viel Geld.
                <ul> <li><img style= {{ marginTop: "200px", marginLeft: "800px" }} src= {Bauarbeiter}  alt="" /> </li></ul>
                

            </div>
        ),
        6: (
            <div>
                {" "}
                Als Feldarbeiter arbeitest du natürlich permanent auf dem Feld, bist also dem Wetter ausgesetzt und das
                ständige Bücken kann zum Beispiel schnell zu gesundheitlichen Problemen führen. Man arbeitet auch nicht
                das ganze Jahr über, sondern nur zu einer bestimmten Jahreszeit, weil die meisten Pflanzen nur in einer
                Jahreszeit wachsen. Außerdem wirst du schlecht bezahlt.
                <ul> <li><img style= {{ marginLeft: "850px", marginTop: "200px" }}  src= {Feldarbeiter}  alt="" /> </li></ul>
                
            </div>
        ),
        7: (
            <div>
                {" "}
                Als Krankenschwester arbeitest du den ganzen Tag mit kranken Menschen, daher ist das Risiko, sich selbst
                anzustecken, sehr hoch. Es gibt auch nicht so viele Krankenschwestern, wie man bräuchte, weshalb diese
                oft Überstunden machen müssen und so überlastet werden. Für diese harte Arbeit wirst du auch
                unterdurchschnittlich bezahlt.

                <ul> <li><img style= {{ marginLeft: "800px", marginTop: "200px" }}  src= {Krankenschwester}  alt="" /> </li></ul>
            </div>
        ),
        8: (
            <div>
                {" "}
                2. Was bedeutet eigentlich „menschenwürdige Arbeit“? Die ILO (engl.: International Labour Organisation,
                dt.: Internationale Arbeitsorganisation) ist eine Organisation der Vereinten Nationen und beschäftigt
                sich genau mit dieser Thematik. Ihr Ziel ist, dass Arbeitsbedingungen verbessert werden und jede Arbeit
                menschenwürdig ist. Dabei haben sie folgende acht Forderungen gestellt: “Keine Zwangs- und
                Pflichtarbeit, Faire Löhne, Würde und Respekt, Keine Diskriminierung, Faire Arbeitszeiten, Sozialer
                Dialog, Sicherheit und Gesundheit, Keine Kinderarbeit”
            </div>
        ),
        9: (
            <div>
                {" "}
                Denkt nun aber auch an die Faktoren, die beeinflussen, wie sehr ein Beruf menschenwürdig ist: den/die
                Arbeitgeber:in (also sozusagen der/die Chef:in) an, die staatlichen Bestimmungen, die Wirtschaft, die
                Kultur und vieles mehr. Viele der aufgeführten Berufe erfüllen mehrere Kriterien, manche mehr, andere
                weniger. Es liegt an euch, einzuschätzen, was in welcher Berufsgruppe erfüllt ist oder nicht.
            </div>
        ),
        10: (
            <div>
                {" "}
                Diskutiert nun in der Gruppe, welcher Beruf der menschenunwürdigste und welcher der menschwürdigste ist.
                Liste diese in einer Rangfolge auf. Nummer 5 ist der menschenwürdigste, Nummer 1 ist der
                menschenunwürdigste. Da nicht immer alle Menschen, die den gleichen Beruf ausüben, auch die gleichen
                Arbeitsbedingungen weltweit haben, gibt es mehrere Lösungen. Ihr könnt auch noch einmal zurückblättern
                und euch die Berufe anschauen, die Lösung findet ihr dann auf der nächsten Seite.{" "}
            </div>
        ),
        11: (
            <div>
                <ul>
                    <li>1: Minenarbeiter </li>
                    <li>2: Bauarbeiter/Feldarbeiter </li>
                    <li>3: Krankenschwester/Bauarbeiter/Feldarbeiter </li>
                    <li>4: Krankenschwester/Feldarbeiter </li>
                    <li>5: Bürojobs </li>
                </ul>
            </div>
        ),
        12: (
            <div>
                {" "}
                Du hast nun hoffentlich bemerkt, dass es sehr große und oft ungerechte Unterschiede zwischen einigen
                Berufen gibt. Du könntest nun deinen Freunden und Eltern davon erzählen, dass immer mehr Aufmerksamkeit
                auf das Problem gelenkt wird und neue Ideen entstehen, wie man dieses lösen könnte. Achte auch bei
                deiner zukünftigen Arbeit darauf, dass sie diese Kriterien erfüllt.{" "}
            </div>
        ),
    },
};
