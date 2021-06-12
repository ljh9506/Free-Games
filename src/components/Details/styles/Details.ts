import styled from 'styled-components/macro';
import { BiSmile } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { GoDiffAdded } from 'react-icons/go';
import { FaRegAngry } from 'react-icons/fa';
import { MdTagFaces } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const DetailContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 32px 15px;
  display: flex;

  @media screen and (max-width: 1052px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const LeftContent = styled.div`
  padding: 0 10px;
`;

export const RightContent = styled.div`
  width: 70%;
  padding: 0 10px;
  margin-left: 12px;

  @media screen and (max-width: 1052px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  position: -webkit-sticky;
  top: 25px;
  left: 0;
`;

export const Image = styled.img``;

export const PlaySection = styled.div`
  display: flex;
`;

export const LetfBtn = styled.a`
  display: flex;
  justify-content: center;
  width: 15%;
  margin-right: 12px;
  background-color: #32383e;
  color: #aaaaaa;
  padding: 12px 16px;
  border-radius: 3px;
  font-size: 16px;
  margin-top: 12px;
  transition: 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    filter: brightness(1.4);
    transition: 0.2s ease-in-out;
  }
`;

export const RightBtn = styled.a`
  display: flex;
  justify-content: center;
  width: 75%;
  background-color: #4799eb;
  color: #fff;
  padding: 12px 16px;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 12px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
    transition: 0.2s ease-in-out;
  }
`;

export const RateSection = styled.div`
  display: flex;
  width: 100%;
  margin-top: 12px;
`;

export const Button = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #32383e;
  flex: 1;
  padding: 8px 0;

  &:hover {
    cursor: pointer;
    filter: brightness(1.2);
  }
`;
export const SmileIcon = styled(BiSmile)`
  font-size: 24px;
  color: #02b912;
`;

export const FaceIcon = styled(MdTagFaces)`
  font-size: 24px;
  color: #aaaaaa;
`;

export const AngryIcon = styled(FaRegAngry)`
  font-size: 22px;
  color: #eb4b2a;
`;

export const PlusIcon = styled(GoDiffAdded)`
  font-size: 22px;
  color: #4799eb;
`;

export const Count = styled.span`
  color: #aaaaaa;
  font-size: 14px;
  margin: 4px 0;
`;

export const Title = styled.span`
  color: #aaaaaa;
  font-size: 12px;
  font-weight: bold;
`;

export const SamllText = styled.p`
  color: #aaaaaa;
`;

export const SmallIcon = styled(BsFillPersonFill)`
  color: #aaaaaa;
`;

export const BreacdCrumb = styled.div`
  display: flex;
`;

export const BLink = styled(Link)`
  text-decoration: none;
  color: #bbbbbb;
`;

export const GameTitle = styled.h1`
  color: #aaaaaa;
  margin: 10px 0;
`;

export const InfoSection = styled.div`
  display: flex;
  margin: 34px 0;

  @media screen and (max-width: 1052px) {
    flex-direction: column;
  }
`;

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TextList = styled.span`
  display: flex;
  align-items: center;
  color: #aaaaaa;
  font-size: 18px;
  margin-bottom: 16px;

  svg {
    margin-right: 8px;
    font-size: 20px;
  }
`;

export const ChartField = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextListWrap = styled.div`
  display: flex;

  ${TextList} {
    margin-right: 20px;
  }
`;

export const ChartImage = styled.img`
  height: 180px;
`;

export const About = styled.h2`
  color: #aaaaaa;
  font-size: 32px;
  border-bottom: 1px solid #aaaaaa;
  padding-bottom: 12px;
`;

export const Description = styled.p`
  color: #aaaaaa;
  font-size: 18px;
  line-height: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #aaaaaa;
`;

export const ReadMore = styled.span`
  color: #fff;
  font-size: 16px;
  line-height: 32px;

  &:hover {
    cursor: pointer;
  }
`;

export const AddInfo = styled.h2`
  color: #aaaaaa;
  font-size: 32px;
  border-bottom: 1px solid #aaaaaa;
  padding-bottom: 12px;
`;

export const InfoWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled.span`
  color: #7a8288;
`;

export const InfoContent = styled.p`
  color: #aaaaaa;
  margin-top: 12px;
`;

export const Screenshots = styled.h2`
  color: #aaaaaa;
  font-size: 32px;
  border-bottom: 1px solid #aaaaaa;
  padding-bottom: 12px;
`;

export const ImgWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const GameImage = styled.img`
  width: 100%;
  height: 100%;
`;
