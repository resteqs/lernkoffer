// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line unicorn/filename-case
import * as React from 'react';
import house from "./Media/house.png" 
import bad from "./Media/bad.png" 
import keller from "./Media/keller.png" 
import küche from "./Media/küche.png" 
import Schlafzimmer from "./Media/Schlafzimmer.png" 
import { ModalComponent } from '../../../Components/Modal/ModalHelper';


export const SDG11_Quiz_Game = ():JSX.Element => {
    const [itemSelected, setSelectedItem] = React.useState(0);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const solution: Record<number,string> = {
        1: "Wenn möglich, kannst du deine Wäsche auf einen Wäscheständer hängen. So vermeidest du einen Trockner. Im Sommer kannst du den Ständer nach draußen stellen, im Winter in einen warmen Raum. Achte hier aber darauf, zu lüften.",
        2: "Achte darauf, die Kühlschranktür immer richtig zu zumachen! Trenne auch deinen Müll ordentlich. Beim Einkaufen können du und deine Eltern auf regionale und saisonale Produkte achten. Das spart auch Strom. Spülmaschine an für 3 Teller? Belade sie immer voll, um Wasser zu sparen.  ",
        3: "Du kannst auch hier Strom sparen: Mache alle Geräte, so wie dein Handy, deinen Computer und deinen Fernseher wenn möglich aus und lasse sie nicht im Stand-by Modus. Auch die Ladegeräte solltest du abstecken, wenn du sie nicht mehr brauchst.",
        4: "Eine Dusche spart Wasser, macht dich aber genauso sauber wie ein Bad. Ein Föhn verbraucht im Bad viel Strom. Benutze ihn daher so selten wie möglich und lasse im Sommer deine Haare von der Sonne trocknen.",
        5: "Schalte das Licht aus, wenn du aus dem Zimmer gehst. Besonders oft vergessen wir unsere Schreibtischlampen! Du kannst auch deine Schulsachen bewusst einkaufen: zum Beispiel Schulhefte aus recyceltem Papier. Zieh dich im Winter lieber warm an, anstatt die Heizung aufzudrehen!"
    };

    const answerCW: Record<number,string> = {
        1: "Keller",
        2: "Küche",
        3: "Wohnzimmer",
        4: "Bad",
        5: "Zimmer"

    }
    const onClick = (n:number): void => {
        setSelectedItem(n);
        setIsOpen(true)
    }

    return(
        <div>
            <img style = {{ margin: "auto", display:"block", marginTop: "10px", width: "50%", zIndex: "1" }} src={house} alt="house" />
            <img onClick={()=>onClick(1)} style = {{ margin: "auto", display:"block", marginTop: "10px", width: "50%", zIndex: "3", visibility:"hidden",  transform:"translate(0,-102.5%)" }} src={bad} alt="bad" />
            <img onClick={()=>onClick(2)}style = {{ margin: "auto", display:"block", marginTop: "10px", width: "50%", zIndex: "3", transform:"translate(0,-204%)" }} src={keller} alt="keller" />
            <img onClick={()=>onClick(3)}style = {{ margin: "auto", display:"block", marginTop: "10px", width: "50%", zIndex: "3", transform:"translate(0,-305.5%)" }} src={küche} alt="küche" />
            <img onClick={()=>onClick(4)}style = {{ margin: "auto", display:"block", marginTop: "10px", width: "50%", zIndex: "3", transform:"translate(0,-409.5%)" }} src={Schlafzimmer} alt="Schlafzimmer" />
            <ModalComponent setSelectedItem={setSelectedItem} answercw={answerCW[itemSelected]} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} answer={solution[itemSelected]} />
        </div>
    )
}