// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG13.png";
import "../sdg13.css";

export const SDG13_FreieArbeit: TextProps = {
    sdgNumber: 13,
    sdgTitle: "Menschenkette",
    sdg: "SDG13",
    logo: Logo,
    header: {
        1: " Einleitung ",
        2: "Einleitung",
        3: "Basteln",
        4: "Anleitung",
        5: "Anleitung",
    },

    text: {
        1: (
            <div>
                <ul>
                    <li> Flugzeuge, Schifffahrt, Klamotten. Was haben diese drei Bereiche gemeinsam?</li>
                    <li style={{ marginTop: "100px" }}>
                        {" "}
                        Alle drei haben einen großen Einfluss auf unser Klima und unsere Umwelt. Moment mal, Klamotten?{" "}
                    </li>
                    <li>
                        {" "}
                        Richtig gelesen! Die Textilindustrie ist einer der größten Klimasünder. Im Jahr 2015 produzierte
                        sie 1,2 Milliarden Tonnen CO2-Äquivalente. Das sind mehr Treibhausgase als internationale Flüge
                        und die Schifffahrt zusammen verantworten. Tendenz steigend!
                    </li>
                </ul>
            </div>
        ),
        2: (
            <div>
                {" "}
                Dazu kommen Verschmutzungen der Gewässer, Freisetzung giftiger Chemikalien, Verbrauchen von
                Wasserreservoirs und auch die Ausbeutung von Arbeiter:innen.Was können wir also tun? Das Wichtigste ist,
                unser eigenes Kaufverhalten zu hinterfragen. Brauche ich wirklich immer ein neues Shirt? Knn ich auf
                Siegel und Zertifikate achten, die versichern, dass das Produkt unter fairen und nachhaltigen
                Bedingungen produziert wurde? Informiert euch dazu gerne weiter!{" "}
            </div>
        ),
        3: <div> Bastele eine Menschenkette aus Papier und designe Kleidung </div>,
        4: (
            <div>
                <ul className="ul">
                    <li className="li">
                        {" "}
                        1. Schneide einen langen Streifen Papier ab. Je länger er ist, desto mehr Menschen bekommst du
                        am Ende. Achte darauf, dass er breit genug ist, um darauf zu zeichnen.
                    </li>
                    <li className="li"> 2. Lege den Streifen mit der langen Seite vor dich</li>
                    <li className="li">
                        {" "}
                        3. Falte ihn nun. Fange von einer Seite an und knicke das Papier abwechselnd nach vorne und
                        hinten, bis du beim anderen Ende angekommen bist.
                    </li>
                    <li className="li">
                        {" "}
                        4. Lege das gefaltete Papier nun mit einer Seite nach oben vor dich. Halte es gut fest, sonst
                        faltet es sich wie eine Feder wieder auseinander.
                    </li>
                </ul>
            </div>
        ),
        5: (
            <div>
                <ul className="ul">
                    <li className="li">
                        {" "}
                        5. Zeichne nun die Umrisse eines Menschen auf die Vorderseite. Hände und Füße müssen alle Kanten
                        berühren!{" "}
                    </li>
                    <li className="li">
                        {" "}
                        6. Schneide die Figur nun vorsichtig aus. Achte darauf, die Hände und Füße an den Kanten icht zu
                        durchtrennen
                    </li>
                    <li className="li">
                        {" "}
                        7. Jetzt kannst du das Papier öffnen und den Streifen vorsichtig in die Länge ziehen. Die
                        Menschen in der Kette sollten jetzt an Händen und Füßen miteinander verbunden sein.{" "}
                    </li>
                    <li className="li"> 8.Jetzt kannst du deine Menschen bemalen </li>
                </ul>
            </div>
        ),
        6: (  
        <div> 
                <b>
                    {" "}
                    Überlege dir Klamotten, die du ihnen anziehen möchtest. Erinnere dich an den Einfluss der
                    Klamottenherstellung auf die Umwelt! Aus was besteht nachhaltige Kleidung? Kannst du dir vorstellen,
                    wie sie die Menschen und die Natur schont?{" "}
                </b>
            </div>
        ),
    },
};
