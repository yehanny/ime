import { Row, Col, Container } from "reactstrap";
import { useTranslation } from "next-i18next";

const TopHeaderSections = (props) => {
  const { t } = useTranslation("common");
  return (
    <div className="spacer bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md="7" className="text-center">
            <h1 className="title font-bold">{t(`about-us.${props.title}`)}</h1>
            <div className="subtitle">{t(`about-us.${props.subtitle}`)}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopHeaderSections;
