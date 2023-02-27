import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AboutUsComponent from "../../components/custom/sections/aboutuscomponent";

const AboutUs = () => {
  return (
    <div>
      <AboutUsComponent />
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}

export default AboutUs;
