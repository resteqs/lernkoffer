/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG03.png";
import Alko from "./media/AlkoholmachtBirnehohl.png";
import Ziga from "./media/Zigarette.png";
import Pflanze from "./media/CanabisPflanze.png";
import Joint from "./media/Joint.png";

export const SDG03_Quiz: TextProps = {
    sdgNumber: 3,
    sdgTitle: "(Legale) Drogen und deren Folgen",
    sdg: "SDG03",
    logo: Logo,
    header: {
        1: "Einstieg",
        2: "Einstieg",
        3: "Einstieg",
        4: "Einstieg",
        5: "Einstieg",
        6: "Einstieg",
        7: "Erstes Beispiel",
        8: "Erstes Beispiel",
        9: "Zweites Beispiel",
        10: "Zweites Beispiel",
        11: "Zweites Beispiel",
        12: "Drittes Beispiel",
        13: "Drittes Beispiel",
        14: "Drittes Beispiel",
        15: "Drittes Beispiel",
        16: "Ranking",
        17: "Ranking",
        18: "Schlusswort",
    },
    text: {
        1: (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <p>Zitat: </p>
                <b>„Gesundheit ist die erste Pflicht im Leben”</b> <p style={{ fontStyle: "italic" }}>(Oscar Wilde)</p>
            </div>
        ),
        2: (
            <div>
                <p>
                    Es ist wichtig, darauf zu achten, dass wir gesund bleiben, sowohl körperlich als auch seelisch. Im
                    Folgenden konzentrieren wir uns nun auf die körperliche Gesundheit. Aber wann ist unser Körper
                    eigentlich „gesund“?
                </p>
            </div>
        ),
        3: (
            <div>
                <p>Die WHO beschreibt die Gesundheit 1948 auf folgende Weise:</p>{" "}
                <p>
                    "Gesundheit ist ein Zustand völligen […] Wohlbefindens und nicht nur das Freisein von Krankheit und
                    Gebrechen. Sich des bestmöglichen Gesundheitszustandes zu erfreuen ist ein Grundrecht jedes
                    Menschen, ohne Unterschied der Rasse, der Religion, der politischen Überzeugung, der
                    wirtschaftlichen oder sozialen Stellung."
                </p>
            </div>
        ),
        4: (
            <div>
                <p>
                    Das heißt also, dass man, wenn man sich wohl fühlt und keine Krankheiten hat, gesund ist. Außerdem
                    ist es ein Menschenrecht so gesund wie möglich zu sein! Deshalb sollte auch jeder Mensch auf der
                    Welt zu einem/r Arzt/Ärztin gehen können, wenn er krank ist.
                </p>
            </div>
        ),
        5: (
            <div>
                <p>
                    Das Gute ist aber, dass wir nicht hilflos sind und viele Dinge tun können, um unsere Gesundheit zu
                    erhalten und/oder zu verbessern. Zum einen können wir unseren Körper unterstützen gesund zu bleiben,
                    indem wir uns z.B. ausreichend viel bewegen, gesund Essen und Trinken, regelmäßig waschen und
                    genügend schlafen. Zum anderen hilft es aber unserem Körper auch, wenn wir gewisse Dinge entweder
                    gar nicht machen oder nur ab und zu. Was genau damit gemeint ist, erfahrt ihr nun:
                </p>
            </div>
        ),
        6: (
            <div>
                <p>
                    Es gibt viele Sachen auf der Welt, die uns nicht guttun und uns krank machen. Dabei sind manche
                    gefährlicher als andere. Ihr seht jetzt gleich 3 Bilder und dazu jeweils einen Infotext. Lest euch
                    alles durch und überlegt dann, welche Dinge schlechter oder weniger schlecht für die Gesundheit
                    sind. Ordnet am Ende die Bilder jeweils den Plätzen 1-3 zu. Platz 1 ist für die Sache, die ihr am
                    schlimmsten für den Körper seht, Platz 3 für das, was am wenigsten schädlich ist. Tipp: Denkt hier
                    eher an die Folgen für den Menschen, wenn er es bereits lange zu sich genommen hat.{" "}
                </p>
            </div>
        ),
        7: (
            <div>
                <p>
                    Auf diesem Bild könnt ihr sehen wie mehrere Menschen mit einem alkoholischen Getränk anstoßen.
                    Vielleicht habt ihr von solchen Getränken schon gehört, die bekanntesten sind zum Beispiel Bier,
                    Wein oder Schnaps. „Alkoholische“ Getränke enthalten, wie bereits der Namen sagt, <b>Alkohol</b>.
                    Das ist eine Flüssigkeit ohne Farbe, die leicht brennbar ist und einen typischen Geruch und
                    Geschmack hat. In den Getränken, die man im Supermarkt einkaufen kann, ist aber immer nur ein
                    kleiner Teil Alkohol enthalten, gemischt mit z.B. Säften oder anderen Flüssigkeiten.
                </p>
                <img style={{ height: "35vh", marginTop: "5vh", margin: "auto", display: "block" }} src={Alko} alt="" />
            </div>
        ),
        8: (
            <div>
                <p>
                    Wenn man Alkohol trinkt, gelangt dieser direkt ins Blut und dann weiter in die <b>Leber</b> (ein
                    Organ in deinem Bauch). Da Alkohol aber giftig für den Körper ist, verwandelt die Leber ihn in einen
                    weniger schädlichen Stoff. Das dauert allerdings etwas länger. Die Gefahr bei alkoholischen
                    Getränken ist, dass man <b>süchtig</b> werden kann, wenn man regelmäßig trinkt, da sich der Körper
                    an dessen Wirkung gewöhnt. Dies wird dann „Alkoholsucht“, „Alkoholkrankheit“ oder „Alkoholismus“
                    genannt. Dabei wird jedoch die Leber auf lange Sicht sehr überlastet, weil sie dann ständig daran
                    arbeiten muss, den Alkohol abzubauen. Aber auch <b>andere Organe</b> in deinem Bauch (z.B. der
                    Magen), das <b>Herz</b> und das <b>Gehirn</b>
                    nehmen Schaden. Zusätzlich steigt das Risiko an verschiedenen Arten von <b>Krebs</b> zu erkranken.
                </p>
            </div>
        ),
        9: (
            <div>
                <p>
                    Hier könnt ihr eine <b>Zigarette</b> sehen. Ihr Hauptbestandteil ist Tabak, also die braunen Krümel,
                    die in Zigarettenpapier eingerollt sind. Tabak ist eigentlich eine Pflanze mit grünen Blättern,
                    welche jedoch für die Zigaretten getrocknet und zerkleinert werden.{" "}
                </p>
                <img style={{ height: "50vh", marginTop: "5vh", margin: "auto", display: "block" }} src={Ziga} alt="" />
            </div>
        ),
        10: (
            <div>
                <p>
                    In diesen ist der Stoff <b>Nikotin</b>, der nach dem Anzünden der Zigarette mit dem Rauch in die
                    Lunge gelangt. Nachdem er vom Körper aufgenommen wurde, sorgt er dafür, dass das <b>Herz</b>{" "}
                    schneller schlägt, wodurch das Blut schneller fließt. Das ist auf Dauer nicht gut für das Herz und
                    die <b>Blutgefäße </b>
                    (kleine Röhrchen im Körper, durch die das Blut fließt). Jedoch kann man durch das Nikotin und dessen
                    Wirkung <b>süchtig</b> nach Zigaretten werden. Dann muss man immer wieder rauchen, ansonsten wird
                    man gereizt und ruhelos.{" "}
                </p>
            </div>
        ),
        11: (
            <div>
                <p>
                    Aber wusstet ihr schon, dass in Zigaretten noch andere schädliche Stoffe sind außer Nikotin?
                    Insgesamt sind <b>mehr als 40 Stoffe </b>im Rauch nachweislich <b>krebserregend</b>. Ein weiterer
                    ist zum Beispiel
                    <b> Teer</b>. Dieser zerstört kleine Härchen in der Lunge, welche diese sauber halten. Wenn sie
                    kaputt sein, kann die Lunge nicht mehr vor dem Schmutz geschützt werden. Das merkt der Raucher dann
                    dadurch, dass er weniger Ausdauer hat und schneller außer Puste kommt. Aber durch die Schadstoffe im
                    Tabak leiden nicht nur das Herz und die Lunge. Auch die <b>Haut</b>, die <b>Zähne</b>, die{" "}
                    <b>Zunge</b> und <b>Teile des Halses </b>werden krank.{" "}
                </p>
            </div>
        ),
        12: (
            <div>
                <p>
                    Die abgebildeten Blätter sind von der Hanf- bzw. Cannabis-Pflanze. Die weiblichen Blüten und die
                    Blätter dieser Pflanze werden, wenn man sie trocknet, <b>Marihuana</b>. Das Harz der Pflanze wird{" "}
                    <b>Haschisch </b>
                    genannt.{" "}
                </p>
                <img
                    style={{ height: "50vh", marginTop: "5vh", margin: "auto", display: "block" }}
                    src={Pflanze}
                    alt=""
                />
            </div>
        ),
        13: (
            <div>
                <p>
                    Am häufigsten wird Marihuana oder Haschisch geraucht, indem man es zerbröselt mit Tabak (von
                    normalen Zigaretten) vermischt und zu einem Joint dreht. Dieser sieht meist einer selbst gedrehten
                    Zigarette ähnlich, wie man auf dem gezeigten Bild sehen kann. Andere Möglichkeiten wären auch noch
                    über unterschiedliche Arten von Pfeifen zu rauchen oder Cannabisprodukte in Keksen etc. zu verbacken
                    und dann zu essen.{" "}
                </p>
                <img
                    style={{ height: "45vh", marginTop: "3vh", margin: "auto", display: "block" }}
                    src={Joint}
                    alt=""
                />
            </div>
        ),
        14: (
            <div>
                <p>
                    Die Wirkung von Marihuana kommt durch einen Stoff in den Blüten, der abgekürzt THC genannt wird.
                    Insgesamt sind die gesundheitlichen Folgen von Cannabis noch nicht ganz erforscht, aber man weiß zum
                    Beispiel, dass der Körper deutlich länger braucht THC als Alkohol abzubauen. Außerdem leidet die
                    <b> Leistungsfähigkeit des Gehirns</b> bei regelmäßigem Rauchen. Man geht sogar davon aus, dass es
                    Gehirnschäden verursachen kann, wenn man als Jugendliche:r damit anfängt.
                </p>
            </div>
        ),
        15: (
            <div>
                <p>
                    Da es oft vermischt mit Tabak geraucht wird, werden dessen Risiken übernommen und dementsprechend
                    die <b>Lunge</b> geschädigt. Ein erhöhtes Risiko für Krebserkrankungen ist noch nicht sicher
                    festgestellt worden, aber man geht davon aus, dass auch Cannabisrauch{" "}
                    <b>Teer und andere Schadstoffe</b> enthält. Noch dazu gibt es ein erhöhtes
                    <b> Herzinfarktrisiko</b> und auch wieder die Gefahr, dass man <b>abhängig</b> werden kann.
                </p>
            </div>
        ),
        16: (
            <div>
                <p>
                    Jetzt könnt ihr euch entscheiden, welche dieser drei Drogen deiner Einschätzung nach für den Körper
                    am besten (Platz 3) und am schlchtesten (Platz 1) für den Körper ist. Ich sage euch gleich, wie es
                    tatsächlich ist
                </p>
            </div>
        ),
        17: (
            <div style={{ fontSize: "2.3vw" }}>
                <b>Platz 1: Zigarette</b>
                <ul>
                    <li>- Ungefähr 7 Millionen (7 000 000) Todesfälle weltweit 2017 durch (die Folgen von) Rauchen</li>
                    <li>- Ungefähr 1,7 Milliarden (1 700 000 000) Menschen rauchen weltweit regelmäßig</li>
                </ul>
                <b>Platz 2: Alkohol</b>
                <ul>
                    <li>- Ungefähr 3 Millionen (3 000 000) Todesfälle weltweit 2017 durch Alkohol</li>
                    <li>- Ungefähr 140 Millionen (140 000 000) Menschen weltweit alkoholabhängig</li>
                </ul>
                <b>Platz 3: Cannabis</b>
                <ul>
                    <li>- Kaum Todesfälle durch Cannabis</li>
                    <li>- Ungefähr 13 Millionen (13 000 000) Menschen weltweit abhängig von Cannabis</li>
                </ul>
            </div>
        ),
        18: (
            <div>
                <p>
                    Das heißt jedoch nicht, dass man Cannabis nun ohne Risiken konsumieren kann. Alle drei Dinge sind
                    Drogen, also wird man von ihnen in einen Rausch versetzt. Obwohl Alkohol und Zigaretten, und auch in
                    manchen Ländern Cannabis, legal (gesetzlich erlaubt) sind, muss man vorsichtig mit ihnen umgehen.
                    Die Gefahr ist immer vorhanden, süchtig zu werden und sie sind alle schädigend für die Gesundheit.
                    Also haltet euch an die Altersbegrenzungen in eurem Land, informiert euch, bevor ihr etwas zu euch
                    nehmt, was ihr nicht kennt und geht keine Risiken ein.{" "}
                </p>
            </div>
        ),
    },
    /* eslint-enable unicorn/filename-case */
    /* eslint-enable react/react-in-jsx-scope */
    /* eslint-enable react/no-unescaped-entities */
    /* eslint-enable @typescript-eslint/object-curly-spacing */
};
