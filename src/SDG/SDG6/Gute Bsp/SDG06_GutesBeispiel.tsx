/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/filename-case */
import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG06.png";
import React from "react";
import SitzWaterOrg from "./Media/Sitz.png";
import WasserBox from "./Media/WasserBox.png";
import SitzWasserBox from "./Media/SitzWasserBox.png";
import SitzStarvation from "./Media/SitzSanivation.png";
import SitzKenia from "./Media/SitzKenia.png";
import Holzkohlebriketts from "./Media/Holzkohlebriketts.png";
import BlaueBox from "./Media/BlaueBox.png";
import Käfer from "./Media/Käfer.png";
import SitzMajik from "./Media/SitzMajik.png";
import SitzMajik2 from "./Media/SitzMajik2.png";
import SitzHydro from "./Media/SitzHydro.png";
import SystemHydra from "./Media/SystemHydra.png";

import "../../../styles/tableBasic.css";
import { InfotextButton } from "../../../Components/Buttons/InfotextButton";
import { Link } from "react-router-dom";

export const SDG06_GutesBeispiel: TextProps = {
    sdgNumber: 6,
    sdgTitle: "Steckbriefe zu verschiedenen Projekten",
    sdg: "SDG06",
    logo: Logo,
    header: {
        1: "Tutorial",
        2: "Tutorial",
        3: "water.org",
        4: "water.org",
        5: "water.org",
        6: "The Water Box",
        7: "The Water Box",
        8: "The Water Box",
        9: "The Water Box",
        11: "The Water Box - Sitz",
        10: "The Water Box - Wasser Box",
        12: "Sanivation ",
        13: "Sanivation ",
        14: "Sanivation ",
        15: "Sanivation ",
        16: "Sitz von Naivasha",
        17: "Sitz von Naivasha",
        18: "Holzkohlebriketts",
        19: "Blaue Boxen",
        20: "Majik Water",
        21: "Majik Water",
        22: "Majik Water - Sitz",
        23: "Majik Water - Sitz",
        24: "Majik Water - Nebeltrinker-Käfer",
        25: "Hydraloop Systeme",
        26: "Hydraloop Systeme",
        27: "Hydraloop Systeme - Sitz",
        28: "Hydraloop Systeme - Maschine",
    },

    text: {
        1: (
            <div>
                <p>
                    Ich habe ein paar Steckbriefe vorbereitet, die interessante Projekte vorstellen, welche sich mit dem
                    Wasserproblem beschäftigen, das auf der ganzen Welt herrscht.
                </p>
                <p>
                    In ein paar Jahren wird es kaum noch genug Wasser für alle Lebewesen auf der Erde geben, wenn wir
                    nicht bald anfangen zu handeln. Deshalb haben schon viele Leute angefangen, Wasser zu sparen oder es
                    zu recyceln (aufbereiten und wieder verwenden) und das auf ganz unterschiedliche Arten.
                </p>
                <p>
                    Im Folgenden kannst du etwas über fünf Projekte lesen und Wissen, das vielleicht nicht nur
                    interessant, sondern auch hilfreich sein kann, sammeln.
                </p>
            </div>
        ),
        2: (
            <p>
                Nachdem du etwas über jedes einzelne der Projekte gelesen hast, warten ein paar Fragen auf dich, mit
                denen du dich selbst testen kannst. Das wird natürlich kein wirklicher Test, es sind nur einige
                (vielleicht sogar lustige) Fragen, zum Nachdenken.
            </p>
        ),
        // Water.org
        3: (
            <table className="tg">
                <tbody>
                    <tr>
                        <td className="tg-0pky">
                            <b>Sitz:</b>
                        </td>
                        <td className="tg-0pky">Weltweit</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Idee von:</b>
                        </td>
                        <td className="tg-0pky">Matt Damon, Gary White</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Problem:</b>
                        </td>
                        <td className="tg-0pky">
                            Die Erfinder denken, dass das Problem des Wassermangels nur dadurch begründet ist, dass die
                            Menschen in vielen Regionen der Erde zu wenig Geld haben, um genug Wasser zu kaufen, oder
                            entsprechende Projekte zu unterstützen.
                        </td>
                    </tr>
                </tbody>
            </table>
        ),
        4: (
            <table className="tg">
                <tbody>
                    <tr>
                        <td className="tg-0pky">
                            <b>Ziel:</b>
                        </td>
                        <td className="tg-0pky">Jeder sollte Zugang zu genügend Wasser haben.</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Umsetzung:</b>
                        </td>
                        <td className="tg-0pky">
                            Die Organisation hinter der Internetseite gibt Menschen Kredite (leiht ihnen Geld), damit
                            sie sich ausreichend Wasser kaufen können oder Projekte unterstützen können, die etwas gegen
                            den Wassermangel unternehmen. Die Kredite werden dann monatlich mit Zahlungen in Höhe von
                            vier oder fünf Euro zurückgezahlt.
                        </td>
                    </tr>
                </tbody>
            </table>
        ),
        5: (
            <table className="tg">
                <tbody>
                    <tr>
                        <td className="tg-0pky">
                            <b>Preis:</b>
                        </td>
                        <td className="tg-0pky">
                            Die Menschen, die sich Geld leihen, zahlen monatlich etwa vier oder fünf Euro. Wenn du dir
                            kein Geld geliehen hast, dann kannst du die Organisation trotzdem unterstützen, indem du
                            Geld spendest.
                        </td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Verbreitung:</b>
                        </td>
                        <td className="tg-0pky">
                            Weltweit gibt es Niederlassung von dieser Organisation, das heißt, in verschiedenen Ländern
                            helfen mehrere Gruppen den Menschen.
                        </td>
                    </tr>
                </tbody>
            </table>
        ),
        6: <img style={{ margin: "auto", display: "block" }} src={SitzWaterOrg} alt="" />,

        // The water box
        7: (
            <table className="tg">
                <tbody>
                    <tr>
                        <td className="tg-0pky">
                            <b>Sitz:</b>
                        </td>
                        <td className="tg-0pky">Flint, Michigan (USA)</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Idee von:</b>
                        </td>
                        <td className="tg-0pky">Jaden Smith</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Problem:</b>
                        </td>
                        <td className="tg-0pky">
                            In Flint war das Wasser in dem städtischen Wassersystem verunreinigt, also mussten die Leute
                            dort schnell handeln. Der erste Versuch war Wasser aus gespendeten Wasserflaschen zu nutzen.
                            Das war allerdings keine gute Idee, da dabei sehr viel Plastikmüll entstand. Also
                            entwickelte Jaden Smith eine Maschine, die das Wasser filtert.
                        </td>
                    </tr>
                </tbody>
            </table>
        ),
        8: (
            <table className="tg">
                <tbody>
                    <tr>
                        <td className="tg-0pky">
                            <b>Ziel:</b>
                        </td>
                        <td className="tg-0pky">
                            Menschen um die ganze Welt sollen einen Weg haben, um verunreinigtes Wasser (egal in fern
                            verunreinigt), aufzubereiten. Aber gleichzeitig sollen sie nicht auf gespendetes Wasser in
                            Flaschen angewiesen sein und somit ein erhöhtes Aufkommen an Plastikmüll vermeiden.
                        </td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Umsetzung:</b>
                        </td>
                        <td className="tg-0pky">
                            Auf der Internetseite kann Wasser gekauft werden. Das so eingenommene Geld wird genutzt, um
                            neue „Water boxes“ (Wasser Boxen) zu bauen. Diese werden dann dort aufgestellt, wo sie am
                            meisten benötigt werden.
                        </td>
                    </tr>
                </tbody>
            </table>
        ),
        9: (
            <table className="tg">
                <tbody>
                    <tr>
                        <td className="tg-0pky">
                            <b>Preis:</b>
                        </td>
                        <td className="tg-0pky">
                            Auf der Internetseite kann man Geld spenden (die Summe kannst du selbst aussuchen) oder man
                            „kauft“ einen Behälter für ungefähr 14 €, dieser wird dann an einer von den Wasser Boxen
                            ausgehändigt. Oder man spendet 82,50 € und zahlt damit einen Anteil an einer neuen Wasser
                            Box, weil diese sehr teuer sind und pro Stück 4125,25 € kosten.
                        </td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Verbreitung:</b>
                        </td>
                        <td className="tg-0pky">Dieses Projekt ist bis jetzt nur in den USA verfügbar.</td>
                    </tr>
                </tbody>
            </table>
        ),
        10: <img style={{ margin: "auto", display: "block", width: "30%" }} src={WasserBox} alt="" />,
        11: <img style={{ margin: "auto", display: "block", width: "60%" }} src={SitzWasserBox} alt="" />,

        // Sanivation
        12: (
            <table className="tg">
                <tbody>
                    <tr>
                        <td className="tg-0pky">
                            <b>Sitz:</b>
                        </td>
                        <td className="tg-0pky">Naivasha, Kenia</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Idee von:</b>
                        </td>
                        <td className="tg-0pky">Andrew Foote (CEO & Mitgründer), Emily Woods (COO & Mitgründerin) </td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Problem:</b>
                        </td>
                        <td className="tg-0pky">
                            geringer Zugang zu sanitären Einrichtungen und Dienstleistungen für feste Abfälle,
                            Herausforderungen in Bezug auf die Wasserqualität
                        </td>
                    </tr>
                </tbody>
            </table>
        ),
        13: (
            <table className="tg">
                <tbody>
                    <tr>
                        <td className="tg-0pky">
                            <b>Ziel:</b>
                        </td>
                        <td className="tg-0pky">
                            Gesundheit und Hygiene verbessern, indem infektiöse Abfälle aus der Gemeinschaft reduziert
                            werden und es zur Vorbeugung von Infektionskrankheiten kommt; für einen sauberen,
                            effizienten und umweltfreundlichen Kraftstoff sorgen
                        </td>
                    </tr>
                </tbody>
            </table>
        ),
        14: (
            <table className="tg">
                <tbody>
                    <tr>
                        <td className="tg-0pky">
                            <b>Umsetzung:</b>
                        </td>
                        <td className="tg-0pky">
                            Sie stellen Heimtoiletten („Blaue Boxen“) zur Verfügung, sammeln den menschlichen Abfall
                            einmal wöchentlich ein und bringen ihn zu einer „Abfall-zu-Energie-Anlage“. Diese
                            Klärschlammbehandlungsanlage nimmt Fäkalienschlamm auf und macht daraus Biomassebrennstoffe,
                            um Brennholz und die traditionelle Holzkohle zu ersetzen.
                        </td>
                    </tr>
                </tbody>
            </table>
        ),
        15: (
            <table className="tg">
                <tbody>
                    <tr>
                        <td className="tg-0pky">
                            <b>Preis:</b>
                        </td>
                        <td className="tg-0pky">
                            Ein monatliches Abonnement einer Blue Box kostet etwa 5,75 Euro, und die Holzkohlebriketts
                            kosten 0,16 Euro pro kg
                        </td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Verbreitung:</b>
                        </td>
                        <td className="tg-0pky">Kenia</td>
                    </tr>
                </tbody>
            </table>
        ),
        16: <img style={{ margin: "auto", display: "block", width: "40%" }} src={SitzStarvation} alt="" />,
        17: <img style={{ margin: "auto", display: "block", width: "40%" }} src={SitzKenia} alt="" />,
        18: <img style={{ margin: "auto", display: "block", width: "40%" }} src={Holzkohlebriketts} alt="" />,
        19: <img style={{ margin: "auto", display: "block", width: "30%" }} src={BlaueBox} alt="" />,

        // Majik Water
        20: (
            <table className="tg">
                <tbody>
                    <tr>
                        <td className="tg-0pky">
                            <b>Sitz:</b>
                        </td>
                        <td className="tg-0pky">Nairobi, Kenia (Kenya Climate Innovation Center)</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Idee von:</b>
                        </td>
                        <td className="tg-0pky">Beth Koigi (CEO)</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Problem:</b>
                        </td>
                        <td className="tg-0pky">Wassermangel; schmutziges, verunreinigtes Wasser</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Ziel:</b>
                        </td>
                        <td className="tg-0pky">
                            Erschaffen einer neuen Quelle von erschwinglichem, sauberem Wasser, die netzunabhängig
                            funktioniert und pro Liter Wasser eine Bezahlung bietet, für Gemeinden mit Wasserknappheit
                        </td>
                    </tr>
                </tbody>
            </table>
        ),
        21: (
            <table className="tg">
                <tbody>
                    <tr>
                        <td className="tg-0pky">
                            <b>Umsetzung:</b>
                        </td>
                        <td className="tg-0pky">Sauberes, sicheres Trinkwasser wird aus der Luft entzogen </td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Inspiration:</b>
                        </td>
                        <td className="tg-0pky">„Namibian beetle“ = Nebeltrinker-Käfer </td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Verbreitung:</b>
                        </td>
                        <td className="tg-0pky">Kenia</td>
                    </tr>
                </tbody>
            </table>
        ),
        22: <img style={{ margin: "auto", display: "block", width: "40%" }} src={SitzMajik} alt="" />,
        23: <img style={{ margin: "auto", display: "block", width: "40%" }} src={SitzMajik2} alt="" />,
        24: <img style={{ margin: "auto", display: "block", width: "60%" }} src={Käfer} alt="" />,

        // Hydraloop System
        25: (
            <table className="tg">
                <tbody>
                    <tr>
                        <td className="tg-0pky">
                            <b>Sitz:</b>
                        </td>
                        <td className="tg-0pky">Leeuwarden, Niederlande</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Idee von:</b>
                        </td>
                        <td className="tg-0pky">Sabine Stuiver</td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Problem:</b>
                        </td>
                        <td className="tg-0pky">
                            Wasser wird häufig als ein sehr billiges Mittel angesehen. Allerdings sagen Berechnungen,
                            dass das Wasser bereits in wenigen Jahren nicht mehr für alle Menschen ausreichen wird. Aus
                            diesem Grund müssen wir sofort anfangen so viel Wasser wie möglich zu säubern und immer
                            wieder her zu nehmen.
                        </td>
                    </tr>
                </tbody>
            </table>
        ),
        26: (
            <table className="tg">
                <tbody>
                    <tr>
                        <td className="tg-0pky">
                            <b>Ziel:</b>
                        </td>
                        <td className="tg-0pky">
                            Wasser soll zuhause recycelt (also sauber gemacht und wieder verwändet) werden.
                        </td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Umsetzung:</b>
                        </td>
                        <td className="tg-0pky">
                            Die Maschinen werden zum Beispiel in den Keller gestellt und reinigen so von selbst das
                            verunreinigte Wasser aus dem Haushalt.
                        </td>
                    </tr>
                    <tr>
                        <td className="tg-0pky">
                            <b>Preis:</b>
                        </td>
                        <td className="tg-0pky">Ungefähr 4000 €</td>
                    </tr>
                </tbody>
            </table>
        ),
        27: <img style={{ margin: "auto", display: "block", width: "50%" }} src={SitzHydro} alt="" />,
        28: <img style={{ margin: "auto", display: "block", width: "40%" }} src={SystemHydra} alt="" />,
        29: (
            <div style={{ margin: "auto", display: "block", width: "40%" }}>
                <Link to="/SDG06/GutesBeispielQuiz">
                    <InfotextButton version="green">Zum Quiz</InfotextButton>
                </Link>
            </div>
        ),
    },
};
