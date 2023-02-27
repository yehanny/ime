module.exports = {
  i18n: {
    locales: ["en-US", "es-CO"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
  trailingSlash: true,
  nonExplicitSupportedLngs: true,
  reloadOnPrerender: process.env.NODE_ENV === "development",
  debug: false,
};
