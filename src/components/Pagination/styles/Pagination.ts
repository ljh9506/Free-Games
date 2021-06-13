import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  clicked: number;
};

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 24px 0;
`;

export const PageWrapper = styled.div``;

export const Page = styled(Link)`
  text-decoration: none;
  padding: 9px 18px;
  font-size: 28px;
  background-color: ${({ clicked }: Props) => (clicked ? '#aaaaaa' : '')};
  border-radius: 4px;
  color: ${({ clicked }: Props) => (clicked ? '#111' : '#aaaaaa')};
`;
