import styled from 'styled-components';
import { breakpoints } from '../../../styles/breakpoints';

export const List = styled.ul`
  display: grid;
  justify-content: center;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 22px;
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: ${breakpoints.tablet}) {
    max-width: 332px;
  }
`;
