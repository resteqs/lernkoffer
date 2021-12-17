interface Props {
    sdgNumber: number;
}
 
export const NameOfSDG = (props: Props): string => {
    const titleOfSDG = {
        1: "Keine Armut",
        2: "Kein Hunger",
        3: "Gesundheit und Wohlergehen",
        4: "Hochwertige Bildung",
        5: "Geschlechtergleichheit",
        6: "Sauberes Wasser und Sanitärversorgung",
        7: "Bezahlbare und saubere Energie",
        8: "Menschenwürdige Arbeit und Wirtschaftswachstum",
        9: "Industrie, Innovationen und Infrastruktur",
        10: "Weniger Ungleichheit",
        11: "Nachhaltige Städte und Gemeinden",
        12: "Nachhaltige/r Konsum- und Produktion",
        13: "Maßnahmen zum Klimaschutz",
        14: "Leben unter Wasser",
        15: "Leben an Land",
        16: "Frieden, Gerechtigkeit und starke Instituttionen",
        17: "Partnerschaften zur Erreichung der Ziele",
    };

    return titleOfSDG[props.sdgNumber];
};
