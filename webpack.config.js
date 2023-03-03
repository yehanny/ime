module.exports = {
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false,
        net: false,
        dns: false,
        child_process: false,
        tls: false,
      },
    };
    return config;
  },
};
