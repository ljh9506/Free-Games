import { Page, PageContainer, PageWrapper } from './styles/Pagination';

type Props = {
  countPage: number;
};

const Pagination = ({ countPage }: Props) => {
  return (
    <PageContainer>
      <PageWrapper>
        {Array.from({ length: countPage }, (_, i) => (
          <Page to={`/game?page=${i + 1}`}>{i + 1}</Page>
        ))}
      </PageWrapper>
    </PageContainer>
  );
};

export default Pagination;
