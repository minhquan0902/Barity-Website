const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/visions',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/visions/',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/strategies',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/strategies/',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/looking-for-investment',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/looking-for-investment/',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/arbitrage-opportunities',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/arbitrage-opportunities/',
        destination: '/portfolio/',
        permanent: true,
      },
    ];
  },
};
