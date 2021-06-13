import { Link } from 'react-router-dom';
import { GrWindows } from 'react-icons/gr';
import { GoBrowser } from 'react-icons/go';
import styled from 'styled-components/macro';
import {
  backgroundColor,
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
  tertiaryTextColor,
} from '../../../styles/themes';
import { breakpoints } from '../../../styles/breakpoints';

export const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  background-color: ${secondaryColor};
  border-radius: 4px;
  text-decoration: none;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  color: ${primaryTextColor};
  @media (min-width: ${breakpoints.tablet}) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Details = styled.div`
  padding: 20px;
  @media (min-width: ${breakpoints.tablet}) {
    white-space: nowrap;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${secondaryTextColor};
  @media (min-width: ${breakpoints.tablet}) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Genre = styled.p`
  padding: 2px 4px;
  margin: 0 8px 0 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  color: ${tertiaryTextColor};
  background-color: ${backgroundColor};
  float: right;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const WindowsIcon = styled(GrWindows)`
  color: ${backgroundColor};
  font-size: 17px;
  margin-right: 10px;
`;

export const BrowserIcon = styled(GoBrowser)`
  color: ${backgroundColor};
  font-size: 20px;
`;
