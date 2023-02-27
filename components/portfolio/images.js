import { useTranslation } from "next-i18next";
import carroza1 from "../../assets/images/portfolio/carrozas/carrozas-1.jpg";
import carroza2 from "../../assets/images/portfolio/carrozas/carrozas-2.jpg";
import carroza3 from "../../assets/images/portfolio/carrozas/carrozas-3.jpg";
import carroza4 from "../../assets/images/portfolio/carrozas/carrozas-4.jpg";
import carroza5 from "../../assets/images/portfolio/carrozas/carrozas-5.jpg";
import carroza6 from "../../assets/images/portfolio/carrozas/carrozas-6.jpg";
import carroza7 from "../../assets/images/portfolio/carrozas/carrozas-7.jpg";
import carroza8 from "../../assets/images/portfolio/carrozas/carrozas-8.jpg";
import carroza9 from "../../assets/images/portfolio/carrozas/carrozas-9.jpg";

const Images = () => {
  const { t } = useTranslation("common");
  const floats = t("portfolio.floats");
  const imgWidth = 320;
  const imgHeight = 320;
  const data = [
    {
      src: carroza1.src,
      mainSrc: carroza1.src,
      width: imgWidth,
      height: imgHeight,
      caption: floats,
      tags: [{ value: floats, title: floats }],
    },
    {
      src: carroza2.src,
      mainSrc: carroza2.src,
      width: imgWidth,
      height: imgHeight,
      caption: floats,
      tags: [
        { value: floats, title: floats },
        { value: "Mickey", title: "Mickey" },
      ],
      alt: `${floats} Mickey`,
    },

    {
      src: carroza3.src,
      mainSrc: carroza3.src,
      width: imgWidth,
      height: imgHeight,
      caption: floats,
      tags: [
        { value: floats, title: floats },
        { value: "Lego", title: "Lego" },
      ],
      alt: `${floats} Lego`,
    },
    {
      src: carroza4.src,
      mainSrc: carroza4.src,
      width: imgWidth,
      height: imgHeight,
      caption: floats,
      tags: [
        { value: floats, title: floats },
        { value: "Pinoccio", title: "Pinoccio" },
      ],
      alt: `${floats} Pinoccio`,
    },
    {
      src: carroza5.src,
      mainSrc: carroza5.src,
      width: imgWidth,
      height: imgHeight,
      caption: floats,
      tags: [
        { value: floats, title: floats },
        { value: "Maracaibo", title: "Maracaibo" },
      ],
      alt: `${floats} Maracaibo`,
    },
    {
      src: carroza6.src,
      mainSrc: carroza6.src,
      width: imgWidth,
      height: imgHeight,
      caption: floats,
      tags: [
        { value: floats, title: floats },
        { value: "Circus", title: "Circus" },
      ],
      alt: `${floats} Circus`,
    },
    {
      src: carroza7.src,
      mainSrc: carroza7.src,
      width: imgWidth,
      height: imgHeight,
      caption: floats,
      tags: [
        { value: floats, title: floats },
        { value: "Flintstones", title: "Flintstones" },
      ],
      alt: `${floats} Flintstones`,
    },
    {
      src: carroza8.src,
      mainSrc: carroza8.src,
      width: imgWidth,
      height: imgHeight,
      caption: floats,
      tags: [
        { value: floats, title: floats },
        { value: "Pinoccio", title: "Pinoccio" },
      ],
      alt: `${floats} Pinoccio`,
    },
    {
      src: carroza9.src,
      mainSrc: carroza9.src,
      width: imgWidth,
      height: imgHeight,
      caption: floats,
      tags: [
        { value: floats, title: floats },
        { value: "Chinita", title: "Chinita" },
      ],
      alt: `${floats} Chinita`,
    },
    {
      src: carroza9.src,
      mainSrc: carroza9.src,
      width: imgWidth,
      height: imgHeight,
      caption: floats,
      tags: [
        { value: floats, title: floats },
        { value: "Chinita", title: "Chinita" },
      ],
      alt: `${floats} Chinita`,
    },
    {
      src: carroza9.src,
      mainSrc: carroza9.src,
      width: imgWidth,
      height: imgHeight,
      caption: floats,
      tags: [
        { value: floats, title: floats },
        { value: "Chinita", title: "Chinita" },
      ],
      alt: `${floats} Chinita`,
    },
    {
      src: carroza9.src,
      mainSrc: carroza9.src,
      width: imgWidth,
      height: imgHeight,
      caption: floats,
      tags: [
        { value: floats, title: floats },
        { value: "Chinita", title: "Chinita" },
      ],
      alt: `${floats} Chinita`,
    },
    {
      src: carroza9.src,
      mainSrc: carroza9.src,
      width: imgWidth,
      height: imgHeight,
      caption: floats,
      tags: [
        { value: floats, title: floats },
        { value: "Chinita", title: "Chinita" },
      ],
      alt: `${floats} Chinita`,
    },
    {
      src: carroza9.src,
      mainSrc: carroza9.src,
      width: imgWidth,
      height: imgHeight,
      caption: floats,
      tags: [
        { value: floats, title: floats },
        { value: "Chinita", title: "Chinita" },
      ],
      alt: `${floats} Chinita`,
    },
    {
      src: carroza9.src,
      mainSrc: carroza9.src,
      width: imgWidth,
      height: imgHeight,
      caption: floats,
      tags: [
        { value: floats, title: floats },
        { value: "Chinita", title: "Chinita" },
      ],
      alt: `${floats} Chinita`,
    },
    {
      src: carroza9.src,
      mainSrc: carroza9.src,
      width: imgWidth,
      height: imgHeight,
      caption: floats,
      tags: [
        { value: floats, title: floats },
        { value: "Chinita", title: "Chinita" },
      ],
      alt: `${floats} Chinita`,
    },
  ];

  console.info("data", data);

  return data;
};

export default Images;
