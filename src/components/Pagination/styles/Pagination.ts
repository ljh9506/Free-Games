import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 24px 0;
`;

export const PageWrapper = styled.div``;

export const Page = styled(Link)`
  text-decoration: none;
  color: #aaaaaa;
  padding: 18px;
  font-size: 28px;
`;
