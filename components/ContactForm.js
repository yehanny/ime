import { Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import useContactForm from "../hooks/useContactForm";
import sendMail from "./sendMail";
import { useState } from "react";
import { useTranslation } from "next-i18next";

const ContactForm = () => {
  const { t } = useTranslation("common");
  const { values, handleChange } = useContactForm();
  const [responseMessage, setResponseMessage] = useState({ isSuccessful: false, message: "" });
  console.info("responseMessage: ", responseMessage);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = await sendMail(values.email, values.fullname, values.message);
      if (req.status === 250) {
        setResponseMessage({ isSuccessful: true, message: "Thank you for your message." });
      }
    } catch (e) {
      setResponseMessage({
        isSuccessful: false,
        message: "Oops something went wrong. Please try again.",
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col lg="6">
          <FormGroup className="m-t-15">
            <Input required type="text" value={values.fullname} id="fullname" name="fullname" onChange={handleChange} placeholder={t("contact-us.form.name")} />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup className="m-t-15">
            <Input required type="email" value={values.email} id="email" name="email" onChange={handleChange} placeholder={t("contact-us.form.email")} />
          </FormGroup>
        </Col>
        <Col lg="12">
          <FormGroup className="m-t-15">
            <Input required type="textarea" value={values.message} id="message" name="message" onChange={handleChange} placeholder={t("contact-us.form.message")} />
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
  );
};

export default ContactForm;
