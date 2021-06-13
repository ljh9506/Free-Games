import { ReactElement } from 'react';
import { FooterContainer, FooterWrapper, Row, Col } from './styles/Footer';

const Footer = (): ReactElement => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Row>
          <Col>Copyright &copy; Free To Game</Col>
        </Row>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
