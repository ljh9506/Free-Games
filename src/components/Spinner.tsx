import { css } from '@emotion/react';
import Clock from 'react-spinners/ClockLoader';

const hide = css`
  display: block;
  margin: 0 auto;
  border-color: #4799eb;
  opacity: 0;
`;

const show = css`
  display: block;
  margin: 0 auto;
  border-color: #4799eb;
  opacity: 1;
`;

type Props = {
  isLoading: boolean;
};

function Spinner({ isLoading }: Props) {
  return (
    <div className="spinner_wrap">
      <Clock color="#4799eb" css={isLoading ? show : hide} size={50} />
    </div>
  );
}

export default Spinner;
