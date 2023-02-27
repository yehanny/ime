/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Block from "./Block";

const Footer = (props) => {
  const { t } = useTranslation("footer");
  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row>
          <Block title={t("footer.block1-title")}>
            <p>{t("footer.address")}</p>
          </Block>
          <Block title={t("footer.block2-title")}>
            <p>
              <i className="fa fa-envelope"></i>&nbsp;&nbsp;
              <Link href="#">
                <a className="link">{t("footer.email-value")}</a>
              </Link>
              <br />
              <i className="fa fa-globe"></i>&nbsp;&nbsp;
              <Link href="https://industrialmagicentertainment.com">
                <a className="link">industrialmagicentertainment.com</a>
              </Link>
              <br />
              <i className="fa fa-phone"></i>&nbsp;&nbsp; +207 235 7890
            </p>
          </Block>
          <Block title={t("footer.block3-title")}>
            <div className="round-social light">
              <Link href="#">
                <a className="link">
                  <i className="fa fa-facebook"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-twitter"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-instagram"></i>
                </a>
              </Link>
            </div>
          </Block>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14 justify-content-between">
                <div className="m-t-10 m-b-10 copyright">
                  {t("footer.rights")}{" "}
                  <Link href="https://industrialmagicentertainment.com">
                    <a className="link">industrialmagicentertainment.com</a>
                  </Link>
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  <Link href="#">
                    <a className="p-10 p-l-0">{t("footer.terms-of-use")}</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">{t("footer.legal-disclaimer")}</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">{t("footer.privacy-policy")}</a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
