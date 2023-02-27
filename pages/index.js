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
