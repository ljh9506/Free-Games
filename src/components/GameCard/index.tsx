import { ReactElement } from 'react';
import { Game } from '../../types/index';
import {
  BrowserIcon,
  Description,
  Details,
  Genre,
  IconContainer,
  Img,
  StyledLink,
  Title,
  WindowsIcon,
} from './styles/GameCard';

interface Props {
  content: Game;
}

const GameCard = ({ content }: Props): ReactElement => {
  /* eslint-disable camelcase */
  const { id, title, thumbnail, short_description, genre, platform } = content;

  const icons = platform.split(',').map((p) => {
    let icon = null;

    switch (p.trim()) {
      case 'PC (Windows)':
        icon = <WindowsIcon />;
        break;
      case 'Web Browser':
        icon = <BrowserIcon />;
        break;
      default:
        break;
    }

    return icon;
  });

  const link = `/game/${id}`;
  return (
    <StyledLink to={link}>
      <Img alt={title} src={thumbnail} />
      <Details>
        <Title>{title}</Title>
        <Description>{short_description}</Description>
        <Genre>{genre}</Genre>
        <IconContainer>{icons}</IconContainer>
      </Details>
    </StyledLink>
  );
};

export default GameCard;
