import "../styles/scss/style.scss";
import Layout from "../layout/Layout";
import { appWithTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const IME = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
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

export default appWithTranslation(IME);
