import React from "react";
import { Row, Col, Container, Form, FormGroup, Input, Button } from "reactstrap";
import { useTranslation } from "next-i18next";
import office1 from "../../../assets/images/office/office-1.jpg";
import Image from "next/image";

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
                  <Form>
                    <Row>
                      <Col lg="6">
                        <FormGroup className="m-t-15">
                          <Input type="text" name="name" placeholder={t("contact-us.form.name")} />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="m-t-15">
                          <Input type="text" name="email" placeholder={t("contact-us.form.email")} />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <FormGroup className="m-t-15">
                          <Input type="textarea" name="message" placeholder={t("contact-us.form.message")} />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <Button type="submit" className="btn btn-danger-gradiant m-t-20 btn-arrow">
                          <span>
                            {" "}
                            {t("contact-us.form.send")} <i className="ti-arrow-right"></i>
                          </span>
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
              <Col lg="4">
                <div className="detail-box p-40 bg-info">
                  <Image src={office1} alt="Contact Us" />
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
