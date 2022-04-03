// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG13.png";

export const SDG13_GutesBeispiel: TextProps = {
    sdgNumber: 13,
    sdgTitle: "Domino Umweltschutzkette",
    sdg: "SDG13",
    logo: Logo,
    header: {
        1: "Tutorial:  ",
        2: " Tutorial:",
       
    },

    text: {
        1: (
            <div>
                <ul>
                    <li>
                        {" "}
                        Hier haben wir ein gern gespieltes Spiel, vielleicht kennst du es ja schon: Es nennt sich
                        Domino.
                    </li>
                    <li style={{ marginTop: "3vh" }}>
                        {" "}
                        In dieser Version geht es um Dinge, die die Umwelt belasten und auch gleichzeitig darum, was du
                        selbst tun kannst.
                    </li>
                    <li style={{ marginTop: "3vh" }}>
                        {" "}
                        Dieses Spiel funktioniert nach einem einfachen Prinzip: Gestartet wird mit der Karte, auf der
                        „Start“ steht. Auf der rechten Seite von dieser Karte findet ihr ein Bild. Jetzt könnt ihr euch
                        die übrigen Karten ansehen und überlegen, welcher Text passend zu diesem Bild ein Problem und seine Lösung beschreibt.
                    </li>
                    <li>
                        {" "}
                        Wenn du eine Karte findest, die zu dem Bild passt, dann ziehe diese Karte einfach neben das
                        Bild.
                    </li>
                    <li style={{ marginTop: "3vh" }}> So machst du immer weiter und am Ende kommst du bei der Karte an, auf der „Ende“ steht.</li>
                </ul>
            </div>
        ),
        2: (
            <div>
                Ihr könnt immer gerne Pausen machen, um über die angegebenen Probleme und Lösungen reden. Diskutiert ob Lösungen für euch und eure Freunde, Familie umsetzbar sind. Eine andere Idee
                wäre, darüber zu diskutieren, ob euch andere Aspekte einfallen, die entweder schlecht für die Umwelt
                sind und wie man sie lösen könnte, oder auch, wie man die bereits angegebenen Probleme anders lösen kann,
                als hier steht.
            </div>
        ),
    },
};
