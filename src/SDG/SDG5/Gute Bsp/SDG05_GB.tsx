/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable unicorn/filename-case */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG05.png";
import GoetheUndSchiller from "./Media/GoetheUndSchiller.png";
import LincolnMemorial from "./Media/LincolnMemorial.png";
import NelsonMandela from "./Media/NelsonMandela.png";
import RuthBaderGinsburg  from "./Media/RuthBaderGinsburg.png"
import DrTereraiTrent from "./Media/Dr.TereraiTrent.png"
 
export const SDG05_GB: TextProps = {
    sdgNumber: 1,
    sdgTitle: "Statuen für Gerechtigkeit",
    sdg: "SDG05",
    logo: Logo,
    header: {
        1: "Lincoln Memorial",
        2: "Goethe und Schiller",
        3: "Nelson Mandela",
        4: "Frage",
        5: "Information",
        6: "Information",
        7: "Ruth Bader Ginsburg – Eine Richterin im Supreme Court in den USA",
        8: "Dr. Tererai Trent – Eine Aktivistin, die sich für gerechte Bildung einsetzt",
    },
    text: {
        1: <img src={LincolnMemorial} alt="LincolnMemorial" style={{ width: "500px", marginLeft: "700px" }} />,
        2: <img src={GoetheUndSchiller} alt="GoetheUndSchiller" style={{ width: "500px", marginLeft: "700px" }} />,
        3: <img src={NelsonMandela} alt="NelsonMandela" style={{ width: "500px", marginLeft: "700px" }} />,
        4: 
            <ul>
                <li>Ist dir etwas aufgefallen? – Alle Statuen zeigen Männer! </li>
                <li>Fällt dir eine Statue ein, die eine Frau darstellt? Überlegt auch gerne in der Gruppe. </li>
            </ul>,
        5: <div>Im Jahr 2017 starteten zwei Künstler in New York ein Projekt das „Statues for Equality“ (= Statuen für Gerechtigkeit) heißt. Zu diesem Zeitpunkt waren nur etwa 3% aller Statuen in der Stadt Abbilder von Frauen (und das ist auch in den meisten westlichen Städten noch immer so). Das Ziel dieses Projekts ist, dass bis 2025 genau so viele Statuen von Männern wie auch von Frauen existieren und das weltweit.</div>,
        6: 
            <ul>
                <li>Im Jahr 2019 eröffneten die Gründer dann die ersten zehn Statuen in New York. Diese zweigen wichtige Frauen, die Bedeutendes (auf verschiedenen Wegen) erlangt haben. </li>
                <li>Für die Zukunft wünschen sich die Gründer von „Statues for Equality“ in allen Ländern der Welt Statuen von Frauen aufzustellen, um den Anteil weiblicher Statuen zu erhöhen. </li>
                <li>Einige Beispiele für solche Statuen sind: </li>
            </ul>,
        7: <img src={RuthBaderGinsburg} alt="RuthBaderGinsburg" style={{ width: "500px", marginLeft: "700px" }} />,
        8: <img src={DrTereraiTrent} alt="DrTereraiTrent" style={{ width: "300px", marginLeft: "850px" }} />,
    },
};
