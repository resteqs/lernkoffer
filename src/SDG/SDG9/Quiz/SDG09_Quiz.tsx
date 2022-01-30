/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable unicorn/filename-case */ 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Logo from "../../../SDGLogos/Goal-SDG09.png";
import { QuizProps } from "../../../Interfaces/SDG";
import  Banananblätter  from "./Media/Banananblätter.jpg"
import  HolzausReishüllen  from "./Media/Holz aus Reishüllen.jpg"
import  Milch  from "./Media/Milch.jpg"
import  Roboter  from "./Media/Roboter.jpg"
import  SchwimmendeStadt  from "./Media/Schwimmende Stadt.jpg"
import  Tierübersetzter  from "./Media/Tierübersetzter.jpg"



export const SDG09_Quiz:QuizProps = {
    sdgNumber: 9,
    sdgTitle: "Innovationen",
    sdg: "SDG09",
    logo: Logo,
    tile: { 
        1: " ",
        2: " ",
        3: " ",
        4: " ",
        5: " ",
    },
    text: { 1: <p> Das 9. Nachhaltigkeitsziel heißt „Industrie, Innovation und Infrastruktur“ und in dieser Umsetzung konzentrieren wir uns auf den Aspekt „Innovation“. Erfindungen waren und sind schon immer sehr wichtig für den Menschen. Durch sie konnten wir uns weiterentwickeln zu der Gesellschaft, die wir heute sind. Wir haben Strom und Elektrizität, das Internet, Flugzeuge, Autos, Züge, Krankenhäuser mit OP-Sälen und Laboren, ausgebaute Städte mit einer organisierten Struktur und Fabriken mit Massenproduktion. Und dies sind nur ein paar Errungenschaften der letzten Jahrhunderte. Es gibt aber noch immer so viel mehr, was wir entwickeln können.  </p>,
            2: <p> Besonders in der heutigen Zeit wird durchgehend geforscht und experimentiert. Im Folgenden nenne ich euch sechs Erfindungen und ihr sollt entscheidend, ob diese bereits existieren oder noch eine Idee für die Zukunft sind. </p>,
            4: <p> <img style={{ margin: "auto", display: "block", width: "30%" }} src= {Banananblätter}   alt="" /> </p>, 
            6: <p> <img style={{ margin: "auto", display: "block", width: "50%" }} src= {SchwimmendeStadt}   alt="" /> </p>, 
            8: <p> <img style={{ margin: "auto", display: "block", width: "50%" }} src= {Roboter}   alt="" /> </p>, 
            10: <p> <img style={{ margin: "auto", display: "block", width: "30%" }} src= {Milch}   alt="" /> </p>,
            12: <p> <img style={{ margin: "auto", display: "block", width: "50%" }} src= {Tierübersetzter}   alt="" /> </p>,
            14: <p> <img style={{ margin: "auto", display: "block", width: "50%" }} src= {HolzausReishüllen}   alt="" />  </p>,
        },
    question: {
        3: "Kunststoffersatz aus Bananenblättern ",
        5: "Schwimmende Stadt",
        7: "Roboter, die allein Menschen operieren können ",
        9: "Kleidung aus Milch",
        11: "Tierübersetzer (Kommunikation zwischen Mensch und Tier) ",
         13: "Holz aus Reishüllen",
    } ,
    buttonLeftContent: {3:  <p style={{ fontSize: "10.333vh"  }}> existiert </p>,
                        5:  <p style={{ fontSize: "10.333vh"  }}> existiert </p>,
                        7:  <p style={{ fontSize: "10.333vh" }}> existiert </p>,
                        9:  <p style={{ fontSize: "10.333vh" }}> existiert </p>,
                        11: <p style={{ fontSize: "10.333vh" }}> existiert </p>,
                        12: <p style={{ fontSize: "10.333vh" }}> existiert </p>,
                        13: <p style={{ fontSize: "10.333vh" }}> existiert </p>,
                        },
buttonRightContent:{    3:  <p style={{ fontSize: "10.333vh" }}> für die Zukunft  </p>,
                        5:  <p style={{ fontSize: "10.333vh" }}> für die Zukunft  </p>,
                        7:  <p style={{ fontSize: "10.333vh" }}> für die Zukunft  </p>,
                        9:  <p style={{ fontSize: "10.333vh" }}> für die Zukunft  </p>,
                        11: <p style={{ fontSize: "10.333vh" }}> für die Zukunft  </p>,
                        13: <p style={{ fontSize: "10.333vh" }}> für die Zukunft  </p>,

                        },
    answerNumbersLeft:{ 3: " Richtig",
                        5: " Falsch ",
                        7: " Falsch",
                        9: " Richtig",
                        11: " Falsch ",
                        13: " Richtig",
                        },
    answerNumbersRight:{3: " Falsch ",
                        5: " Richtig",
                        7: " Richtig ",
                        9: " Falsch",
                        11: "Richtig", 
                        13: "Falsch",
    
                        },
    explanation:{
                        3: " Diese Innovation existiert! Die sogenannte „Banana Leaf Technology“ wurde von dem damals 11-jährigen Tenith Adithyaa entwickelt und ist heute ein indisches Unternehmen. Aus den Bananenblättern (siehe Bild) wird Einweggeschirr mit einer Haltbarkeit von ungefähr drei Jahren auf umweltfreundliche Weise hergestellt. Die Vorteile sind zum Beispiel, dass keine Chemikalien benötigt werden und die Produkte biologisch abbaubar sind. ",
                        5: " Diese Innovation ist für die Zukunft! Eine schwimmende Stadt namens „Oceanix“ wurde jedoch bereits entworfen von dem Architekten Bjarke Ingels. Insgesamt könnten in der gesamten Stadt bis zu 10 000 Menschen wohnen. Sie soll sich selbst über schwimmende Windturbinen und Solarzellen mit Energie versorgen und Lebensmittel ebenfalls selbst produzieren können. Trinkwasser würde aus Kläranlagen oder von gespeichertem Regenwasser kommen. Der Antrieb für dieses Projekt ist der steigende Meeresspiegel, da es eine hochwassersichere Alternative zum Wohnen bieten würde. An der Küste der südkoreanischen Stadt Busan (siehe Bild) soll ein Prototyp von Oceanix bis 2025 entstehen.",
                        7: " Diese Innovation ist für die Zukunft! Es gibt zwar bereits Roboter in OP-Sälen, jedoch werden sie von einem Menschen gesteuert. Nur der Arzt bestimmt, wie sich der Roboter bewegt. Deshalb spricht man auch von „roboter-assistiertem Operieren“. Durch die Maschine kann der Operateur (also der Arzt, der operiert) aber minimalinvasiv (ohne größere Schnitte) vorgehen, muss sich weniger anstrengen und hat eine bessere Sicht in den Körper des Patienten. Ein Beispiel für einen solchen Roboter ist das „da Vinci“ Operationssystem, welches ihr auch auf dem Bild seht. Dieses wird z.B. in der Urologie und Gynäkologie verwendet.",
                        9: " Diese Innovation existiert! Anna Domaske, eine Designerin und Mikrobiologin stellt Textilfasern aus Casein, dem Hauptbestandteil von normaler Kuhmilch, her. Dabei wird nur Milch benutzt, die wir laut den Hygienevorschriften nicht verwenden können. Dementsprechend kommt es zu keiner Lebensmittelverschwendung, sondern Abfallprodukte werden recycelt. Die Stoffe aus den Milchfasern sollen Seide ähneln und auch für Allergiker schonend sein.  ",
                        11: " Diese Innovation ist für die Zukunft! Zwar gibt es immer wieder Versuche, aber unsere Technologie ist aktuell noch nicht dafür geeignet. Das liegt daran, dass die meisten Tiere mit ihren Blicken, ihrem Körper und ihren Gesichtsausdrücken sprechen. So etwas können unsere Geräte jedoch noch nicht erfassen. Der einzige mögliche Weg wäre ihre Laute zu erfassen. Das macht z.B. die App „Meow Talk“ bei Katzen. Jedoch kommunizieren diese Tiere normalerweise nicht über Miauen. Bei uns Menschen wollen sie damit Aufmerksamkeit erlangen, aber sagen auf diese Weise nichts mit einer tieferen Bedeutung. ",
                        13: "Diese Innovation existiert! Dieses Material, das aus recycelten Reishülsen besteht, wird „Acre“ genannt und von dem Unternehmen „Modern Mill“ produziert. Es ist deshalb nachhaltig, weil die Reishülsen ein Abfallprodukt sind und kein Holz von Bäumen verwendet wird. An Acre ist besonders, dass es, im Vergleich zu Holz, leichter ist und sich durch Hitze verformen lässt.  Außerdem verursacht das Wetter, zum Beispiel Regen/Schnee aber auch UV-Licht, weniger Schaden. Aussehen und Textur wiederum ähneln dem „Original“ Material. Auch die Verwendung ist vergleichbar, da aus Acre z.B. Gartenmöbel hergestellt werden.",
    
    
                    },
    // modalContent: <div>Quiz SDG 06</div>,
    isQuizActive: {
        1: false,
        2: false,
        3: true,
        4: false,
        5: true,
        6: false,
        7: true,
        8: false,
        9: true,
        10: false,
        11: true,
        12: false,
        13: true,
        14: false,
    }
        /* eslint-enable unicorn/filename-case */ 
        /* eslint-enable react/react-in-jsx-scope */
        /* eslint-enable react/no-unescaped-entities */
        /* eslint-enable @typescript-eslint/object-curly-spacing */
};