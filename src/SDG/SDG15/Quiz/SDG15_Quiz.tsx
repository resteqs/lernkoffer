
import * as React from "react"
import { Quiz3OProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG15.png";
import Elefant from "../Quiz/Media/Elefant.png";
import Fliege from "../Quiz/Media/Fliege.png";
import Fuchs from "../Quiz/Media/Fuchs.png";
import Koala from "../Quiz/Media/Koala.png";

export const SDG15_Quiz: Quiz3OProps = {
    sdgNumber: 15,
    sdgTitle: "Leben an Land",
    sdg: "SDG15",
    logo: Logo,
    tile: {
        1: "Einleitung",
        2: "Einleitung",
        3: "Erstes Tier",
        6: "Zweites Tier",
        9: "Drittes Tier",
        12: "Drittes Tier",
        15: "Schlusswort"
    },
    text: {
        1: (
            <div>
                Ihr kennt doch sicher alle ganz viele verschiedene Tiere. Und ihr habt bestimmt auch schon eine Menge
                Tiere gesehen und wahrscheinlich auch schon viele von der gleichen Art. Leider sind manche Tiere vom
                Aussterben bedroht (das heißt, dass es nur noch wenige von ihnen gibt, es weiterhin weniger werden und
                deshalb es bald gar keine Tiere dieser Art mehr geben könnte, wenn wir uns nicht besser um diese Tiere
                kümmern). Aber wisst ihr überhaupt, welche Tiere das sind oder von welchen es noch viele gibt? Das wird
                sich jetzt zeigen!{" "}
            </div>
        ),
        2: (
            <div>
                Gleich werde ich euch 4 Fotos von Tieren zeigen. Zuerst sollt ihr entscheiden, um welches Tier es sich
                auf dem Bild überhaupt handelt. Klickt hier dann bitte auf das Tier, von dem ihr glaubt, dass es richtig
                ist. Danach sage ich euch drei Fakten über das jeweilige Tier. Doch ihr müsst aufpassen: Einer der drei
                Fakten ist von mir erfunden und deswegen natürlich falsch… . Klickt bitte auf den Fakt, von dem ihr
                glaubt, dass er gelogen ist! Ich sage euch dann danach, wie es richtig heißen würde!
            </div>
        ),
        3: <img style={{ height: "700px", margin: "auto", display: "block" }} src={Elefant} alt="" />,
        6: <img style={{ height: "700px", margin: "auto", display: "block" }} src={Fliege} alt="" />,
        9: <img style={{ height: "700px", margin: "auto", display: "block" }} src={Fuchs} alt="" />,
        12: <img style={{ height: "700px", margin: "auto", display: "block" }} src={Koala} alt="" />,
        15: (
            <div>
                Ich hoffe nun weißt du besser über die Tiere, und wie viele es von ihnen noch gibt, Bescheid!
            </div>
        ),
    },
    question: {
        4: "Welches Tier war das?",
        5: "Welche dieser Aussagen ist falsch?",
        7: "Welches Tier war das?",
        8: "Welche dieser Aussagen ist falsch?",
        10: "Welches Tier war das?",
        11: "Welche dieser Aussagen ist falsch?",
        13: "Welches Tier war das?",
        14: "Welche dieser Aussagen ist falsch?",
    },
    buttonLeftContent: {
        4: (
            <div style={{ fontSize: "80px" }}>
                <p>Ein</p> Elefant
            </div>
        ),
        5: (
            <div style={{ fontSize: "31px" }}>
                Elefanten gibt es nicht mehr viele auf der Welt, da sie wegen ihrer Stoßzähne gejagt werden und auch ihr
                Lebensraum von uns Menschen zerstört wird (dadurch, dass wir Wälder fällen und dort Städte bauen, wo die
                Elefanten leben).
            </div>
        ),
        7: (
            <div style={{ fontSize: "80px" }}>
                <p>Eine</p> Biene
            </div>
        ),
        8: (
            <div style={{ fontSize: "44px" }}>
                Einige Fliegenarten sind vom Aussterben bedroht, weil sie immer wieder von Menschen grundlos erschlagen
                werden.
            </div>
        ),
        10: (
            <div style={{ fontSize: "85px" }}>
                <p>Ein</p> Wolf
            </div>
        ),
        11: (
            <div style={{ fontSize: "29px" }}>
                Auch wenn sie nicht so aussehen, sind Füchse extrem schnell! Sie können bis zu 50 km/h schnell werden.
                (Das ist doppelt so schnell, wie man mit einem normalen Fahrrad fahren kann). Das liegt vor allem an
                ihrem leichten Körpergewicht und an ihrem schmalen Körperbau.
            </div>
        ),
        13: (
            <div style={{ fontSize: "85px" }}>
                <p>Ein</p> Koala
            </div>
        ),
        14: (
            <div style={{ fontSize: "40px" }}>
                Sehr große Teile des Lebensraumes der Koalas wurden bereits zerstört, was zur Folge hat, dass es nur
                noch wenige davon gibt.
            </div>
        ),
    },
    buttonMiddleContent: {
        4: (
            <div style={{ fontSize: "80px" }}>
                <p>Ein</p> Nashorn
            </div>
        ),
        5: (
            <div style={{ fontSize: "39px" }}>
                Durch ihre großen Ohren können sie mögliche Feinde schon über weite Entfernungen hören. So schützt sich
                der Elefant vor anderen Tieren.{" "}
            </div>
        ),
        7: (
            <div style={{ fontSize: "80px" }}>
                <p>Eine</p> Fliege
            </div>
        ),
        8: (
            <div style={{ fontSize: "50px" }}>
                Die meisten Fliegen legen ganz viele Eier ab, kümmern sich aber nicht weiter um diese.
            </div>
        ),
        10: (
            <div style={{ fontSize: "85px" }}>
                <p>Ein</p> Fuchs
            </div>
        ),
        11: (
            <div style={{ fontSize: "47px" }}>
                Weil ihr Fell sehr wertvoll ist, werden sie oft gejagt und sind deswegen vom Aussterben bedroht
            </div>
        ),
        13: (
            <div style={{ fontSize: "85px" }}>
                <p>Ein</p> Panda
            </div>
        ),
        14: (
            <div style={{ fontSize: "33px" }}>
                Die Eukalyptus Blätter und Rinden, welche das Lieblingsessen der Koalas sind, enthalten leichte
                Giftstoffe, deswegen schlafen die Koalas auch fast 22 Stunden pro Tag, um die Blätter zu verdauen.
            </div>
        ),
    },
    buttonRightContent: {
        4: (
            <div style={{ fontSize: "80px" }}>
                <p>Eine</p> Hyäne
            </div>
        ),
        5: (
            <div style={{ fontSize: "50px" }}>
                {" "}
                Elefanten sind ziemlich langlebig, sie können bis zu 70 Jahre alt werden.
            </div>
        ),
        7: (
            <div style={{ fontSize: "65px" }}>
                <p>Eine</p> Heuschrecke
            </div>
        ),
        8: (
            <div style={{ fontSize: "42px" }}>
                Fliegen können mit einer ähnlichen Technik wie Spinnen an glatten Oberflächen, wie zum Beispiel Glas,
                haften bleiben
            </div>
        ),
        10: (
            <div style={{ fontSize: "80px" }}>
                <p>Ein</p> Kojote
            </div>
        ),
        11: (
            <div style={{ fontSize: "47px" }}>
                Füchse essen alles von Mäusen und Würmern zu Vögeln, Fröschen, Hühnern und kleinen Gänsen
            </div>
        ),

        13: (
            <div style={{ fontSize: "85px" }}>
                <p>Ein</p> Faultier
            </div>
        ),
        14: (
            <div style={{ fontSize: "40px" }}>
                Koalas legen Eier, da sie zur gleichen Tierart wie das Schnabeltier gehören, welches genauso wie der
                Koala nur in Australien lebt.
            </div>
        ),
    },
    answerNumbersLeft: {
        4: "Richtig",
        5: "Falsch",
        7: "Falsch",
        8: "Richtig",
        10: "Falsch",
        11: "Falsch",
        13: "Richtig",
        14: "Falsch",
    },
    answerNumbersMiddle: {
        4: "Falsch",
        5: "Richtig",
        7: "Richtig",
        8: "Falsch",
        10: "Richtig",
        11: "Richtig",
        13: "Falsch",
        14: "Falsch",
    },
    answerNumbersRight: {
        4: "Falsch",
        5: "Falsch",
        7: "Falsch",
        8: "Richtig",
        10: "Falsch",
        11: "Falsch",
        13: "Falsch",
        14: "Richtig",
    },
    explanation: {
        4: "Das war ein Elefant",
        5: "Die falsche Aussage war: “Durch ihre großen Ohren können sie mögliche Feinde schon über weite Entfernungen hören. So schützt sich der Elefant vor anderen Tieren“ Die Erklärung dafür ist: Natürlich können die Elefanten so auch besser hören, doch das ist nicht der eigentliche Zweck der Ohren! Eigentlich sollen sie den Elefanten kühlen: Die Tiere fächeln sich Luft zu, indem sie mit den großen Ohren wedeln, aber auch dadurch, dass sie Wärme in die Ohren leiten und die Ohren dann durchs Wedeln wieder abkühlen",
        7: "Das war eine Fliege",
        8: "Die falsche Aussage war: “Einige Fliegenarten sind vom Aussterben bedroht, weil sie immer wieder von Menschen grundlos erschlagen werden“ Die Erklärung dafür ist: Zwar stimmt es, dass Fliegen manchmal grundlos erschlagen werden, doch sind sie deswegen noch nicht gefährdet im Moment. Bienen sind aber zum Beispiel dadurch gefährdet, dass es inzwischen viel weniger Blumen gibt. So haben die Bienen dann vielleicht irgendwann nichts mehr zu essen.",
        10: "Das war ein Fuchs",
        11: "Die falsche Aussage war: “Weil ihr Fell sehr wertvoll ist, werden sie oft gejagt und sind deswegen vom Aussterben bedroht.“ Die Erklärung dafür ist: Fuchsfell wird kaum gekauft und deswegen wird der Fuchs auch nicht deswegen gejagt. Es ist aber, wie für fast jedes andere Tier auch, für den Fuchs eine Gefahr, dass es immer weniger freie Natur gibt, weil mehr Städte gebaut werden und Wälder abgeholzt werden",
        13: "Das war ein Koala",
        14: "Die falsche Aussage war: “Koalas legen Eier, da sie zur gleichen Tierart wie das Schnabeltier gehören, welches genauso wie der Koala nur in Australien lebt.“ Die Erklärung dafür ist: Koalas gehören zu gleichen Tierart wie Kängurus, deshalb bringen sie ihre Kinder ganz normal zur Welt, und tragen sie danach in ihrem Beutel.",
    },
    isQuizActive: {
        1: false,
        2: false,
        3: false,
        4: true,
        5: true,
        6: false,
        7: true,
        8: true,
        9: false,
        10: true,
        11: true,
        12: false,
        13: true,
        14: true,
        15: false,
    },
};
