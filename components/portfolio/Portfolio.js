import * as React from "react";
import { Gallery } from "react-grid-gallery";
import { useState } from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import { useTranslation } from "next-i18next";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "./NextJsImage";
// import images;
import advertising1 from "../../assets/images/portfolio/advertising/advertising1.jpg";
import attractions1 from "../../assets/images/portfolio/attractions/attractions-1.jpg";
import attractions2 from "../../assets/images/portfolio/attractions/attractions-2.jpg";
import attractions3 from "../../assets/images/portfolio/attractions/attractions-3.jpg";
import attractions4 from "../../assets/images/portfolio/attractions/attractions-4.jpg";
import attractions5 from "../../assets/images/portfolio/attractions/attractions-5.jpg";
import attractions6 from "../../assets/images/portfolio/attractions/attractions-6.jpg";
import attractions7 from "../../assets/images/portfolio/attractions/attractions-7.jpg";
import christmas1 from "../../assets/images/portfolio/christmas/christmas-1.jpg";
import christmas2 from "../../assets/images/portfolio/christmas/christmas-2.jpg";
import floats1 from "../../assets/images/portfolio/floats/carrozas-1.jpg";
import floats2 from "../../assets/images/portfolio/floats/carrozas-2.jpg";
import floats3 from "../../assets/images/portfolio/floats/carrozas-3.jpg";
import floats4 from "../../assets/images/portfolio/floats/carrozas-4.jpg";
import floats5 from "../../assets/images/portfolio/floats/carrozas-5.jpg";
import floats6 from "../../assets/images/portfolio/floats/carrozas-6.jpg";
import floats7 from "../../assets/images/portfolio/floats/carrozas-7.jpg";
import floats8 from "../../assets/images/portfolio/floats/carrozas-8.jpg";
import floats9 from "../../assets/images/portfolio/floats/carrozas-9.jpg";
import hauntedhouses1 from "../../assets/images/portfolio/haunted-houses/haunted-houses-1.jpg";
import hauntedhouses2 from "../../assets/images/portfolio/haunted-houses/haunted-houses-2.jpg";
import hauntedhouses3 from "../../assets/images/portfolio/haunted-houses/haunted-houses-3.jpg";
import hauntedhouses4 from "../../assets/images/portfolio/haunted-houses/haunted-houses-4.jpg";
import hauntedhouses5 from "../../assets/images/portfolio/haunted-houses/haunted-houses-5.jpg";
import hauntedhouses6 from "../../assets/images/portfolio/haunted-houses/haunted-houses-6.jpg";
import hauntedhouses7 from "../../assets/images/portfolio/haunted-houses/haunted-houses-7.jpg";
import hauntedhouses8 from "../../assets/images/portfolio/haunted-houses/haunted-houses-8.jpg";
import pos1 from "../../assets/images/portfolio/pos/pos-1.jpg";
import prototype1 from "../../assets/images/portfolio/prototypes/prototype1.jpg";

const Portfolio = (image, offset, rect) => {
  const { t } = useTranslation("common");

  const [index, setIndex] = useState(-1);
  // Tags
  const title = t("portfolio.title");
  const subtitle = t("portfolio.subtitle");
  const floats = t("portfolio.tags.floats");
  const advertising = t("portfolio.tags.advertising");
  const attractions = t("portfolio.tags.attractions");
  const dinosaurs = t("portfolio.tags.dinosaurs");
  const flintstones = t("portfolio.tags.flintstones");
  const christmas = t("portfolio.tags.christmas");
  const haunted_house = t("portfolio.tags.haunted-house");
  const pinnochio = t("portfolio.tags.pinnochio");
  const circus = t("portfolio.tags.circus");
  const the_mummy = t("portfolio.tags.the-mummy");
  const the_elevator = t("portfolio.tags.the-elevator");
  const pos = t("portfolio.tags.pos");
  const prototypes = t("portfolio.tags.prototypes");
  // Image array
  const imgWidth = 320;
  const imgHeight = 320;

  const images = [
    {
      src: advertising1.src,
      mainSrc: advertising1.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${advertising} - Sharky`,
      tags: [{ value: advertising, title: advertising }],
      alt: `${advertising} - Sharky`,
    },
    {
      src: attractions1.src,
      mainSrc: attractions1.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${attractions} - Lazer Runner`,
      tags: [{ value: attractions, title: attractions }],
      alt: `${attractions} - Lazer Runner`,
    },
    {
      src: attractions2.src,
      mainSrc: attractions2.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${attractions} - Cinema`,
      tags: [{ value: attractions, title: attractions }],
      alt: `${attractions} - Cinema`,
    },
    {
      src: attractions5.src,
      mainSrc: attractions5.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${attractions} - Cinema`,
      tags: [{ value: attractions, title: attractions }],
      alt: `${attractions} - Cinema`,
    },
    {
      src: attractions6.src,
      mainSrc: attractions6.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${attractions} - Cinema`,
      tags: [{ value: attractions, title: attractions }],
      alt: `${attractions} - Cinema`,
    },
    {
      src: attractions7.src,
      mainSrc: attractions7.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${attractions} - Cinema`,
      tags: [{ value: attractions, title: attractions }],
      alt: `${attractions} - Cinema`,
    },
    {
      src: attractions3.src,
      mainSrc: attractions3.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${attractions} - ${dinosaurs}`,
      tags: [{ value: attractions, title: attractions }],
      alt: `${attractions} - ${dinosaurs}`,
    },
    {
      src: attractions4.src,
      mainSrc: attractions4.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${attractions} - ${flintstones}`,
      tags: [{ value: attractions, title: attractions }],
      alt: `${attractions} - ${dinosaurs}`,
    },
    {
      src: christmas1.src,
      mainSrc: christmas1.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${christmas} - Chinita`,
      tags: [{ value: christmas, title: christmas }],
      alt: `${christmas} - Chinita`,
    },
    {
      src: christmas2.src,
      mainSrc: christmas2.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${christmas} - ${christmas}`,
      tags: [{ value: christmas, title: christmas }],
      alt: `${christmas} - ${christmas}`,
    },
    {
      src: floats1.src,
      mainSrc: floats1.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${floats} - Christmas`,
      tags: [{ value: floats, title: floats }],
      alt: `${floats} - Christmas`,
    },
    {
      src: floats2.src,
      mainSrc: floats2.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${floats} Mickey`,
      tags: [{ value: floats, title: floats }],
      alt: `${floats} Mickey`,
    },
    {
      src: floats3.src,
      mainSrc: floats3.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${floats} - Lego`,
      tags: [{ value: floats, title: floats }],
      alt: `${floats} - Lego`,
    },
    {
      src: floats4.src,
      mainSrc: floats4.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${floats} - ${pinnochio}`,
      tags: [{ value: floats, title: floats }],
      alt: `${floats} - ${pinnochio}`,
    },
    {
      src: floats5.src,
      mainSrc: floats5.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${floats} - Maracaibo`,
      tags: [{ value: floats, title: floats }],
      alt: `${floats} - Maracaibo`,
    },
    {
      src: floats6.src,
      mainSrc: floats6.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${floats} - ${circus}`,
      tags: [{ value: floats, title: floats }],
      alt: `${floats} - ${circus}`,
    },
    {
      src: floats7.src,
      mainSrc: floats7.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${floats} - ${flintstones}`,
      tags: [{ value: floats, title: floats }],
      alt: `${floats} - ${flintstones}`,
    },
    {
      src: floats8.src,
      mainSrc: floats8.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${floats} - Chinita`,
      tags: [{ value: floats, title: floats }],
      alt: `${floats} - Chinita`,
    },
    {
      src: floats9.src,
      mainSrc: floats9.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${floats} - Cars`,
      tags: [{ value: floats, title: floats }],
      alt: `${floats} - Cars`,
    },
    {
      src: hauntedhouses1.src,
      mainSrc: hauntedhouses1.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${haunted_house} - ${the_mummy}`,
      tags: [{ value: haunted_house, title: haunted_house }],
      alt: `${haunted_house} - ${the_mummy}`,
    },
    {
      src: hauntedhouses2.src,
      mainSrc: hauntedhouses2.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${haunted_house} - ${the_mummy}`,
      tags: [{ value: haunted_house, title: haunted_house }],
      alt: `${haunted_house} - ${the_mummy}`,
    },
    {
      src: hauntedhouses3.src,
      mainSrc: hauntedhouses3.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${haunted_house} - ${the_mummy}`,
      tags: [{ value: haunted_house, title: haunted_house }],
      alt: `${haunted_house} - ${the_mummy}`,
    },
    {
      src: hauntedhouses4.src,
      mainSrc: hauntedhouses4.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${haunted_house} - ${the_elevator}`,
      tags: [{ value: haunted_house, title: haunted_house }],
      alt: `${haunted_house} - ${the_elevator}`,
    },
    {
      src: hauntedhouses5.src,
      mainSrc: hauntedhouses5.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${haunted_house} - ${the_elevator}`,
      tags: [{ value: haunted_house, title: haunted_house }],
      alt: `${haunted_house} - ${the_elevator}`,
    },
    {
      src: hauntedhouses6.src,
      mainSrc: hauntedhouses6.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${haunted_house} - ${the_elevator}`,
      tags: [{ value: haunted_house, title: haunted_house }],
      alt: `${haunted_house} - ${the_elevator}`,
    },
    {
      src: hauntedhouses7.src,
      mainSrc: hauntedhouses7.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${haunted_house} - ${the_elevator}`,
      tags: [{ value: haunted_house, title: haunted_house }],
      alt: `${haunted_house} - ${the_elevator}`,
    },
    {
      src: hauntedhouses8.src,
      mainSrc: hauntedhouses8.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${haunted_house} - Zombie`,
      tags: [{ value: haunted_house, title: haunted_house }],
      alt: `${haunted_house} - Zombie`,
    },
    {
      src: pos1.src,
      mainSrc: pos1.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${pos} - Cottom Candy`,
      tags: [{ value: pos, title: pos }],
      alt: `${pos} - Cottom Candy`,
    },
    {
      src: prototype1.src,
      mainSrc: prototype1.mainSrc,
      width: imgWidth,
      height: imgHeight,
      title: `${prototypes} - Tierra Magica`,
      tags: [{ value: prototypes, title: prototypes }],
      alt: `${prototypes} - Tierra Magica`,
    },
  ];

  const currentImage = images[index];
  const handleClick = (index) => {
    setIndex(index);
  };
  const handleOpen = () => index >= 0 && setIndex(index);
  const handleClose = () => setIndex(-1);

  return (
    <>
      <div className="spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="12" className="text-center">
              <h2 className="title">{title}</h2>
              <h6 className="subtitle">{subtitle}</h6>
              <Gallery images={images} enableImageSelection={false} onClick={handleClick} maxRows={5} />
              {!!currentImage && <Lightbox open={handleOpen} index={index} close={handleClose} slides={images} render={{ slide: NextJsImage }} plugins={[Captions]} />}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
