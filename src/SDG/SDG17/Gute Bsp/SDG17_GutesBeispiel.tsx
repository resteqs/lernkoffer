// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG17.png";
import UN from "../Gute Bsp/Media/UN.png"

export const SDG17_GutesBeispiel: TextProps = {
    sdgNumber: 9,
    sdgTitle: "UN",
    sdg: "SDG17",
    logo: Logo,
    header: {
        1: "Einstieg ",
        2: "Inhalt",
        3: "Wer oder was ist die UN?",
        4: "Was macht diese Organisation?",
        5: "Was macht diese Organisation?",
        6: "Schluss",
        7: "Schluss",
    },

    text: {
        1: (
            <div>
                {" "}
                <ul>
                    <li>
                        {" "}
                        <img style= {{ display: "block", margin: "0 auto" }}  src={UN} alt="" />{" "}
                    </li>
                    <li style={{ marginTop: "5vh" }}> Kennst du dieses Logo? Weißt du auch, von welcher Organisation es ist? </li>
                </ul>
            </div>
        ),
        2: (
            <div>
                {" "}
                Vielleicht bist du schon auf die „UN“ gekommen. Wenn nicht, ist es auch nicht schlimm. Ich möchte dir
                nun ein wenig über die UN erzählen, also was das für eine Organisation ist, was sie machen und warum.{" "}
            </div>
        ),
        3: (
            <div>
                <ul>
                    <li>
                        {" "}
                        UN steht für <b> „United Nations“</b>. Das ist Englisch und heißt so viel wie „Vereinte
                        Nationen“. So kümmert sich die UN im Zentralen um die Weltorganisation in den Bereichen Frieden,
                        Sicherheit und Menschenrechte.{" "}
                    </li>
                    <li>
                        {" "}
                        Aber nun zu der genauen Arbeit, die die UN leistet und wer das überhaupt ist. Die Organisation
                        wurde am 26. Juni 1945 gegründet und ist ein Zusammenschluss aus 193 Staaten. Sie haben es sich
                        zur Aufgabe gemacht, die internationale Zusammenarbeit für mehr Frieden, Sicherheit etc. zu
                        fördern.
                    </li>
                    <li>
                        {" "}
                        So sind fast alle Länder der Welt Mitglieder in der UN und vereinen sich, um vielen Menschen auf
                        der Welt zu helfen.
                    </li>
                </ul>
            </div>
        ),
        4: (
            <div>
                {" "}
                Ganz grundlegend kann man sagen, dass die UN den Frieden auf der Welt wahren will. Sie erlassen aber
                keine Gesetze wie eine Regierung, sondern handeln eher wie ein Entscheidungsrat oder ein Forum, in dem
                Dinge besprochen werden. So können sie auch selbst als Akteure in der internationalen Politik auftreten:
                Es ist eine der Hauptaufgaben der UN, der Ort zu sein, an dem Nationen gemeinsam verhandeln können.
            </div>
        ),
        5: (
            <div>
                {" "}
                Ihre Intentionen und Ziele bezüglich einer nachhaltigen Entwicklung haben sie in den sogenannten
                <b> „Sustainable Development Goals“ </b>kurz „SDGs“ (auf Deutsch „Ziele für nachhaltige Entwicklung“
                oder auch „Nachhaltigkeitsziele“) festgelegt. Diese 17 Ziele wurden am 25. September 2015 von allen
                damaligen Mitgliedsstaaten der UN beschlossen. Sie drehen sich um Themen wie zum Beispiel Klima- und
                Tierschutz, Gesundheit, Gerechtigkeit, Frieden und die Bekämpfung von Armut. Die meisten dieser Ziele
                sollen bis 2030 umgesetzt werden. Jährlich veröffentlich die UN Berichte über die Fortschritte bezüglich
                der SGDs.
            </div>
        ),
        6: (
            <div>
                {" "}
                Die UN ist durch ihre große Anzahl an Mitgliedstaaten in der Lage, in vielen Bereichen auf der ganzen
                Welt einen guten Einfluss zu haben. So verhindern sie Konflikte oder sogar Kriege. Mit ihren
                Nachhaltigkeitszielen streben sie an, die Welt bis 2030 zu einem besseren Ort zu machen.{" "}
            </div>
        ),
        7: (
            <div>
                {" "}
                Nachdem du diese Organisation nun besser kennst, könntest du dir selbst überlegen (oder auch in der
                Gruppe), ob dir eine Möglichkeit einfällt, wie man die Zusammenarbeit von Ländern verbessern kann. So
                könntest du durch deine Bemühungen Menschen überall auf der Welt helfen. Dann könntest du das auch
                deinen Eltern, Lehrern und Freunden erzählen und somit vielleicht etwas Gutes bewirken, ganz nach dem
                Vorbild der UN.{" "}
            </div>
        ),
    },
};
