// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */

import { TextProps } from "../../../Interfaces/SDG";
import Logo from "../../../SDGLogos/Goal-SDG15.png";
import Detektiv from "../Spiel/Spielkarten/Detektiv.png";
import Mädchen from "../Spiel/Spielkarten/Mädchen.png";
import Müllfrau from "../Spiel/Spielkarten/Müllfrau.png";
import Raecher from "../Spiel/Spielkarten/Racher.png";
import Tierbesitzer from "../Spiel/Spielkarten/Tierbesitzer.png";
import Umweltsünder from "../Spiel/Spielkarten/Umweltsünder.png";

export const SDG15_Spiel: TextProps = {
    sdgNumber: 15,
    sdgTitle: "Leben an Land",
    sdg: "SDG15",
    logo: Logo,
    header: {
        1: "Einleitung",
        2: "Einleitung",
        3: "Einleitung",
        4: "Einleitung",
        5: "Anleitung",
        6: "Die Tierbesitzer",
        7: "Die Umweltsünder",
        8: "Die Müllfrau",
        9: "Der Detektiv",
        10: "Der Rächer",
        11: "Das Mädchen",
        12: "Anleitung",
        13: "Anleitung",
        14: "Anleitung",
        15: "Anleitung",
        16: "Hinweise an den Spielleiter:",
        17: "Spielablauf",
        18: "Spielablauf - Detektiv",
        19: "Spielablauf - Umweltsünderinnen",
        20: "Spielablauf - Müllfrau",
        21: "Spielablauf - Beratung der verbleibenden Spieler",
        22: "Spielablauf - Beratung der verbleibenden Spieler",
        23: "Spielablauf",
        24: "Überleitung",
        25: "Die Tierbesitzer gewinnen:",
        26: "Die Umweltsünderinnen gewinnen:",
    },

    text: {
        1: (
            <div>
                Tiere brauchen genauso wie wir Menschen einen Platz, an dem sie leben können. Leider wird immer mehr von
                diesem Lebensraum durch uns Menschen zerstört. Zum einen werden Wälder abgeholzt, damit wir das Holz
                z.B. für Möbel verwenden können. Zum anderen hinterlassen wir aber auch oft Müll in Gegenden, in denen
                viele Tiere wohnen. Diese leiden darunter und werden krank.
            </div>
        ),
        2: (
            <div>
                Darum geht es auch in diesem Spiel! Ihr sollt versuchen, die Natur und die Tiere vor Umweltsünderinnen, die
                Müll hinterlassen, zu beschützen. Im Spiel seid ihr alle je ein Besitzer eines Wildtiers. Alle diese
                Wildtiere leben in einem gemeinsamen Reservat, einem Gebiet, auf dem versucht wird, wilden Tieren einen
                möglichst natürlichen Lebensraum zu geben. Jedes Tier hat ein festes Revier.
            </div>
        ),
        3: (
            <div>
                Ihr alle kümmert euch gut um eure Tiere und habt diese sehr lieb, aber es gibt zwei Personen in eurer
                Gruppe, die heimlich das Reservat verschmutzen, indem sie Müll dort abladen. Da Wildtiere mit
                Menschenmüll überhaupt nichts anfangen können und nicht wissen, was das ist, fressen eure Tiere von
                diesem Müll und werden dann schwer krank und müssen raus aus dem Reservat, da sich nun täglich um sie
                gekümmert werden muss (das ist nur im Spiel so).
            </div>
        ),
        4: (
            <div>
                Eure Aufgabe ist es, wenn ihr ein normaler Tierbesitzer seid, die Umweltsünderinnen zu finden und sie samt
                ihrer Tiere aus dem Reservat zu vertreiben, denn nur wenn ihre Tiere noch dort ist, haben die
                Umweltsünderinnen Zugang zu dem Reservat und können es vermüllen! Als Umweltsünderin versucht ihr, nicht
                erwischt zu werden und das Revier von jedem Tier, außer dem eigenen zuzumüllen! Alle Charaktere
                treffen sich einmal im Monat, schauen nach ihren Tieren und überlegen gemeinsam, wer die Umweltsünderinnen
                sind. Den Rest der Zeit verbringen sie meist an anderen Orten.
            </div>
        ),
        5: (
            <div>
                Zunächst möchte ich euch die Karten erklären, die vor euch liegen! Ihr findet sie neben diesem Tablet
                im Koffer!
            </div>
        ),
        6: (
            <div>
                <p>
                    Er hat keine besonderen Eigenschaften oder Fähigkeiten, also kommt er nur einmal im Monat zum
                    Reservat, um bei der Besprechung mit den restlichen Tierbesitzern dabei zu sein. Seine Aufgabe im
                    Spiel ist es, das Verhalten anderer Spieler richtig zu deuten und herauszufinden, welche Mitspieler
                    Umweltsünderinnen sind. Zugleich muss er versuchen, sein eigenes Ausscheiden bei der monatlichen
                    Diskussion der Tierbesitzer zu verhindern. Denn an jedem Monatsende versammeln sich alle
                    übriggebliebenen Tierbesitzer und versuchen herauszufinden, welcher Mitspieler eine Umweltsünderin
                    ist. Nach der Diskussion bestimmen sie einen Tierbesitzer, dessen Tier aus dem Reservat geworfen
                    wird und der dadurch aus dem Spiel ausscheidet.
                </p>
                <img style={{ height: "400px", margin: "auto", display: "block" }} src={Tierbesitzer} alt="" />
            </div>
        ),
        7: (
            <div>
                <p>
                    Jeden Monat entsorgt die Umweltsünderin ihren Müll auf dem Reservat in dem Revier eines anderen
                    Tieres, welches sie zusammen mit den anderen Umweltsünderinnen bestimmt. Der Besitzer scheidet
                    dadurch aus dem Spiel aus. In der allmonatlichen Diskussion ist es ihre Aufgabe, nicht als
                    Umweltsünderin enttarnt zu werden.
                </p>
                <img style={{ height: "600px", margin: "auto", display: "block" }} src={Umweltsünder} alt="" />
            </div>
        ),
        8: (
            <div>
                <p>
                    Die Müllfrau patrouilliert einmal im Monat das Reservat und schaut nach Müll. Sie hat die Chance,
                    den Müll in dem Revier eines der Tiere rechtzeitig wegzuräumen. Diese besteht allerdings nur einmal
                    pro Spiel, denn danach ist ihr Müllwagen voll. Sie kann diesen jedoch wieder entleeren, indem sie
                    den Müll wieder auf einem der Reviere ablädt…
                </p>
                <img style={{ height: "500px", margin: "auto", display: "block" }} src={Müllfrau} alt="" />
            </div>
        ),
        9: (
            <div>
                <p>Jeden Monat spioniert der Detektiv einer Person nach und erfährt so dessen wahre Identität.</p>
                <img style={{ height: "700px", margin: "auto", display: "block" }} src={Detektiv} alt="" />
            </div>
        ),
        10: (
            <div>
                <p>
                    Wird das Revier des Tieres des Rächers zugemüllt, so rächt er sich, bevor er ausscheidet, indem er
                    den Müll auf das Revier eines anderen Tieres räumt.
                </p>
                <img style={{ height: "800px", margin: "auto", display: "block" }} src={Raecher} alt="" />
            </div>
        ),
        11: (
            <div>
                <p>
                    Das Mädchen versucht, so oft wie möglich bei ihrem Tier zu sein. So ist sie immer dann da, wenn die
                    Umweltverschmutzerinnen zuschlagen, sie versucht aber von ihnen nicht erwischt werden, da sie die
                    Identität der Umweltverschmutzerinnen dadurch kennt!
                </p>
                <img style={{ height: "700px", margin: "auto", display: "block" }} src={Mädchen} alt="" />
            </div>
        ),
        12: (
            <div>
                <p>
                    Bei den Karten gibt es zwei Teams: Das erste Team besteht aus den Tierbesitzern, dem Detektiv und
                    dem Mädchen, und es versucht das zweite Team der beiden Umweltsünderinnen zu stoppen, bevor alle
                    Tiere krank werden. Die Umweltsünderinnen wollen die Tiere aus dem Weg haben, damit sie in Ruhe Müll
                    abladen können. Der Rächer und die Müllfrau sind in keinem der beiden Teams, da die Müllfrau ja
                    beiden Teams einmal helfen kann. Der Rächer, bis sein Tier krank wird, steht auf der Seite der
                    Tierbesitzer. Nur wird er dann so wütend, dass er den Müll in ein anderes Revier räumt.
                </p>
            </div>
        ),
        13: (
            <div>
                <p>
                    Nun erkläre ich euch, wie das Spiel funktioniert: Der Spielleiter verteilt die Karten zufällig an
                    alle Spieler (hier ist zu beachten, dass es immer zwei Umweltsünderinnen, mindestens 3 normale
                    Tierbesitzer und eine Müllfrau geben muss, von den anderen Charakteren können bei weniger Spieler
                    auch manche nicht ausgeteilt werden). Jeder Spieler schaut sich seine Karte genau an, zeigt sie
                    niemand anderem und passt auf, dass sie nicht gesehen wird. Außerdem merkt sich jeder, welcher
                    Charakter er ist, da er sich die Karte danach nicht mehr anschauen darf, weil er sonst Gefahr läuft,
                    dass jemand zuschaut.
                </p>
            </div>
        ),
        14: (
            <div>
                <p>
                    Setzt euch nun in einen Kreis und alle legen ihre Karte vor sich ab, damit der Spielleiter sie dem
                    Detektiv zeigen kann. Danach schließen alle Spieler die Augen (ihr könnt sie euch auch zuhalten;
                    Hauptsache ihr seht nichts) und der erste Monat beginnt. Nun fängt der Spielleiter an, die einzelnen
                    Charaktere erscheinen zu lassen und sie zu ihren Aktionen aufzurufen.
                </p>
            </div>
        ),
        15: (
            <div>
                <p>
                    Der Ablauf hängt nun davon ab, wie viele Spieler mitspielen und welche Charaktere dadurch diesmal
                    nicht mitspielen. Der Aufruf der Charaktere erfolgt immer in folgender Reihenfolge. Ganz wichtig
                    ist, dass immer nur die Spieler die Augen öffnen dürfen, deren Charakter aufgerufen werden. Zudem spricht niemand,
                    außer der Spielleiter.
                </p>
            </div>
        ),
        16: (
            <div style={{ fontSize: "45px" }}>
                <p>
                    Dem Spielleiter kommt im Spiel eine zentrale Rolle zu. Er kann die Stimmung im Spiel entscheidend
                    beeinflussen. Er darf die Sätze, mit denen er in der Nacht einzelne Charaktere aufweckt, auch
                    ausschmücken. Er sollte aber immer darauf achten, dass er den Spielern keine Hinweise gibt. So
                    sollte er z.B. durch seine Angaben keine Hinweise auf das Geschlecht eines Charakters geben. Es
                    heißt z.B. immer „das Mädchen“, egal ob der Spieler weiblich oder männlich ist. Ebenso sollte er nie
                    in Richtung des Spielers sprechen, den er aufrufen will. Aufmerksame Spieler könnten dies bemerken
                    und den Hinweis richtig deuten. Wenn der Detektiv eine Karte sehen will, sollte der Spielleiter sie
                    sehr leise und vorsichtig umdrehen, um keine Hinweise durch irgendwelche Geräusche zu geben.
                </p>
            </div>
        ),
        17: (
            <div>
                <p>
                    Aufruf der Spieler: Detektiv – Umweltsünderinnen + Mädchen – Müllfrau – Diskussion + Abstimmung (+
                    evtl. Rächer)
                </p>
            </div>
        ),
        18: (
            <div>
                <p>
                    Der Spielleiter beginnt den Monat, nachdem jeder seine Augen geschlossen hat, mit den Worten: „Der
                    Detektiv taucht auf, öffnet die Augen und zeigt stumm auf die Person, deren wahre Identität er
                    diesen Monat herausfinden möchte!“ Nachdem der Detektiv eine Person ausgewählt hat, zeigt der
                    Spielleiter ihm die Karte jener Person. „Der Detektiv verschwindet wieder und schließt die Augen“
                </p>
            </div>
        ),
        19: (
            <div style={{ fontSize: "45px" }}>
                <p>
                    „Die Umweltsünderinnen tauchen auf, öffnen die Augen und bestimmen, auf welchem Revier ihrer
                    Mitspieler sie den Müll entsorgen wollen! Umweltsünderinnen, zeigt stumm auf einen von euren
                    Mitspieler! Das Mädchen ist bereits hier und hat sich versteckt, es beobachtet die Umweltsünderinnen
                    heimlich. Es darf unauffällig blinzeln und versuchen zu sehen, wer Umweltsünderinnen ist.“ Der
                    Spielleiter nimmt zur Kenntnis, wessen Tier im Laufe des Monats krank werden wird. Wichtig ist
                    hierbei, dass sich die Umweltsünderinnen einigen müssen. „Die Umweltsünderinnen verschwinden wieder
                    und schließen die Augen. Das Mädchen, dass die Umweltsünderinnen heimlich beobachtet hat,
                    verschwindet ebenfalls wieder und schließt die Augen.“
                </p>
            </div>
        ),
        20: (
            <div style={{ fontSize: "45px" }}>
                <p>
                    „Die Müllfrau erscheint nun und öffnet die Augen.“ Falls ihr Wagen noch leer ist, wird sie gefragt:
                    „Ich zeige dir nun, wessen Tier, sollte der Müll nicht weggeräumt werden, schwer krank wird.
                    Möchtest du den Müll wegräumen, so nicke!“ Falls die Müllfrau nickt, wird die Aktion der
                    Umweltverschmutzer rückgängig gemacht. Falls ihr Müllwagen bereits voll ist, wird sie gefragt:
                    „Möchtest du deinen Müll wieder loswerden, so deute stumm auf den Besitzer des Tieres, in dessen
                    Revier du ihn abladen möchtest. Wenn du dies nicht machen willst, so schüttle deinen Kopf“ Die
                    Müllfrau muss nicht jeden Monat ihre Fähigkeiten benutzen. Insgesamt kann sie nur zweimal pro Spiel
                    aktiv werden, einmal um Müll aufzusammeln und einmal, um ihn abzuladen.
                </p>
            </div>
        ),
        21: (
            <div style={{ fontSize: "45px" }}>
                <p>
                    „Ein Monat ist vergangen!“ Falls ein Tier schwer krank geworden ist, wird dies hier verkündet! Die
                    Besitzer dieser Tiere sind aus dem Spiel ausgeschieden und dürfen nichts mehr sagen. Die Karte der
                    Besitzer der kranken Tiere wird nun allen gezeigt und falls derjenige der Rächer ist, darf er für
                    alle sichtbar die Person auswählen, auf deren Revier er den Müll räumen will. Nach der Verkündung,
                    welche Tiere krank sind, beraten sich die übrigen Tierbesitzer: „Wer jemanden verdächtigt, eine
                    Umweltsünderin zu sein, melde sich und begründe seinen Verdacht!“ Hier könnt ihr erwähnen, wenn ihr
                    zum Beispiel glaubt, gehört zu haben, dass sich eure Nachbarin bewegt hat, als die Umweltsünderin
                    angesprochen wurde, oder wenn ihr das Mädchen oder der Detektiv seid, könnt ihr versuchen, die
                    anderen zu überzeugen! Aber Vorsicht! Ihr dürft nicht erwähnen, welcher Charakter ihr seid, auch
                    nicht als Beweis gegen eine Umweltsünderin!
                </p>
            </div>
        ),
        22: (
            <div>
                <p>
                    Nachdem jeder Mitspieler sich, wenn er wollte, geäußert hat, wird abgestimmt, wer am verdächtigsten
                    ist und dadurch dann ausscheidet. Auch hier wird die Karte des Ausscheidenden aufgedeckt und
                    gegebenenfalls kommt der Rächer zum Zug. Bei gleicher Stimmenanzahl gibt es eine Stichwahl. Sollte
                    dann immer noch kein Ergebnis vorliegen, scheidet niemand aus.{" "}
                </p>
            </div>
        ),

        23: (
            <div>
                <p>
                    Danach beginnt der nächste Monat und das Ganze beginnt von vorne. Das Spiel endet, wenn beide
                    Umweltsünderinnen das Reservat verlassen mussten (hier gewinnen die Tierbesitzer), oder wenn außer
                    den Umweltsünderinnen keiner mehr sein Tier im Reservat lassen kann (hier gewinnen die
                    Umweltsünderinnen).
                </p>
            </div>
        ),
        24: (
            <div>
                <p>
                    Nun möchte ich euch noch für beide Enden kurz erklären, was dieses Spiel genau mit der realen Welt
                    zu tun hat!
                </p>
            </div>
        ),
        25: (
            <div style={{ fontSize: "45px", fontStyle: "italic" }}>
                <p>
                    Juhuuuuu🥳! Die Umweltsünderinnen wurden gestoppt! Gratuliere, ihr habt verhindern können, dass alle
                    Tiere im Wald krank wurden vom Müll! Doch wie ihr bestimmt gemerkt habt, sind trotzdem ein paar
                    Tiere krank geworden, bevor ihr die Umweltsünderinnen stoppen konntet! Ihr habt zwar dieses Spiel
                    gewonnen, doch im wirklichen Leben gibt es noch sehr viele Umweltsünderinnen, die meistens unerkannt
                    die Umwelt weiter verschmutzen und die Leben unschuldiger Tiere gefährden! Doch ihr könnt auch schon
                    eine Menge helfen, wenn ihr darauf schaut, dass ihr selbst nie zu Umweltsünderinnen werdet. Falls
                    ihr je eine erwischen solltet, versucht sie zu stoppen! Das könnt ihr z.B. dadurch machen, dass ihr
                    sie ansprecht und dazu auffordert, ihren Müll in den richtigen Mülleimer zu werfen. Damit wäre den
                    armen Tieren schon einmal ein kleines bisschen geholfen!
                </p>
            </div>
        ),
        26: (
            <div style={{ fontSize: "45px", fontStyle: "italic" }}>
                <p>
                    Gratuliere, Umweltsünderinnen! Ihr konntet die ganze Zeit den Schein aufrechterhalten als wärt ihr
                    normale Tierbesitzer. Jedoch hoffe ich, dass ihr im echten Leben nie die Umwelt verschmutzen werdet.
                    Im Gegenteil, ihr solltet im echten Leben immer versuchen, die echten Umweltsünderinnen nicht
                    gewinnen zu lassen, denn schließlich machen sie unschuldige Tiere krank! Und an die Tierbesitzer:
                    hier seht ihr, wie hart es sein kann, gegen Umweltsünderinnen anzukommen. Versucht trotzdem, solltet
                    ihr je eine echte Umweltsünderin erwischen, sie zu stoppen, auch wenn es heute im Spiel leider nicht
                    geklappt hat! Und selbst wenn ihr sie nicht erwischt, hilft es den Tieren sehr, wenn ihr den Müll,
                    den ihr findet, aufsammelt und ihn richtig entsorgt.
                </p>
            </div>
        ),
    },
};
