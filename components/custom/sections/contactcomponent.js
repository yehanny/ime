import React from "react";
import { Row, Col, Container, Form, FormGroup, Input, Button } from "reactstrap";
import { useTranslation } from "next-i18next";
import office1 from "../../../assets/images/office/office-1.jpg";
import Image from "next/image";
import ContactForm from "../../ContactForm";

const ContactComponent = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">{t("contact-us.title")}</h1>
              <h6 className="subtitle">{t("contact-us.description")}</h6>
            </Col>
          </Row>
        </Container>
      </div>
      <Row>
        <div className="spacer">
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <div className="contact-box p-r-40">
                  <h4 className="title">{t("contact-us.quick-contact")}</h4>
                  <ContactForm />
                </div>
              </Col>
              <Col lg="4">
                <div className="detail-box p-40 bg-info">
                  <Image width={340} src={office1} alt="Contact Us" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Row>
    </div>
  );
};

export default ContactComponent;
