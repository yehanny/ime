// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import client1 from "../../assets/images/client-slider/adidas.png";

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
  const sliders = [
    {
      id: 1,
      image: client1,
    },
    {
      id: 2,
      image: client1,
    },
    {
      id: 3,
      image: client1,
    },
    {
      id: 4,
      image: client1,
    },
    {
      id: 5,
      image: client1,
    },
    {
      id: 6,
      image: client1,
    },
    {
      id: 7,
      image: client1,
    },
    {
      id: 8,
      image: client1,
    },
    {
      id: 9,
      image: client1,
    },
    {
      id: 10,
      image: client1,
    },
  ];
  return (
    <>
      <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="12" className="text-center">
              <h2 className="title">{title}</h2>
              <h6 className="subtitle">{subtitle}</h6>
              <Swiper id="clients" modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative]} spaceBetween={50} slidesPerView={8} speed={1000} navigation={true} pagination={{ clickable: true, dynamicBullets: true }} autoplay={true}>
                {sliders.map((slider) => (
                  <SwiperSlide key={slider.id}>
                    <Image src={slider.image} layout="responsive" alt={`Client ${slider.id}`} />
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
