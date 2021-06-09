import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../../types/index';

interface Props {
  content: Game;
}

const GameCard = ({ content }: Props): ReactElement => {
  /* eslint-disable camelcase */
  const { id, title, thumbnail, short_description, genre } = content;

  const link = `/game/${id}`;
  return (
    <Link to={link}>
      <img alt={title} src={thumbnail} />
      <h2>{title}</h2>
      <p>{short_description}</p>
      <p>{genre}</p>
    </Link>
  );
};

export default GameCard;
