// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/legacy/image";
import { useTranslation } from "next-i18next";
import clientimages from "./clientimages";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const ClientSlider = () => {
  const { t } = useTranslation("common");
  const title = t("clients.title");
  const subtitle = t("clients.subtitle");

  return (
    <>
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="12" className="text-center">
              <h2 className="title">{title}</h2>
              <h6 className="subtitle">{subtitle}</h6>
              <Swiper id="clients" modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative]} spaceBetween={100} slidesPerView={6} speed={1000} navigation={true} pagination={{ clickable: true, dynamicBullets: true }} autoplay={true}>
                {clientimages.map((slider, index) => (
                  <SwiperSlide key={index}>
                    <div className="position-relative">
                      <Image src={slider.src} width={200} height={200} alt={`Client ${index}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ClientSlider;
