import { useState } from 'react';
import { Page, PageContainer, PageWrapper } from './styles/Pagination';

type Props = {
  countPage: number;
};

const Pagination = ({ countPage }: Props) => {
  const [clicked, setClicked] = useState<number | null>(0);
  return (
    <PageContainer>
      <PageWrapper>
        {Array.from({ length: countPage }, (_, i) => (
          <Page
            to={`/game?page=${i + 1}`}
            onClick={() => setClicked(i)}
            clicked={clicked === i ? 1 : 0}
          >
            {i + 1}
          </Page>
        ))}
      </PageWrapper>
    </PageContainer>
  );
};

export default Pagination;
