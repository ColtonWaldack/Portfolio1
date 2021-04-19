import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AwardImg from '../Image/AwardImg.jsx';
import PortfolioContext from '../../context/context';

const Award = () => {
  const { award } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, link, link2 } = award;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="award">
      <Container>
        <Title title="Awards and Commendations" />
        <Row className="award-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={450} distance="30px">
              <div className="award-wrapper__image">
                <AwardImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={450} distance="30px">
              <div className="award-wrapper__info">
                <p className="award-wrapper__info-text">
                  {paragraphOne ||
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                </p>

               
                {link && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={link}
                    >
                      Link to NOVA Awards
                    </a>
                  </span>
                )}
                {link && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={link2}
                    >
                      Link to Marymount Awards
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Award;
