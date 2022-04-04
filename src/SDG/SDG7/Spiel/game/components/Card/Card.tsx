import React from 'react';
// Types
import { CardType } from '../../setup';
// Styles
import { Wrapper, FrontImg, BackImg } from './Card.styles';

type Props = {
  card: CardType;
  callback: (card: CardType) => void;
};

const Card: React.FC<Props> = ({ card, callback }) => {
  const handleClick = ():any => {
    if (card.clickable) callback(card);
  };

  return (
    <Wrapper onClick={handleClick}>
      <FrontImg flipped={card.flipped} src={card.frontImage} alt='card-front' />
      <BackImg flipped={card.flipped} src={card.backImage} alt='card-back' />
    </Wrapper>
  );
};

export default Card;
