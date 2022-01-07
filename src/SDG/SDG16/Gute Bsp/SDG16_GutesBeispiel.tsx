/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from "../../../SDGLogos/Goal-SDG16.png";
import { QuizProps } from "../../../Interfaces/SDG";

export const SDG16_GutesBeispiel: QuizProps = {
    sdgNumber: 16,
    sdgTitle: "pbi",
    sdg: "SDG16",
    logo: Logo,
    tile: {
        1: "Allgemeine Informationen",
        2: "Allgemeine Informationen",
        3: "Allgemeine Informationen",
        4: "Was macht pbi genau?",
        5: "Was macht pbi genau?",
        6: "Was macht pbi genau?",
        7: "Was macht pbi genau?",
        8: "Aufgabe:",
        9: "Frage 1:",
        10: "Frage 2:", 
        11: "Frage 3:",
        12: "Frage 4:",
        13: "Frage 5:",
    },
    text: {
        1: (
            <div>
                {" "}
                „pbi“ steht für „peace brigades international“ (dt.: Frieden Brigaden international) und ist eine
                nicht-staatliche Organisation, die 1981 gegründet wurde. Dadurch nimmt sie keine bestimmte politische
                oder auch religiöse Stellung ein und kann unabhängig von dem Interesse unterschiedlicher Unterneh-men
                und Firmen aktiv sein. Wenn bestimmten Personen, welche unsere Menschenrechte verteidi-gen, wegen ihrer
                Arbeit gedroht wird, können sie sich an pbi wenden und werden dann von freiwilli-gen Teilnehmer:innen
                der Organisation geschützt
            </div>
        ),
        2: (
            <div>
                {" "}
                Dabei bekommen alle durch Kontakte zur Politik, zu Menschen mit guten Verhandlungstechniken und zur
                Bevölkerung eine Absicherung. Diese Verei-nigung schafft es unterschiedlichsten Gruppen (z.B.
                Anwält:innen, Umwelt- und Frauenorganisatio-nen, Journalist:innen) wieder die Möglichkeit zu geben, ohne
                Angst um ihre eigene Sicherheit, ihrer Arbeit nachzugehen. Außerdem wollen sie Konflikte, z.B. einen
                Streit, ohne Gewalt lösen. Dabei ach-ten sie darauf, dass sie selbst unabhängig bleiben, sich auf keine
                Seite stellen, nicht einmischen und alle Teilnehmer:innen ein Ende des Konflikts von sich aus wollen.
            </div>
        ),
        3: (
            <div>
                {" "}
                In folgenden acht Ländern ist pbi tätig: Kolumbien, Mexiko, Guatemala, Honduras, Costa Rica
                (Nicara-gua), Kenia, Indonesien und Nepal{" "}
            </div>
        ),
        4: (
            <div>
                <ul>
                    {" "}
                    <b>
                        <li> Die drei Säulen ihrer Arbeit sind:  </li>
                    </b>{" "}
                </ul>
                <ul style={{ fontSize: "50px" }}>
                    <li style={{ fontStyle: "italic", marginTop: "20px" }}>
                        Schutzbegleitung
                    </li>
                </ul>
                <ul className="ul_2" style={{ fontSize: "45px", marginTop: "20px" }}>
                    <li className="li"> - ohne Bewaffnung</li>
                    <li className="li"> - je nach Bedarf und je nachdem wie groß die Bedrohung der Menschenrechtsverteidiger:innen ist: </li>
                </ul>
                <ul className="ul" style={{ fontSize: "45px", marginTop: "-5px" }}>
                    <li className="li"> - bei sehr großer Gefahr gibt es die ganze Zeit über eine Schutzbegleitung </li>
                    <li className="li">
                        {" "}
                        - bei etwas geringerer Gefahr nur ab und zu durch regelmäßige Besuche im Büro oder durch
                        Begleitung von Reisen{" "}
                    </li>
                    <li className="li"> - bei geringer Gefahr reichen Telefonanrufe</li>
                </ul>
            </div>
        ),
        5: (
            <div >
                <ul style={{ fontStyle: "italic" }}>
                    <li> Advocacyarbeit (= Vertretung von z.B. politischen Interessen)</li>
                </ul>
                <ul className="ul_2" style={{ fontSize: "45px" }} >
                    <li className="li">
                        {" "}
                        - Kontakt innerhalb und außerhalb eines Landes zu Regierungen, zur Bevölkerung sowie zu
                        Vermittler:innen{" "}
                    </li>
                    <li className="li">
                        {" "}
                        - Ziel: Gewalt und Menschenrechtsverletzungen verhindern mithilfe z.B. Proteste oder Stopp von
                        Hilfe im Ausland
                    </li>
                    <li className="li"> - Nutzung von Medien, um weltweit auf Probleme aufmerksam zu machen</li>
                </ul>
            </div>
        ),
        6: (
            <div>
                <ul style={{ fontStyle: "italic" }}>
                    <li>
                        {" "}
                        - Capacity Development (= Vorgang, wenn Fähigkeiten verbessert werden, sodass die Entwick-lung
                        nachhaltiger wird und man auf Veränderungen besser vorbereitet ist)
                    </li>
                </ul>
                <ul className="ul_2"  style={{ fontSize: "45px" }}>
                    <li className="li">
                        {" "}
                        - Kurse, Lehrveranstaltungen und Vorträge zum Weitervermitteln ihrer Erfahrungen und Fähigkeiten
                    </li>
                    <li className="li"> - auf den jeweiligen Standort eines Projektes angepasst</li>
                    <li className="li"> - Weiterlernen der Freiwilligen und Fachkräfte innerhalb der Organisation </li>
                </ul>
            </div>
        ),
        7: (
            <div>
                {" "}
                Außerdem wurde 2004 das Bildungsprogramm „Menschenrechte lernen und leben“ gegründet. Damit will pbi
                Menschen jeden Alters Menschenrechte erklären können. Für Kinder und Jugendliche gibt es beispielsweise
                Puppentheateraufführungen, die sich mit Themen wie Kinder- und Menschenrechten, fairem Handel und
                weltweiter Gerechtigkeit beschäftigen. Es geht dabei darum, dass sich die Men-schen austauschen,
                miteinander aktiv lernen und anschließend für die Menschenrechte einsetzen wollen.{" "}
            </div>
        ),
        8: <div> Kreuze bei den folgenden fünf Aussagen an, ob sie wahr oder falsch sind.</div>,
        14: <div> Ende </div>
    }, 

    question:  {
        9: "Der Organisation pbi ist wichtig, dass Menschen, die sich für Menschenrechte einsetzen, ge-schützt sind.",
        10: "Sie benutzen selbst Waffen.",
        11: "Pbi ist in drei Ländern aktiv", 
        12: "Die drei Säulen von dieser Organisation sind Schutzbegleitung, Advocacyarbeit und Capacity Development", 
        13: "In einem Bildungsprogramm können auch Kinder durch ein Puppentheater über Menschen-rechte etwas lernen", 
    }, 
    buttonLeftContent: {
        9:  <div style={{ fontSize: "150px" }}> Wahr  </div>,
        10: <div style={{ fontSize: "150px" }}> Wahr </div>, 
        11: <div style={{ fontSize: "150px" }}> Wahr </div>, 
        12: <div style={{ fontSize: "150px" }}> Wahr  </div>, 
        13: <div style={{ fontSize: "150px" }}> Wahr </div>, 
    }, 
    buttonRightContent: {
        9:  <div style={{ fontSize: "150px" }}> Falsch  </div>,
        10: <div style={{ fontSize: "150px" }}> Falsch </div>, 
        11: <div style={{ fontSize: "150px" }}> Falsch </div>, 
        12: <div style={{ fontSize: "150px" }}> Falsch  </div>, 
        13: <div style={{ fontSize: "150px" }}> Falsch </div>, 
    }, 
    answerNumbersLeft: {
        9: "Richtig",
        10: "Falsch", 
        11: "Falsch", 
        12: "Richitg", 
        13: "Richitg",
    },
    answerNumbersRight: {
            9: "Falsch",
            10: "Richitg", 
            11: "Richtig", 
            12: "Falsch", 
            13: "Falsch",
    }, 
    explanation: {
        9: " ",
        10: "Sie wollen Gewalt verhindern und tragen keine Waffen. ",
        11: "Es sind acht Länder. ",
        12: " ", 
        13: " ",
    },
    // modalContent: <div>Quiz SDG 12</div>,

    isQuizActive: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: true,
        10: true,
        11: true, 
        12: true, 
        13: true, 
        14: false, 

    }
        /* eslint-enable unicorn/filename-case */ 
        /* eslint-enable react/react-in-jsx-scope */
        /* eslint-enable react/no-unescaped-entities */
        /* eslint-enable @typescript-eslint/object-curly-spacing */
};
