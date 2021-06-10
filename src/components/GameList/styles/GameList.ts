import styled from 'styled-components';
import { breakpoints } from '../../../styles/breakpoints';

export const List = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 0.1fr);
  grid-gap: 20px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0;
  list-style-type: none;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  margin-bottom: 24px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: ${breakpoints.tablet}) {
    max-width: 332px;
  }
`;
