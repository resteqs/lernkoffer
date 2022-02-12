// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/no-useless-undefined */
import React from 'react';
import Card from './components/Card/Card';
// Setup and Types 
import { createBoard, CardType } from './setup';
import { shuffleArray } from './utils';
// Styles
import { Grid } from './App.styles';

const Game = ():JSX.Element => {
  const [cards, setCards] = React.useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = React.useState(false);
  const [matchedPairs, setMatchedPairs] = React.useState(0);
  const [clickedCard, setClickedCard] = React.useState<undefined | CardType>(undefined);

  React.useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      console.log('Game Won!');
      setGameWon(true);
    }
  }, [matchedPairs]);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleCardClick = (currentClickedCard: CardType) => {
    // Flip the card
    setCards(prev =>
      prev.map(card => (card.id === currentClickedCard.id ? { ...card, flipped: true, clickable: false } : card))
    );
    // If this is the first card that is flipped
    // just keep it flipped
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    // If it's a match
    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs(prev => prev + 1);
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentClickedCard.id ? { ...card, clickable: false } : card
        )
      );
      setClickedCard(undefined);
      return;
    }

    // If it's not a matched pair, wait one second and flip them back
    setTimeout(() => {
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, 1000);

    setClickedCard(undefined);
  };

  return (
    <div style={{ paddingLeft:"10vw" }}>
      <Grid>
        {cards.map(card => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
      </Grid>
    </div>
  );
};

export default Game;
