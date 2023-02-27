import React from "react";
import ContactComponent from "../../components/custom/sections/contactcomponent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Contact = () => {
  return <ContactComponent />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}

export default Contact;
