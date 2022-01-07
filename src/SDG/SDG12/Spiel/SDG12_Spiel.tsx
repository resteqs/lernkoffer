// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG12.png";
import Frage1 from "../Spiel/Media/Frage 1.jpg";
import Frage2 from "../Spiel/Media/Frage 2.jpg";
import Frage3 from "../Spiel/Media/Frage 3.jpg";
import Frage4 from "../Spiel/Media/Frage 4.jpg";
import Frage5 from "../Spiel/Media/Frage 5.jpg";
import Frage6 from "../Spiel/Media/Frage 6.jpg";

export const SDG12_Spiel: TextProps = {
    sdgNumber: 12,
    sdgTitle: "Konsum-Entscheidungsbaum",
    sdg: "SDG12",
    logo: Logo,
    header: {
        1: " Einleitung ",
        2: "Einleitung ",
        3: "Frage 1:",
        4: "Lösung Frage 1",
        5: "Frage 2:",
        6: "Lösung Frage 2",
        7: "Frage 3:",
        8: "Lösung Frage 3",
        9: "Frage 4:",
        10: "Lösung Frage 4",
        11: "Frage 5:",
        12: "Lösung Frage 5",
        13: "Frage 6:",
        14: "Lösung Frage 6",
        15: "Auswertung",
        16: "Auswertung",
        17: "Auswertung",
    },

    text: {
        1: (
            <div>
                {" "}
                Die Art und Weise wie Produkte hergestellt werden, kann sehr viel bei z.B. folgenden Dingen ausmachen:
                Bei dem Thema Umweltschutz, das u.a. eine übermäßige Nutzung natürlicher Ressourcen (= Rohstoffe) wie
                Wasser und Abgasfreisetzung umfasst, und bei der Thematik, ob faire Bedingungen für die Menschen, die an
                der Produktion beteiligt sind, gegeben sind (bei zum Beispiel Kinderarbeit oder zu geringen Löhnen wäre
                das nicht der Fall). Wenn du beim Kauf versuchst, auf genau diese Dinge zu achten und auch überlegst, ob
                du alles, was du kaufst, auch brauchst, nennt sich das „Nachhaltiger Konsum“. (Konsum bezeichnet den
                Verbrauch beziehungsweise Genuss von zum Beispiel Lebensmitteln)
            </div>
        ),
        2: (
            <div>
                Doch es ist manchmal echt schwer zu wissen wie nachhaltig ein Produkt ist. Entscheide dich nun jeweils,
                welche der beiden Personen nachhaltiger einkauft, die Lösung findest du jeweils auf der nächsten Seite.
                Zählt mit, wie viele richtige Antworten ihr habt.
            </div>
        ),
        3: (
            <div>
                <ul>
                    <li> Wer verhält sich nachhaltiger: </li>
                    <li>
                        {" "}
                        <p style={{ fontStyle: "italic" }}> Person 1: </p> „Ich kaufe mir die neuen Schuhe, die alle
                        haben. Meine alten Schuhe sind zwar noch gut, aber mir gefallen sie nicht mehr. Ich brauche
                        neue!“{" "}
                    </li>
                    <li>
                        {" "}
                        <p style={{ fontStyle: "italic" }}> Person 2: </p> „Wenn mir meine Schuhe zu klein sind, kaufe
                        ich mir neue. Vorher muss es ja noch nicht sein!“{" "}
                    </li>
                    <img style={{ marginLeft: "700px" }} src={Frage1} alt="" />
                </ul>
            </div>
        ),
        4: (
            <div>
                {" "}
                Person 2 verhält sich nachhaltiger! Sie hat erkannt, dass man auch mit dem, was man hat, zufrieden sein
                kann und nicht immer das Allerneueste haben muss. So spart man Ressourcen, Geld und schützt die Umwelt.
            </div>
        ),
        5: (
            <div>
                <ul>
                    <li> Wer verhält sich nachhaltiger: </li>
                    <li>
                        {" "}
                        <p style={{ fontStyle: "italic" }}> Person 1: </p> „Mein Handydisplay ist kaputt. Ich muss mir
                        dringend ein neues kaufen!“{" "}
                    </li>
                    <li>
                        {" "}
                        <p style={{ fontStyle: "italic" }}> Person 2: </p> „Mein Handydisplay ist kaputt. Ich muss es
                        dringend reparieren lassen.“{" "}
                    </li>
                    <img style={{ marginLeft: "700px", marginTop: "100px" }} src={Frage2} alt="" />
                </ul>
            </div>
        ),
        6: (
            <div>
                Person 2 verhält sich nachhaltiger! Sie hat erkannt, dass man nicht immer alles neu kaufen muss. Gerade
                bei Elektronik werden zum Beispiel bei der Produktion von Akkus viele seltene Rohstoffe (z. B. Kobalt)
                verwendet.
            </div>
        ),

        7: (
            <div>
                <div>
                    <ul>
                        <li> Wer verhält sich nachhaltiger: </li>
                        <li>
                            {" "}
                            <p style={{ fontStyle: "italic" }}> Person 1: </p> „Ich kaufe diese Schokolade. Zum Glück
                            ist da das Fairtrade Siegel drauf (das heißt unter anderem, dass alle, die an dem Produkt
                            mitgearbeitet haben, fair bezahlt werden). Dann ist ja alles gut!“{" "}
                        </li>
                        <li>
                            {" "}
                            <p style={{ fontStyle: "italic" }}> Person 2: </p> „Ich kaufe lieber eine etwas billigere
                            Schokolade. Da steht auch drauf, dass alle fair bezahlt wurden, aber ohne ein Siegel.
                            Gleiches Ergebnis und ich habe Geld gespart.“{" "}
                        </li>
                        <img style={{ marginLeft: "900px", marginTop: "50px", height: "300px" }} src={Frage3} alt="" />
                    </ul>
                </div>
            </div>
        ),
        8: (
            <div>
                Person 1 verhält sich nachhaltiger! Sie hat erkannt, dass man einer Aussage des Herstellers nicht
                unbedingt trauen kann. Dass ist zwar auch nicht immer bei Siegeln der Fall, doch Fairtrade ist ein recht
                bekanntes und seriöses Siegel (obwohl teilweise die Kennzeichnung nicht ganz übersichtlich zeigt, ob das
                ganze oder nur Teile des Produkts Fairtrade sind).
            </div>
        ),
        9: (
            <div>
                <ul>
                    <li> Wer verhält sich nachhaltiger: </li>
                    <li>
                        {" "}
                        <p style={{ fontStyle: "italic" }}> Person 1: </p> „Ich kaufe mir eine neue Fairtrade Hose aus
                        Bio-Baumwolle! Da habe ich an alles gedacht.“
                    </li>
                    <li>
                        {" "}
                        <p style={{ fontStyle: "italic" }}> Person 2: </p> „Ich kaufe mir eine Second-Hand Jeans. Dann
                        muss sie nicht wegeschmissen werden und ich komme billiger weg.“{" "}
                    </li>
                    <img style={{ marginLeft: "700px", marginTop: "50px" }} src={Frage4} alt="" />
                </ul>
            </div>
        ),
        10: (
            <div>
                {" "}
                Person 2 verhält sich nachhaltiger! Sie hat erkannt, dass, egal wie nachhaltig etwas produziert wird,
                trotzdem meist natürliche Rohstoffe in irgendeiner Form verwendet-werden. Deswegen ist es auf jeden Fall
                besser, bereits produzierte Sachen noch einmal zu verwenden.{" "}
            </div>
        ),
        11: (
            <div>
                <ul>
                    <li> Wer verhält sich nachhaltiger: </li>
                    <li>
                        {" "}
                        <p style={{ fontStyle: "italic" }}> Person 1: </p> „Ich kaufe Obst immer im Supermarkt, leider
                        ist es immer in Plastik verpackt“
                    </li>
                    <li>
                        {" "}
                        <p style={{ fontStyle: "italic" }}> Person 2: </p>„Ich kaufe mein Obst in einem Bioladen, der
                        einem anbietet, selbst Tüten für das Obst mitzubringen und so Verpackungsmaterial zu sparen “{" "}
                    </li>
                    <img style={{ marginLeft: "700px", marginTop: "100px" }} src={Frage5} alt="" />
                </ul>
            </div>
        ),
        12: (
            <div>
                {" "}
                Person 2 verhält sich nachhaltiger! Sie hat erkannt, dass man so gut wie möglich versuchen muss,
                Verpackungsmüll zu vermeiden.{" "}
            </div>
        ),
        13: (
            <div>
                <ul>
                    <li> Wer verhält sich nachhaltiger: </li>
                    <li>
                        {" "}
                        <p style={{ fontStyle: "italic" }}> Person 1: </p> „Wenn ich Durst habe, kaufe ich mir einfach
                        eine Falsche Wasser. Wenn es nicht anders geht, dann halt aus einer Plastikflasche…“
                    </li>
                    <li>
                        {" "}
                        <p style={{ fontStyle: "italic" }}> Person 2: </p> „Ich nehme mir eigentlich immer eine
                        Wasserflasche mit, falls ich Durst bekomme!“
                    </li>
                    <img style={{ marginLeft: "700px", height: "400px", marginTop: "100px" }} src={Frage6} alt="" />
                </ul>
            </div>
        ),
        14: (
            <div>
                {" "}
                Person 2 verhält sich nachhaltiger! Sie hat erkannt, dass man keine Einweg Wasserflaschen kaufen sollte,
                wenn man sich auch einmalig eine Trinkflasche kaufen kann…{" "}
            </div>
        ),

        15: (
            <div>
                <ul>
                    <li> „Nachhaltigkeitslevel“ 1: (0 – 2 richtige Antworten) </li>
                    <li style={{ marginTop: "100px", fontStyle: "italic" }}>
                        {" "}
                        Scheinbar ist dein Konsum noch nicht nachhaltig. Aber vielleicht merkst du dir ja, was du besser
                        machen könntest!{" "}
                    </li>
                </ul>
            </div>
        ),

        16: (
            <div>
                <ul>
                    <li> „Nachhaltigkeitslevel“ 2: (3 – 4 richtige Antworten) </li>
                    <li style={{ marginTop: "100px", fontStyle: "italic" }}>
                        {" "}
                        Scheinbar ist dein Konsum teilweise nachhaltig, aber noch lange nicht immer. Aber vielleicht
                        merkst du dir ja, was du besser machen könntest und behältst bei, was du richtig gemacht hast.{" "}
                    </li>
                </ul>
            </div>
        ),

        17: (
            <div>
                <ul>
                    <li> „Nachhaltigkeitslevel“ 3: ( 5 – 6 richtige Antworten) </li>
                    <li style={{ marginTop: "100px", fontStyle: "italic" }}>
                        {" "}
                        Scheinbar ist dein Konsum richtig nachhaltig, aber noch lange nicht immer. Aber vielleicht
                        merkst du dir ja, was du besser machen könntest und behältst bei, was du richtig gemacht hast.{" "}
                    </li>
                </ul>
            </div>
        ),
    },
};
