module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.blocktoro.com",
        port: "",
        // pathname: '/account123/**',
      },
    ],
  },
};
