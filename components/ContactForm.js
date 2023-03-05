import { Row, Col, Form, FormGroup, Input, Button } from "reactstrap";
import useContactForm from "../hooks/useContactForm";
import sendMail from "../lib/sendMail";
import { useTranslation } from "next-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const ContactForm = () => {
  const { t } = useTranslation("common");
  const { values, setValues, handleChange } = useContactForm();
  const thanks_message = t("contact-us.form.thanks-message");
  const error_message = t("contact-us.form.error-message");
  const notifySuccess = () => toast.success(thanks_message);
  const notifyError = () => toast.error(error_message);
  const [disableSubmit, setDisableSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues({
      email: "",
      fullname: "",
      message: "",
    });
    setDisableSubmit(true);
    try {
      const req = await sendMail(values.email, values.fullname, values.message, values.email_from);
      if (req.status === 200) {
        notifySuccess();
        setDisableSubmit(false);
      }
    } catch (e) {
      notifyError();
      setDisableSubmit(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ToastContainer />
      <Input type="hidden" value="info@industrialmagicentertainment.com" id="email_from" name="email_from" />
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
          <Button disabled={disableSubmit} type="submit" className="btn btn-danger-gradiant m-t-20 btn-arrow">
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
