// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { Height } from "@material-ui/icons";
import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG14.png";
import MSC from "../Gute Bsp/Media/MSC.png";

export const SDG14_GutesBeispiel: TextProps = {
    sdgNumber: 14,
    sdgTitle: "MSC",
    sdg: "SDG14",
    logo: Logo,
    header: {
        1: " MSC: Nachhaltige Fischerei?  ",
        2: " Geschichte",
        3: "Kriterien und Zertifizierung ",
        4: "Kritik",
        5: "Fazit",
        6: "Mögliche Lösung",
    },

    text: {
        1: (
            <div style={{ fontSize: "45px" }}>
                Der MSC oder Marine Stewardship Council ist eine unabhängige gemeinnützige internationale Organisation,
                die Siegel für nachhaltigen Fischfang vergibt.
                <ul>
                    <li>
                        <img
                            style={{ marginBottom: "-400px", marginLeft: "500px", height: "300px" }}
                            src={MSC}
                            alt=""
                        />
                    </li>
                </ul>
            </div>
        ),
        2: (
            <div style={{ fontSize: "45px" }}>
                Der MSC wurde 1996 von der Naturschutzorganisation WWF und einer großen Firma für viele verschiedene
                Verbrauchsgegenstände, Unilever (die zum Beispiel Fisch unter der Marke Iglo verkauft), gegründet, um
                den Fischfang nachhaltiger zu gestalten. Der MSC soll sich vor allem auf die Bekämpfung der sogenannten
                Überfischung konzentrieren. Überfischung bedeutet, dass mehr Fische gefangen werden als es neue
                Fisch-Babys gibt. Somit gibt es insgesamt immer weniger Fische. Der MSC entwickelt Richtlinien, die
                bestimmen, was Fischereien machen müssen, damit ihr Fischfang als nachhaltig gilt. Seit dem Jahr 2000
                gibt es das MSC Siegel, welches ausschließlich an die Produkte der Unternehmen vergeben wird, die diese
                Richtlinien auch einhalten.
            </div>
        ),
        3: (
            <div style={{ fontSize: "45px" }}>
                {" "}
                Um das MSC Siegel zu erhalten, müssen Fischereien, wie bereits gesagt darauf achten, nicht zu viel Fisch
                in einer Region zu fischen, sodass keine Überfischung betrieben wird. Außerdem sollen sie darauf achten,
                dass das Meer und speziell der Meeresboden nicht beschädigt werden, dass sie keine anderen Tiere
                miteinfangen und dass sie generell die geltenden Gesetze und Umweltgegebenheiten beachten. Auch muss man
                genau herausfinden können, wie der Fisch vom Wasser in den Supermarkt gekommen ist. Nur wenn das alles
                erfüllt ist, wird das Siegel an ein Produkt oder eine Firma vergeben.{" "}
            </div>
        ),
        4: (
            <div style={{ fontSize: "45px" }}>
                {" "}
                Das MSC Siegel wird von den meisten Umweltschutzorganisationen, wie zum Beispiel Greenpeace, kritisiert
                und als nicht ganz vertrauenswürdig angesehen. 2017 merkte die Organisation an, dass das Siegel zu früh
                vergeben wird, da bereits Firmen, denen die ersten weniger strengen Richtlinien genügen und die ein
                Konzept zur Verwirklichung der strengeren Richtlinien vorlegen, das Siegel erhalten. Das reicht
                Greenpeace nicht, denn laut ihnen werden auch die Richtlinien teilweise nicht oder nicht ganz
                eingehalten (zum Beispiel wird trotzdem in bereits überfischten Gebieten weiter gefischt). Zusätzlich
                kritisiert die Umweltschutzorganisation, dass dass der MSC sehr viel Geld durch Zertifizierungsgebühren
                von Firmen erhält. Deshalb wirft sie dem MSC, bei diesem Interessenskonflikt oftmals die Natur leiden zu
                lassen. Jedoch räumt Greenpeace selbst ein, dass es kein Siegel gibt, das ihren Ansprüchen für
                nachhaltige Fischerei genügt.{" "}
            </div>
        ),
        5: (
            <div style={{ fontSize: "45px" }}>
                {" "}
                Zwar hat der MSC die richtigen Ziele, diese werden jedoch scheinbar nicht immer gut umgesetzt. Was denkt
                ihr? Auf was muss man beim Kauf von Fisch achten, wenn man möchte, dass dieser nachhaltig ist? Kann man
                dem MSC vertrauen? Überlegt erst selbst, lest dann, was für Gedanken ich mir gemacht habe.
            </div>
        ),
        6: (
            <div style={{ fontSize: "45px" }}>
                {" "}
                Es sollte, wenn man nachhaltigen Fisch kaufen will, eine Grundvoraussetzung sein, dass der Fisch ein MSC
                Siegel besitzt. Um sich aber sicher sein zu können, dass die Kriterien erfüllt werden, kann man im
                Internet nach weiteren Tipps recherchieren, wie man als Verbraucher erkennen kann, wie nachhaltig der
                Fisch ist. Hierzu zählen zum Beispiel, wo der Fisch gefangen wurde, die Fischart und vieles mehr. Doch
                das ist nur meine Meinung. Ich bin sicher, ihr habt euch auch ganz tolle Gedanken gemacht! Vielleicht
                habt ihr euch ja auch Gedanken gemacht, welche Marken nachhaltigen Fisch eurer Meinung nach verkaufen
                und warum ihr das glaubt. Oder ihr habt die Idee gehabt, dass ein Zertifikat, welches eine ökologische
                Produktion anzeigt, oder das Fairtrade-Siegel auch dafür sprechen, dass ein Produkt nachhaltig ist.{" "}
            </div>
        ),
    },
};
