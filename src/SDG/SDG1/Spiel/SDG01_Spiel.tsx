// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable prefer-const */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/filename-case */

import * as React from "react";
import renderer from "react-dom";
import infotextbutton from "../../../styles/Infotextbutton.module.css";
import "../../../styles/colour_sdgs.css";
import { Link } from "react-router-dom";
import Logo from "../../../SDGLogos/Goal-SDG01.png";
import Modal from "react-modal";
import endscreen from "../../../styles/endscreen.module.css";

export const SDG01_Spiel = (): JSX.Element => {
    const sdg = "SDG01";
    let [showtext, setText] = React.useState(1);
    let [itemSelected, setSelectedItem] = React.useState(0);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function incrementCount(): void {
        setText(showtext + 1);
    }

    function decrementCount(): void {
        setText(showtext - 1);
    }
    function select1(): void {
        setSelectedItem(1);
    }
    function select2(): void {
        setSelectedItem(2);
    }

    // eslint-disable-next-line unicorn/consistent-function-scoping
    function toggleExplenation(): void {
        const x = document.getElementById("hover")!;
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    let buttonNext;
    let buttonBack;
    let buttonCheck;
    let einleitung;
    let person1_1;
    let person1_2;
    let person2_1;
    let person2_2;
    let answer1;
    let answer2;
    let question1;
    let question2;
    let modal;
    let answerCW1;
    let answerCW2;
    let ende;

    answerCW1 =
        showtext === 4 ? (itemSelected === 0 || itemSelected === 1 ? <p>Wrong</p> : <p>Correct</p>) : <div> </div>;
    answerCW2 =
        showtext === 7 ? (itemSelected === 0 || itemSelected === 1 ? <p>Wrong</p> : <p>Correct</p>) : <div> </div>;

    answer1 =
        showtext === 4 ? (
            <p style={{ fontSize: "40px" }}>
                {" "}
                <b>Antwort:</b> Zahlen aus Deutschland (2019) haben gezeigt, dass ein/e Wirtschaftsinformatiker:in im
                Schnitt 65.206€ verdient, während ein/e Grafikdesigner:in etwa 27.840€ verdient. Als
                Wirtschaftsinformatiker:in verdient man im Schnitt etwa 37.400€ mehr als ein/e Grafikdesigner:in, was
                mehr als das Doppelte von diesem Gehalt ist. Aber warum? Diese Unterschiede sind größtenteils dadurch zu
                begründen, dass in der modernen Wirtschaft wesentlich mehr Wirtschaftsinformatiker:innen gesucht werden
                als Grafikdesigner:innen
            </p>
        ) : (
            <div> </div>
        );
    answer2 =
        showtext === 7 ? (
            <p style={{ fontSize: "40px" }}>
                {" "}
                <b>Antwort:</b> Zahlen aus Deutschland (2019) haben gezeigt, dass ein/e Wirtschaftsinformatiker:in im
                Schnitt 65.206€ verdient, während ein/e Grafikdesigner:in etwa 27.840€ verdient. Als
                Wirtschaftsinformatiker:in verdient man im Schnitt etwa 37.400€ mehr als ein/e Grafikdesigner:in, was
                mehr als das Doppelte von diesem Gehalt ist. Aber warum? Diese Unterschiede sind größtenteils dadurch zu
                begründen, dass in der modernen Wirtschaft wesentlich mehr Wirtschaftsinformatiker:innen gesucht werden
                als Grafikdesigner:innen
            </p>
        ) : (
            <div> </div>
        );
    modal = (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
            overlayClassName={{
                base: "overlay-base",
                afterOpen: "overlay-after",
                beforeClose: "overlay-before",
            }}
            className={{
                base: "content-base",
                afterOpen: "content-after",
                beforeClose: "content-before",
            }}
            closeTimeoutMS={500}
        >
            <div className="content-header">
                {answerCW1}
                {answerCW2}
                <button
                    type="button"
                    className="personCheckOkButton"
                    onClick={() => {
                        setIsOpen(false);
                        incrementCount();
                    }}
                >
                    <b>Okay</b>
                </button>
            </div>
            {answer1}
            {answer2}
        </Modal>
    );

    buttonBack =
        showtext > 1 ? (
            <div style={{ marginTop: "1px" }} className="backButtonDiv">
                {" "}
                <button type="button" onClick={decrementCount} className="backButton">
                    &#129044;
                </button>
            </div>
        ) : (
            <div> </div>
        );

    buttonNext =
        showtext !== 4 && showtext < 7 ? (
            <div style={{ marginTop: "10px" }} className="nextbutton">
                {" "}
                <div style={{ position: "absolute", top: "950px", left: "1700px" }}>
                    <button className={infotextbutton.pushable} type="button" onClick={incrementCount}>
                        <span className={infotextbutton.shadow} />
                        <span className={infotextbutton.edgegreen} />
                        <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                            <p className={infotextbutton.buttontext}>Weiter</p>
                        </span>
                    </button>
                </div>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );

    buttonCheck =
        showtext === 4 || showtext === 7 ? (
            <div style={{ marginTop: "10px" }} className="personCheckAnswerButton">
                {" "}
                <button className={infotextbutton.pushable} type="button" onClick={() => setIsOpen(true)}>
                    <span className={infotextbutton.shadow} />
                    <span className={infotextbutton.edgegreen} />
                    <span className={infotextbutton.front} style={{ backgroundColor: "green" }}>
                        <p className={infotextbutton.buttontext}>Überprüfe</p>
                    </span>
                </button>
            </div>
        ) : (
            <button className="buttonInvisible" type="button">
                {" "}
            </button>
        );
    einleitung =
        showtext === 1 ? (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    Einleitung:{" "}
                </p>
                <p className="einleitungText">
                    “Geld regiert die Welt” – Ein Sprichwort, das man oft in ganz verschiedenen Zusammenhängen hört.
                    Aber wer verdient eigentlich wie viel? Hast du dir dazu schon einmal Gedanken gemacht? Du wirst
                    gleich jeweils zwei Steckbriefe (oder nur den Namen) zu unterschiedlichen Berufen angezeigt
                    bekommen. Lies dir diese Informationen gut durch. Im Anschluss kannst du dir überlegen, mit welchem
                    dieser zwei Berufe man wohl mehr verdient (das könnt ihr auch in der Gruppe diskutieren und dann die
                    Antwort angeben, für die die Mehrheit ist).{" "}
                </p>
            </div>
        ) : (
            <div />
        );

    person1_1 =
        showtext === 2 ? (
            <div style={{ marginTop: "60px", marginLeft: "50px" }}>
                <p className="underlinedHeader">Person Nr. 1.1: Wirtschaftsinformatiker </p>
                <p style={{ marginTop: "20px", marginLeft: "30px", marginRight: "80px" }} className="personText">
                    <ul>
                        <li>
                            &#9679;<b>Branche:</b> IT und Development (= Entwicklung){" "}
                        </li>
                        <li>
                            &#9679;<b>Definition:</b>Beschäftigt sich mit der Technik eines Unternehmens. Genauer gesagt
                            damit, dass wichtige{" "}
                            <abbr
                                title=" (sagen einer Firma, was sie machen müssen, damit ihre Produkte gut verkauft werden/welche Produkte
                    momentan besonders gut verkauft werden können)"
                                tabIndex={0}
                            >
                                betriebswirtschaftliche Fragen
                            </abbr>
                            ,{" "}
                            <abbr title="mit der Hilfe von Computern und moderner Technik" tabIndex={0}>
                                digital
                            </abbr>{" "}
                            gelöst werden.{" "}
                        </li>
                        <li>
                            &#9679; <b>Voraussetzungen:</b> Abgeschlossenes Studium {"->"} sehr viel in verschiedenen
                            Bereichen (Technik, BWL, Soziologie, Psychologie) lernen und wissen
                        </li>
                        <li>
                            &#9679; <b>Mögliche Aufgabengebiete:</b> Mit Kunden kommunizieren und Lösungen für ihre
                            Probleme finden. Diese Lösungsansätze dann Spezialisten erklären und in seltenen Fällen bei
                            der Umsetzung auch selbst helfen.
                        </li>
                        <li>
                            &#9679;<b>In welcher Hinsicht anstrengend?:</b> Bei diesem Beruf hast du viele
                            Einflussfaktoren, die deinen Tag anstrengend machen. Zum einen musst du sehr viel Denken und
                            Überlegen. Zum anderen musst du immer an mehrere Sachen gleichzeitig denken, zum Beispiel
                            daran, was der Kunde wirklich will und daran, was deine Kollegen umsetzen können. Du wirst
                            die meiste Zeit vor einem Computer sitzen oder mit Kunden im Gespräch sein, das kann
                            durchaus auch sehr anstrengend sein.{" "}
                        </li>
                    </ul>{" "}
                </p>
            </div>
        ) : (
            <div />
        );
    person1_2 =
        showtext === 3 ? (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    Person Nr. 1.2: Grafiker:In{" "}
                </p>
                <p className="personText">
                    <ul>
                        <li>
                            &#9679;<b>Branche:</b>Design, Gestaltung und Medien
                        </li>
                        <li>
                            &#9679;<b>Definition:</b>Erstellung von visuellen Medien (Sachen, die du sehen kannst z.B.
                            Bilder oder Zeichnungen), um die Aufmerksamkeit von Leuten auf zum Beispieleine Werbetafel
                            zu ziehen. Das meiste wird mittlerweile digital erstellt und nur noch wenig auf Papier
                            gezeichnet.
                        </li>
                        <li>
                            &#9679; <b>Voraussetzungen:</b> Entweder ein Grafikdesign Studium oder eine Ausbildung zu
                            diesem Beruf. Es können dir aber auch verwandte Studiengänge helfen und dich für die Arbeit
                            als Grafikdesigner:in qualifizieren (zeigen, dass du das kannst). Am wichtigsten ist aber,
                            dass du kreativ bist und zeichnen kannst. In der heutigen Zeit werden auch Medienkompetenzen
                            (Umgang mit Computer und neuen Techniken) immer wichtiger. Außerdem musst du gut mit Kunden
                            umgehen können, weil du schließlich deren Wünsche umsetzen möchtest.
                        </li>
                        <li>
                            &#9679; <b>Mögliche Aufgabengebiete:</b> Einige Grafikdesigner erstellen Materialien für
                            Werbungen. Andere arbeiten an Büchern und einige andere auch an Darstellungen für Apps
                            (Anwendungen die auf Computern/Handys/Tablets… laufen).
                        </li>
                        <li>
                            &#9679;<b>In welcher Hinsicht anstrengend?:</b> Ein wesentlicher Vorteil ist, dass du deiner
                            Kreativität freien Lauf lassen kannst. Hierbei ist allerdings Vorsicht geboten, denn du
                            musst immer im Kopf behalten, was der Kunde sich wünscht. Bei diesem Beruf ist besonders die
                            Zeit, in der du mit dem Kunden erarbeitest, wie das gewünschte Produkt aussehen soll,
                            anspruchsvoll. Gerade aus dem Grund, weil Kunden oftmals auf deinem Fachgebiet nur wenig
                            Wissen haben und so nicht exakt bestimmen können, was sie brauchen, diesen Schritt musst
                            immer du als Grafiker:in machen. Grafiker:innen arbeiten mittlerweile sehr viel an digitalen
                            Geräten, was auf Dauer auch sehr anstrengend wird, besonders für die Augen und deshalb, weil
                            man die meiste Zeit sitzend verbringt{" "}
                        </li>
                    </ul>{" "}
                </p>
            </div>
        ) : (
            <div />
        );
    question1 =
        showtext === 4 ? (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px", fontSize: "30px" }} className="underlinedHeader">
                    Meinst du, dass eine Person, die als Wirtschaftsinformatiker:in oder eine Person, die als
                    Grafikdesigner:in arbeitet mehr verdient? Und warum meinst du, dass das so ist?{" "}
                </p>
                <button
                    type="button"
                    style={{ marginLeft: "150px", marginTop: "60px" }}
                    className={itemSelected === 1 ? "selectedPerson" : ""}
                    onClick={() => select1()}
                >
                    <img
                        style={{ maxWidth: "600px", maxHeight: "500px" }}
                        src="https://picsum.photos/id/237/1000/1000"
                        alt="Wirtschaftsinformatiker"
                    />
                </button>
                <button
                    type="button"
                    style={{ marginRight: "150px", marginTop: "60px", float: "right" }}
                    className={itemSelected === 2 ? "selectedPerson" : ""}
                    onClick={() => select2()}
                >
                    <img
                        style={{ maxWidth: "600px", maxHeight: "500px" }}
                        src="https://picsum.photos/id/237/1000/1000"
                        alt="Wirtschaftsinformatiker"
                    />
                </button>
            </div>
        ) : (
            <div />
        );
    person2_1 =
        showtext === 5 ? (
            <div style={{ marginTop: "60px", marginLeft: "50px" }}>
                <p className="underlinedHeader">Person Nr. 2.1: Gärtner:in </p>
                <p style={{ marginTop: "20px", marginLeft: "30px", marginRight: "80px" }} className="personText">
                    <ul>
                        <li>
                            &#9679;<b>Branche:</b> IT und Development (= Entwicklung){" "}
                        </li>
                        <li>
                            &#9679;<b>Definition:</b>Beschäftigt sich mit der Technik eines Unternehmens. Genauer gesagt
                            damit, dass wichtige{" "}
                            <abbr
                                title=" (sagen einer Firma, was sie machen müssen, damit ihre Produkte gut verkauft werden/welche Produkte
                    momentan besonders gut verkauft werden können)"
                                tabIndex={0}
                            >
                                betriebswirtschaftliche Fragen
                            </abbr>
                            ,{" "}
                            <abbr title="mit der Hilfe von Computern und moderner Technik" tabIndex={0}>
                                digital
                            </abbr>{" "}
                            gelöst werden.{" "}
                        </li>
                        <li>
                            &#9679; <b>Voraussetzungen:</b> Abgeschlossenes Studium {"->"} sehr viel in verschiedenen
                            Bereichen (Technik, BWL, Soziologie, Psychologie) lernen und wissen
                        </li>
                        <li>
                            &#9679; <b>Mögliche Aufgabengebiete:</b> Mit Kunden kommunizieren und Lösungen für ihre
                            Probleme finden. Diese Lösungsansätze dann Spezialisten erklären und in seltenen Fällen bei
                            der Umsetzung auch selbst helfen.
                        </li>
                        <li>
                            &#9679;<b>In welcher Hinsicht anstrengend?:</b> Bei diesem Beruf hast du viele
                            Einflussfaktoren, die deinen Tag anstrengend machen. Zum einen musst du sehr viel Denken und
                            Überlegen. Zum anderen musst du immer an mehrere Sachen gleichzeitig denken, zum Beispiel
                            daran, was der Kunde wirklich will und daran, was deine Kollegen umsetzen können. Du wirst
                            die meiste Zeit vor einem Computer sitzen oder mit Kunden im Gespräch sein, das kann
                            durchaus auch sehr anstrengend sein.{" "}
                        </li>
                    </ul>{" "}
                </p>
            </div>
        ) : (
            <div />
        );
    person2_2 =
        showtext === 6 ? (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px" }} className="underlinedHeader">
                    Person Nr. 1.2: Grafiker:In{" "}
                </p>
                <p className="personText">
                    <ul>
                        <li>
                            &#9679;<b>Branche:</b>Design, Gestaltung und Medien
                        </li>
                        <li>
                            &#9679;<b>Definition:</b>Erstellung von visuellen Medien (Sachen, die du sehen kannst z.B.
                            Bilder oder Zeichnungen), um die Aufmerksamkeit von Leuten auf zum Beispieleine Werbetafel
                            zu ziehen. Das meiste wird mittlerweile digital erstellt und nur noch wenig auf Papier
                            gezeichnet.
                        </li>
                        <li>
                            &#9679; <b>Voraussetzungen:</b> Entweder ein Grafikdesign Studium oder eine Ausbildung zu
                            diesem Beruf. Es können dir aber auch verwandte Studiengänge helfen und dich für die Arbeit
                            als Grafikdesigner:in qualifizieren (zeigen, dass du das kannst). Am wichtigsten ist aber,
                            dass du kreativ bist und zeichnen kannst. In der heutigen Zeit werden auch Medienkompetenzen
                            (Umgang mit Computer und neuen Techniken) immer wichtiger. Außerdem musst du gut mit Kunden
                            umgehen können, weil du schließlich deren Wünsche umsetzen möchtest.
                        </li>
                        <li>
                            &#9679; <b>Mögliche Aufgabengebiete:</b> Einige Grafikdesigner erstellen Materialien für
                            Werbungen. Andere arbeiten an Büchern und einige andere auch an Darstellungen für Apps
                            (Anwendungen die auf Computern/Handys/Tablets… laufen).
                        </li>
                        <li>
                            &#9679;<b>In welcher Hinsicht anstrengend?:</b> Ein wesentlicher Vorteil ist, dass du deiner
                            Kreativität freien Lauf lassen kannst. Hierbei ist allerdings Vorsicht geboten, denn du
                            musst immer im Kopf behalten, was der Kunde sich wünscht. Bei diesem Beruf ist besonders die
                            Zeit, in der du mit dem Kunden erarbeitest, wie das gewünschte Produkt aussehen soll,
                            anspruchsvoll. Gerade aus dem Grund, weil Kunden oftmals auf deinem Fachgebiet nur wenig
                            Wissen haben und so nicht exakt bestimmen können, was sie brauchen, diesen Schritt musst
                            immer du als Grafiker:in machen. Grafiker:innen arbeiten mittlerweile sehr viel an digitalen
                            Geräten, was auf Dauer auch sehr anstrengend wird, besonders für die Augen und deshalb, weil
                            man die meiste Zeit sitzend verbringt{" "}
                        </li>
                    </ul>{" "}
                </p>
            </div>
        ) : (
            <div />
        );
    question2 =
        showtext === 7 ? (
            <div>
                <p style={{ marginTop: "60px", marginLeft: "50px", fontSize: "30px" }} className="underlinedHeader">
                    Meinst du, dass eine Person, die als Wirtschaftsinformatiker:in oder eine Person, die als
                    Grafikdesigner:in arbeitet mehr verdient? Und warum meinst du, dass das so ist?{" "}
                </p>
                <button
                    type="button"
                    style={{ marginLeft: "150px", marginTop: "60px" }}
                    className={itemSelected === 1 ? "selectedPerson" : ""}
                    onClick={() => select1()}
                >
                    <img
                        style={{ maxWidth: "600px", maxHeight: "500px" }}
                        src="https://picsum.photos/id/237/1000/1000"
                        alt="Wirtschaftsinformatiker"
                    />
                </button>
                <button
                    type="button"
                    style={{ marginRight: "150px", marginTop: "60px", float: "right" }}
                    className={itemSelected === 2 ? "selectedPerson" : ""}
                    onClick={() => select2()}
                >
                    <img
                        style={{ maxWidth: "600px", maxHeight: "500px" }}
                        src="https://picsum.photos/id/237/1000/1000"
                        alt="Wirtschaftsinformatiker"
                    />
                </button>
            </div>
        ) : (
            <div />
        );
    ende =
        showtext === 8 ? (
            <div>
                <p className={endscreen.header}>Ende</p>
            </div>
        ) : (
            <div> </div>
        );

    return (
        <div>
            <div className={`colour_${sdg}_header`}>
                <div className="header">
                    Hochwertige Bildung <img className="sdglogo" alt="logo" src={Logo} />
                </div>
            </div>
            {buttonBack}
            {einleitung}
            {person1_1}
            {person1_2}
            {question1}
            {person2_1}
            {person2_2}
            {question2}
            {buttonNext}
            {buttonCheck}
            {modal}
            {ende}
        </div>
    );
};
// eslint-disable-next-line react/jsx-pascal-case
renderer.render(<SDG01_Spiel />, document.getElementById("root"));
