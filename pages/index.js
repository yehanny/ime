import * as React from "react";
import "yet-another-react-lightbox/styles.css";
import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";
import HeaderComponent from "../components/custom/sections/headercomponent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Portfolio from "../components/portfolio/Portfolio";
import { useTranslation } from "next-i18next";
import HomeSlider from "../components/slider/HomeSlider";
import ClientSlider from "../components/slider/ClientSlider";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("home.title")}</title>
        <meta name="description" content={t("home.description")} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HomeSlider />
      <Portfolio />
      <ClientSlider />
      {/* <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => setOpen(true)}>
        Open Lightbox
      </button> */}

      {/*  */}
      {/* <CustomComponents /> */}
      {/* <HeaderComponent /> */}
      {/* <CustomComponents /> */}
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
    // Will be passed to the page component as props
  },
});
