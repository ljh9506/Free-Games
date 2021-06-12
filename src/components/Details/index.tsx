import { useState } from 'react';
import { FaCrown } from 'react-icons/fa';
import { IoMdPerson, IoMdChatboxes } from 'react-icons/io';
import { BsArrowDown } from 'react-icons/bs';
import { useParams } from 'react-router';
import Chart from './chart.png';
import {
  AngryIcon,
  BLink,
  BreacdCrumb,
  Button,
  ContentWrapper,
  Count,
  DetailContainer,
  FaceIcon,
  GameTitle,
  Image,
  LeftContent,
  LetfBtn,
  PlaySection,
  PlusIcon,
  RateSection,
  RightBtn,
  RightContent,
  SamllText,
  SmallIcon,
  SmileIcon,
  Title,
  InfoSection,
  TextField,
  TextList,
  ChartField,
  TextListWrap,
  ChartImage,
  About,
  Description,
  ReadMore,
  AddInfo,
  InfoWrap,
  Info,
  InfoTitle,
  InfoContent,
  Screenshots,
  ImgWrap,
  GameImage,
} from './styles/Details';
import useFetchDetail from '../../hooks/useFetchDetail';

const Details = () => {
  const [readMore, setReadMore] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();
  const { details, err } = useFetchDetail(id);

  if (err) return <h1>{err}</h1>;
  return (
    <>
      <DetailContainer>
        <LeftContent>
          <ContentWrapper>
            <Image src={details?.thumbnail} alt={details?.title} />
            <PlaySection>
              <LetfBtn>Free</LetfBtn>
              <RightBtn href={details?.game_url}>Play Now</RightBtn>
            </PlaySection>
            <RateSection>
              <Button>
                <SmileIcon />
                <Count>30</Count>
                <Title>LIKE</Title>
              </Button>
              <Button>
                <FaceIcon />
                <Count>30</Count>
                <Title>MEH</Title>
              </Button>
              <Button>
                <AngryIcon />
                <Count>30</Count>
                <Title>DISLIKE</Title>
              </Button>
              <Button>
                <PlusIcon />
                <Count>30</Count>
                <Title>ADD</Title>
              </Button>
            </RateSection>
            <SamllText>
              <SmallIcon /> Requires 3rd-Party Account
            </SamllText>
          </ContentWrapper>
        </LeftContent>
        <RightContent>
          <BreacdCrumb>
            <BLink to="/game">Home {'>'}</BLink>
            <BLink to={`/game/${details?.id}`}>&nbsp; {details?.title}</BLink>
          </BreacdCrumb>
          <GameTitle>{details?.title}</GameTitle>
          <InfoSection>
            <TextField>
              <TextList>
                <FaCrown /> Very Positive
              </TextList>
              <TextList>38 Member Ratings</TextList>
              <TextList>
                <IoMdPerson /> 735 Members have this game in their library!
              </TextList>
              <TextListWrap>
                <TextList>
                  <IoMdChatboxes /> 11 Reviews
                </TextList>
                <TextList>
                  <BsArrowDown /> 13%Popularity
                </TextList>
              </TextListWrap>
            </TextField>
            <ChartField>
              <ChartImage src={Chart} alt="chart" />
            </ChartField>
          </InfoSection>
          <About>{`About ${details?.title}`}</About>
          <Description>
            {readMore
              ? details?.description
              : details?.description.slice(0, 500)}
            ...
            <ReadMore onClick={() => setReadMore(!readMore)}>
              {readMore ? ' Read Less' : ' Read More'}
            </ReadMore>
          </Description>
          <AddInfo>Additional Information</AddInfo>
          <InfoWrap>
            <Info>
              <InfoTitle>Title</InfoTitle>
              <InfoContent>{details?.title}</InfoContent>
            </Info>

            <Info>
              <InfoTitle>Developer</InfoTitle>
              <InfoContent>{details?.developer}</InfoContent>
            </Info>

            <Info>
              <InfoTitle>Publisher</InfoTitle>
              <InfoContent>{details?.publisher}</InfoContent>
            </Info>

            <Info>
              <InfoTitle>Release Date</InfoTitle>
              <InfoContent>{details?.release_date}</InfoContent>
            </Info>

            <Info>
              <InfoTitle>Genre</InfoTitle>
              <InfoContent>{details?.genre}</InfoContent>
            </Info>

            <Info>
              <InfoTitle>Platform</InfoTitle>
              <InfoContent>{details?.platform}</InfoContent>
            </Info>
          </InfoWrap>
          <Screenshots>{`${details?.title} Screenshots`}</Screenshots>
          <ImgWrap>
            {details?.screenshots.map((img) => (
              <GameImage src={img.image} alt={img.id} key={img.id} />
            ))}
          </ImgWrap>
        </RightContent>
      </DetailContainer>
    </>
  );
};

export default Details;
