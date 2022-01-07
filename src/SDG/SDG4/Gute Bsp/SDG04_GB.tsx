/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from "../../../SDGLogos/Goal-SDG04.png";
import { QuizProps } from "../../../Interfaces/SDG";

export const SDG04_GB: QuizProps = {
    sdgNumber: 4,
    sdgTitle: "Malala Yousafzai",
    sdg: "SDG04",
    logo: Logo,
    tile: {
        1: "Einleitung",
        2: "Anleitung",
        18: "Schlusswort"
    },
    text: {
        1: (
            <p>
                Hochwertige Bildung ist wichtig und viele Menschen setzen sich dafür ein. Diese Aktivisten und
                Aktivistinnen müssen jedoch nicht erwachsen sein. Dass man sich bereits als Kind für seine eigene
                Bildung starkmachen kann, hat Malala Yousafzai selbst gezeigt.
            </p>
        ),
        2: (
            <p>
                Als nächstes werdet ihr ein paar Sätze vervollständigen. Nachdem ihr den jeweiligen Satz richtig
                verbunden habt, könnt ihr euch nochmal alles der Reihe nach durchlesen, damit ihr die gesamten
                Informationen wisst.
            </p>
        ),
        18: (
            <p>
                Ich hoffe, nun weißt du ein bisschen mehr über Malala Yousafzai!
            </p>
        ),
    },
    question: {
        3: "Malala Yousafzai wurde am ...",
        4: "2007 übernahm eine Gruppe radikaler Islamisten, ...",
        5: "Die Taliban wollen einen Gottesstaat errichten, in dem z.B. Frauen ...",
        6: "Außerdem dürfen sie nicht arbeiten, ab 8 Jahren nicht mehr ...",
        7: "Darüber berichtete die Webseite ...",
        8: "Nachdem Malalas Vater sie als Autorin für den Blog „Gul Makai“ (Kornblume) vorschlug, ...",
        9: "In ihrer Heimat gab es Selbstmordattentate, Angst und Trauer und ...",
        10: "Sie wurde weltberühmt, trat in Fernsehshows auf und gab  ...",
        11: "Dafür erhielt sie Ende Dezember 2011 ...",
        12: "Die Bemühungen Malalas passten jedoch den Taliban nicht,  ...",
        13: "Sie wurde schwer verletzt, aber konnte ...",
        14: "Seit März 2013 geht sie in ...",
        15: "Sie gewann den internationalen Kinder-Friedenspreis und die UN ...",
        16: "2014 bekam Malala den Friedensnobelpreis und 2017 wurde sie ...",
        17: "Der 12. Juli, an dem Malala ihre Rede vor der UN hielt, wurde zum „Malala-Tag“,  ...",
    },
    buttonLeftContent: {
        3: <div style={{ fontSize: "90px" }}>12. Juli 1997 in Pakistan geboren.</div>,
        4: <div style={{ fontSize: "70px" }}>die sogenannte „IS“, die Herrschaft über Malalas Heimat.</div>,
        5: <div style={{ fontSize: "55px" }}>in der Öffentlichkeit Ganzkörperschleier (Burkas) tragen müssen.</div>,
        6: <div style={{ fontSize: "60px" }}>zur Schule gehen und in Malalas Heimatregion keine Musik mehr hören.</div>,
        7: <div style={{ fontSize: "70px" }}>des amerikanischen TV-Senders BBC.</div>,
        8: (
            <div style={{ fontSize: "50px" }}>
                beschrieb Malala für 1 Woche in kurzen Notizen von nur wenigen Worten die Unterdrückung durch die
                Taliban.
            </div>
        ),
        9: (
            <div style={{ fontSize: "70px" }}>
                die Mädchen, zu denen auch Malala gehörte, durften nicht in die Schule.
            </div>
        ),
        10: (
            <div style={{ fontSize: "50px" }}>
                Interviews über die Missstände in der Gesselschaft und die Korruption der Regierung, da sie als eine der
                wenigen öffentlich sprach.
            </div>
        ),
        11: <div style={{ fontSize: "75px" }}>den pakistanischen Friedenspreis.</div>,
        12: <div style={{ fontSize: "69px" }}>deshalb schossen sie das Mädchen im Oktober 2012 in einem Bus an.</div>,
        13: <div style={{ fontSize: "70px" }}>trotz längerer Behandlung nie wieder ganz gesund werden</div>,
        14: <div style={{ fontSize: "90px" }}>Groß- britannien wieder zur Schule.</div>,
        15: <div style={{ fontSize: "60px" }}>erlaubte ihr an ihrem 16. Geburtstag (Juli 2013) eine Rede zu halten.</div>,
        16: <div style={{ fontSize: "60px" }}>zur UN-Generalsekretärin, jeweils als jüngste Frau weltweit.</div>,
        17: <div style={{ fontSize: "50px" }}>der jedes Jahr an das Recht aller Kinder, besonders von Mädchen, auf Bildung erinnern soll.</div>,    },
    buttonRightContent: {
        3: <div style={{ fontSize: "90px" }}>12. Juli 1997 in Afghanistan geboren.</div>,
        4: <div style={{ fontSize: "69px" }}>die sogenannten „Taliban“, die Herrschaft über Malalas Heimat.</div>,
        5: <div style={{ fontSize: "55px" }}>in der Öffentlichkeit Ganzkörperschleier (Hijabs) tragen müssen.</div>,
        6: (
            <div style={{ fontSize: "60px" }}>
                zur Schule gehen und in Malalas Heimatregion nicht mehr aus dem Haus gehen.
            </div>
        ),
        7: <div style={{ fontSize: "77px" }}>des britischen TV-Senders BBC.</div>,
        8: (
            <div style={{ fontSize: "60px" }}>
                beschrieb Malala für 10 Wochen in kurzen Notizen die Unterdrückung durch die Taliban.
            </div>
        ),
        9: (
            <div style={{ fontSize: "60px" }}>
                die Mädchen, zu denen auch Malala gehörte, durften nicht mehr das Internet benutzen.
            </div>
        ),
        10: (
            <div style={{ fontSize: "65px" }}>
                Interviews über Bildung und Frauen, da sie als eine der wenigen öffentlich sprach.
            </div>
        ),
        11: <div style={{ fontSize: "75px" }}>den Friedens- nobelpreis</div>,
        12: <div style={{ fontSize: "65px" }}>deshalb schossen sie das Mädchen im Oktober 2012 auf offener Straße an.</div>,
        13: <div style={{ fontSize: "80px" }}>nach längerer Behandlung wieder gesund werden.</div>,
        14: <div style={{ fontSize: "100px" }}>Indien wieder zur Schule.</div>,
        15: <div style={{ fontSize: "60px" }}>erlaubte ihr an ihrem 18. Geburtstag (Juli 2013) eine Rede zu halten.</div>,
        16: <div style={{ fontSize: "60px" }}>zur UN-Friedens-botschafterin, jeweils als jüngste Frau weltweit.</div>,
        17: <div style={{ fontSize: "44px" }}>der jedes Jahr an das Recht aller Kinder, besonders von Mädchen, auf Wohlstand erinnern soll.</div>,
    },
    answerNumbersLeft: {
        3: "Richtig",
        4: "Falsch",
        5: "Richtig",
        6: "Richtig",
        7: "Falsch",
        8: "Falsch",
        9: "Richtig",
        10: "Falsch",
        11: "Richtig",
        12: "Richtig",
        13: "Falsch",
        14: "Richtig",
        15: "Richtig",
        16: "Falsch",
        17: "Richtig",
    },
    answerNumbersRight: {
        3: "Falsch",
        4: "Richtig",
        5: "Falsch",
        6: "Falsch",
        7: "Richtig",
        8: "Richtig",
        9: "Falsch",
        10: "Richtig",
        11: "Falsch",
        12: "Falsch",
        13: "Richtig",
        14: "Falsch",
        15: "Falsch",
        16: "Richtig",
        17: "Falsch",
    },
    explanation: {
        3: "Malala Yousafzai wurde am 12. Juli 1997 in Pakistan geboren.",
        4: "2007 übernahm eine Gruppe radikaler Islamisten, die sogenannten „Taliban“, die Herrschaft über Malalas Heimat.",
        5: "Die Taliban wollen einen Gottesstaat errichten, in dem z.B. Frauen, in der Öffentlichkeit Ganzkörperschleier (Burkas) tragen müssen.",
        6: "Außerdem dürfen sie nicht arbeiten, ab 8 Jahren nicht mehr, zur Schule gehen und in Malalas Heimatregion keine Musik mehr hören.",
        7: "Darüber berichtete die Webseite des britischen TV-Senders BBC.",
        8: "Nachdem Malalas Vater sie als Autorin für den Blog „Gul Makai“ (Kornblume) vorschlug, beschrieb Malala für 10 Wochen in kurzen Notizen die Unterdrückung durch die Taliban.",
        9: "In ihrer Heimat gab es Selbstmordattentate, Angst und Trauer und die Mädchen, zu denen auch Malala gehörte, durften nicht in die Schule.",
        10: "Sie wurde weltberühmt, trat in Fernsehshows auf und gab Interviews über Bildung und Frauen, da sie als eine der wenigen öffentlich sprach.",
        11: "Dafür erhielt sie Ende Dezember 2011 den pakistanischen Friedenspreis.",
        12: "Die Bemühungen Malalas passten jedoch den Taliban nicht,  deshalb schossen sie das Mädchen im Oktober 2012 in einem Bus an.",
        13: "Sie wurde schwer verletzt, aber konnte nach längerer Behandlung wieder gesund werden.",
        14: "Seit März 2013 geht sie in Großbritannien wieder zur Schule.",
        15: "Sie gewann den internationalen Kinder-Friedenspreis und die UN erlaubte ihr an ihrem 16. Geburtstag (Juli 2013) eine Rede zu halten.",
        16: "2014 bekam Malala den Friedensnobelpreis und 2017 wurde sie zur UN-Friedensbotschafterin, jeweils als jüngste Frau weltweit.",
        17: "Der 12. Juli, an dem Malala ihre Rede vor der UN hielt, wurde zum „Malala-Tag“, der jedes Jahr an das Recht aller Kinder, besonders von Mädchen, auf Bildung erinnern soll.",
    },
    // modalContent: <div>Quiz SDG 01</div>,
    isQuizActive: {
        1: false,
        2: false,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
        10: true,
        11: true,
        12: true,
        13: true,
        14: true,
        15: true,
        16: true,
        17: true,
        18: false,
    },
    /* eslint-enable unicorn/filename-case */
    /* eslint-enable react/react-in-jsx-scope */
    /* eslint-enable react/no-unescaped-entities */
    /* eslint-enable @typescript-eslint/object-curly-spacing */
};
