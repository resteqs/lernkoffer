/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from "../../../../SDGLogos/Goal-SDG17.png";
import { Quiz3Mixed } from "../../../../Interfaces/SDG";
import { InfotextButton } from "../../../../Components/Buttons/InfotextButton";
import { Link } from "react-router-dom";

export const SDG17_Quiz_9: Quiz3Mixed = {
    sdgNumber: 17,
    sdgTitle: "Leiterspiel",
    sdg: "SDG17",
    logo: Logo,
    tile: {
        1: "Erste Frage",
        2: "",
        3: "Zweite Frage",
        4: "",
        5: "Dritte Frage",
        6: "",
        7: "Vierte Frage",
        8: "",
    },
    text: {
        2: (
            <div style={{ margin: "auto", display: "block", width: "40%" }}>
                <Link to="/SDG17/QuizÜbersicht">
                    <InfotextButton version="green">Zur Übersicht</InfotextButton>
                </Link>
            </div>
        ),
        4: (
            <div style={{ margin: "auto", display: "block", width: "40%" }}>
                <Link to="/SDG17/QuizÜbersicht">
                    <InfotextButton version="green">Zur Übersicht</InfotextButton>
                </Link>
            </div>
        ),
        6: (
            <div style={{ margin: "auto", display: "block", width: "40%" }}>
                <Link to="/SDG17/QuizÜbersicht">
                    <InfotextButton version="green">Zur Übersicht</InfotextButton>
                </Link>
            </div>
        ),

        8: (
            <div style={{ margin: "auto", display: "block", width: "40%" }}>
                <Link to="/SDG17/QuizÜbersicht">
                    <InfotextButton version="green">Zur Übersicht</InfotextButton>
                </Link>
            </div>
        ),
    },
    question: {
        1: "Wo begann die erste industrielle Revolution?",
        3: "Wann wurden diese zwei nachhaltigen Verkehrsmittel erfunden: Fahrrad, Straßenbahn?",
        5: "Was sollten Firmen vermeiden?",
        7: "Welche Aussage unterstützt eine nachhaltige Infrastruktur in der Stadt?",
    },
    buttonLeftContent: {
        1: <p style={{ fontSize: "150px" }}>USA</p>,
        3: <p style={{ fontSize: "69px" }}>19. Jahrhundert </p>,
        5: <p style={{ fontSize: "50px" }}>Weniger Fliegen, Müll trennen, zum Trinken Mehrwegbecher benutzen </p>,
        7: <p style={{ fontSize: "55px" }}>Es sollte keine Plätze mit öffentlichem Internet geben. </p>,
    },
    buttonMiddleContent: {
        1: <p style={{ fontSize: "80px" }}>Groß-britannien</p>,
        3: <p style={{ fontSize: "69px" }}>20. Jahrhundert</p>,
        5: (
            <p style={{ fontSize: "48px" }}>
                Recyceltes Papier verwenden, Insektenhotel aufhängen, Computer ausschalten
            </p>
        ),
        7: <p style={{ fontSize: "55px" }}>Jede:r sollte, wenn es geht, sein/ihr Hausdach begrünen</p>,
    },
    buttonRightContent: {
        1: <p style={{ fontSize: "140px" }}>China</p>,
        3: <p style={{ fontSize: "69px" }}>21. Jahrhundert</p>,
        5: (
            <p style={{ fontSize: "45px" }}>
                Abfall in der Natur entsorgen, Ausstoß von vielen schädlichen Treibhausgasen, nur neue Produkte kaufen{" "}
            </p>
        ),
        7: <p style={{ fontSize: "55px" }}>Niemand sollte Busse mehrmals pro Woche zu benutzen. </p>,
    },
    answerNumbersLeft: {
        1: "Falsch",
        3: "Richtig",
        5: "Falsch",
        7: "Falsch",
    },
    answerNumbersMiddle: {
        1: "Richtig",
        3: "Falsch",
        5: "Falsch",
        7: "Richtig",
    },
    answerNumbersRight: {
        1: "Falsch",
        3: "Falsch",
        5: "Richtig",
        7: "Falsch",
    },
    explanation: {
        1: "In der zweiten Hälfte des 18. Jahrhunderts fing diese bei den Briten durch beispielsweise die Erfindung der Dampfmaschine oder des mechanischen Webstuhls an. Als eine Folge wurden Fabriken gebaut und Produkte nun nicht mehr von Hand gemacht, sondern maschinell in Massenproduktionen hergestellt. Diese industrielle Entwicklung verursacht jedoch bis heute viele Schäden in der Umwelt: verschmutzte Luft, Flüsse und Böden voller Chemikalien und anderer giftiger Stoffe, Waldrodung zur Platzschaffung von Wohnsiedlungen und zum Bau von Eisenbahnstrecken und vieles mehr.",
        3: "1817 entwickelte Karl Freiherr von Drais die „Laufmaschine“ oder auch „Draisine“. Dieser Vorgänger unseres heutigen Fahrrads hatte noch keine Pedale und ähnelte den Laufrädern, die kleine Kinder heutzutage benutzen. Die erste elektrische Straßenbahn wurde 1881 von Werner von Siemens erfunden. Davor mussten Pferde oder Maultiere die Wagen ziehen. ",
        5: "Diese Dinge schaden der Umwelt. Stattdessen sollte man Müll trennen und Abfall richtig entsorgen. Firmen sollten außerdem überprüfen, wie viel Treibhausgase sie ausstoßen und diese Menge verringern. Der letzte Punkt „nur neue Produkte kaufen“ sollte ebenfalls vermieden werden. Es ist besser, recycelte Produkte zu kaufen oder zu versuchen, kaputte Dinge reparieren zu lassen.",
        7: "Eine Dachbegrünung bietet mehrere Vorteile: es sieht gut aus, schützt das Dach, ist ein Lebensraum für Tiere und Pflanzen, erhält die Artenvielfalt, reinigt die Luft, Lärmschutz und vieles mehr. ",
    },
    // modalContent: <div>Quiz SDG 01</div>,
    isQuizActive: {
        1: true,
        2: false,
        3: true,
        4: false,
        5: true,
        6: false,
        7: true,
        8: false,
    },
    isThreeAnswerActive: {
        1: true,
        3: true,
        5: true,
        7: true,
    },
    /* eslint-enable unicorn/filename-case */
    /* eslint-enable react/react-in-jsx-scope */
    /* eslint-enable react/no-unescaped-entities */
    /* eslint-enable @typescript-eslint/object-curly-spacing */
    /* eslint-enable import/extensions */
};
