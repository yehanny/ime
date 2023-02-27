/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import { useTranslation } from "next-i18next";
import TopHeaderSections from "./topheadersections";
import Image from "next/image";
import office1 from "../../../assets/images/office/office-1.jpg";
import office2 from "../../../assets/images/office/office-2.jpg";
import office3 from "../../../assets/images/office/office-3.jpg";

const AboutUs = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <TopHeaderSections title="title" subtitle="subtitle" />
      <div className="spacer team2">
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <Image src={office1} alt="Who we are" />
            </Col>
            <Col md="8" className="text-justify">
              <h2 className="title">{t("about-us.who-we-are.title")}</h2>
              <br />
              <p>{t("about-us.who-we-are.description")}</p>
            </Col>
          </Row>
          <Row className="spacer">
            <Col md="8">
              <h2 className="title">{t("about-us.mission.title")}</h2>
              <br />
              <p>{t("about-us.mission.description")}</p>
            </Col>
            <Col md="4">
              <Image src={office2} alt="Mission" />
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Image src={office3} alt="Vision" />
            </Col>
            <Col md="8">
              <h2 className="title">{t("about-us.vision.title")}</h2>
              <br />
              <p>{t("about-us.vision.description")}</p>
            </Col>
          </Row>
          {/* <Row className="m-t-30">
            <Col lg="3" md="6" className="m-b-30">
              <Row className="no-gutters">
                <Col md="12" className="pro-pic t1">
                  <div className="card-img-overlay">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-behance"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="12">
                  <div className="p-t-10">
                    <h5 className="title font-medium">Michael Doe</h5>
                    <h6 className="subtitle">Property Specialist</h6>
                    <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg="3" md="6" className="m-b-30">
              <Row className="no-gutters">
                <Col md="12" className="col-md-12 pro-pic t2">
                  <div className="card-img-overlay">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-behance"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="12">
                  <div className="p-t-10">
                    <h5 className="title font-medium">Michael Doe</h5>
                    <h6 className="subtitle">Property Specialist</h6>
                    <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg="3" md="6" className="m-b-30">
              <Row className="no-gutters">
                <Col md="12" className="col-md-12 pro-pic t3">
                  <div className="card-img-overlay">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-behance"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="12">
                  <div className="p-t-10">
                    <h5 className="title font-medium">Michael Doe</h5>
                    <h6 className="subtitle">Property Specialist</h6>
                    <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg="3" md="6" className="m-b-30">
              <Row className="no-gutters">
                <Col md="12" className="col-md-12 pro-pic t4">
                  <div className="card-img-overlay">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-behance"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="12">
                  <div className="p-t-10">
                    <h5 className="title font-medium">Michael Doe</h5>
                    <h6 className="subtitle">Property Specialist</h6>
                    <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row> */}
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
