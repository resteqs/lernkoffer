import front from "../Media/front.png"
import geo from "../Media/geo.png"
import nuclear from "../Media/nuclear.png"
import oil from "../Media/oil.png"
import solar from "../Media/solar.png"
import water from "../Media/water.png"
import wind from "../Media/wind.png"

export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

// Put the images in an array
const cards: string[] = [geo, nuclear, oil, solar, water, wind];

export const createBoard = (): CardType[] =>
  [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: front,
    frontImage: card,
    clickable: true,
    matchingCardId: i < cards.length ? `card${i + cards.length}` : `card${i - cards.length}`
  }));
