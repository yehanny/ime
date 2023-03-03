const { i18n } = require("./next-i18next.config");
const { webpack } = require("./webpack.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  webpack,
};

module.exports = nextConfig;
