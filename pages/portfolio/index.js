import React from "react";
import PortfolioComponent from "../../components/custom/sections/portfoliocomponent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Portfolio = () => {
  return <PortfolioComponent />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}

export default Portfolio;
