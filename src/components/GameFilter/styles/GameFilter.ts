import styled from 'styled-components';
import { backgroundColor, secondaryTextColor } from '../../../styles/themes';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 0 24px 0;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  max-width: 542px;
  padding: 0 16px;
  margin: 24px auto;
  color: ${secondaryTextColor};
  box-sizing: border-box;
`;

export const Label = styled.label`
  margin-right: 16px;
  flex-basis: 25%;
  display: inline-block;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Select = styled.select`
  width: 100%;
  margin-top: 0;
  color: white;
  background-color: ${backgroundColor};
`;
